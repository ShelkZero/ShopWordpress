<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'Ani@233237' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'IypnrG//yn}tk7:! a/*~le-ACme=~0{b;<l)HBQ)@W*>tn6F9vis?y2]2I)*-[f' );
define( 'SECURE_AUTH_KEY',  'oQr>J|@W2tm!$)#Ul;47i;HK,|_:t$4+U^CMc@cu/+]J:Y1j*c>)=)7A;<Y]<usG' );
define( 'LOGGED_IN_KEY',    'LGzBH&GF/+n~j~EW ]oY(bK=} f_,0}VTLirrg]}Qm0<itbStRA*8f.~55A.UoAf' );
define( 'NONCE_KEY',        'PjUK3(`qH(CZNncdQfC$l2e71>#CI*8JL6u>leF_0RWxa/G1KVa(|9r/:efKI<=F' );
define( 'AUTH_SALT',        '+kaL:>ao8oO#lJU-)X%.Z%yh&ZLN-Q%Uz(x$l[8?5W9s|t]>az4[*1G^)CH_7>B9' );
define( 'SECURE_AUTH_SALT', 'q =7i8nk0f9L5)k[0R_tmB0*QS5GoJFu,oDC&xAyl4e=Sbe$^oETW{@R9okT.>]G' );
define( 'LOGGED_IN_SALT',   '>5A<( >7Nl`|2loV|B~KVx0#y,,Tf;`lz-lq=0b:MSMT,P!^s~|gE|2cQ&r@c&0a' );
define( 'NONCE_SALT',       ']>deB4!g`D27MXQtDQ8@q;f#,#/^i=W@aPu1) ftD5oFp<lKIV:8~9w@L~ejiI}V' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
