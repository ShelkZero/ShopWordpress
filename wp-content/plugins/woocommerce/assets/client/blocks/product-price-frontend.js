(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[2388],{2519:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Block:()=>u,default:()=>m});var c=t(1609),l=t(851),o=t(6042),n=t(8529),a=t(2796),s=t(3566),i=t(1616);const u=e=>{var r,t;const{className:i,textAlign:u,isDescendentOfSingleProductTemplate:m}=e,p=(0,s.p)(e),{parentName:d,parentClassName:y}=(0,a.useInnerBlockLayoutContext)(),{product:v}=(0,a.useProductDataContext)(),g="woocommerce/all-products"===d,f=(0,l.A)("wc-block-components-product-price",i,p.className,{[`${y}__product-price`]:y});if(!v.id&&!m){const e=(0,c.createElement)(o.A,{align:u,className:f});return g?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const N=v.prices,_=m?(0,n.getCurrencyFromPriceResponse)():(0,n.getCurrencyFromPriceResponse)(N),b="5000",P=N.price!==N.regular_price,k=(0,l.A)({[`${y}__product-price__value`]:y,[`${y}__product-price__value--on-sale`]:P}),S=(0,c.createElement)(o.A,{align:u,className:f,style:p.style,regularPriceStyle:p.style,priceStyle:p.style,priceClassName:k,currency:_,price:m?b:N.price,minPrice:null==N||null===(r=N.price_range)||void 0===r?void 0:r.min_amount,maxPrice:null==N||null===(t=N.price_range)||void 0===t?void 0:t.max_amount,regularPrice:m?b:N.regular_price,regularPriceClassName:(0,l.A)({[`${y}__product-price__regular`]:y})});return g?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},S):S},m=e=>e.isDescendentOfSingleProductTemplate?(0,c.createElement)(u,{...e}):(0,i.withProductDataContext)(u)(e)},6042:(e,r,t)=>{"use strict";t.d(r,{A:()=>m});var c=t(1609),l=t(7723),o=t(4656),n=t(851),a=t(8529),s=t(6087);t(4567);const i=({currency:e,maxPrice:r,minPrice:t,priceClassName:s,priceStyle:i={}})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,l.__)("Price between %1$s and %2$s","woocommerce"),(0,a.formatPrice)(t),(0,a.formatPrice)(r))),(0,c.createElement)("span",{"aria-hidden":!0},(0,c.createElement)(o.FormattedMonetaryAmount,{className:(0,n.A)("wc-block-components-product-price__value",s),currency:e,value:t,style:i})," — ",(0,c.createElement)(o.FormattedMonetaryAmount,{className:(0,n.A)("wc-block-components-product-price__value",s),currency:e,value:r,style:i}))),u=({currency:e,regularPriceClassName:r,regularPriceStyle:t,regularPrice:a,priceClassName:s,priceStyle:i,price:u})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Previous price:","woocommerce")),(0,c.createElement)(o.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("del",{className:(0,n.A)("wc-block-components-product-price__regular",r),style:t},e),value:a}),(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Discounted price:","woocommerce")),(0,c.createElement)(o.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("ins",{className:(0,n.A)("wc-block-components-product-price__value","is-discounted",s),style:i},e),value:u})),m=({align:e,className:r,currency:t,format:l="<price/>",maxPrice:a,minPrice:m,price:p,priceClassName:d,priceStyle:y,regularPrice:v,regularPriceClassName:g,regularPriceStyle:f,style:N})=>{const _=(0,n.A)(r,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const b=v&&p&&p<v;let P=(0,c.createElement)("span",{className:(0,n.A)("wc-block-components-product-price__value",d)});return b?P=(0,c.createElement)(u,{currency:t,price:p,priceClassName:d,priceStyle:y,regularPrice:v,regularPriceClassName:g,regularPriceStyle:f}):void 0!==m&&void 0!==a?P=(0,c.createElement)(i,{currency:t,maxPrice:a,minPrice:m,priceClassName:d,priceStyle:y}):p&&(P=(0,c.createElement)(o.FormattedMonetaryAmount,{className:(0,n.A)("wc-block-components-product-price__value",d),currency:t,value:p,style:y})),(0,c.createElement)("span",{className:_,style:N},(0,s.createInterpolateElement)(l,{price:P}))}},3566:(e,r,t)=>{"use strict";t.d(r,{p:()=>a});var c=t(851),l=t(3993),o=t(92),n=t(6032);const a=e=>{const r=(e=>{const r=(0,l.isObject)(e)?e:{style:{}};let t=r.style;return(0,l.isString)(t)&&(t=JSON.parse(t)||{}),(0,l.isObject)(t)||(t={}),{...r,style:t}})(e),t=(0,n.BK)(r),a=(0,n.aR)(r),s=(0,n.fo)(r),i=(0,o.x)(r);return{className:(0,c.A)(i.className,t.className,a.className,s.className),style:{...i.style,...t.style,...a.style,...s.style}}}},92:(e,r,t)=>{"use strict";t.d(r,{x:()=>l});var c=t(3993);const l=e=>{const r=(0,c.isObject)(e.style.typography)?e.style.typography:{},t=(0,c.isString)(r.fontFamily)?r.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:t,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,fontStyle:r.fontStyle,fontWeight:r.fontWeight,letterSpacing:r.letterSpacing,lineHeight:r.lineHeight,textDecoration:r.textDecoration,textTransform:r.textTransform}}}},6032:(e,r,t)=>{"use strict";t.d(r,{BK:()=>i,aR:()=>u,fo:()=>m});var c=t(851),l=t(1194),o=t(9786),n=t(3993);function a(e={}){const r={};return(0,o.getCSSRules)(e,{selector:""}).forEach((e=>{r[e.key]=e.value})),r}function s(e,r){return e&&r?`has-${(0,l.c)(r)}-${e}`:""}function i(e){var r,t,l,o,i,u,m;const{backgroundColor:p,textColor:d,gradient:y,style:v}=e,g=s("background-color",p),f=s("color",d),N=function(e){if(e)return`has-${e}-gradient-background`}(y),_=N||(null==v||null===(r=v.color)||void 0===r?void 0:r.gradient);return{className:(0,c.A)(f,N,{[g]:!_&&!!g,"has-text-color":d||(null==v||null===(t=v.color)||void 0===t?void 0:t.text),"has-background":p||(null==v||null===(l=v.color)||void 0===l?void 0:l.background)||y||(null==v||null===(o=v.color)||void 0===o?void 0:o.gradient),"has-link-color":(0,n.isObject)(null==v||null===(i=v.elements)||void 0===i?void 0:i.link)?null==v||null===(u=v.elements)||void 0===u||null===(m=u.link)||void 0===m?void 0:m.color:void 0}),style:a({color:(null==v?void 0:v.color)||{}})}}function u(e){var r;const t=(null===(r=e.style)||void 0===r?void 0:r.border)||{};return{className:function(e){var r;const{borderColor:t,style:l}=e,o=t?s("border-color",t):"";return(0,c.A)({"has-border-color":!!t||!(null==l||null===(r=l.border)||void 0===r||!r.color),[o]:!!o})}(e),style:a({border:t})}}function m(e){var r;return{className:void 0,style:a({spacing:(null===(r=e.style)||void 0===r?void 0:r.spacing)||{}})}}},4567:()=>{}}]);