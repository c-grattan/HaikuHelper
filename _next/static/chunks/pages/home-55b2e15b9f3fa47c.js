(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7183:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return r(8373)}])},1373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(8754),n=r(1757)._(r(7294)),o=i._(r(3935)),s=i._(r(7484)),l=r(3101),a=r(2986),c=r(7861);r(2299);let d=r(394),u=i._(r(6640)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/HaikuHelper/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,n,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=n.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:s,width:l,decoding:a,className:c,style:d,fetchPriority:u,placeholder:f,loading:g,unoptimized:m,fill:x,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:j,onLoad:w,onError:y,...S}=e;return n.default.createElement("img",{...S,...h(u),loading:g,width:l,height:s,decoding:a,"data-nimg":x?"fill":"1",className:c,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&p(e,f,v,_,b,m))},[r,f,v,_,b,y,m,t]),onLoad:e=>{p(e.currentTarget,f,v,_,b,m)},onError:e=>{j(!0),"empty"!==f&&b(!0),y&&y(e)}})});function m(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,i),null):n.default.createElement(s.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let x=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(d.RouterContext),i=(0,n.useContext)(c.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=f||i||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:p}=e,h=(0,n.useRef)(s);(0,n.useEffect)(()=>{h.current=s},[s]);let x=(0,n.useRef)(p);(0,n.useEffect)(()=>{x.current=p},[p]);let[v,_]=(0,n.useState)(!1),[b,j]=(0,n.useState)(!1),{props:w,meta:y}=(0,l.getImgProps)(e,{defaultLoader:u.default,imgConf:o,blurComplete:v,showAltText:b});return n.default.createElement(n.default.Fragment,null,n.default.createElement(g,{...w,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:h,onLoadingCompleteRef:x,setBlurComplete:_,setShowAltText:j,ref:t}),y.priority?n.default.createElement(m,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2299);let i=r(1083),n=r(2986);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:h,className:g,quality:m,width:x,height:v,fill:_=!1,style:b,onLoad:j,onLoadingComplete:w,placeholder:y="empty",blurDataURL:S,fetchPriority:E,layout:P,objectFit:C,objectPosition:N,lazyBoundary:z,lazyRoot:O,...I}=e,{imgConf:k,showAltText:R,blurComplete:M,defaultLoader:D}=t,A=k||n.imageConfigDefault;if("allSizes"in A)l=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);l={...A,allSizes:e,deviceSizes:t}}let L=I.loader||D;delete I.loader,delete I.srcSet;let B="__next_img_default"in L;if(B){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!u&&(u=t)}let G="",W=s(x),F=s(v);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,G=e.src,!_){if(W||F){if(W&&!F){let t=W/e.width;F=Math.round(e.height*t)}else if(!W&&F){let t=F/e.height;W=Math.round(e.width*t)}}else W=e.width,F=e.height}}let H=!p&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,H=!1),l.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let T=s(m),U=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:N}:{},R?{}:{color:"transparent"},b),V=M||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:F,blurWidth:a,blurHeight:c,blurDataURL:S||"",objectFit:U.objectFit})+'")':'url("'+y+'")',q=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=a.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:l({config:t,src:r,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:W,quality:T,sizes:u,loader:L});return{props:{...I,loading:H?"lazy":h,fetchPriority:E,width:W,height:F,decoding:"async",className:g,style:{...U,...q},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:f,priority:p,placeholder:y,fill:_}}}},1083:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=i?40*i:t,a=n?40*n:r,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return c}});let i=r(8754),n=r(3101),o=r(2299),s=r(1373),l=i._(r(6640)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/HaikuHelper/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=s.Image},6640:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8373:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),n=r(9008),o=r.n(n),s=r(5675),l=r.n(s),a=r(3008),c=r.n(a);function d(){return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{children:[(0,i.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:c().description,children:["Get started by editing ",(0,i.jsx)("code",{children:"pages/index.js"})]}),(0,i.jsxs)("div",{className:c().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,i.jsx)("h3",{children:"Documentation →"}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,i.jsx)("h3",{children:"Learn →"}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,i.jsx)("h3",{children:"Examples →"}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new",className:c().card,children:[(0,i.jsx)("h3",{children:"Deploy →"}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:c().logo,children:(0,i.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},3008:function(e){e.exports={container:"index_container__Wxv5N",title:"index_title__Hhl0T",description:"index_description__3Pgig",grid:"index_grid__m40sg",card:"index_card__e904y",logo:"index_logo__s_ZB_"}},9008:function(e,t,r){e.exports=r(7484)},5675:function(e,t,r){e.exports=r(1669)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7183)}),_N_E=e.O()}]);