var e;e={"#scale-text":{transform:e=>`scale(${Math.abs(e-2500)/2500})`}},function(e){window.addEventListener("DOMContentLoaded",(()=>{e(window.scrollY)}));let t=0,n=!1;window.addEventListener("scroll",(()=>{t=window.scrollY,n||(window.requestAnimationFrame((()=>{e(t),n=!1})),n=!0)}))}((t=>{Object.entries(e).forEach((([e,n])=>{document.querySelectorAll(e).forEach((e=>{Object.entries(n).forEach((([n,o])=>{e.style[n]=o(t)}))}))}))}));
//# sourceMappingURL=index.c8b054e8.js.map
