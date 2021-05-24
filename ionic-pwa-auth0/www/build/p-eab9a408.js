import{c as t}from"./p-82aa3233.js";import{g as n}from"./p-44d33d9b.js";import"./p-972edcb2.js";import"./p-f4d894c7.js";const o=t=>document.querySelector(`${t}.ion-cloned-element`),a=t=>t.shadowRoot||t,e=t=>{const n="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=n){const t=n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,n)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let a=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(a=t.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");for(const t of a){const o=t.closest("ion-header"),a=o&&!o.classList.contains("header-collapse-condense-inactive"),e=t.querySelector("ion-back-button"),s=t.classList.contains("buttons-collapse"),r="start"===t.slot||""===t.slot;if(null!==e&&r&&(s&&a&&n||!s))return e}return null},r=(n,e,s,r,i,l)=>{const c=e?`calc(100% - ${l.right+4}px)`:l.left-4+"px",p=e?"7px":"-7px",f=e?"-4px":"4px",d=e?"-4px":"4px",$=e?"right":"left",b=e?"left":"right",m=s?[{offset:0,opacity:1,transform:`translate3d(${f}, ${l.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${p}, ${i.top-40}px, 0) scale(2.1)`}]:[{offset:0,opacity:0,transform:`translate3d(${p}, ${i.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${l.top-46}px, 0) scale(1)`}],u=s?[{offset:0,opacity:1,transform:`translate3d(${d}, ${l.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${d}, ${l.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${d}, ${l.top-41}px, 0) scale(0.6)`}]:[{offset:0,opacity:0,transform:`translate3d(${d}, ${l.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${d}, ${l.top-46}px, 0) scale(1)`}],y=t(),X=t(),x=o("ion-back-button"),h=a(x).querySelector(".button-text"),g=a(x).querySelector("ion-icon");x.text=r.text,x.mode=r.mode,x.icon=r.icon,x.color=r.color,x.disabled=r.disabled,x.style.setProperty("display","block"),x.style.setProperty("position","fixed"),X.addElement(g),y.addElement(h),y.beforeStyles({"transform-origin":`${$} center`}).beforeAddWrite((()=>{r.style.setProperty("display","none"),x.style.setProperty($,c)})).afterAddWrite((()=>{r.style.setProperty("display",""),x.style.setProperty("display","none"),x.style.removeProperty($)})).keyframes(m),X.beforeStyles({"transform-origin":`${b} center`}).keyframes(u),n.addAnimation([y,X])},i=(n,a,e,s,r,i)=>{const l=a?`calc(100% - ${r.right}px)`:`${r.left}px`,c=a?"-18px":"18px",p=a?"right":"left",f=e?[{offset:0,opacity:0,transform:`translate3d(${c}, ${i.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${r.top-2}px, 0) scale(1)`}]:[{offset:0,opacity:.99,transform:`translate3d(0, ${r.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${i.top-4}px, 0) scale(0.5)`}],d=o("ion-title"),$=t();d.innerText=s.innerText,d.size=s.size,d.color=s.color,$.addElement(d),$.beforeStyles({"transform-origin":`${p} center`,height:"46px",display:"",position:"relative",[p]:l}).beforeAddWrite((()=>{s.style.setProperty("display","none")})).afterAddWrite((()=>{s.style.setProperty("display",""),d.style.setProperty("display","none")})).keyframes(f),n.addAnimation($)},l=(o,l)=>{try{const c="cubic-bezier(0.32,0.72,0,1)",p="opacity",f="transform",d="0%",$=.8,b="rtl"===o.ownerDocument.dir,m=b?"-99.5%":"99.5%",u=b?"33%":"-33%",y=l.enteringEl,X=l.leavingEl,x="back"===l.direction,h=y.querySelector(":scope > ion-content"),g=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=y.querySelectorAll(":scope > ion-header > ion-toolbar"),k=t(),w=t();if(k.addElement(y).duration(l.duration||540).easing(l.easing||c).fill("both").beforeRemoveClass("ion-page-invisible"),X&&o){const n=t();n.addElement(o),k.addAnimation(n)}if(h||0!==v.length||0!==g.length?(w.addElement(h),w.addElement(g)):w.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),k.addAnimation(w),x?w.beforeClearStyles([p]).fromTo("transform",`translateX(${u})`,`translateX(${d})`).fromTo(p,$,1):w.beforeClearStyles([p]).fromTo("transform",`translateX(${m})`,`translateX(${d})`),h){const n=a(h).querySelector(".transition-effect");if(n){const o=n.querySelector(".transition-cover"),a=n.querySelector(".transition-shadow"),e=t(),s=t(),r=t();e.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(o).beforeClearStyles([p]).fromTo(p,0,.1),r.addElement(a).beforeClearStyles([p]).fromTo(p,.03,.7),e.addAnimation([s,r]),w.addAnimation([e])}}const T=y.querySelector("ion-header.header-collapse-condense"),{forward:j,backward:A}=((t,n,o,a,l)=>{const c=s(a,o),p=e(l),f=e(a),d=s(l,o),$=null!==c&&null!==p&&!o,b=null!==f&&null!==d&&o;if($){const a=p.getBoundingClientRect(),e=c.getBoundingClientRect();i(t,n,o,p,a,e),r(t,n,o,c,a,e)}else if(b){const a=f.getBoundingClientRect(),e=d.getBoundingClientRect();i(t,n,o,f,a,e),r(t,n,o,d,a,e)}return{forward:$,backward:b}})(k,b,x,y,X);if(v.forEach((n=>{const o=t();o.addElement(n),k.addAnimation(o);const e=t();e.addElement(n.querySelector("ion-title"));const s=t(),r=Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),i=n.closest("ion-header"),l=i&&i.classList.contains("header-collapse-condense-inactive");let c;c=r.filter(x?t=>{const n=t.classList.contains("buttons-collapse");return n&&!l||!n}:t=>!t.classList.contains("buttons-collapse")),s.addElement(c);const f=t();f.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const $=t();$.addElement(a(n).querySelector(".toolbar-background"));const y=t(),X=n.querySelector("ion-back-button");if(X&&y.addElement(X),o.addAnimation([e,s,f,$,y]),s.fromTo(p,.01,1),f.fromTo(p,.01,1),x)l||e.fromTo("transform",`translateX(${u})`,`translateX(${d})`).fromTo(p,.01,1),f.fromTo("transform",`translateX(${u})`,`translateX(${d})`),y.fromTo(p,.01,1);else if(T||e.fromTo("transform",`translateX(${m})`,`translateX(${d})`).fromTo(p,.01,1),f.fromTo("transform",`translateX(${m})`,`translateX(${d})`),$.beforeClearStyles([p,"transform"]),(null==i?void 0:i.translucent)?$.fromTo("transform",b?"translateX(-100%)":"translateX(100%)","translateX(0px)"):$.fromTo(p,.01,"var(--opacity)"),j||y.fromTo(p,.01,1),X&&!j){const n=t();n.addElement(a(X).querySelector(".button-text")).fromTo("transform",b?"translateX(-100px)":"translateX(100px)","translateX(0px)"),o.addAnimation(n)}})),X){const o=t(),e=X.querySelector(":scope > ion-content"),s=X.querySelectorAll(":scope > ion-header > ion-toolbar"),r=X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==s.length||0!==r.length?(o.addElement(e),o.addElement(r)):o.addElement(X.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),k.addAnimation(o),x){o.beforeClearStyles([p]).fromTo("transform",`translateX(${d})`,b?"translateX(-100%)":"translateX(100%)");const t=n(X);k.afterAddWrite((()=>{"normal"===k.getDirection()&&t.style.setProperty("display","none")}))}else o.fromTo("transform",`translateX(${d})`,`translateX(${u})`).fromTo(p,1,$);if(e){const n=a(e).querySelector(".transition-effect");if(n){const a=n.querySelector(".transition-cover"),e=n.querySelector(".transition-shadow"),s=t(),r=t(),i=t();s.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(a).beforeClearStyles([p]).fromTo(p,.1,0),i.addElement(e).beforeClearStyles([p]).fromTo(p,.7,.03),s.addAnimation([r,i]),o.addAnimation([s])}}s.forEach((n=>{const o=t();o.addElement(n);const e=t();e.addElement(n.querySelector("ion-title"));const s=t(),r=n.querySelectorAll("ion-buttons,[menuToggle]"),i=n.closest("ion-header"),l=i&&i.classList.contains("header-collapse-condense-inactive"),c=Array.from(r).filter((t=>{const n=t.classList.contains("buttons-collapse");return n&&!l||!n}));s.addElement(c);const $=t(),m=n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");m.length>0&&$.addElement(m);const y=t();y.addElement(a(n).querySelector(".toolbar-background"));const X=t(),h=n.querySelector("ion-back-button");if(h&&X.addElement(h),o.addAnimation([e,s,$,X,y]),k.addAnimation(o),X.fromTo(p,.99,0),s.fromTo(p,.99,0),$.fromTo(p,.99,0),x){if(l||e.fromTo("transform",`translateX(${d})`,b?"translateX(-100%)":"translateX(100%)").fromTo(p,.99,0),$.fromTo("transform",`translateX(${d})`,b?"translateX(-100%)":"translateX(100%)"),y.beforeClearStyles([p,"transform"]),(null==i?void 0:i.translucent)?y.fromTo("transform","translateX(0px)",b?"translateX(-100%)":"translateX(100%)"):y.fromTo(p,"var(--opacity)",0),h&&!A){const n=t();n.addElement(a(h).querySelector(".button-text")).fromTo("transform",`translateX(${d})`,`translateX(${(b?-124:124)+"px"})`),o.addAnimation(n)}}else l||e.fromTo("transform",`translateX(${d})`,`translateX(${u})`).fromTo(p,.99,0).afterClearStyles([f,p]),$.fromTo("transform",`translateX(${d})`,`translateX(${u})`).afterClearStyles([f,p]),X.afterClearStyles([p]),e.afterClearStyles([p]),s.afterClearStyles([p])}))}return k}catch(t){throw t}};export{l as iosTransitionAnimation,a as shadow}