const e=document.querySelectorAll("button")[0],t=document.querySelectorAll("button")[1];let o=null;getRandomHexColor=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,e.addEventListener("click",(()=>{e.disabled=!0,o=setInterval((()=>{document.body.style.backgroundColor=getRandomHexColor()}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.9ebd44be.js.map
