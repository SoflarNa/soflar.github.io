function x(){}const V=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(X)}function S(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Gt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function It(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,o){if(s){const r=Y(e,n,i,o);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t,e,n){return t.set(n),e}function Vt(t){return t&&S(t.destroy)?t.destroy:x}function Xt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):x;const E=new Set;function et(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&z(et)}function nt(t){let e;return E.size===0&&z(et),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let P=!1;function xt(){P=!0}function $t(){P=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=c?s+1:bt(1,s,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,s=Math.max(a,s)}const o=[],r=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(r[l],f)}}function wt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=F("style");return Nt(it(t),e),e.sheet}function Nt(t,e){return wt(t.head||t,e),e.sheet}function Tt(t,e){if(P){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function kt(t,e,n){P&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Zt(){return G(" ")}function te(){return G("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){rt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ct(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function se(t,e,n){return ct(t,e,n,F)}function re(t,e,n){return ct(t,e,n,st)}function St(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function oe(t){return St(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ce(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);rt(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e){t.value=e??""}function ae(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function _e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=F(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class K extends Lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}}function de(t,e){return new t(e)}const D=new Map;let H=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:vt(e),rules:{}};return D.set(t,n),n}function lt(t,e,n,i,s,o,r,u=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*o(m);c+=m*100+`%{${r(p,1-p)}}
`}const f=c+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Dt(f)}_${u}`,_=it(t),{stylesheet:d,rules:h}=D.get(_)||Ht(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${s}ms 1 both`,H+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||jt())}function jt(){z(()=>{H||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),D.clear())})}let k;function T(t){k=t}function ut(){if(!k)throw new Error("Function called outside component initialization");return k}function he(t){ut().$$.on_mount.push(t)}function me(t){ut().$$.after_update.push(t)}const b=[],Q=[];let w=[];const U=[],at=Promise.resolve();let B=!1;function ft(){B||(B=!0,at.then(_t))}function pe(){return ft(),at}function M(t){w.push(t)}const R=new Set;let $=0;function _t(){if($!==0)return;const t=k;do{try{for(;$<b.length;){const e=b[$];$++,T(e),Pt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(T(null),b.length=0,$=0;Q.length;)Q.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];R.has(n)||(R.add(n),n())}w.length=0}while(b.length);for(;U.length;)U.pop()();B=!1,R.clear(),T(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Ot(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let N;function dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function j(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const L=new Set;let g;function ye(){g={r:0,c:[],p:g}}function ge(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht={duration:0};function $e(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,u,l=0;function c(){r&&q(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:y=x,css:m}=s||ht;m&&(r=lt(t,0,1,d,_,h,m,l++)),y(0,1);const p=tt()+_,mt=p+d;u&&u.abort(),o=!0,M(()=>j(t,!0,"start")),u=nt(O=>{if(o){if(O>=mt)return y(1,0),j(t,!0,"end"),c(),o=!1;if(O>=p){const W=h((O-p)/d);y(W,1-W)}}return o})}let a=!1;return{start(){a||(a=!0,q(t),S(s)?(s=s(i),dt().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function be(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const u=g;u.r+=1;function l(){const{delay:c=0,duration:f=300,easing:a=V,tick:_=x,css:d}=s||ht;d&&(r=lt(t,1,0,f,c,a,d));const h=tt()+c,y=h+f;M(()=>j(t,!1,"start")),nt(m=>{if(o){if(m>=y)return _(0,1),j(t,!1,"end"),--u.r||v(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return S(s)?dt().then(()=>{s=s(i),l()}):l(),{end(c){c&&s.tick&&s.tick(1,0),o&&(r&&q(t,r),o=!1)}}}function Ee(t){t&&t.c()}function we(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||M(()=>{const r=t.$$.on_mount.map(X).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(M)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,s,o,r,u=[-1]){const l=k;T(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&s(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&zt(t,a)),_}):[],c.update(),f=!0,v(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){xt();const a=Mt(e.target);c.fragment&&c.fragment.l(a),a.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&Rt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),$t(),_t()}T(l)}class Ne{$destroy(){Bt(this,1),this.$destroy=x}$on(e,n){if(!S(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{V as $,qt as A,Bt as B,It as C,Tt as D,Kt as E,Qt as F,Jt as G,x as H,Wt as I,Yt as J,st as K,re as L,_e as M,Vt as N,Gt as O,fe as P,ee as Q,v as R,Ne as S,ue as T,ne as U,M as V,$e as W,be as X,Ut as Y,K as Z,ce as _,Zt as a,Xt as a0,kt as b,oe as c,xe as d,te as e,ge as f,Rt as g,A as h,ve as i,me as j,F as k,se as l,Mt as m,ie as n,he as o,ae as p,G as q,St as r,Ft as s,pe as t,le as u,ye as v,Q as w,de as x,Ee as y,we as z};
