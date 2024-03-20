"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[850],{6700:function(n,e,t){t.d(e,{WC:function(){return o},Yt:function(){return i},e8:function(){return r}});var r="https://image.tmdb.org/t/p/w300",o="https://image.tmdb.org/t/p/w600",i="https://image.tmdb.org/t/p/w1280"},5749:function(n,e,t){t.d(e,{AE:function(){return p},OH:function(){return l},TZ:function(){return f},XT:function(){return u},s_:function(){return d}});var r=t(5861),o=t(4687),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/".concat(e,"/").concat(t,"?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/".concat(e,"?api_key=").concat(c+s,"&page=").concat(r,"&query=").concat(t));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t).concat(r,"?api_key=").concat(c+s));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t,"/videos?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("person/".concat(e,"?api_key=").concat(c+s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7663:function(n,e,t){t.d(e,{o:function(){return o},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},o=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},4316:function(n,e,t){t.d(e,{i:function(){return r}});var r=function(n){return n.map((function(n){var e,t=n.id,r=n.roles,o=n.credit_id,i=n.character,a=n.name,c=n.original_name,s=n.profile_path,u=r?r[0].credit_id:o;return r?e=r[0].character:i&&(e=i),e&&""!==e||(e="N/a"),{id:t,castId:u,profile_path:s,personName:null!==a&&void 0!==a?a:c,role:e}}))}},2127:function(n,e,t){t.d(e,{X:function(){return o}});var r=t(4942),o=function(n){var e=[],t=n.map((function(n){var t=n.id,r=n.credit_id,o=n.department,i=n.job,a=n.jobs,c=n.name,s=n.original_name,u=n.profile_path,l=a?a[0].credit_id:r,d=c||s,p=a?a[0].job:i;return"directing"===o.toLowerCase()&&"director"===p.toLowerCase()&&e.push({id:t,credit_id:l,personName:d,profile_path:u,job:p}),{id:t,credit_id:l,department:o,job:p,personName:d,profile_path:u}})),o=[];t.map((function(n){return o.includes(n.department.toLowerCase())?null:o.push(n.department.toLowerCase())}));var i=[];return o.map((function(n){var e=[];return t.map((function(t){if(t.department.toLowerCase()===n){var r=e.find((function(n){return n.id===t.id}));return r?r.job="".concat(r.job,", ").concat(t.job):e.push(t)}return null})),i.push((0,r.Z)({},n,[].concat(e)))})),{crew:i,director:e}}},6275:function(n,e,t){t.d(e,{s:function(){return o}});var r=t(7663),o=function(n,e){var t,o,i=n.id,a=n.belongs_to_collection,c=n.name,s=n.original_name,u=n.title,l=n.original_title,d=n.overview,p=n.genres,f=n.release_date,h=n.first_air_date,m=n.vote_average,g=n.created_by,v=n.poster_path,b=n.backdrop_path;t=!!f&&(0,r.p)(f),o=!!h&&(0,r.p)(h);var x=m>0?Math.round(10*m):"NR",w=c||(s||(u||l)),y=[];return null===g||void 0===g||g.map((function(n){return y.push({credit_id:n.credit_id,name:n.name})})),{id:i,belongs_to_collection:a?a.id:null,vote_average:x,name:w,release:{release_date:t,title:"Release date: "},first_air:{first_air_date:o,title:"First air date: "},overview:""!==d?d:"Sorry, but there is no overview for this movie.",genres:p.length>0?p:[{id:"",name:"No information available"}],poster_path:v,backdrop_path:b,created_by:y.length>0?y:null}}},4290:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(8966),o=t(3360),i=t(184),a=function(){return(0,i.jsx)(o.e,{children:(0,i.jsx)(r.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},939:function(n,e,t){t.d(e,{F:function(){return x}});var r,o,i,a,c,s=t(1413),u=t(9439),l=t(2791),d=t(168),p=t(6088),f=p.Z.span(r||(r=(0,d.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    color: #fff;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"])),(function(n){return 60*n.size}),(function(n){return 60*n.size})),h=p.Z.svg(o||(o=(0,d.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n    z-index: 1;\n"]))),m=p.Z.circle(i||(i=(0,d.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return 4*n.size}),(function(n){return 144.44*n.size}),(function(n){return n.length})),g=p.Z.circle(a||(a=(0,d.Z)(["\n    fill: none;\n    stroke: #ffffff20;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n"])),(function(n){return 4*n.size}),(function(n){return 144.44*n.size})),v=p.Z.span(c||(c=(0,d.Z)(["\n    font-size: ","em;\n"])),(function(n){return n.size})),b=t(184),x=function(n){var e=n.rating,t=n.style,r=n.size,o=(0,l.useRef)(),i=(0,l.useState)(0),a=(0,u.Z)(i,2),c=a[0],d=a[1],p=(0,l.useState)(0),x=(0,u.Z)(p,2),w=x[0],y=x[1];return(0,l.useEffect)((function(){var n,t=o.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;d(r),y(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,c]),(0,b.jsxs)(f,{size:r,style:(0,s.Z)({},t),children:[(0,b.jsxs)(h,{width:50*r,height:50*r,viewBox:"0 0 ".concat(50*r," ").concat(50*r),children:[(0,b.jsx)(g,{size:r,cx:25*r,cy:25*r,r:23*r}),(0,b.jsx)(m,{size:r,color:w,length:c,ref:o,cx:25*r,cy:25*r,r:23*r})]}),(0,b.jsx)(v,{size:r,children:isNaN(e)?e:e+"%"})]})}},3850:function(n,e,t){t.r(e),t.d(e,{MediaDetails:function(){return Bn},useModal:function(){return Fn}});var r=t(9439);var o=!1;if("undefined"!==typeof window){var i={get passive(){o=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a,c,s,u,l,d,p,f,h,m,g,v,b,x,w,y,Z,j,k,_,C,S,T,z="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),E=[],M=!1,L=-1,N=void 0,R=void 0,I=void 0,D=function(n){return E.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(n))}))},F=function(n){var e=n||window.event;return!!D(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},B=function(){void 0!==I&&(document.body.style.paddingRight=I,I=void 0),void 0!==N&&(document.body.style.overflow=N,N=void 0)},H=function(){if(void 0!==R){var n=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,window.scrollTo(e,n),R=void 0}},O=function(n,e){if(n){if(!E.some((function(e){return e.targetElement===n}))){var t={targetElement:n,options:e||{}};E=[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(E),[t]),z?window.requestAnimationFrame((function(){if(void 0===R){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var n=window,e=n.scrollY,t=n.scrollX,r=n.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-t,setTimeout((function(){return window.requestAnimationFrame((function(){var n=r-window.innerHeight;n&&e>=r&&(document.body.style.top=-(e+n))}))}),300)}})):function(n){if(void 0===I){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(e&&t>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);I=document.body.style.paddingRight,document.body.style.paddingRight=r+t+"px"}}void 0===N&&(N=document.body.style.overflow,document.body.style.overflow="hidden")}(e),z&&(n.ontouchstart=function(n){1===n.targetTouches.length&&(L=n.targetTouches[0].clientY)},n.ontouchmove=function(e){1===e.targetTouches.length&&function(n,e){var t=n.targetTouches[0].clientY-L;!D(n.target)&&(e&&0===e.scrollTop&&t>0||function(n){return!!n&&n.scrollHeight-n.scrollTop<=n.clientHeight}(e)&&t<0?F(n):n.stopPropagation())}(e,n)},M||(document.addEventListener("touchmove",F,o?{passive:!1}:void 0),M=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},P=t(2791),A=t(7689),U=t(168),W=t(6088),X=t(1087),Y=W.Z.h2(a||(a=(0,U.Z)(["\n    margin-bottom: ",";\n    color: ",";\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.colors.themeText})),q=W.Z.div(c||(c=(0,U.Z)(["\n    display: flex;\n    gap: 24px;\n"]))),G=(0,W.Z)(X.rU)(s||(s=(0,U.Z)(["\n    display: flex;\n    align-items: center;\n    height: 44px;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: ",";\n    font-weight: 700;\n    border: 2px solid ",";\n    border-radius: 8px;\n    color: ",";\n    transition: background-color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.preMedium})),V=t(5749),J=t(6275),K=t(4316),Q=t(2127),$=t(4757),nn=t(6700),en=W.Z.div(u||(u=(0,U.Z)(["\n    @media "," {\n        display: grid;\n        grid-template-columns: 140px auto;\n        align-items: start;\n        gap: 20px;\n        padding: "," 0;\n        background-image: ",",\n            url(",");\n        background-position: top;\n        background-repeat: no-repeat;\n        background-size: ",";\n        transition: background ",";\n    }\n    @media "," {\n        grid-template-columns: 230px auto;\n        grid-template-rows: auto calc(\n                100% - ","px - 20px\n            );\n        background-size: ",";\n        transition: background ",";\n    }\n    @media "," {\n        background-position: center;\n        background-size: cover;\n    }\n    @media "," {\n        grid-template-columns: 300px auto;\n    }\n    @media "," {\n        padding: "," 0;\n    }\n"])),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.lg.movieInfo}),(function(n){var e=n.bgr;return e?nn.Yt+e:$}),(function(n){var e=n.itemHeight,t=n.theme;return"auto calc(".concat(e,"px + ").concat(t.spacing.retreatM," + ").concat(t.spacing.retreatM,")")}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.itemHeight}),(function(n){var e=n.itemHeight,t=n.theme;return e<385?"auto 385px":"auto calc(".concat(e,"px + ").concat(t.spacing.retreatM," + ").concat(t.spacing.retreatM,")")}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.l}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),tn=W.Z.div(l||(l=(0,U.Z)(["\n    @media "," {\n        background-image: ",",\n            url(",");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        padding: 20px 0;\n    }\n    transition: background ",";\n    @media "," {\n        flex-shrink: 0;\n        margin: 0;\n        padding: 0;\n        background: none;\n        height: auto;\n    }\n    @media "," {\n        margin-bottom: 20px;\n    }\n    @media "," {\n        grid-row: span 2;\n    }\n"])),(function(n){return n.theme.breakpoints.onlyXs}),(function(n){return n.theme.lg.movieInfoOnlyS}),(function(n){var e=n.bgr;return e?nn.Yt+e:$}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.onlyM}),(function(n){return n.theme.breakpoints.m})),rn=W.Z.img(d||(d=(0,U.Z)(["\n    object-fit: cover;\n    aspect-ratio: 2 / 3;\n    height: 210px;\n    @media "," {\n        width: 230px;\n        height: auto;\n        margin-right: auto;\n    }\n    @media "," {\n        width: 300px;\n    }\n"])),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.l})),on=(0,W.Z)(X.rU)(p||(p=(0,U.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 220px;\n    height: 44px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 8px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: ",";\n    transition: background-color ",",\n        color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),an=W.Z.div(f||(f=(0,U.Z)(["\n    color: ",";\n    transition: color ",";\n    @media "," {\n        &:not(.end) {\n            margin-bottom: 16px;\n        }\n    }\n    &.end {\n        @media "," {\n            grid-column: span 2;\n        }\n        @media "," {\n            grid-column: span 1;\n        }\n    }\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.onlyXs}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.breakpoints.m})),cn=W.Z.h1(h||(h=(0,U.Z)(["\n    font-size: ",";\n    margin-bottom: 16px;\n"])),(function(n){return n.theme.fontSizes.xxl})),sn=W.Z.div(m||(m=(0,U.Z)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),un=W.Z.button(g||(g=(0,U.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    width: 180px;\n    height: 44px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 8px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: ",";\n    transition: background-color ",",\n        color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),ln=W.Z.h2(v||(v=(0,U.Z)(["\n    margin-bottom: 8px;\n"]))),dn=W.Z.p(b||(b=(0,U.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),pn=t(7609),fn=t(9041),hn=t(939),mn=t(138),gn=W.Z.div(x||(x=(0,U.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    max-width: 95%;\n    max-height: 95%;\n    display: flex;\n    align-items: center;\n    padding-top: 24px;\n    background-color: #000;\n    transform: translate(-50%, -50%);\n"]))),vn=W.Z.button(w||(w=(0,U.Z)(["\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    width: 20px;\n    height: 20px;\n    color: ",";\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.white})),bn=W.Z.iframe(y||(y=(0,U.Z)(["\n    border: none;\n    aspect-ratio: 16 / 9;\n"]))),xn=t(4164),wn=t(3360),yn=t(184),Zn=function(n){var e=n.onClose,t=Fn().isTrailer;(0,P.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]);var r=function(n){n.target===n.currentTarget&&e()};return(0,xn.createPortal)((0,yn.jsx)(wn.e,{onClick:r,children:(0,yn.jsxs)(gn,{children:[(0,yn.jsx)(vn,{type:"button",onClick:r,"aria-label":"close",children:(0,yn.jsx)(mn.n,{w:20,h:20,use:"".concat(pn.Z,"#icon-close")})}),(0,yn.jsx)(bn,{width:640,src:"".concat(t,"?autoplay=1&iv_load_policy=3&modestbranding=1"),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}),document.getElementById("modal-root"))},jn=function(n){var e=n.movie,t=n.onClose,o=n.directing,i=n.trailer,a="https://image.tmdb.org/t/p/w300_and_h450_bestv2",c=e.vote_average,s=e.belongs_to_collection,u=e.name,l=e.overview,d=e.genres,p=e.poster_path,f=e.release,h=e.first_air,m=e.backdrop_path,g=e.created_by,v=Fn().isModalOpen,b=(0,P.useRef)(null),x=(0,P.useRef)(null),w=(0,P.useState)(0),y=(0,r.Z)(w,2),Z=y[0],j=y[1],k=[],_=[];return null===g||void 0===g||g.map((function(n){return k.push(n.name)})),null===o||void 0===o||o.map((function(n){return _.push(n.personName)})),(0,P.useEffect)((function(){var n=x.current;b.current=new ResizeObserver((function(){if(x.current){var e=n.clientHeight;j(e)}})),b.current.observe(n)}),[]),(0,yn.jsx)("section",{children:(0,yn.jsx)(fn.W,{children:(0,yn.jsxs)(en,{itemHeight:Z,bgr:m,children:[(0,yn.jsx)(tn,{bgr:m,children:(0,yn.jsxs)("picture",{children:[(0,yn.jsx)("source",{srcSet:p?"".concat(a+p," 1x, ").concat("https://image.tmdb.org/t/p/w600_and_h900_bestv2"+p," 2x"):$}),(0,yn.jsx)(rn,{src:p?a+p:$,alt:u})]})}),(0,yn.jsxs)(an,{ref:x,children:[(0,yn.jsx)(cn,{children:u}),f.release_date&&(0,yn.jsxs)(dn,{children:[f.title,f.release_date]}),h.first_air_date&&(0,yn.jsxs)(dn,{children:[h.title,h.first_air_date]}),(0,yn.jsxs)(sn,{children:[(0,yn.jsx)(hn.F,{size:1,rating:c}),(0,yn.jsx)("h3",{children:"User Score"}),i&&(0,yn.jsxs)(un,{onClick:t,children:[(0,yn.jsx)(mn.n,{w:20,h:20,use:"".concat(pn.Z,"#icon-play")}),"Play trailer"]})]})]}),(0,yn.jsxs)(an,{className:"end",children:[(0,yn.jsx)(ln,{children:"Owerview"}),(0,yn.jsx)(dn,{children:l}),(0,yn.jsx)(ln,{children:"Genres"}),(0,yn.jsx)(dn,{children:null===d||void 0===d?void 0:d.map((function(n){return n.name})).join(", ")}),g&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(ln,{children:1===k.length?"Creator":"Creators"}),(0,yn.jsx)(dn,{children:k.join(", ")})]}),(null===o||void 0===o?void 0:o.length)>0&&!g&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(ln,{children:1===_.length?"Director":"Directors"}),(0,yn.jsx)(dn,{children:_.join(", ")})]}),s&&(0,yn.jsx)(on,{to:"/movies/collections/collection-".concat(s),children:"View the collection"})]}),v&&(0,yn.jsx)(Zn,{onClose:t})]})})})},kn=t(4290),_n=W.Z.div(Z||(Z=(0,U.Z)(["\n    position: relative;\n    margin-bottom: ",";\n    overflow-x: auto;\n    @media "," {\n        margin-bottom: ",";\n    }\n    @media "," {\n        margin-bottom: ",";\n    }\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        height: calc(100% - 16px);\n        width: 80px;\n        background-image: linear-gradient(",");\n        opacity: ",";\n        pointer-events: none;\n        transition: opacity ",";\n        z-index: 1;\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.lg.curtain}),(function(n){return n.curtain?1:0}),(function(n){return n.theme.baseTransition})),Cn=W.Z.ul(j||(j=(0,U.Z)(["\n    display: flex;\n    gap: 16px;\n    /* padding-bottom: ","; */\n"])),(function(n){return n.theme.spacing.retreatS})),Sn=W.Z.li(k||(k=(0,U.Z)(["\n    width: 150px;\n    border-radius: 16px;\n    overflow: hidden;\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),Tn=(0,W.Z)(X.rU)(_||(_=(0,U.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]))),zn=W.Z.img(C||(C=(0,U.Z)(["\n    aspect-ratio: 2/3;\n    object-fit: cover;\n"]))),En=W.Z.div(S||(S=(0,U.Z)(["\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n    text-align: center;\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),Mn=W.Z.p(T||(T=(0,U.Z)(["\n    font-weight: 700;\n    margin-bottom: 8px;\n"]))),Ln=t(4420),Nn=t(8856),Rn=t(8808),In=function(n){var e=n.cast,t=(0,P.useRef)(null),o=(0,P.useRef)(null),i=(0,Ln.v9)(Nn.S),a=(0,P.useState)(!1),c=(0,r.Z)(a,2),s=c[0],u=c[1];(0,P.useEffect)((function(){var n=o.current.clientWidth;t.current.clientWidth<=n&&u(1)}),[]);var l="https://image.tmdb.org/t/p/w300_and_h450_bestv2",d=[];return null===e||void 0===e||e.map((function(n,e){return e<10?d.push(n):null})),(0,yn.jsx)(_n,{ref:o,curtain:!(s>0),children:(0,yn.jsx)(Rn.L,{orientation:"x",device:i,getRetreatX:function(n){(n||0===n)&&u(n)},children:(0,yn.jsx)(Cn,{ref:t,children:null===d||void 0===d?void 0:d.map((function(n){var e=n.id,t=n.castId,r=n.personName,o=n.profile_path,i=n.role;return(0,yn.jsx)(Sn,{children:(0,yn.jsxs)(Tn,{to:"/person/".concat(e),children:[(0,yn.jsxs)("picture",{children:[(0,yn.jsx)("source",{srcSet:o?"".concat(l+o," 1x, ").concat("https://image.tmdb.org/t/p/w600_and_h900_bestv2"+o," 2x"):$}),(0,yn.jsx)(zn,{src:o?l+o:$,alt:r})]}),(0,yn.jsxs)(En,{children:[(0,yn.jsx)(Mn,{children:r}),(0,yn.jsx)("p",{children:i})]})]})},t)}))})})})},Dn=(0,P.createContext)(!1),Fn=function(){return(0,P.useContext)(Dn)},Bn=function(){var n=(0,P.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1],a=(0,P.useState)(!1),c=(0,r.Z)(a,2),s=c[0],u=c[1],l=(0,P.useState)(null),d=(0,r.Z)(l,2),p=d[0],f=d[1],h=(0,P.useState)(!0),m=(0,r.Z)(h,2),g=m[0],v=m[1],b=(0,P.useState)(!1),x=(0,r.Z)(b,2),w=x[0],y=x[1],Z=(0,P.useState)(null),j=(0,r.Z)(Z,2),k=j[0],_=j[1],C=(0,A.UO)().mediaId,S=(0,P.useState)(null),T=(0,r.Z)(S,2),L=T[0],N=T[1],R=(0,P.useState)(null),I=(0,r.Z)(R,2),D=I[0],U=I[1],W=(0,P.useState)(null),X=(0,r.Z)(W,2),$=X[0],nn=X[1];(0,P.useEffect)((function(){if(g){var n=C.split("-")[0],e=C.split("-")[1];v(!1),y(!0),(0,V.s_)(n,e,"").then((function(n){f((0,J.s)(n))})).catch((function(n){_(n.message)})).finally((function(){(0,V.AE)(n,e).then((function(n){i(function(n){var e,t="https://www.youtube.com/embed/",r=!1;return n.map((function(n){return r||(e=t+n.key),"Trailer"!==n.type||r||(e=t+n.key,r=!0),e})),e}(n.results))})).catch((function(n){_(n.message)})).finally((function(){(0,V.s_)(n,e,"movie"===n?"/credits":"/aggregate_credits").then((function(n){N((0,K.i)(n.cast)),U((0,Q.X)(n.crew))})).catch((function(n){_(n.message)})).finally((function(){(0,V.s_)(n,e,"/reviews").then((function(n){nn(n.results)})).catch((function(n){_(n.message)})).finally((function(){y(!1)}))}))}))}))}}),[g,C]);return(0,yn.jsxs)(Dn.Provider,{value:{isModalOpen:s,isTrailer:t},children:[w&&(0,yn.jsx)(kn.a,{}),p&&(0,yn.jsx)(jn,{movie:p,directing:null===D||void 0===D?void 0:D.director,onClose:function(){var n;u(!s),s?(n=document.body)?(E=E.filter((function(e){return e.targetElement!==n})),z&&(n.ontouchstart=null,n.ontouchmove=null,M&&0===E.length&&(document.removeEventListener("touchmove",F,o?{passive:!1}:void 0),M=!1)),z?H():B()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):O(document.body)},trailer:t}),((null===L||void 0===L?void 0:L.length)>0||D||(null===$||void 0===$?void 0:$.length)>0)&&(0,yn.jsx)("section",{children:(0,yn.jsxs)(fn.W,{children:[(null===L||void 0===L?void 0:L.length)>0&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(Y,{children:"Top Billed Cast"}),(0,yn.jsx)(In,{cast:L})]}),(0,yn.jsxs)(q,{children:[((null===L||void 0===L?void 0:L.length)>0||D)&&(0,yn.jsx)(G,{to:"details/cast-and-crew",children:"Full Cast & Crew"}),(null===$||void 0===$?void 0:$.length)>0&&(0,yn.jsx)(G,{to:"details/reviews",children:"Review"})]})]})}),k&&(0,yn.jsx)(yn.Fragment,{})]})}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=850.8d27d268.chunk.js.map