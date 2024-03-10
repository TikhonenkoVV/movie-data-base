"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[313],{4321:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(8966),o=t(964),i=t(3329),a=function(){return(0,i.jsx)(o.e,{children:(0,i.jsx)(r.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},1617:function(n,e,t){t.d(e,{L:function(){return w}});var r,o,i,a,c,s,u=t(1305),l=t(168),d=t(6088),f=t(1087),p=d.Z.ul(r||(r=(0,l.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n    grid-gap: ","px;\n    @media (min-width: ",") {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n"])),(function(n){return 5*n.theme.spacing.step}),(function(n){return n.theme.breakpoints.s})),h=d.Z.li(o||(o=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ",";\n    border-radius: 20px;\n    background-color: ",";\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    overflow: hidden;\n    cursor: zoom-in;\n\n    &:hover,\n    &:focus {\n        box-shadow: 0px 2px 10px 2px ",";\n    }\n    &:hover img,\n    &:focus img {\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.shadow})),m=(0,d.Z)(f.rU)(i||(i=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),x=d.Z.div(a||(a=(0,l.Z)(["\n    width: 100%;\n    overflow: hidden;\n    aspect-ratio: 2/3;\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"]))),g=d.Z.div(c||(c=(0,l.Z)(["\n    position: relative;\n    flex-grow: 1;\n    width: 100%;\n    min-height: 80px;\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 80px;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),v=d.Z.h2(s||(s=(0,l.Z)(["\n    margin-bottom: 6px;\n    text-align: left;\n    line-height: 1.5;\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),b=t(8242),Z=t(4757),y=t(3329),w=function(n){var e=n.media,t=n.mediaTypes,r="https://image.tmdb.org/t/p/w300_and_h450_bestv2",o=function(n,e){return n.map((function(n){var t,r=n.id,o=n.vote_average,i=n.name,a=n.title,c=n.media_type,s=n.original_title,l=n.original_name,d=n.poster_path,f=n.release_date,p=n.first_air_date;return t=f?(0,u.p)(f):p?(0,u.p)(p):"N/a",{id:r,movie_title:i||a||l||s,media_type:c||e,release:t,vote_average:o>0?Math.round(10*o):"NR",poster_path:d}}))}(e,t);return(0,y.jsx)(p,{children:o.map((function(n){var e=n.id,t=n.vote_average,o=n.movie_title,i=n.media_type,a=n.poster_path,c=n.release;return(0,y.jsx)(h,{children:(0,y.jsxs)(m,{to:"movie"===i?"/movies/movie-".concat(e):"/tv-shows/tv-".concat(e),children:[(0,y.jsx)(x,{children:(0,y.jsxs)("picture",{children:[(0,y.jsx)("source",{srcSet:a?"".concat(r+a," 1x, ").concat("https://image.tmdb.org/t/p/w600_and_h900_bestv2"+a," 2x"):Z}),(0,y.jsx)("img",{src:a?"".concat(r+a):Z,alt:o})]})}),(0,y.jsxs)(g,{children:[(0,y.jsx)(b.F,{rating:t,style:{position:"absolute",top:10,left:10,zIndex:1}}),(0,y.jsx)(v,{children:o}),(0,y.jsx)("p",{children:c})]})]})},e)}))})}},8242:function(n,e,t){t.d(e,{F:function(){return b}});var r,o,i,a,c,s=t(1413),u=t(9439),l=t(2791),d=t(168),f=t(6088),p=f.Z.span(r||(r=(0,d.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60px;\n    height: 60px;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 54px;\n        height: 54px;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"]))),h=f.Z.span(o||(o=(0,d.Z)(["\n    color: ",";\n"])),(function(n){return n.theme.colors.white})),m=f.Z.svg(i||(i=(0,d.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n"]))),x=f.Z.circle(a||(a=(0,d.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: 6;\n    transform: translate(3px, 3px);\n    stroke-dasharray: 138;\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return n.length})),g=f.Z.span(c||(c=(0,d.Z)([""]))),v=t(3329),b=function(n){var e=n.rating,t=n.style,r=(0,l.useRef)(),o=(0,l.useState)(0),i=(0,u.Z)(o,2),a=i[0],c=i[1],d=(0,l.useState)(0),f=(0,u.Z)(d,2),b=f[0],Z=f[1];return(0,l.useEffect)((function(){var n,t=r.current.getTotalLength(),o=isNaN(e)?0:t-t/100*e;c(o),Z(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,a]),(0,v.jsx)(p,{style:(0,s.Z)({},t),children:(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{width:50,height:50,children:(0,v.jsx)(x,{color:b,length:a,ref:r,cx:22,cy:22,r:22})}),(0,v.jsx)(g,{children:e}),!isNaN(e)&&" %"]})})}},9313:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,o,i,a,c,s,u,l,d,f=t(9439),p=t(4321),h=t(1617),m=t(2791),x=t(4390),g=t(9085),v=t(3623),b=t(168),Z=t(6088),y=Z.Z.div(r||(r=(0,b.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    color: ",";\n    transition: color ",";\n    cursor: pointer;\n    z-index: 3;\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),w=Z.Z.button(o||(o=(0,b.Z)(["\n    border: none;\n    padding-left: 5px;\n    padding-right: 20px;\n    background-color: transparent;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.5;\n    /* color: ","; */\n    cursor: pointer;\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 0;\n        top: 50%;\n        border: 1px solid ",";\n        border-width: 0 2px 2px 0;\n        padding: 3px;\n        transform: translateY(",")\n            rotate(",");\n        transition: transform 250ms;\n        cursor: pointer;\n    }\n"])),(function(n){return n.theme.colors.wrapperSelectorColor}),(function(n){return n.theme.colors.themeText}),(function(n){return n.isOpen?"-30%":"-80%"}),(function(n){return n.isOpen?"-135deg":"45deg"})),j=Z.Z.div(i||(i=(0,b.Z)(["\n    position: absolute;\n    top: 100%;\n    /* width: 82px; */\n    border-radius: 8px;\n    padding: 18px;\n    margin: 0;\n    margin-top: 10px;\n    background-color: ",";\n    transform: ",";\n    transform-origin: top;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n    opacity: ",";\n    box-shadow: ",";\n    border: 1px solid ",";\n"])),(function(n){return n.theme.colors.mainBackground}),(function(n){return n.isOpen?"scaleY(1)":"scaleY(0)"}),(function(n){return n.isOpen?"1":"0"}),(function(n){return n.theme.colors.boxShadowSelector}),(function(n){return n.theme.colors.borderSelectorColor})),k=Z.Z.ul(a||(a=(0,b.Z)(["\n    padding: 0;\n    margin: 0;\n"]))),S=Z.Z.li(c||(c=(0,b.Z)(["\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.5;\n    color: ",";\n\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.textSelectorColor}),(function(n){return n.theme.colors.hoverSelectorColor})),_=t(3329),C=function(n){var e=n.initial,t=n.onChange,r=(0,m.useState)("All"),o=(0,f.Z)(r,2),i=o[0],a=o[1],c=(0,m.useState)(!1),s=(0,f.Z)(c,2),u=s[0],l=s[1],d=(0,m.useState)([{all:"All"},{movie:"Movie"},{tv:"Tv"}]),p=(0,f.Z)(d,2),h=p[0],x=p[1],g=function(n){n.stopPropagation(),a(n.target.innerText),t(n.target.getAttribute("data-id")),l(!1)};return(0,m.useEffect)((function(){null!==e&&void 0!==e&&e.options&&x(e.options)}),[e]),(0,_.jsxs)(y,{children:[(0,_.jsx)(w,{isOpen:u,onClick:function(n){n.stopPropagation(),l(!u)},children:i||"Theme"}),(0,_.jsx)(j,{isOpen:u,onClick:function(n){return n.stopPropagation()},children:(0,_.jsx)(k,{children:null===h||void 0===h?void 0:h.map((function(n){return(0,_.jsx)(S,{"data-id":Object.keys(n),onClick:g,children:Object.values(n)},Object.keys(n))}))})})]})},z=Z.Z.div(s||(s=(0,b.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    gap: 10px;\n"]))),T=Z.Z.h1(u||(u=(0,b.Z)(["\n    text-align: center;\n    color: ",";\n    font-size: ",";\n    transition: color ",";\n    @media (min-width: ",") {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.xl})),N=Z.Z.div(l||(l=(0,b.Z)(["\n    position: relative;\n    display: flex;\n    border: 1px solid ",";\n    border-radius: 17px;\n    overflow: hidden;\n"])),(function(n){return n.theme.colors.hover})),O=Z.Z.button(d||(d=(0,b.Z)(["\n    flex-basis: 50%;\n    width: 100px;\n    height: 100%;\n    color: ",";\n    font-size: ",";\n    transition: background-color ",",\n        color ",";\n    @media (min-width: ",") {\n        font-size: ",";\n    }\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n    &.active {\n        color: ",";\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hover})),D=function(n){var e=n.trands,t=n.onBtnDayClick,r=n.onBtnWeekClick,o=n.hendleSelectChange;return(0,_.jsxs)(z,{children:[(0,_.jsx)(T,{children:"Trending"}),(0,_.jsxs)(N,{children:[(0,_.jsx)(O,{datatype:"day",className:"day"===e?"active":"",type:"button",onClick:t,children:"today"}),(0,_.jsx)(O,{className:"week"===e?"active":"",type:"button",onClick:r,children:"this week"})]}),(0,_.jsx)(C,{onChange:o})]})},B=function(){var n=(0,m.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,m.useState)("day"),i=(0,f.Z)(o,2),a=i[0],c=i[1],s=(0,m.useState)("all"),u=(0,f.Z)(s,2),l=u[0],d=u[1],b=(0,m.useState)([]),Z=(0,f.Z)(b,2),y=Z[0],w=Z[1],j=(0,m.useState)(null),k=(0,f.Z)(j,2),S=k[0],C=k[1];(0,m.useEffect)((function(){r(!0),(0,x.XT)(l,a).then((function(n){w(n.results)})).catch((function(n){C(n.message),(0,g.Am)(n.message)})).finally((function(){r(!1)}))}),[l,a]);return(0,_.jsxs)(_.Fragment,{children:[t&&(0,_.jsx)(p.a,{}),(0,_.jsx)("section",{style:{paddingTop:"24px"},children:(0,_.jsx)(v.W,{children:(0,_.jsx)(D,{trands:a,onBtnDayClick:function(){c("day")},onBtnWeekClick:function(){c("week")},hendleSelectChange:function(n){d(n)}})})}),(0,_.jsx)("section",{children:(0,_.jsx)(v.W,{children:(0,_.jsx)(h.L,{media:y})})}),S&&(0,_.jsx)(g.Ix,{})]})}},4390:function(n,e,t){t.d(e,{AE:function(){return f},OH:function(){return l},TZ:function(){return p},XT:function(){return u},s_:function(){return d}});var r=t(5861),o=t(4687),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/".concat(e,"/").concat(t,"?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/".concat(e,"?api_key=").concat(c+s,"&page=").concat(r,"&query=").concat(t));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t).concat(r,"?api_key=").concat(c+s));case 2:return o=n.sent,u=o.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(e,"/").concat(t,"/videos?api_key=").concat(c+s));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("person/".concat(e,"?api_key=").concat(c+s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1305:function(n,e,t){t.d(e,{o:function(){return o},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},o=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=313.a069807b.chunk.js.map