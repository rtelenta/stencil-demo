let t,e,n=0,l=!1;const o="undefined"!=typeof window?window:{},s=o.document||{head:{}},r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},c=(()=>!!s.head.attachShadow)(),i=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),a=new WeakMap,u=t=>a.get(t),f=(t,e)=>a.set(e.o=t,e),m=t=>console.error(t),d=new Map,p=new Map,$=[],h=[],w=[],y=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&r.t?g(b):r.raf(b))},_=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){m(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},b=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){m(e)}t.length=0})($);const t=2==(6&r.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;_(h,t),_(w,t),h.length>0&&(w.push(...h),h.length=0),(l=$.length+h.length+w.length>0)?r.raf(b):n=0},g=t=>Promise.resolve().then(t),j=y(h,!0),v={},S=t=>"object"==(t=typeof t)||"function"===t,M=()=>o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencil_demo("./p-73bc5e11.js").then(()=>{r.s=o.__stencil_cssshim}),R=()=>{r.s=o.__stencil_cssshim;const t=Array.from(s.querySelectorAll("script")).find(t=>new RegExp("/stencil-demo(\\.esm)?\\.js($|\\?|#)").test(t.src)||"stencil-demo"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,o.location.href)).href,P(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_stencil_demo("./p-3b66a627.js").then(()=>e))},P=(t,e)=>{const n=(()=>`__sc_import_${"stencil-demo".replace(/\s|-/g,"_")}`)();try{o[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const r=new Map;o[n]=l=>{const c=new URL(l,t).href;let i=r.get(c);if(!i){const t=s.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(o[n].m),t.remove()}}),r.set(c,i),s.head.appendChild(t)}return i}}},U=new WeakMap,k=t=>"sc-"+t,L=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!S(l))&&(l=String(l)),o&&s?r[r.length-1].i+=l:r.push(o?O(null,l):l),s=o)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=O(t,null);return i.u=e,r.length>0&&(i.p=r),i},O=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),x={},C=(t,e,n,l,o,s)=>{if(n===l)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,o=E(n),s=E(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else{const i=S(l);if((r||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}},A=/\s/,E=t=>t?t.split(A):[],T=(t,e,n,l)=>{const o=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.u||v,r=e.u||v;for(l in s)l in r||C(o,l,s[l],void 0,n,e.t);for(l in r)C(o,l,s[l],r[l],n,e.t)},F=(e,n,l)=>{let o,r,c=n.p[l],i=0;if(null!==c.i)o=c.h=s.createTextNode(c.i);else if(o=c.h=s.createElement(c.$),T(null,c,!1),(t=>null!=t)(t)&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),c.p)for(i=0;i<c.p.length;++i)(r=F(e,c,i))&&o.appendChild(r);return o},W=(t,n,l,o,s,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=F(null,l,s))&&(o[s].h=c,i.insertBefore(c,n))},q=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.h.remove()},B=(t,e)=>t.$===e.$,H=(t,e)=>{const n=e.h=t.h,l=t.p,o=e.p;null===e.i?(T(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],m=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==m?m=l[--u]:B(i,f)?(H(i,f),i=e[++s],f=l[++r]):B(a,m)?(H(a,m),a=e[--c],m=l[--u]):B(i,m)?(H(i,m),t.insertBefore(i.h,a.h.nextSibling),i=e[++s],m=l[--u]):B(a,f)?(H(a,f),t.insertBefore(a.h,i.h),a=e[--c],f=l[++r]):(o=F(e&&e[r],n,r),f=l[++r],o&&i.h.parentNode.insertBefore(o,i.h));s>c?W(t,null==l[u+1]?null:l[u+1].h,n,l,r,u):r>u&&q(e,s,c)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),W(n,null,e,o,0,o.length-1)):null!==l&&q(l,0,l.length-1)):t.i!==e.i&&(n.data=e.i)},N=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},V=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>z(t,e,n,o,l);return N(e,e.g),l&&(e.t|=256,e.j&&(e.j.forEach(([t,e])=>J(o,t,e)),e.j=null)),K(void 0,()=>j(s))},z=(n,l,o,r,i)=>{const a=n["s-rc"];i&&((t,e)=>{const n=((t,e)=>{let n=k(e.v),l=p.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,o=U.get(t=t.head||t);o||U.set(t,o=new Set),o.has(n)||((e=s.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(c&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(n,o),((n,l,o,s)=>{e=n.tagName;const r=l.S||O(null,null),c=(t=>t&&t.$===x)(s)?s:L(null,null,s);c.$=null,c.t|=4,l.S=c,c.h=r.h=n.shadowRoot||n,t=n["s-sc"],H(r,c)})(n,l,0,D(r)),l.t&=-17,l.t|=2,a&&(a.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>G(n,l,o);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},D=t=>{try{t=t.render()}catch(e){m(e)}return t},G=(t,e,n)=>{const l=e.g;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.M(t),l||I()),e._&&(e._(),e._=void 0),512&e.t&&g(()=>V(t,e,n,!1)),e.t&=-517},I=()=>{s.documentElement.classList.add("hydrated"),r.t|=2},J=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){m(l)}},K=(t,e)=>t&&t.then?t.then(e):e(),Q=(t,e,n)=>{if(e.R){const l=Object.entries(e.R),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>u(t).P.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=u(this),s=o.U,r=o.P.get(e),c=o.t,i=o.o;(n=((t,e)=>null==t||S(t)?t:1&e?String(t):t)(n,l.R[e][0]))===r||8&c&&void 0!==r||(o.P.set(e,n),i&&2==(18&c)&&V(s,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){r.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},X=(t,e={})=>{const n=[],l=e.exclude||[],f=s.head,$=o.customElements,h=f.querySelector("meta[charset]"),w=s.createElement("style"),y=[];let _,b=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",s.baseURI).href,e.syncQueue&&(r.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],v:e[1],R:e[2],k:e[3]};o.R=e[2],o.k=e[3],!c&&1&o.t&&(o.t|=8);const s=o.v,f=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,U:t,P:new Map};e.L=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],a.set(t,e)})(t=this),1&o.t&&(c?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),b?y.push(this):r.jmp(()=>((t,e)=>{if(0==(1&r.t)){const n=()=>{},l=u(t);if(e.k&&(l.O=((t,e,n)=>{e.j=e.j||[];const l=n.map(([n,l,o])=>{const s=t,c=((t,e)=>n=>{256&t.t?t.o[e](n):t.j.push([e,n])})(e,o),i=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return r.ael(s,l,c,i),()=>r.rel(s,l,c,i)});return()=>l.forEach(t=>t())})(t,l,e.k)),!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){N(l,l.g=e);break}}e.R&&Object.entries(e.R).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),g(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.v.replace(/-/g,"_"),n=t.C,l=d.get(n);return l?l[e]:__sc_import_stencil_demo(`./${n}.entry.js`).then(t=>(d.set(n,t),t[e]),m)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(Q(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){m(c)}e.t&=-9,t()}const t=k(n.v);if(!p.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencil_demo("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=p.get(t);i&&n?(l=l||new CSSStyleSheet).replace(e):l=e,p.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.g,r=()=>V(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){r.jmp(()=>(()=>{if(0==(1&r.t)){const t=u(this);t.O&&(t.O(),t.O=void 0)}})())}forceUpdate(){((t,e)=>{{const n=u(t);n.U.isConnected&&2==(18&n.t)&&V(t,n,e,!1)}})(this,o)}componentOnReady(){return u(this).L}};o.C=t[0],l.includes(s)||$.get(s)||(n.push(s),$.define(s,Q(f,o,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),f.insertBefore(w,h?h.nextSibling:f.firstChild),b=!1,y.length>0?y.forEach(t=>t.connectedCallback()):r.jmp(()=>_=setTimeout(I,30,"timeout"))};export{M as a,X as b,L as h,R as p,f as r};