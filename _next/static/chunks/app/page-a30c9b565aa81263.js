(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5308:function(e,t,n){Promise.resolve().then(n.bind(n,9740)),Promise.resolve().then(n.bind(n,8608))},8608:function(e,t,n){"use strict";n.r(t),n.d(t,{HaikuTracker:function(){return j}});var i=n(7437),r=n(3857),a=n(8874),s=n(5927),l=n(2055),o=n(1506),c=n(471),u=n(2265);let d=e=>{let{limit:t,lineText:n,label:r}=e,[a,s]=n||(0,u.useState)(""),d=a.toLowerCase().split(" ").map(e=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e.length)return 0;if(e.length<=t)return 1;{let t=e.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,""),n=(t=t.replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return n?n.length:1}})(e)).reduce((e,t)=>e+t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{inputProps:{"data-testid":"syllableTextInput"},value:a,onChange:e=>{s(e.target.value)},label:r,InputProps:{endAdornment:(0,i.jsxs)(o.Z,{position:"end",children:[(0,i.jsx)("span",{"data-testid":"syllableCount",children:d}),"/",(0,i.jsx)("span",{"data-testid":"syllableLimit",children:t})]})},fullWidth:!0}),(0,i.jsx)(c.Z,{variant:"determinate","data-testid":"progressMeter",value:d/t*100}),(0,i.jsx)("br",{})]})};var h=n(8595),p=n(3948);let x=(0,h.Z)({palette:{mode:"dark"}}),j=()=>{let e=[(0,u.useState)(""),(0,u.useState)(""),(0,u.useState)("")];return(0,i.jsxs)(p.Z,{theme:x,children:[(0,i.jsx)(r.ZP,{}),(0,i.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,i.jsx)(a.ZP,{item:!0,children:[5,7,5].map((t,n)=>(0,i.jsx)(d,{limit:t,lineText:e[n],label:"Line "+(n+1)},n))}),(0,i.jsxs)(a.ZP,{item:!0,children:[(0,i.jsx)(s.Z,{"data-testid":"copyButton",onClick:()=>void navigator.clipboard.writeText("".concat(e[0][0],"\n").concat(e[1][0],"\n").concat(e[2][0])),children:"Copy"}),(0,i.jsx)(s.Z,{"data-testid":"resetButton",onClick:()=>void e.forEach(e=>{e[1]("")}),children:"Reset"})]})]})]})}},9740:function(e,t,n){"use strict";n.r(t),n.d(t,{Container:function(){return i.Z}});var i=n(2179)}},function(e){e.O(0,[239,971,938,744],function(){return e(e.s=5308)}),_N_E=e.O()}]);