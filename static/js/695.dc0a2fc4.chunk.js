"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[695],{6700:function(n,e,t){t.d(e,{N3:function(){return o},Ts:function(){return s},kT:function(){return r},tG:function(){return a},wI:function(){return i}});var r="https://image.tmdb.org/t/p/w185",i="https://image.tmdb.org/t/p/h632",o="https://image.tmdb.org/t/p/w185",a="https://image.tmdb.org/t/p/w342",s="https://image.tmdb.org/t/p/w1280"},7663:function(n,e,t){t.d(e,{o:function(){return i},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},i=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},3733:function(n,e,t){t.d(e,{L:function(){return y}});var r,i,o,a,s,c,u=t(168),l=t(6088),d=t(1087),f=l.Z.ul(r||(r=(0,u.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n    grid-gap: ",";\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.breakpoints.xxl})),p=l.Z.li(i||(i=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ",";\n    border-radius: 20px;\n    background-color: ",";\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    overflow: hidden;\n    cursor: zoom-in;\n\n    &:hover,\n    &:focus {\n        box-shadow: 0px 2px 10px 2px ",";\n    }\n    &:hover img,\n    &:focus img {\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.shadow})),h=(0,l.Z)(d.rU)(o||(o=(0,u.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),m=l.Z.div(a||(a=(0,u.Z)(["\n    width: 100%;\n    overflow: hidden;\n    aspect-ratio: 2/3;\n    color: ",";\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"])),(function(n){return n.theme.colors.white})),g=l.Z.div(s||(s=(0,u.Z)(["\n    flex-grow: 1;\n    width: 100%;\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    text-align: center;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),x=l.Z.h2(c||(c=(0,u.Z)(["\n    margin-bottom: 6px;\n    font-size: ",";\n    line-height: 1.5;\n"])),(function(n){return n.theme.fontSizes.small})),b=t(6226),v=t(6700),Z=t(939),w=t(7663),j=t(184),y=function(n){var e=function(n,e){return n.map((function(n){var t,r=n.id,i=n.vote_average,o=n.name,a=n.title,s=n.media_type,c=n.original_title,u=n.original_name,l=n.poster_path,d=n.release_date,f=n.first_air_date;return t=d?(0,w.p)(d):f?(0,w.p)(f):"N/a",{id:r,movie_title:o||a||u||c,media_type:s||e,release:t,vote_average:i>0?Math.round(10*i):"NR",poster_path:l}}))}(n.media,n.mediaTypes);return(0,j.jsx)(f,{children:e.map((function(n){var e=n.id,t=n.vote_average,r=n.movie_title,i=n.media_type,o=n.poster_path,a=n.release;return(0,j.jsx)(p,{children:(0,j.jsxs)(h,{to:"movie"===i?"/movies/movie-".concat(e):"/tv-shows/tv-".concat(e),children:[(0,j.jsxs)(m,{children:[(0,j.jsx)(Z.F,{size:.7,rating:t,style:{position:"absolute",top:10,right:10,zIndex:1}}),(0,j.jsx)("img",{src:o?"".concat(v.tG+o):b,alt:r})]}),(0,j.jsxs)(g,{children:[(0,j.jsx)(x,{children:r}),(0,j.jsx)("p",{children:a})]})]})},e)}))})}},939:function(n,e,t){t.d(e,{F:function(){return v}});var r,i,o,a,s,c=t(1413),u=t(9439),l=t(2791),d=t(168),f=t(6088),p=f.Z.span(r||(r=(0,d.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    color: #fff;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"])),(function(n){return 60*n.size}),(function(n){return 60*n.size})),h=f.Z.svg(i||(i=(0,d.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n    z-index: 1;\n"]))),m=f.Z.circle(o||(o=(0,d.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return 4*n.size}),(function(n){return 144.44*n.size}),(function(n){return n.length})),g=f.Z.circle(a||(a=(0,d.Z)(["\n    fill: none;\n    stroke: #ffffff20;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n"])),(function(n){return 4*n.size}),(function(n){return 144.44*n.size})),x=f.Z.span(s||(s=(0,d.Z)(["\n    font-size: ","em;\n"])),(function(n){return n.size})),b=t(184),v=function(n){var e=n.rating,t=n.style,r=n.size,i=(0,l.useRef)(),o=(0,l.useState)(0),a=(0,u.Z)(o,2),s=a[0],d=a[1],f=(0,l.useState)(0),v=(0,u.Z)(f,2),Z=v[0],w=v[1];return(0,l.useEffect)((function(){var n,t=i.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;d(r),w(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,s]),(0,b.jsxs)(p,{size:r,style:(0,c.Z)({},t),children:[(0,b.jsxs)(h,{width:50*r,height:50*r,viewBox:"0 0 ".concat(50*r," ").concat(50*r),children:[(0,b.jsx)(g,{size:r,cx:25*r,cy:25*r,r:23*r}),(0,b.jsx)(m,{size:r,color:Z,length:s,ref:i,cx:25*r,cy:25*r,r:23*r})]}),(0,b.jsx)(x,{size:r,children:isNaN(e)?e:e+"%"})]})}},9283:function(n,e,t){t.d(e,{l:function(){return p}});var r,i,o,a=t(168),s=t(6088),c=s.Z.div(r||(r=(0,a.Z)(["\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: ",";\n    & h1 {\n        font-size: ",";\n    }\n    & p {\n        font-size: ",";\n    }\n    & img {\n        margin: 0 auto;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontSizes.xxl})),u=s.Z.h1(i||(i=(0,a.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),l=s.Z.p(o||(o=(0,a.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),d=t.p+"static/media/no-found.322bf7b5d3e43751b8d0.png",f=t(184),p=function(){return(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:"Ooops!"}),(0,f.jsx)("img",{width:300,src:d,alt:"page-404"}),(0,f.jsx)(l,{children:"Page no found"})]})}},9916:function(n,e,t){t.r(e),t.d(e,{Search:function(){return W}});var r,i,o,a,s,c,u,l,d,f,p,h,m=t(9439),g=t(2791),x=t(1087),b=t(7689),v=t(9085),Z=t(5749),w=t(168),j=t(6088),y=j.Z.div(r||(r=(0,w.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    &.top {\n        padding-bottom: ",";\n        @media "," {\n            padding-bottom: ",";\n        }\n        @media "," {\n            padding-bottom: ",";\n        }\n    }\n    &.bottom {\n        padding-top: ",";\n        @media "," {\n            padding-top: ",";\n        }\n        @media "," {\n            padding-top: ",";\n        }\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),k=j.Z.button(i||(i=(0,w.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 6px;\n    color: ",";\n    transition: background-color ",",\n        color ",";\n    background-color: ",";\n    & svg {\n        fill: currentColor;\n    }\n    &:hover,\n    &[aria-current='true'] {\n        color: ",";\n        background-color: ",";\n    }\n    @media "," {\n        width: 40px;\n        height: 40px;\n    }\n    &:disabled {\n        cursor: not-allowed;\n        color: #636363;\n        background-color: #4a4a4a;\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoints.xs})),z=(0,j.Z)(k)(o||(o=(0,w.Z)([""]))),S=(0,j.Z)(k)(a||(a=(0,w.Z)(["\n    & svg {\n        transform: rotate(180deg);\n    }\n"]))),_=(0,j.Z)(k)(s||(s=(0,w.Z)([""]))),N=(0,j.Z)(k)(c||(c=(0,w.Z)(["\n    & svg {\n        transform: rotate(180deg);\n    }\n"]))),C=(0,j.Z)(k)(u||(u=(0,w.Z)([""]))),T=t(1710),M=t(138),L=t(184),D=function(n){var e=n.totalPages,t=n.serviceClass,r=(0,x.lr)(),i=(0,m.Z)(r,2),o=i[0],a=i[1],s=(0,g.useState)(1),c=(0,m.Z)(s,2),u=c[0],l=c[1],d=(0,g.useState)(null),f=(0,m.Z)(d,2),p=f[0],h=f[1],b=o.get("query");(0,g.useEffect)((function(){var n=Number(o.get("page"));h(n)}),[o]),(0,g.useEffect)((function(){if(e>2){var n=p;1===p&&(n+=1),p===e&&(n-=1),l(n)}}),[p,e]);var v=function(n){var e=n.target.getAttribute("datatype");e!==p&&a({query:b,page:e})};return(0,L.jsxs)(y,{className:t,children:[e>2&&(0,L.jsx)(z,{disabled:1===p,datatype:1,onClick:v,children:(0,L.jsx)(M.n,{w:20,h:20,use:"".concat(T.Z,"#icon-double-arrow")})}),e>2&&(0,L.jsx)(_,{disabled:1===p,datatype:p-1,onClick:v,children:(0,L.jsx)(M.n,{w:20,h:20,use:"".concat(T.Z,"#icon-arrow")})}),e>1&&(0,L.jsx)(C,{"aria-current":2===e?p===Number(u):p===Number(u)-1,onClick:v,datatype:1===p?p:p-1,children:1===p?p:p-1}),e>1&&(0,L.jsx)(C,{"aria-current":2===e?p===Number(u)+1:p===Number(u),onClick:v,datatype:2===e?e:1===p?p+1:p===e?p-1:p,children:2===e?e:1===p?p+1:p===e?p-1:p}),e>2&&(0,L.jsx)(C,{"aria-current":p===Number(u)+1,onClick:v,datatype:p===e?p:1===p?p+2:p+1,children:p===e?p:1===p?p+2:p+1}),e>2&&(0,L.jsx)(N,{disabled:p===e,datatype:p+1,onClick:v,children:(0,L.jsx)(M.n,{w:20,h:20,use:"".concat(T.Z,"#icon-arrow")})}),e>2&&(0,L.jsx)(S,{disabled:p===e,onClick:v,datatype:e,children:(0,L.jsx)(M.n,{w:20,h:20,use:"".concat(T.Z,"#icon-double-arrow")})})]})},E=t(9041),I=t(3714),P=t(3733),q=t(9283),B=j.Z.ul(l||(l=(0,w.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n    grid-gap: ",";\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n    @media "," {\n        grid-gap: ",";\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),G=j.Z.li(d||(d=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ",";\n    border-radius: 20px;\n    background-color: ",";\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    overflow: hidden;\n    cursor: zoom-in;\n\n    &:hover,\n    &:focus {\n        box-shadow: 0px 2px 10px 2px ",";\n    }\n    &:hover img,\n    &:focus img {\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.shadow})),U=j.Z.div(f||(f=(0,w.Z)(["\n    width: 100%;\n    overflow: hidden;\n    aspect-ratio: 2/3;\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"]))),A=j.Z.div(p||(p=(0,w.Z)(["\n    position: relative;\n    flex-grow: 1;\n    width: 100%;\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),F=j.Z.h2(h||(h=(0,w.Z)(["\n    text-align: center;\n    line-height: 1.5;\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),R=t(6226),H=t(6700),O=function(n){var e=n.persons;return(0,L.jsx)(B,{children:e.map((function(n){var e=n.id,t=n.name,r=n.profile_path;return(0,L.jsx)(G,{children:(0,L.jsxs)(x.rU,{to:"/person/".concat(e),children:[(0,L.jsx)(U,{children:(0,L.jsx)("img",{src:r?H.wI+r:R,alt:t})}),(0,L.jsx)(A,{children:(0,L.jsx)(F,{children:t})})]})},e)}))})},W=function(){var n=(0,g.useState)(!1),e=(0,m.Z)(n,2),t=e[0],r=e[1],i=(0,x.lr)(),o=(0,m.Z)(i,1)[0],a=(0,g.useState)(!0),s=(0,m.Z)(a,2),c=s[0],u=s[1],l=(0,g.useState)(0),d=(0,m.Z)(l,2),f=d[0],p=d[1],h=(0,g.useState)([]),w=(0,m.Z)(h,2),j=w[0],y=w[1],k=(0,g.useState)(null),z=(0,m.Z)(k,2),S=z[0],_=z[1],N=(0,b.TH)().pathname,C=N.split("/")[1],T=N.split("/")[2];return(0,g.useEffect)((function(){var n=o.get("query"),e=o.get("page");n&&(r(!0),(0,Z.bG)("collections"===T?"collection":"movies"===C?"movie":"tv-shows"===C?"tv":"person",n,e).then((function(n){y(n.results),p(n.total_pages)})).catch((function(n){_(n.message),(0,v.Am)(n.message)})).finally((function(){r(!1),u(!1)})))}),[o,C,T]),(0,L.jsx)("section",{className:"padding-top",children:(0,L.jsxs)(E.W,{children:[t&&(0,L.jsx)(I.a,{}),f>0&&(0,L.jsx)(D,{totalPages:f,serviceClass:"top"}),j&&"persons"!==C&&(0,L.jsx)(P.L,{media:j,mediaTypes:"movies"===C?"movie":"tv"}),j&&"persons"===C&&(0,L.jsx)(O,{persons:j}),!c&&j.length<1&&(0,L.jsx)(q.l,{}),f>0&&(0,L.jsx)(D,{totalPages:f,serviceClass:"bottom"}),S&&(0,L.jsx)(v.Ix,{})]})})}},6226:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=695.dc0a2fc4.chunk.js.map