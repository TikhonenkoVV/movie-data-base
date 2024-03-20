"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[592],{6700:function(n,e,t){t.d(e,{WC:function(){return o},Yt:function(){return i},e8:function(){return r}});var r="https://image.tmdb.org/t/p/w300",o="https://image.tmdb.org/t/p/w600",i="https://image.tmdb.org/t/p/w1280"},5749:function(n,e,t){t.d(e,{AE:function(){return d},OH:function(){return l},TZ:function(){return p},XT:function(){return u},s_:function(){return f}});var r=t(5861),o=t(4687),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/".concat(e,"/").concat(t,"?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/".concat(e,"?api_key=").concat(c+s,"&page=").concat(r,"&query=").concat(t));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t).concat(r,"?api_key=").concat(c+s));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t,"/videos?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("person/".concat(e,"?api_key=").concat(c+s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7663:function(n,e,t){t.d(e,{o:function(){return o},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},o=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},4290:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(8966),o=t(3360),i=t(184),a=function(){return(0,i.jsx)(o.e,{children:(0,i.jsx)(r.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},939:function(n,e,t){t.d(e,{F:function(){return v}});var r,o,i,a,c,s=t(1413),u=t(9439),l=t(2791),f=t(168),d=t(6088),p=d.Z.span(r||(r=(0,f.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    color: #fff;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"])),(function(n){return 60*n.size}),(function(n){return 60*n.size})),h=d.Z.svg(o||(o=(0,f.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n    z-index: 1;\n"]))),m=d.Z.circle(i||(i=(0,f.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return 4*n.size}),(function(n){return 144.44*n.size}),(function(n){return n.length})),g=d.Z.circle(a||(a=(0,f.Z)(["\n    fill: none;\n    stroke: #ffffff20;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n"])),(function(n){return 4*n.size}),(function(n){return 144.44*n.size})),x=d.Z.span(c||(c=(0,f.Z)(["\n    font-size: ","em;\n"])),(function(n){return n.size})),b=t(184),v=function(n){var e=n.rating,t=n.style,r=n.size,o=(0,l.useRef)(),i=(0,l.useState)(0),a=(0,u.Z)(i,2),c=a[0],f=a[1],d=(0,l.useState)(0),v=(0,u.Z)(d,2),k=v[0],Z=v[1];return(0,l.useEffect)((function(){var n,t=o.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;f(r),Z(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,c]),(0,b.jsxs)(p,{size:r,style:(0,s.Z)({},t),children:[(0,b.jsxs)(h,{width:50*r,height:50*r,viewBox:"0 0 ".concat(50*r," ").concat(50*r),children:[(0,b.jsx)(g,{size:r,cx:25*r,cy:25*r,r:23*r}),(0,b.jsx)(m,{size:r,color:k,length:c,ref:o,cx:25*r,cy:25*r,r:23*r})]}),(0,b.jsx)(x,{size:r,children:isNaN(e)?e:e+"%"})]})}},8592:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,o,i,a,c,s,u,l,f,d,p,h,m,g,x=t(9439),b=t(2791),v=t(9085),k=t(5749),Z=t(168),w=t(6088),y=t(6700),j=w.Z.section(r||(r=(0,Z.Z)(["\n    padding-bottom: 0;\n"]))),z=w.Z.div(o||(o=(0,Z.Z)(["\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    color: ",";\n    background-color: ",";\n    @media "," {\n        width: ",";\n    }\n    @media "," {\n        width: ",";\n    }\n    @media "," {\n        width: ",";\n    }\n    @media "," {\n        width: ",";\n    }\n    @media "," {\n        width: ",";\n    }\n    @media "," {\n        width: ",";\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.sizes.xs}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.sizes.s}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.sizes.m}),(function(n){return n.theme.breakpoints.l}),(function(n){return n.theme.sizes.l}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.sizes.xl}),(function(n){return n.theme.breakpoints.xxl}),(function(n){return n.theme.sizes.xxl})),S=w.Z.div(i||(i=(0,Z.Z)(["\n    position: absolute;\n    left: 50px;\n    bottom: 50px;\n"]))),C=w.Z.h1(a||(a=(0,Z.Z)(["\n    font-size: ",";\n    font-weight: 700;\n    margin-bottom: 24px;\n"])),(function(n){return n.theme.fontSizes.xxxl})),_=w.Z.p(c||(c=(0,Z.Z)(["\n    font-size: ",";\n    font-weight: 700;\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"])),(function(n){return n.theme.fontSizes.large})),T=w.Z.div(s||(s=(0,Z.Z)(["\n    position: relative;\n\n    width: 100%;\n    aspect-ratio: 3 / 1;\n\n    opacity: 0.7;\n\n    background-image: ",";\n    background-position: 0 -50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-left: ",";\n    padding-right: ",";\n\n    filter: grayscale(1);\n\n    mix-blend-mode: soft-light;\n\n    @media "," {\n        padding-left: ",";\n        padding-right: ",";\n    }\n    @media "," {\n        padding-left: ",";\n        padding-right: ",";\n    }\n"])),(function(n){var e=n.background;return"url('"+y.Yt+e+"')"}),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.spacing.retreatL})),L=t(184),M=function(n){var e=n.backgrounds,t=e&&e[Math.floor(19*Math.random()+1)];return(0,L.jsx)(j,{children:(0,L.jsxs)(z,{children:[(0,L.jsxs)(S,{children:[(0,L.jsx)(C,{children:"Welcome."}),(0,L.jsx)(_,{children:"Looking for a movie, TV show or person? We'll help."})]}),(0,L.jsx)(T,{background:t})]})})},N=t(9041),O=w.Z.div(u||(u=(0,Z.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    color: ",";\n    transition: color ",";\n    cursor: pointer;\n    z-index: 3;\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),B=w.Z.button(l||(l=(0,Z.Z)(["\n    padding-left: 5px;\n    padding-right: 20px;\n    border: none;\n    background-color: transparent;\n    font-size: ",";\n    font-weight: 500;\n    line-height: 1.5;\n    cursor: pointer;\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 0;\n        top: 50%;\n        border: 1px solid ",";\n        border-width: 0 2px 2px 0;\n        padding: 3px;\n        transform: translateY(",")\n            rotate(",");\n        transition: transform 250ms;\n        cursor: pointer;\n    }\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.themeText}),(function(n){return n.isOpen?"-30%":"-80%"}),(function(n){return n.isOpen?"-135deg":"45deg"}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.medium})),D=w.Z.div(f||(f=(0,Z.Z)(["\n    position: absolute;\n    top: 100%;\n    right: 0;\n    border-radius: 8px;\n    padding: 10px;\n    margin: 0;\n    margin-top: 10px;\n    background-color: ",";\n    transform: ",";\n    transform-origin: top;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n    opacity: ",";\n    box-shadow: ",";\n    border: 1px solid ",";\n"])),(function(n){return n.theme.colors.mainBackground}),(function(n){return n.isOpen?"scaleY(1)":"scaleY(0)"}),(function(n){return n.isOpen?"1":"0"}),(function(n){return n.theme.colors.boxShadowSelector}),(function(n){return n.theme.colors.borderSelectorColor})),W=w.Z.li(d||(d=(0,Z.Z)(["\n    width: 80px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    border-radius: 4px;\n    color: ",";\n    text-align: center;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1;\n    transition: background-color ",",\n        color ",";\n    &:hover {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.textSelectorColor}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.white})),E=function(n){var e=n.initial,t=n.onChange,r=(0,b.useState)("All"),o=(0,x.Z)(r,2),i=o[0],a=o[1],c=(0,b.useState)(!1),s=(0,x.Z)(c,2),u=s[0],l=s[1],f=(0,b.useState)([{all:"All"},{movie:"Movie"},{tv:"Tv"}]),d=(0,x.Z)(f,2),p=d[0],h=d[1],m=function(n){n.stopPropagation(),a(n.target.innerText),t(n.target.getAttribute("data-id")),l(!1)};return(0,b.useEffect)((function(){return window.addEventListener("click",(function(){return l(!1)})),function(){window.removeEventListener("click",(function(){return l(!1)}))}}),[]),(0,b.useEffect)((function(){null!==e&&void 0!==e&&e.options&&h(e.options)}),[e]),(0,L.jsxs)(O,{children:[(0,L.jsx)(B,{isOpen:u,onClick:function(n){n.stopPropagation(),l(!u)},children:i||"Theme"}),(0,L.jsx)(D,{isOpen:u,onClick:function(n){return n.stopPropagation()},children:(0,L.jsx)("ul",{children:null===p||void 0===p?void 0:p.map((function(n){return(0,L.jsx)(W,{"data-id":Object.keys(n),onClick:m,children:Object.values(n)},Object.keys(n))}))})})]})},A=w.Z.div(p||(p=(0,Z.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    gap: 10px;\n"]))),Y=w.Z.h1(h||(h=(0,Z.Z)(["\n    text-align: center;\n    color: ",";\n    font-size: ",";\n    transition: color ",";\n    @media "," {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.xl})),U=w.Z.div(m||(m=(0,Z.Z)(["\n    position: relative;\n    display: flex;\n    border: 1px solid ",";\n    border-radius: 17px;\n    overflow: hidden;\n"])),(function(n){return n.theme.colors.hover})),F=w.Z.button(g||(g=(0,Z.Z)(["\n    flex-basis: 50%;\n    width: 100px;\n    height: 100%;\n    color: ",";\n    font-size: ",";\n    transition: background-color ",",\n        color ",";\n    @media "," {\n        font-size: ",";\n    }\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n    &.active {\n        color: ",";\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hover})),P=function(n){var e=n.trands,t=n.onBtnDayClick,r=n.onBtnWeekClick,o=n.hendleSelectChange;return(0,L.jsxs)(A,{children:[(0,L.jsx)(Y,{children:"Trending"}),(0,L.jsxs)(U,{children:[(0,L.jsx)(F,{datatype:"day",className:"day"===e?"active":"",type:"button",onClick:t,children:"today"}),(0,L.jsx)(F,{className:"week"===e?"active":"",type:"button",onClick:r,children:"this week"})]}),(0,L.jsx)(E,{onChange:o})]})},R=t(3146),I=t(4290),X=function(){var n=(0,b.useState)(!1),e=(0,x.Z)(n,2),t=e[0],r=e[1],o=(0,b.useState)("day"),i=(0,x.Z)(o,2),a=i[0],c=i[1],s=(0,b.useState)("all"),u=(0,x.Z)(s,2),l=u[0],f=u[1],d=(0,b.useState)([]),p=(0,x.Z)(d,2),h=p[0],m=p[1],g=(0,b.useState)(),Z=(0,x.Z)(g,2),w=Z[0],y=Z[1],j=(0,b.useState)(null),z=(0,x.Z)(j,2),S=z[0],C=z[1];(0,b.useEffect)((function(){r(!0),(0,k.XT)(l,a).then((function(n){m(n.results),y(function(n,e){var t={};return n.map((function(n,e){var r=n.backdrop_path;return t[e]=r}))}(n.results))})).catch((function(n){C(n.message),(0,v.Am)(n.message)})).finally((function(){r(!1)}))}),[l,a]);return(0,L.jsxs)(L.Fragment,{children:[t&&(0,L.jsx)(I.a,{}),(0,L.jsx)(M,{backgrounds:w}),(0,L.jsx)("section",{className:"padding-top",children:(0,L.jsx)(N.W,{children:(0,L.jsx)(P,{trands:a,onBtnDayClick:function(){c("day")},onBtnWeekClick:function(){c("week")},hendleSelectChange:function(n){f(n)}})})}),(0,L.jsx)("section",{children:(0,L.jsx)(N.W,{children:(0,L.jsx)(R.L,{media:h})})}),S&&(0,L.jsx)(v.Ix,{})]})}},3146:function(n,e,t){t.d(e,{L:function(){return y}});var r,o,i,a,c,s,u=t(168),l=t(6088),f=t(1087),d=l.Z.ul(r||(r=(0,u.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n    grid-gap: ",";\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.breakpoints.xxl})),p=l.Z.li(o||(o=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ",";\n    border-radius: 20px;\n    background-color: ",";\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    overflow: hidden;\n    cursor: zoom-in;\n\n    &:hover,\n    &:focus {\n        box-shadow: 0px 2px 10px 2px ",";\n    }\n    &:hover img,\n    &:focus img {\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.shadow})),h=(0,l.Z)(f.rU)(i||(i=(0,u.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),m=l.Z.div(a||(a=(0,u.Z)(["\n    width: 100%;\n    overflow: hidden;\n    aspect-ratio: 2/3;\n    color: ",";\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"])),(function(n){return n.theme.colors.white})),g=l.Z.div(c||(c=(0,u.Z)(["\n    flex-grow: 1;\n    width: 100%;\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    text-align: center;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),x=l.Z.h2(s||(s=(0,u.Z)(["\n    margin-bottom: 6px;\n    font-size: ",";\n    line-height: 1.5;\n"])),(function(n){return n.theme.fontSizes.small})),b=t(4757),v=t(6700),k=t(939),Z=t(7663),w=t(184),y=function(n){var e=function(n,e){return n.map((function(n){var t,r=n.id,o=n.vote_average,i=n.name,a=n.title,c=n.media_type,s=n.original_title,u=n.original_name,l=n.poster_path,f=n.release_date,d=n.first_air_date;return t=f?(0,Z.p)(f):d?(0,Z.p)(d):"N/a",{id:r,movie_title:i||a||u||s,media_type:c||e,release:t,vote_average:o>0?Math.round(10*o):"NR",poster_path:l}}))}(n.media,n.mediaTypes);return(0,w.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.vote_average,r=n.movie_title,o=n.media_type,i=n.poster_path,a=n.release;return(0,w.jsx)(p,{children:(0,w.jsxs)(h,{to:"movie"===o?"/movies/movie-".concat(e):"/tv-shows/tv-".concat(e),children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(k.F,{size:.7,rating:t,style:{position:"absolute",top:10,right:10,zIndex:1}}),(0,w.jsxs)("picture",{children:[(0,w.jsx)("source",{srcSet:i?"".concat(v.e8+i," 1x, ").concat(v.WC+i," 2x"):b}),(0,w.jsx)("img",{src:i?"".concat(v.e8+i):b,alt:r})]})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)(x,{children:r}),(0,w.jsx)("p",{children:a})]})]})},e)}))})}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=592.9456206a.chunk.js.map