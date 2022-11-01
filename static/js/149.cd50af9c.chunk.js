"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{149:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,i,a,s,d,p,c=t(861),u=t(885),x=t(757),l=t.n(x),h=t(791),m=t(739),f=t(731),g=t(884),b=t(168),v=t(444),w=(0,v.ZP)("form")(r||(r=(0,b.Z)(["\n  width: 290px;\n  margin: 15px auto;\n  padding: 4px;\n  display: flex;\n"]))),Z=(0,v.ZP)("input")(o||(o=(0,b.Z)(["\n  padding: 6px;\n  width: 100%;\n  border: none;\n  outline: none;\n  box-shadow: inset 0px 0px 2px;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n    &:hover,\n  &:focus {\n      box-shadow: inset 0px 0px 4px;\n"]))),j=(0,v.ZP)("button")(i||(i=(0,b.Z)(["\n  border: none;\n  box-shadow: inset 0px 0px 2px;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  cursor: pointer;\n  background-color: transparent;\n  \n  &:hover,\n  &:focus {\n      box-shadow: inset 0px 0px 4px;\n"]))),_=(0,v.ZP)("ul")(a||(a=(0,b.Z)(["\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  @media screen and (max-width: 2000px) {\n    grid-template-columns: repeat(8, 1fr);\n  }\n  @media screen and (max-width: 1200px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  @media screen and (max-width: 870px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  @media screen and (max-width: 700px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (max-width: 527px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  padding: 0;\n  margin: 15px;\n  gap: 15px;\n  list-style: none;\n"]))),y=(0,v.ZP)("img")(s||(s=(0,b.Z)(["\n  width: 100%;\n  object-fit: cover;\n  margin-bottom: 10px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]))),k=(0,v.ZP)("li")(d||(d=(0,b.Z)(["\n  box-shadow: 0px 0px 4px;\n  border-radius: 4px;\n  transition: 250ms;\n  &:hover,\n  &:focus {\n    scale: 1.02;\n  }\n"]))),P=(0,v.ZP)(f.rU)(p||(p=(0,b.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  text-align: center;\n  height: 100%;\n  justify-content: flex-end;\n  text-decoration: none;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 10px;\n"]))),S=t(184),C=function(n){var e=n.onHeandleSearch,t=n.onValue,r=n.onOnChange;return(0,S.jsxs)(w,{onSubmit:e,children:[(0,S.jsx)(Z,{value:t,onChange:r}),(0,S.jsx)(j,{type:"submit",children:"Search"})]})},H=function(n){var e=n.onMoviesArr,t=n.onLocation;return(0,S.jsx)("section",{children:(0,S.jsx)(_,{children:e.map((function(n){return(0,S.jsx)(k,{children:(0,S.jsxs)(P,{to:"".concat(n.id),state:{from:t},children:[n.original_title," ",(0,S.jsx)(y,{alt:n.title,src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path)})]})},n.id)}))})})},q=function(){var n=(0,m.TH)(),e=(0,f.lr)(),t=(0,u.Z)(e,2),r=t[0],o=t[1],i=r.get("query"),a=(0,h.useState)(null!==i&&void 0!==i?i:""),s=(0,u.Z)(a,2),d=s[0],p=s[1],x=(0,h.useState)([]),b=(0,u.Z)(x,2),v=b[0],w=b[1];(0,h.useEffect)((function(){""!==d&&Z()}),[]);var Z=function(){var n=(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,g.Nz)(d);case 2:e=n.sent,w(e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,S.jsxs)("div",{children:[(0,S.jsx)(C,{onHeandleSearch:function(n){n.preventDefault(),""!==d&&(Z(),o({query:d})),p("")},onValue:d,onOnChange:function(n){p(n.currentTarget.value)}}),(0,S.jsx)(H,{onMoviesArr:v,onLocation:n}),(0,S.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=149.cd50af9c.chunk.js.map