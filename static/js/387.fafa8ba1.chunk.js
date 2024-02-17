"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[387],{3387:function(n,e,t){t.r(e),t.d(e,{Cast:function(){return w}});var i,r,o,s,c=t(9439),l=t(7689),a=t(1087),d=t(168),u=t(6088),p=u.Z.h2(i||(i=(0,d.Z)(["\n    color: ",";\n    margin-bottom: 20px;\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),m=u.Z.ul(r||(r=(0,d.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    grid-gap: ","px;\n    @media (min-width: 533px) {\n        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    }\n"])),(function(n){return 5*n.theme.spacing.step})),h=u.Z.li(o||(o=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    color: ",";\n    background-color: ",";\n    & p {\n        padding: 0 5px;\n        line-height: 1.3;\n        text-align: center;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),x=u.Z.img(s||(s=(0,d.Z)(["\n    width: 100%;\n    object-fit: cover;\n    object-position: top;\n    aspect-ratio: 3 / 4;\n    margin-bottom: 10px;\n"]))),f=t(2791),g=t(4390),j=t(8924),v=t(9085),Z=t(7461),b=t(3329),w=function(){var n=(0,l.UO)().mediaId,e=(0,f.useState)(!1),t=(0,c.Z)(e,2),i=t[0],r=t[1],o=(0,f.useState)([]),s=(0,c.Z)(o,2),d=s[0],u=s[1],w=(0,f.useState)(null),y=(0,c.Z)(w,2),k=y[0],C=y[1];return(0,f.useEffect)((function(){if(n){var e=n.split("-")[0],t=n.split("-")[1];r(!0),(0,g.s_)(e,t,"movie"===e?"/credits":"/aggregate_credits").then((function(n){C((0,Z.in)(n.cast))})).catch((function(n){u(n.message),(0,v.Am)(n.message)})).finally((function(){r(!1)}))}}),[n]),(0,b.jsxs)(b.Fragment,{children:[i&&(0,b.jsx)(j.a,{}),(null===k||void 0===k?void 0:k.length)>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{children:"Cast"}),(0,b.jsx)(m,{children:null===k||void 0===k?void 0:k.map((function(n){var e=n.id,t=n.castId,i=n.poster,r=n.personName,o=n.role;return(0,b.jsx)(h,{children:(0,b.jsxs)(a.rU,{style:{width:"100%",display:"flex",flexDirection:"column",paddingBottom:"10px"},to:"/person/".concat(e),children:[(0,b.jsx)(x,{src:i,alt:r}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:(0,b.jsx)("b",{children:r})}),(0,b.jsx)("p",{children:o})]})]})},t)}))})]}),(null===k||void 0===k?void 0:k.length)<1&&(0,b.jsx)(p,{children:"Sorry, no cast information available."}),d&&(0,b.jsx)(v.Ix,{})]})}}}]);
//# sourceMappingURL=387.fafa8ba1.chunk.js.map