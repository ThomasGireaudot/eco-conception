import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as n}from"./index.Dy6lLLXr.js";/* empty css                       */const l={src:"/eco-conception/_astro/slide-1.DKbeo6GD.webp",width:1440,height:750,format:"webp"},a={src:"/eco-conception/_astro/slide-2.DveLq5Nr.webp",width:1440,height:750,format:"webp"},d={src:"/eco-conception/_astro/slide-3.aRuSYeJO.webp",width:1440,height:750,format:"webp"},h={src:"/eco-conception/_astro/slide-4.bnrAi72O.webp",width:1440,height:750,format:"webp"},p={src:"/eco-conception/_astro/chevron-right.DQtSXeKX.svg"},m={src:"/eco-conception/_astro/chevron-left.nV6yMAIJ.svg"},w=()=>{const s=[l,a,d,h],[o,i]=n.useState(0),c=()=>{i(t=>(t+1)%s.length)},r=()=>{i(t=>(t-1+s.length)%s.length)};return e.jsxs("div",{className:"slideshow-container",children:[e.jsx("div",{className:"slide",children:e.jsx("img",{src:s[o].src,alt:s[o].alt,loading:"lazy",width:"100%",height:"auto"})}),e.jsxs("div",{className:"slide-btns",children:[e.jsx("img",{onClick:r,src:m.src,alt:"chevron left",loading:"lazy",className:"prev-btn"}),e.jsx("img",{onClick:c,src:p.src,alt:"chevron left",loading:"lazy",className:"next-btn"})]}),e.jsxs("div",{className:"slide-texts",children:[e.jsx("p",{className:"slide-text",children:" “Nous travaillons à l’émotion"}),e.jsx("p",{className:"slide-text",children:"pour proposer des pâtisseries inscrites"}),e.jsx("p",{className:"slide-text",children:"dans la gourmandise et la modernité.“ "})]})]})};export{w as default};
