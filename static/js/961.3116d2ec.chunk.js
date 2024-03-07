"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[961],{9245:function(e,n,t){t.d(n,{a:function(){return s}});var r,a=t(8966),i=t(168),o=t(6088).Z.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: #00000080;\n    transition: opacity 250ms, visibility 250ms;\n    z-index: 100;\n"]))),c=t(3329),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},2961:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,a,i,o,c,s,d,l,u,p,h,x,f,m,g,v=t(9439),j=t(2791),_=t(7689),b=t(4390),Z=t(9085),w=t(9245),y=t(168),D=t(6088),k=t(1087),T=D.Z.li(r||(r=(0,y.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),C=(0,D.Z)(k.rU)(a||(a=(0,y.Z)(["\n    display: flex;\n    gap: 16px;\n"]))),S=D.Z.div(i||(i=(0,y.Z)(["\n    flex-shrink: 0;\n    width: 70px;\n    height: 105px;\n    overflow: hidden;\n"]))),B=D.Z.h3(o||(o=(0,y.Z)(["\n    margin-bottom: 12px;\n"]))),F=t(4757),M=t(3329),U=function(e){var n=e.credits,t="https://image.tmdb.org/t/p/w200";return null===n||void 0===n?void 0:n.map((function(e){var n=e.id,r=e.credit_id,a=e.poster_path,i=e.movieTitle,o=e.personCharacter,c=e.releaseDate,s=e.media_type,d=e.vote_average;return(0,M.jsx)(T,{children:(0,M.jsxs)(C,{to:"movie"===s?"/movies/movie-".concat(n):"/tv-shows/tv-".concat(n),state:{mediaTypes:s},children:[(0,M.jsx)(S,{children:(0,M.jsxs)("picture",{children:[(0,M.jsx)("source",{srcSet:a?"".concat(t+a," 1x, ").concat("https://image.tmdb.org/t/p/w400"+a," 2x"):F}),(0,M.jsx)("img",{style:{width:"100%",height:"100%",objectFit:"cover"},width:50,height:75,src:a?t+a:F,alt:i})]})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(B,{children:i}),o&&(0,M.jsxs)("p",{children:["Character: ",o]}),(0,M.jsxs)("p",{children:["Year: ",c]}),(0,M.jsxs)("p",{children:["User score: ",d]})]})]})},r)}))},N=D.Z.h2(c||(c=(0,y.Z)(["\n    margin-bottom: 24px;\n"]))),A=D.Z.ul(s||(s=(0,y.Z)(["\n    padding: 24px;\n    margin-bottom: 24px;\n    border: 1px solid gray;\n"]))),O=t(4942),I=function(e){var n=e.acting,t=e.crew,r=function(e){var n="N/a",t=new Date;return t=new Date(t.getTime()+63072e6),e.map((function(e){var r=e.id,a=e.credit_id,i=e.poster_path,o=e.title,c=e.original_title,s=e.name,d=e.original_name,l=e.character,u=e.release_date,p=e.vote_average,h=e.first_air_date,x=e.media_type,f=u||h||n;return{id:r,credit_id:a,poster_path:i,movieTitle:o||s||c||d,personCharacter:l||n,releaseDate:f=f!==n?new Date(f).getFullYear():n,sortDate:f!==n?new Date(f).getTime():new Date(t).getTime(),media_type:x,vote_average:p>0?"".concat(Math.round(10*p),"%"):"NR"}})).sort((function(e,n){return n.sortDate-e.sortDate}))}(n),a=function(e){var n="N/a",t=null===e||void 0===e?void 0:e.map((function(e){var t=e.id,r=e.credit_id,a=e.title,i=e.original_title,o=e.name,c=e.original_name,s=e.poster_path,d=e.job,l=e.release_date,u=e.first_air_date,p=e.vote_average,h=e.media_type,x=new Date;x=new Date(x.getTime()+63072e6);var f=l||u||n;return{id:t,credit_id:r,poster_path:s,movieTitle:a||o||i||c,job:d,releaseDate:f=f!==n?new Date(f).getFullYear():n,sortDate:f!==n?new Date(f).getTime():new Date(x).getTime(),media_type:h,vote_average:p>0?"".concat(Math.round(10*p),"%"):"NR"}})),r=null===t||void 0===t?void 0:t.sort((function(e,n){return n.sortDate-e.sortDate})),a=[];null===r||void 0===r||r.map((function(e){return a.includes(e.job)?null:a.push(e.job)}));var i=a.map((function(e){var n=[];return r.map((function(t){return t.job===e?n.push(t):null})),(0,O.Z)({},e,n)}));return i}(t);return(0,M.jsxs)(M.Fragment,{children:[(null===r||void 0===r?void 0:r.length)>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(N,{children:"Acting"}),(0,M.jsx)(A,{children:(0,M.jsx)(U,{credits:r})})]}),(null===a||void 0===a?void 0:a.length)>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(N,{children:"Crew"}),null===a||void 0===a?void 0:a.map((function(e,n){return(0,M.jsx)(A,{children:(0,M.jsxs)("li",{children:[(0,M.jsx)(N,{children:Object.keys(e)[0]}),(0,M.jsx)("ul",{children:(0,M.jsx)(U,{credits:e[Object.keys(e)]})})]})},n)}))]})]})},L=D.Z.div(d||(d=(0,y.Z)(["\n    display: flex;\n    align-items: flex-start;\n    gap: 24px;\n    color: ",";\n"])),(function(e){return e.theme.colors.themeText})),R=D.Z.aside(l||(l=(0,y.Z)(["\n    flex-shrink: 0;\n    width: 348px;\n    padding: 24px;\n    background-color: ",";\n"])),(function(e){return e.theme.colors.personBackground})),Y=D.Z.h2(u||(u=(0,y.Z)(["\n    margin-bottom: 24px;\n"]))),z=D.Z.ul(p||(p=(0,y.Z)([""]))),E=D.Z.li(h||(h=(0,y.Z)(["\n    margin-bottom: 12px;\n"]))),K=D.Z.h3(x||(x=(0,y.Z)(["\n    margin-bottom: 12px;\n"]))),P=D.Z.div(f||(f=(0,y.Z)(["\n    flex-grow: 1;\n"]))),W=D.Z.div(m||(m=(0,y.Z)(["\n    margin-bottom: 40px;\n"]))),q=D.Z.h1(g||(g=(0,y.Z)(["\n    font-size: 36px;\n    margin-bottom: 40px;\n"]))),G=function(e){var n=e.person,t=e.acting,r=e.crew,a=e.total,i="https://image.tmdb.org/t/p/w300_and_h450_bestv2",o=n.biography,c=n.known_for_department,s=n.name,d=n.gender,l=n.birthday,u=n.deathday,p=n.age,h=n.place_of_birth,x=n.profile_path;return(0,M.jsxs)(L,{children:[(0,M.jsxs)(R,{children:[(0,M.jsxs)("picture",{children:[(0,M.jsx)("source",{srcSet:x?"".concat(i+x," 1x, \n                                   ").concat("https://image.tmdb.org/t/p/w600_and_h900_bestv2"+x," 2x"):F}),(0,M.jsx)("img",{src:x?i+x:F,alt:s,width:300,height:450,style:{marginBottom:"24px"}})]}),(0,M.jsx)(Y,{children:"Personal Info"}),(0,M.jsxs)(z,{children:[(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Known for"}),(0,M.jsx)("p",{children:c})]}),(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Known credits"}),(0,M.jsx)("p",{children:null!==a&&void 0!==a?a:"N/a"})]}),0!==d&&(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Gender"}),(0,M.jsx)("p",{children:2===d?"Male":"Female"})]}),l&&(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Birthday"}),(0,M.jsxs)("p",{children:[l," ",!u&&"(".concat(p," years old)")]})]}),u&&(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Deahday"}),(0,M.jsxs)("p",{children:[u," (",p," years old)"]})]}),h&&(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:"Place of birth"}),(0,M.jsx)("p",{children:h})]})]})]}),(0,M.jsxs)(P,{children:[(0,M.jsxs)(W,{children:[(0,M.jsx)(q,{children:s}),(0,M.jsx)(K,{children:"Biography"}),null===o||void 0===o?void 0:o.map((function(e,n){return(0,M.jsx)("p",{style:{marginBottom:"12px"},children:e},n)})),0===(null===o||void 0===o?void 0:o.length)&&(0,M.jsxs)("p",{children:["We don't have a biography for ",s,"."]})]}),(0,M.jsx)(I,{acting:t,crew:r})]})]})},H=t(3623),X=t(1305),J=function(){var e=(0,_.UO)().personId,n=(0,j.useState)(!1),t=(0,v.Z)(n,2),r=t[0],a=t[1],i=(0,j.useState)(null),o=(0,v.Z)(i,2),c=o[0],s=o[1],d=(0,j.useState)({}),l=(0,v.Z)(d,2),u=l[0],p=l[1],h=(0,j.useState)([]),x=(0,v.Z)(h,2),f=x[0],m=x[1],g=(0,j.useState)([]),y=(0,v.Z)(g,2),D=y[0],k=y[1],T=(0,j.useState)(0),C=(0,v.Z)(T,2),S=C[0],B=C[1];return(0,j.useEffect)((function(){a(!0),(0,b.TZ)(e).then((function(e){p(function(e){var n=e.id,t=e.biography,r=e.known_for_department,a=e.name,i=e.gender,o=e.birthday,c=e.deathday,s=e.place_of_birth,d=e.profile_path,l=[];t&&""!==t&&(l=t.split("\n\n"));var u=(0,X.o)(o,new Date);return c&&(u=(0,X.o)(o,c)),{id:n,biography:l,known_for_department:r,name:a,gender:i,birthday:o,deathday:c,age:u,place_of_birth:s,profile_path:d}}(e))})).catch((function(e){s(e.message),(0,Z.Am)(e.message)})).finally((function(){(0,b.s_)("person",e,"/combined_credits").then((function(e){var n,t;m(e.cast),k(e.crew);var r=(null===e||void 0===e||null===(n=e.cast)||void 0===n?void 0:n.length)+(null===e||void 0===e||null===(t=e.crew)||void 0===t?void 0:t.length);B(r)})).catch((function(e){s(e.message),(0,Z.Am)(e.message)})),a(!1)}))}),[e]),(0,M.jsxs)("section",{children:[r&&(0,M.jsx)(w.a,{}),(0,M.jsxs)(H.W,{children:[c&&(0,M.jsx)(Z.Ix,{}),!r&&(0,M.jsx)(G,{person:u,acting:f,crew:D,total:S})]})]})}},4390:function(e,n,t){t.d(n,{AE:function(){return p},OH:function(){return l},TZ:function(){return h},XT:function(){return d},s_:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",d=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/".concat(n,"/").concat(t,"?api_key=").concat(c+s));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n,t,r){var a,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/".concat(n,"?api_key=").concat(c+s,"&page=").concat(r,"&query=").concat(t));case 2:return a=e.sent,d=a.data,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t,r){var a,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(n,"/").concat(t).concat(r,"?api_key=").concat(c+s));case 2:return a=e.sent,d=a.data,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(n,"/").concat(t,"/videos?api_key=").concat(c+s));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("person/".concat(n,"?api_key=").concat(c+s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1305:function(e,n,t){t.d(n,{o:function(){return a},p:function(){return r}});var r=function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"})},a=function(e,n){return Math.trunc(Math.abs(Date.parse(n)-Date.parse(e))/315576e5)}},4757:function(e,n,t){e.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=961.3116d2ec.chunk.js.map