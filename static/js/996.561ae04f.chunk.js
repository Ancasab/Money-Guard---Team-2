"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[996],{2996:(t,n,s)=>{s.r(n),s.d(n,{default:()=>G});var e=s(5043),a=s(3003),c=s(2445),o=s(9947),i=s(3986),r=s(7465),l=s(1699);function d(t,n){return t.map((t=>function(t,n){const{transactionDate:s,amount:e,categoryId:a,type:c,comment:o,id:i}=t,r={id:i,date:s,type:"EXPENSE"===c?"-":"+",category:m(a,n),comment:o,sum:Math.abs(e)};return r}(t,n))).toSorted(((t,n)=>n.date.localeCompare(t.date)))}function m(t,n){const s=[...n].find((n=>n.id===t));return(null===s||void 0===s?void 0:s.name)||"Invalid"}const _="TransactionList_list__VBbwk",u="TransactionList_head_row__5O9jX",j="TransactionList_container__+v9ep",h="TransactionList_text__nLKXZ",x="TransactionList_row_item__OXdq9";var p=s(3105),N=s(8387),b=s(5666),w=s(2726);const y="TransactionItem_controls__XyzX1",A="TransactionItem_row__JG4JI",v="TransactionItem_btn_edit__v7Gk7",f="TransactionItem_edit__XAGhr",k="TransactionItem_colored__7Wc8-",I="TransactionItem_card__oNvEs",T="TransactionItem_row_item__iV78Q";var g=s(8898),C=s(1960),L=s(579);const O=function(t){let{transaction:n,id:s}=t;const e=(0,a.wA)(),{isMobile:o}=(0,b.A)(),i=s,r={color:"-"===n.type?"var(--red-color)":"var(--yellow-color)"};function l(){const t=i;e((0,w.Jg)(t)),e((0,w.ws)())}async function d(){await e((0,c.rs)(s)),e((0,C.Ho)())}return o?(0,L.jsxs)("ul",{className:I,style:r,children:[[...Object.keys(n)].map(((t,s)=>(0,L.jsxs)("li",{className:A,children:[(0,L.jsx)("span",{className:T,children:t}),(0,L.jsx)("span",{className:T,children:n[t]})]},s))),(0,L.jsxs)("li",{className:A,children:[(0,L.jsx)("button",{type:"button",className:(0,N.A)(v,T),onClick:l,children:(0,L.jsx)(g.I,{id:"#icon-pen",className:f})}),(0,L.jsx)("button",{type:"button",className:(0,N.A)(k,"btn_delete"),onClick:d,children:"Delete"})]})]}):(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("ul",{className:A,style:r,children:[[...Object.values(n)].map(((t,n)=>(0,L.jsx)("li",{className:T,children:t},n))),(0,L.jsxs)("li",{className:(0,N.A)(T,y),children:[(0,L.jsx)("button",{type:"button",className:v,onClick:l,children:(0,L.jsx)(g.I,{id:"#icon-pen",className:f})}),(0,L.jsx)("button",{type:"button",className:(0,N.A)(k,"btn_delete"),onClick:d,children:"Delete"})]})]})})};var X=s(7657);const z=["id"];const B=function(){const t=(0,a.d4)(r.uw),n=(0,a.d4)(r.$c),s=(0,a.d4)(r.zT),e=(0,a.d4)(l.Jk),{isMobile:c}=(0,b.A)(),o=(0,a.wA)();return(0,L.jsxs)(L.Fragment,{children:[n&&(0,L.jsx)(p.A,{}),s&&(0,L.jsx)("p",{className:h,children:"Oops, something went wrong..."}),n||0!==t.length?(0,L.jsxs)(L.Fragment,{children:[!c&&(0,L.jsxs)("ul",{className:u,children:[["date","type","category","comment","sum"].map(((t,n)=>(0,L.jsx)("li",{className:x,children:t},n))),(0,L.jsx)("li",{className:x})]}),(0,L.jsx)("ul",{className:_,children:d(t,e).map((t=>{let{id:n}=t,s=(0,i.A)(t,z);return(0,L.jsx)(O,{id:n,transaction:s},n)}))})]}):(0,L.jsxs)("div",{className:j,children:[(0,L.jsx)("p",{children:"No transactions available yet."})," ",(0,L.jsx)("p",{children:" Let's add your first transaction:"}),(0,L.jsx)(X.A,{type:"button",text:"Add transaction",variant:"multiColorButton",handlerFunction:()=>o((0,w.zR)())})]})]})},E="AddButton_btn__KYUYO",F="AddButton_icon__8z04C",D="AddButton_wrap__UwDI4",J=()=>{const t=(0,a.wA)();return(0,L.jsx)("div",{className:D,children:(0,L.jsx)("button",{className:E,type:"button",onClick:()=>{t((0,w.zR)())},children:(0,L.jsx)(g.I,{id:"#icon-plus",className:F})})})};const G=function(){const t=(0,a.wA)();return(0,e.useEffect)((()=>{t((0,c.I0)()),t((0,o.O)())}),[t]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(B,{}),(0,L.jsx)(J,{})]})}}}]);
//# sourceMappingURL=996.561ae04f.chunk.js.map