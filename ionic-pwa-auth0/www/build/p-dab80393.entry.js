import{r,h as s,H as e}from"./p-f4d894c7.js";import{c as n,g as t}from"./p-60e5b1e5.js";import{c as i}from"./p-7840618d.js";import{S as o}from"./p-417a8dd6.js";const a=class{constructor(s){r(this,s),this.paused=!1}getName(){const r=this.name||n.get("spinner"),s=t(this);return r||("ios"===s?"lines":"circular")}render(){const r=this,a=t(r),c=r.getName(),f=o[c]||o.lines,h="number"==typeof r.duration&&r.duration>10?r.duration:f.dur,m=[];if(void 0!==f.circles)for(let r=0;r<f.circles;r++)m.push(l(f,h,r,f.circles));else if(void 0!==f.lines)for(let r=0;r<f.lines;r++)m.push(p(f,h,r,f.lines));return s(e,{class:i(r.color,{[a]:!0,[`spinner-${c}`]:!0,"spinner-paused":!!r.paused||n.getBoolean("_testing")}),role:"progressbar",style:f.elmDuration?{animationDuration:h+"ms"}:{}},m)}},l=(r,e,n,t)=>{const i=r.fn(e,n,t);return i.style["animation-duration"]=e+"ms",s("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},s("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:r.elmDuration?{animationDuration:e+"ms"}:{}}))},p=(r,e,n,t)=>{const i=r.fn(e,n,t);return i.style["animation-duration"]=e+"ms",s("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},s("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};a.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;transform-origin:center;position:absolute;width:100%;height:100%;transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular){animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";export{a as ion_spinner}