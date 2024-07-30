<?php

namespace ImageOptimization\Modules\Optimization\Components;

use ImageOptimization\Classes\Async_Operation\{
	Async_Operation,
	Async_Operation_Hook,
	Async_Operation_Queue,
};
use ImageOptimization\Classes\Image\{
	Exceptions\Invalid_Image_Exception,
	Image_Meta,
	Image_Optimization_Error_Type,
	Image_Status
};
use ImageOptimization\Classes\Logger;
use ImageOptimization\Classes\Exceptions\Quota_Exceeded_Error;
use ImageOptimization\Modules\Optimization\Classes\Exceptions\Image_File_Already_Exists_Error;
use ImageOptimization\Modules\Optimization\Classes\Exceptions\Image_Validation_Error;
use ImageOptimization\Modules\Optimization\Classes\Optimize_Image;
use ImageOptimization\Modules\Optimization\Classes\Validate_Image;
use ImageOptimization\Modules\Settings\Classes\Settings;
use Throwable;
use ImageOptimization\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Upload_Optimization {
	public function handle_upload( int $attachment_id ) {
		if ( ! Settings::get( Settings::OPTIMIZE_ON_UPLOAD_OPTION_NAME ) ) {
			return;
		}

		// @var ImageOptimizer/Modules/ConnectManager/Module
		$module = Plugin::instance()->modules_manager->get_modules( 'connect-manager' );

		if ( ! $module->connect_instance->is_connected() || ! $module->connect_instance->is_activated() ) {
			return;
		}

		try {
			Validate_Image::is_valid( $attachment_id );
		} catch ( Invalid_Image_Exception | Image_Validation_Error $iie ) {
			return;
		}

		$meta = new Image_Meta( $attachment_id );

		try {
			$meta
				->set_status( Image_Status::OPTIMIZATION_IN_PROGRESS )
				->save();

			Async_Operation::create(
				Async_Operation_Hook::OPTIMIZE_ON_UPLOAD,
				[ 'attachment_id' => $attachment_id ],
				Async_Operation_Queue::OPTIMIZE
			);
		} catch ( Throwable $t ) {
			$meta
				->set_status( Image_Status::OPTIMIZATION_FAILED )
				->save();
		}
	}

	/** @async */
	public function optimize_image_on_upload( int $image_id ) {
		try {
			$oi = new Optimize_Image(
				$image_id,
				'upload',
			);

			$oi->optimize();
		} catch ( Quota_Exceeded_Error $qe ) {
			( new Image_Meta( $image_id ) )
				->set_status( Image_Status::OPTIMIZATION_FAILED )
				->set_error_type( Image_Optimization_Error_Type::QUOTA_EXCEEDED )
				->save();
		} catch ( Image_File_Already_Exists_Error $fe ) {
			( new Image_Meta( $image_id ) )
				->set_status( Image_Status::OPTIMIZATION_FAILED )
				->set_error_type( Image_Optimization_Error_Type::FILE_ALREADY_EXISTS )
				->save();
		} catch ( Throwable $t ) {
			Logger::log( Logger::LEVEL_ERROR, 'Optimization error. Reason: ' . $t->getMessage() );

			( new Image_Meta( $image_id ) )
				->set_status( Image_Status::OPTIMIZATION_FAILED )
				->set_error_type( Image_Optimization_Error_Type::GENERIC )
				->save();
		}
	}

	public function __construct() {
		add_action( 'add_attachment', [ $this, 'handle_upload' ] );
		add_action( Async_Operation_Hook::OPTIMIZE_ON_UPLOAD, [ $this, 'optimize_image_on_upload' ] );
	}
}
