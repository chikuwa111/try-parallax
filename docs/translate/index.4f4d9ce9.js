var e;e={"#translate-text":{transform:e=>`translate(0, ${Math.abs(e/5%800-400)-200}px)`}},function(e){window.addEventListener("DOMContentLoaded",(()=>{e(window.scrollY)}));let t=0,n=!1;window.addEventListener("scroll",(()=>{t=window.scrollY,n||(window.requestAnimationFrame((()=>{e(t),n=!1})),n=!0)}))}((t=>{Object.entries(e).forEach((([e,n])=>{document.querySelectorAll(e).forEach((e=>{Object.entries(n).forEach((([n,r])=>{e.style[n]=r(t)}))}))}))}));
//# sourceMappingURL=index.4f4d9ce9.js.map
