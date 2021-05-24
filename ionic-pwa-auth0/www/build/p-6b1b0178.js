import{g as t,c as n}from"./p-60e5b1e5.js";import{OVERLAY_BACK_BUTTON_PRIORITY as e}from"./p-f2660943.js";import{b as o,e as a,r as i,g as s}from"./p-972edcb2.js";let r=0;const c=new WeakMap,d=t=>({create:n=>b(t,n),dismiss:(n,e,o)=>w(document,n,e,t,o),getTop:async()=>g(document,t)}),u=d("ion-alert"),p=d("ion-action-sheet"),l=d("ion-picker"),m=d("ion-popover"),f=d("ion-toast"),y=t=>{"undefined"!=typeof document&&h(document);const n=r++;t.overlayIndex=n,t.hasAttribute("id")||(t.id=`ion-overlay-${n}`)},b=(t,n)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const e=document.createElement(t);return e.classList.add("overlay-hidden"),Object.assign(e,n),B(document).appendChild(e),new Promise((t=>o(e,t)))})):Promise.resolve(),v='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',x="input:not([type=hidden]), textarea, button, select",h=t=>{0===r&&(r=1,t.addEventListener("focus",(n=>((t,n)=>{const e=g(n),o=t.target;if(e&&o)if(e===o)e.lastFocus=void 0;else{const t=s(e);if(!t.contains(o))return;const a=t.querySelector(".ion-overlay-wrapper");if(!a)return;if(a.contains(o))e.lastFocus=o;else{const t=e.lastFocus;((t,n)=>{let e=t.querySelector(v);const o=e&&e.shadowRoot;o&&(e=o.querySelector(x)||e),e?e.focus():n.focus()})(a,e),t===n.activeElement&&((t,n)=>{const e=Array.from(t.querySelectorAll(v));let o=e.length>0?e[e.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(x)||o),o?o.focus():n.focus()})(a,e),e.lastFocus=n.activeElement}}})(n,t)),!0),t.addEventListener("ionBackButton",(n=>{const o=g(t);o&&o.backdropDismiss&&n.detail.register(e,(()=>o.dismiss(void 0,M)))})),t.addEventListener("keyup",(n=>{if("Escape"===n.key){const n=g(t);n&&n.backdropDismiss&&n.dismiss(void 0,M)}})))},w=(t,n,e,o,a)=>{const i=g(t,o,a);return i?i.dismiss(n,e):Promise.reject("overlay does not exist")},g=(t,n,e)=>{const o=((t,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(n)).filter((t=>t.overlayIndex>0))))(t,n);return void 0===e?o[o.length-1]:o.find((t=>t.id===e))},k=(t=!1)=>{const n=B(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");n&&(t?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))},j=async(e,o,a,i,s)=>{if(e.presented)return;k(!0),e.presented=!0,e.willPresent.emit();const r=t(e),c=e.enterAnimation?e.enterAnimation:n.get(o,"ios"===r?a:i);await E(e,c,e.el,s)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&P(e.el),e.keyboardClose&&e.el.focus()},P=async t=>{let n=document.activeElement;if(!n)return;const e=n&&n.shadowRoot;e&&(n=e.querySelector(x)||n),await t.onDidDismiss(),n.focus()},A=async(e,o,a,i,s,r,d)=>{if(!e.presented)return!1;k(!1),e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:o,role:a});const u=t(e),p=e.leaveAnimation?e.leaveAnimation:n.get(i,"ios"===u?s:r);"gesture"!==a&&await E(e,p,e.el,d),e.didDismiss.emit({data:o,role:a}),c.delete(e)}catch(t){console.error(t)}return e.el.remove(),!0},B=t=>t.querySelector("ion-app")||t.body,E=async(t,e,o,a)=>{o.classList.remove("overlay-hidden");const i=e(o.shadowRoot||t.el,a);t.animated&&n.getBoolean("animated",!0)||i.duration(0),t.keyboardClose&&i.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}));const s=c.get(t)||[];return c.set(t,[...s,i]),await i.play(),!0},O=(t,n)=>{let e;const o=new Promise((t=>e=t));return T(t,n,(t=>{e(t.detail)})),o},T=(t,n,e)=>{const o=a=>{i(t,n,o),e(a)};a(t,n,o)},z=t=>"cancel"===t||t===M,G=t=>t(),I=(t,e)=>{if("function"==typeof t)return n.get("_zoneGate",G)((()=>{try{return t(e)}catch(t){console.error(t)}}))},M="backdrop";export{M as B,j as a,y as b,l as c,A as d,O as e,c as f,p as g,u as h,z as i,m as p,I as s,f as t}