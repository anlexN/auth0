import{c as t}from"./p-972edcb2.js";import{createGesture as o}from"./p-101feae9.js";import"./p-8fc9298a.js";const e=(e,r,s,a,n)=>{const c=e.ownerDocument.defaultView;return o({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&r(),onStart:s,onMove:t=>{a(t.deltaX/c.innerWidth)},onEnd:o=>{const e=c.innerWidth,r=o.deltaX/e,s=o.velocityX,a=s>=0&&(s>.2||o.deltaX>e/2),p=(a?1-r:r)*e;let i=0;if(p>5){const t=p/Math.abs(s);i=Math.min(t,540)}n(a,r<=0?.01:t(0,r,.9999),i)}})};export{e as createSwipeBackGesture}