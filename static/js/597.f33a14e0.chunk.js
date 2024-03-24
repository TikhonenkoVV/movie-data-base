"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[597],{6700:function(n,e,t){t.d(e,{N3:function(){return o},Ts:function(){return s},kT:function(){return r},tG:function(){return a},wI:function(){return i}});var r="https://image.tmdb.org/t/p/w185",i="https://image.tmdb.org/t/p/h632",o="https://image.tmdb.org/t/p/w185",a="https://image.tmdb.org/t/p/w342",s="https://image.tmdb.org/t/p/w1280"},7663:function(n,e,t){t.d(e,{o:function(){return i},p:function(){return r}});var r=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},i=function(n,e){return Math.trunc(Math.abs(Date.parse(e)-Date.parse(n))/315576e5)}},3733:function(n,e,t){t.d(e,{L:function(){return j}});var r,i,o,a,s,c,u=t(168),f=t(6088),l=t(1087),d=f.Z.ul(r||(r=(0,u.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n    grid-gap: ",";\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n    @media "," {\n        grid-gap: ",";\n    }\n    @media "," {\n        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL}),(function(n){return n.theme.breakpoints.xxl})),p=f.Z.li(i||(i=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ",";\n    border-radius: 20px;\n    background-color: ",";\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    overflow: hidden;\n    cursor: zoom-in;\n\n    &:hover,\n    &:focus {\n        box-shadow: 0px 2px 10px 2px ",";\n    }\n    &:hover img,\n    &:focus img {\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.shadow})),m=(0,f.Z)(l.rU)(o||(o=(0,u.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),h=f.Z.div(a||(a=(0,u.Z)(["\n    width: 100%;\n    overflow: hidden;\n    aspect-ratio: 2/3;\n    color: ",";\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"])),(function(n){return n.theme.colors.white})),g=f.Z.div(s||(s=(0,u.Z)(["\n    flex-grow: 1;\n    width: 100%;\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    text-align: center;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),x=f.Z.h2(c||(c=(0,u.Z)(["\n    margin-bottom: 6px;\n    font-size: ",";\n    line-height: 1.5;\n"])),(function(n){return n.theme.fontSizes.small})),v=t(6226),b=t(6700),w=t(939),Z=t(7663),y=t(184),j=function(n){var e=function(n,e){return n.map((function(n){var t,r=n.id,i=n.vote_average,o=n.name,a=n.title,s=n.media_type,c=n.original_title,u=n.original_name,f=n.poster_path,l=n.release_date,d=n.first_air_date;return t=l?(0,Z.p)(l):d?(0,Z.p)(d):"N/a",{id:r,movie_title:o||a||u||c,media_type:s||e,release:t,vote_average:i>0?Math.round(10*i):"NR",poster_path:f}}))}(n.media,n.mediaTypes);return(0,y.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.vote_average,r=n.movie_title,i=n.media_type,o=n.poster_path,a=n.release;return(0,y.jsx)(p,{children:(0,y.jsxs)(m,{to:"movie"===i?"/movies/movie-".concat(e):"/tv-shows/tv-".concat(e),children:[(0,y.jsxs)(h,{children:[(0,y.jsx)(w.F,{size:.7,rating:t,style:{position:"absolute",top:10,right:10,zIndex:1}}),(0,y.jsx)("img",{src:o?"".concat(b.tG+o):v,alt:r})]}),(0,y.jsxs)(g,{children:[(0,y.jsx)(x,{children:r}),(0,y.jsx)("p",{children:a})]})]})},e)}))})}},939:function(n,e,t){t.d(e,{F:function(){return b}});var r,i,o,a,s,c=t(1413),u=t(9439),f=t(2791),l=t(168),d=t(6088),p=d.Z.span(r||(r=(0,l.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ","px;\n    height: ","px;\n    color: #fff;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        background-color: #19171d;\n    }\n    pointer-events: none;\n"])),(function(n){return 60*n.size}),(function(n){return 60*n.size})),m=d.Z.svg(i||(i=(0,l.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n    z-index: 1;\n"]))),h=d.Z.circle(o||(o=(0,l.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return 4*n.size}),(function(n){return 144.44*n.size}),(function(n){return n.length})),g=d.Z.circle(a||(a=(0,l.Z)(["\n    fill: none;\n    stroke: #ffffff20;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n"])),(function(n){return 4*n.size}),(function(n){return 144.44*n.size})),x=d.Z.span(s||(s=(0,l.Z)(["\n    font-size: ","em;\n"])),(function(n){return n.size})),v=t(184),b=function(n){var e=n.rating,t=n.style,r=n.size,i=(0,f.useRef)(),o=(0,f.useState)(0),a=(0,u.Z)(o,2),s=a[0],l=a[1],d=(0,f.useState)(0),b=(0,u.Z)(d,2),w=b[0],Z=b[1];return(0,f.useEffect)((function(){var n,t=i.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;l(r),Z(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,s]),(0,v.jsxs)(p,{size:r,style:(0,c.Z)({},t),children:[(0,v.jsxs)(m,{width:50*r,height:50*r,viewBox:"0 0 ".concat(50*r," ").concat(50*r),children:[(0,v.jsx)(g,{size:r,cx:25*r,cy:25*r,r:23*r}),(0,v.jsx)(h,{size:r,color:w,length:s,ref:i,cx:25*r,cy:25*r,r:23*r})]}),(0,v.jsx)(x,{size:r,children:isNaN(e)?e:e+"%"})]})}},5597:function(n,e,t){t.r(e),t.d(e,{PopularMedia:function(){return m}});var r,i=t(9439),o=t(7689),a=t(9041),s=t(168),c=t(6088).Z.h1(r||(r=(0,s.Z)(["\n    margin-bottom: ",";\n    color: ",";\n    @media "," {\n        margin-bottom: ",";\n    }\n    @media "," {\n        margin-bottom: ",";\n    }\n"])),(function(n){return n.theme.spacing.retreatS}),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),u=t(2791),f=t(5749),l=t(3714),d=t(3733),p=t(184),m=function(){var n=(0,u.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1],s=(0,u.useState)([]),m=(0,i.Z)(s,2),h=m[0],g=m[1],x=(0,u.useState)([]),v=(0,i.Z)(x,2),b=v[0],w=v[1],Z=(0,u.useState)(null),y=(0,i.Z)(Z,2),j=y[0],z=y[1],k=(0,o.TH)().pathname.split("/")[1],_="movies"===k,S="tv-shows"===k;return(0,u.useEffect)((function(){console.log(_),console.log(S),_&&(r(!0),(0,f.s2)("movie",1).then((function(n){return g(n.results)})).catch((function(n){return z(n.message)})).finally((function(){return r(!1)}))),S&&(r(!0),(0,f.s2)("tv",1).then((function(n){return w(n.results)})).catch((function(n){return z(n.message)})).finally((function(){return r(!1)})))}),[_,S]),(0,p.jsxs)("section",{className:"padding-top",children:[t&&(0,p.jsx)(l.a,{}),(0,p.jsxs)(a.W,{children:[(0,p.jsxs)(c,{children:["Top 20 Popular ",_?"Movies":"TV Shows"]}),(0,p.jsx)(d.L,{media:_?h:b,mediaTypes:_?"movie":"tv"})]}),j&&(0,p.jsx)("p",{children:j})]})}},6226:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=597.f33a14e0.chunk.js.map