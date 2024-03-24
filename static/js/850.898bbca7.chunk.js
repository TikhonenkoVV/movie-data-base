"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[850],{6700:function(n,e,t){t.d(e,{N3:function(){return i},Ts:function(){return c},kT:function(){return r},tG:function(){return a},wI:function(){return o}});var r="https://image.tmdb.org/t/p/w185",o="https://image.tmdb.org/t/p/h632",i="https://image.tmdb.org/t/p/w185",a="https://image.tmdb.org/t/p/w342",c="https://image.tmdb.org/t/p/w1280"},7663:function(n,e,t){t.d(e,{o:function(){return o},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},o=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},4316:function(n,e,t){t.d(e,{i:function(){return r}});var r=function(n){return n.map((function(n){var e,t=n.id,r=n.roles,o=n.credit_id,i=n.character,a=n.name,c=n.original_name,s=n.profile_path,u=r?r[0].credit_id:o;return r?e=r[0].character:i&&(e=i),e&&""!==e||(e="N/a"),{id:t,castId:u,profile_path:s,personName:null!==a&&void 0!==a?a:c,role:e}}))}},2127:function(n,e,t){t.d(e,{X:function(){return o}});var r=t(4942),o=function(n){var e=[],t=n.map((function(n){var t=n.id,r=n.credit_id,o=n.department,i=n.job,a=n.jobs,c=n.name,s=n.original_name,u=n.profile_path,l=a?a[0].credit_id:r,d=c||s,f=a?a[0].job:i;return"directing"===o.toLowerCase()&&"director"===f.toLowerCase()&&e.push({id:t,credit_id:l,personName:d,profile_path:u,job:f}),{id:t,credit_id:l,department:o,job:f,personName:d,profile_path:u}})),o=[];t.map((function(n){return o.includes(n.department.toLowerCase())?null:o.push(n.department.toLowerCase())}));var i=[];return o.map((function(n){var e=[];return t.map((function(t){if(t.department.toLowerCase()===n){var r=e.find((function(n){return n.id===t.id}));return r?r.job="".concat(r.job,", ").concat(t.job):e.push(t)}return null})),i.push((0,r.Z)({},n,[].concat(e)))})),{crew:i,director:e}}},6275:function(n,e,t){t.d(e,{s:function(){return o}});var r=t(7663),o=function(n,e){var t,o,i=n.id,a=n.belongs_to_collection,c=n.name,s=n.original_name,u=n.title,l=n.original_title,d=n.overview,f=n.genres,p=n.release_date,h=n.first_air_date,m=n.vote_average,g=n.created_by,v=n.poster_path,b=n.backdrop_path;t=!!p&&(0,r.p)(p),o=!!h&&(0,r.p)(h);var x=m>0?Math.round(10*m):"NR",w=c||(s||(u||l)),y=[];return null===g||void 0===g||g.map((function(n){return y.push({credit_id:n.credit_id,name:n.name})})),{id:i,belongs_to_collection:a?a.id:null,vote_average:x,name:w,release:{release_date:t,title:"Release date: "},first_air:{first_air_date:o,title:"First air date: "},overview:""!==d?d:"Sorry, but there is no overview for this movie.",genres:f.length>0?f:[{id:"",name:"No information available"}],poster_path:v,backdrop_path:b,created_by:y.length>0?y:null}}},939:function(n,e,t){t.d(e,{F:function(){return x}});var r,o,i,a,c,s=t(1413),u=t(9439),l=t(2791),d=t(168),f=t(6088),p=f.Z.span(r||(r=(0,d.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    color: #fff;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"])),(function(n){return 60*n.size}),(function(n){return 60*n.size})),h=f.Z.svg(o||(o=(0,d.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n    z-index: 1;\n"]))),m=f.Z.circle(i||(i=(0,d.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return 4*n.size}),(function(n){return 144.44*n.size}),(function(n){return n.length})),g=f.Z.circle(a||(a=(0,d.Z)(["\n    fill: none;\n    stroke: #ffffff20;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n"])),(function(n){return 4*n.size}),(function(n){return 144.44*n.size})),v=f.Z.span(c||(c=(0,d.Z)(["\n    font-size: ","em;\n"])),(function(n){return n.size})),b=t(184),x=function(n){var e=n.rating,t=n.style,r=n.size,o=(0,l.useRef)(),i=(0,l.useState)(0),a=(0,u.Z)(i,2),c=a[0],d=a[1],f=(0,l.useState)(0),x=(0,u.Z)(f,2),w=x[0],y=x[1];return(0,l.useEffect)((function(){var n,t=o.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;d(r),y(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,c]),(0,b.jsxs)(p,{size:r,style:(0,s.Z)({},t),children:[(0,b.jsxs)(h,{width:50*r,height:50*r,viewBox:"0 0 ".concat(50*r," ").concat(50*r),children:[(0,b.jsx)(g,{size:r,cx:25*r,cy:25*r,r:23*r}),(0,b.jsx)(m,{size:r,color:w,length:c,ref:o,cx:25*r,cy:25*r,r:23*r})]}),(0,b.jsx)(v,{size:r,children:isNaN(e)?e:e+"%"})]})}},3850:function(n,e,t){t.r(e),t.d(e,{MediaDetails:function(){return Fn},useModal:function(){return Bn}});var r=t(9439);var o=!1;if("undefined"!==typeof window){var i={get passive(){o=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a,c,s,u,l,d,f,p,h,m,g,v,b,x,w,y,j,Z,k,_,S,T,C,z="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),E=[],M=!1,L=-1,N=void 0,I=void 0,R=void 0,D=function(n){return E.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(n))}))},B=function(n){var e=n||window.event;return!!D(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},F=function(){void 0!==R&&(document.body.style.paddingRight=R,R=void 0),void 0!==N&&(document.body.style.overflow=N,N=void 0)},H=function(){if(void 0!==I){var n=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=I.position,document.body.style.top=I.top,document.body.style.left=I.left,window.scrollTo(e,n),I=void 0}},P=function(n,e){if(n){if(!E.some((function(e){return e.targetElement===n}))){var t={targetElement:n,options:e||{}};E=[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(E),[t]),z?window.requestAnimationFrame((function(){if(void 0===I){I={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var n=window,e=n.scrollY,t=n.scrollX,r=n.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-t,setTimeout((function(){return window.requestAnimationFrame((function(){var n=r-window.innerHeight;n&&e>=r&&(document.body.style.top=-(e+n))}))}),300)}})):function(n){if(void 0===R){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(e&&t>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);R=document.body.style.paddingRight,document.body.style.paddingRight=r+t+"px"}}void 0===N&&(N=document.body.style.overflow,document.body.style.overflow="hidden")}(e),z&&(n.ontouchstart=function(n){1===n.targetTouches.length&&(L=n.targetTouches[0].clientY)},n.ontouchmove=function(e){1===e.targetTouches.length&&function(n,e){var t=n.targetTouches[0].clientY-L;!D(n.target)&&(e&&0===e.scrollTop&&t>0||function(n){return!!n&&n.scrollHeight-n.scrollTop<=n.clientHeight}(e)&&t<0?B(n):n.stopPropagation())}(e,n)},M||(document.addEventListener("touchmove",B,o?{passive:!1}:void 0),M=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},O=t(2791),A=t(7689),U=t(168),W=t(6088),X=t(1087),G=W.Z.h2(a||(a=(0,U.Z)(["\n    margin-bottom: ",";\n    color: ",";\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.colors.themeText})),Y=W.Z.div(c||(c=(0,U.Z)(["\n    display: flex;\n    gap: 24px;\n"]))),q=(0,W.Z)(X.rU)(s||(s=(0,U.Z)(["\n    display: flex;\n    align-items: center;\n    height: 44px;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: ",";\n    font-weight: 700;\n    border: 2px solid ",";\n    border-radius: 8px;\n    color: ",";\n    transition: background-color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.preMedium})),V=t(5749),J=t(6275),K=t(4316),Q=t(2127),$=t(6226),nn=t(6700),en=W.Z.div(u||(u=(0,U.Z)(["\n    @media "," {\n        display: grid;\n        grid-template-columns: 140px auto;\n        align-items: start;\n        gap: 20px;\n        padding: "," 0;\n        background-image: ",",\n            url(",");\n        background-position: top;\n        background-repeat: no-repeat;\n        background-size: ",";\n        transition: background ",";\n    }\n    @media "," {\n        grid-template-columns: 230px auto;\n        grid-template-rows: auto calc(\n                100% - ","px - 20px\n            );\n        background-size: ",";\n        transition: background ",";\n    }\n    @media "," {\n        background-position: center;\n        background-size: cover;\n    }\n    @media "," {\n        grid-template-columns: 300px auto;\n    }\n    @media "," {\n        padding: "," 0;\n    }\n"])),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.lg.movieInfo}),(function(n){var e=n.bgr;return e?nn.Ts+e:$}),(function(n){var e=n.itemHeight,t=n.theme;return"auto calc(".concat(e,"px + ").concat(t.spacing.retreatM," + ").concat(t.spacing.retreatM,")")}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.itemHeight}),(function(n){var e=n.itemHeight,t=n.theme;return e<385?"auto 385px":"auto calc(".concat(e,"px + ").concat(t.spacing.retreatM," + ").concat(t.spacing.retreatM,")")}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.l}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),tn=W.Z.div(l||(l=(0,U.Z)(["\n    @media "," {\n        background-image: ",",\n            url(",");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        padding: 20px 0;\n    }\n    transition: background ",";\n    @media "," {\n        flex-shrink: 0;\n        margin: 0;\n        padding: 0;\n        background: none;\n        height: auto;\n    }\n    @media "," {\n        margin-bottom: 20px;\n    }\n    @media "," {\n        grid-row: span 2;\n    }\n"])),(function(n){return n.theme.breakpoints.onlyXs}),(function(n){return n.theme.lg.movieInfoOnlyS}),(function(n){var e=n.bgr;return e?nn.Ts+e:$}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.onlyM}),(function(n){return n.theme.breakpoints.m})),rn=W.Z.img(d||(d=(0,U.Z)(["\n    object-fit: cover;\n    aspect-ratio: 2 / 3;\n    height: 210px;\n    @media "," {\n        width: 230px;\n        height: auto;\n        margin-right: auto;\n    }\n    @media "," {\n        width: 300px;\n    }\n"])),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.l})),on=(0,W.Z)(X.rU)(f||(f=(0,U.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 220px;\n    height: 44px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 8px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: ",";\n    transition: background-color ",",\n        color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),an=W.Z.div(p||(p=(0,U.Z)(["\n    color: ",";\n    transition: color ",";\n    @media "," {\n        &:not(.end) {\n            margin-bottom: 16px;\n        }\n    }\n    &.end {\n        @media "," {\n            grid-column: span 2;\n        }\n        @media "," {\n            grid-column: span 1;\n        }\n    }\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.onlyXs}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.breakpoints.m})),cn=W.Z.h1(h||(h=(0,U.Z)(["\n    font-size: ",";\n    margin-bottom: 16px;\n"])),(function(n){return n.theme.fontSizes.xxl})),sn=W.Z.div(m||(m=(0,U.Z)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),un=W.Z.button(g||(g=(0,U.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    width: 180px;\n    height: 44px;\n    border-width: 2px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 8px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: ",";\n    transition: background-color ",",\n        color ",";\n    &:hover {\n        color: ",";\n        background-color: ",";\n    }\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),ln=W.Z.h2(v||(v=(0,U.Z)(["\n    margin-bottom: 8px;\n"]))),dn=W.Z.p(b||(b=(0,U.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),fn=t(1710),pn=t(9041),hn=t(939),mn=t(138),gn=W.Z.div(x||(x=(0,U.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    max-width: 95%;\n    max-height: 95%;\n    display: flex;\n    align-items: center;\n    padding-top: 24px;\n    background-color: #000;\n    transform: translate(-50%, -50%);\n"]))),vn=W.Z.button(w||(w=(0,U.Z)(["\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    width: 20px;\n    height: 20px;\n    color: ",";\n    & svg {\n        fill: currentColor;\n    }\n"])),(function(n){return n.theme.colors.white})),bn=W.Z.iframe(y||(y=(0,U.Z)(["\n    border: none;\n    aspect-ratio: 16 / 9;\n"]))),xn=t(4164),wn=t(3360),yn=t(184),jn=function(n){var e=n.onClose,t=Bn().isTrailer;(0,O.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]);var r=function(n){n.target===n.currentTarget&&e()};return(0,xn.createPortal)((0,yn.jsx)(wn.e,{onClick:r,children:(0,yn.jsxs)(gn,{children:[(0,yn.jsx)(vn,{type:"button",onClick:r,"aria-label":"close",children:(0,yn.jsx)(mn.n,{w:20,h:20,use:"".concat(fn.Z,"#icon-close")})}),(0,yn.jsx)(bn,{width:640,src:"".concat(t,"?autoplay=1&iv_load_policy=3&modestbranding=1"),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}),document.getElementById("modal-root"))},Zn=function(n){var e=n.movie,t=n.onClose,o=n.directing,i=n.trailer,a=e.vote_average,c=e.belongs_to_collection,s=e.name,u=e.overview,l=e.genres,d=e.poster_path,f=e.release,p=e.first_air,h=e.backdrop_path,m=e.created_by,g=Bn().isModalOpen,v=(0,O.useRef)(null),b=(0,O.useRef)(null),x=(0,O.useState)(0),w=(0,r.Z)(x,2),y=w[0],j=w[1],Z=[],k=[];return null===m||void 0===m||m.map((function(n){return Z.push(n.name)})),null===o||void 0===o||o.map((function(n){return k.push(n.personName)})),(0,O.useEffect)((function(){var n=b.current;v.current=new ResizeObserver((function(){if(b.current){var e=n.clientHeight;j(e)}})),v.current.observe(n)}),[]),(0,yn.jsx)("section",{children:(0,yn.jsx)(pn.W,{children:(0,yn.jsxs)(en,{itemHeight:y,bgr:h,children:[(0,yn.jsx)(tn,{bgr:h,children:(0,yn.jsx)(rn,{src:d?nn.tG+d:$,alt:s})}),(0,yn.jsxs)(an,{ref:b,children:[(0,yn.jsx)(cn,{children:s}),f.release_date&&(0,yn.jsxs)(dn,{children:[f.title,f.release_date]}),p.first_air_date&&(0,yn.jsxs)(dn,{children:[p.title,p.first_air_date]}),(0,yn.jsxs)(sn,{children:[(0,yn.jsx)(hn.F,{size:1,rating:a}),(0,yn.jsx)("h3",{children:"User Score"}),i&&(0,yn.jsxs)(un,{onClick:t,children:[(0,yn.jsx)(mn.n,{w:20,h:20,use:"".concat(fn.Z,"#icon-play")}),"Play trailer"]})]})]}),(0,yn.jsxs)(an,{className:"end",children:[(0,yn.jsx)(ln,{children:"Owerview"}),(0,yn.jsx)(dn,{children:u}),(0,yn.jsx)(ln,{children:"Genres"}),(0,yn.jsx)(dn,{children:null===l||void 0===l?void 0:l.map((function(n){return n.name})).join(", ")}),m&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(ln,{children:1===Z.length?"Creator":"Creators"}),(0,yn.jsx)(dn,{children:Z.join(", ")})]}),(null===o||void 0===o?void 0:o.length)>0&&!m&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(ln,{children:1===k.length?"Director":"Directors"}),(0,yn.jsx)(dn,{children:k.join(", ")})]}),c&&(0,yn.jsx)(on,{to:"/movies/collections/collection-".concat(c),children:"View the collection"})]}),g&&(0,yn.jsx)(jn,{onClose:t})]})})})},kn=t(3714),_n=W.Z.div(j||(j=(0,U.Z)(["\n    position: relative;\n    margin-bottom: ",";\n    overflow-x: auto;\n    @media "," {\n        margin-bottom: ",";\n    }\n    @media "," {\n        margin-bottom: ",";\n    }\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        height: calc(100% - 16px);\n        width: 80px;\n        background-image: linear-gradient(",");\n        opacity: ",";\n        pointer-events: none;\n        transition: opacity ",";\n        z-index: 1;\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.lg.curtain}),(function(n){return n.curtain?1:0}),(function(n){return n.theme.baseTransition})),Sn=W.Z.ul(Z||(Z=(0,U.Z)(["\n    display: flex;\n    gap: 16px;\n    /* padding-bottom: ","; */\n"])),(function(n){return n.theme.spacing.retreatS})),Tn=W.Z.li(k||(k=(0,U.Z)(["\n    width: 150px;\n    border-radius: 16px;\n    overflow: hidden;\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),Cn=(0,W.Z)(X.rU)(_||(_=(0,U.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]))),zn=W.Z.img(S||(S=(0,U.Z)(["\n    aspect-ratio: 2/3;\n    object-fit: cover;\n"]))),En=W.Z.div(T||(T=(0,U.Z)(["\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n    text-align: center;\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),Mn=W.Z.p(C||(C=(0,U.Z)(["\n    font-weight: 700;\n    margin-bottom: 8px;\n"]))),Ln=t(4420),Nn=t(8856),In=t(8808),Rn=function(n){var e=n.cast,t=(0,O.useRef)(null),o=(0,O.useRef)(null),i=(0,Ln.v9)(Nn.S),a=(0,O.useState)(!1),c=(0,r.Z)(a,2),s=c[0],u=c[1];(0,O.useEffect)((function(){var n=o.current.clientWidth;t.current.clientWidth<=n&&u(1)}),[]);var l=[];return null===e||void 0===e||e.map((function(n,e){return e<10?l.push(n):null})),(0,yn.jsx)(_n,{ref:o,curtain:!(s>0),children:(0,yn.jsx)(In.L,{orientation:"x",device:i,getRetreatX:function(n){(n||0===n)&&u(n)},children:(0,yn.jsx)(Sn,{ref:t,children:null===l||void 0===l?void 0:l.map((function(n){var e=n.id,t=n.castId,r=n.personName,o=n.profile_path,i=n.role;return(0,yn.jsx)(Tn,{children:(0,yn.jsxs)(Cn,{to:"/persons/".concat(e),children:[(0,yn.jsx)(zn,{src:o?nn.kT+o:$,alt:r}),(0,yn.jsxs)(En,{children:[(0,yn.jsx)(Mn,{children:r}),(0,yn.jsx)("p",{children:i})]})]})},t)}))})})})},Dn=(0,O.createContext)(!1),Bn=function(){return(0,O.useContext)(Dn)},Fn=function(){var n=(0,O.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1],a=(0,O.useState)(!1),c=(0,r.Z)(a,2),s=c[0],u=c[1],l=(0,O.useState)(null),d=(0,r.Z)(l,2),f=d[0],p=d[1],h=(0,O.useState)(!0),m=(0,r.Z)(h,2),g=m[0],v=m[1],b=(0,O.useState)(!1),x=(0,r.Z)(b,2),w=x[0],y=x[1],j=(0,O.useState)(null),Z=(0,r.Z)(j,2),k=Z[0],_=Z[1],S=(0,A.UO)().mediaId,T=(0,O.useState)(null),C=(0,r.Z)(T,2),L=C[0],N=C[1],I=(0,O.useState)(null),R=(0,r.Z)(I,2),D=R[0],U=R[1],W=(0,O.useState)(null),X=(0,r.Z)(W,2),$=X[0],nn=X[1];(0,O.useEffect)((function(){if(g){var n=S.split("-")[0],e=S.split("-")[1];v(!1),y(!0),(0,V.s_)(n,e,"").then((function(n){p((0,J.s)(n))})).catch((function(n){_(n.message)})).finally((function(){(0,V.AE)(n,e).then((function(n){i(function(n){var e,t="https://www.youtube.com/embed/",r=!1;return n.map((function(n){return r||(e=t+n.key),"Trailer"!==n.type||r||(e=t+n.key,r=!0),e})),e}(n.results))})).catch((function(n){_(n.message)})).finally((function(){(0,V.s_)(n,e,"movie"===n?"/credits":"/aggregate_credits").then((function(n){N((0,K.i)(n.cast)),U((0,Q.X)(n.crew))})).catch((function(n){_(n.message)})).finally((function(){(0,V.s_)(n,e,"/reviews").then((function(n){nn(n.results)})).catch((function(n){_(n.message)})).finally((function(){y(!1)}))}))}))}))}}),[g,S]);return(0,yn.jsxs)(Dn.Provider,{value:{isModalOpen:s,isTrailer:t},children:[w&&(0,yn.jsx)(kn.a,{}),f&&(0,yn.jsx)(Zn,{movie:f,directing:null===D||void 0===D?void 0:D.director,onClose:function(){var n;u(!s),s?(n=document.body)?(E=E.filter((function(e){return e.targetElement!==n})),z&&(n.ontouchstart=null,n.ontouchmove=null,M&&0===E.length&&(document.removeEventListener("touchmove",B,o?{passive:!1}:void 0),M=!1)),z?H():F()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):P(document.body)},trailer:t}),((null===L||void 0===L?void 0:L.length)>0||D||(null===$||void 0===$?void 0:$.length)>0)&&(0,yn.jsx)("section",{children:(0,yn.jsxs)(pn.W,{children:[(null===L||void 0===L?void 0:L.length)>0&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(G,{children:"Top Billed Cast"}),(0,yn.jsx)(Rn,{cast:L})]}),(0,yn.jsxs)(Y,{children:[((null===L||void 0===L?void 0:L.length)>0||D)&&(0,yn.jsx)(q,{to:"details/cast-and-crew",children:"Full Cast & Crew"}),(null===$||void 0===$?void 0:$.length)>0&&(0,yn.jsx)(q,{to:"details/reviews",children:"Review"})]})]})}),k&&(0,yn.jsx)("p",{children:k})]})}},6226:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=850.898bbca7.chunk.js.map