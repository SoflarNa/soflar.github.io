import{S as W,i as j,s as z,V as Q,k as w,a as O,l as b,m as T,h as v,c as S,n as M,b as q,D as h,Q as G,d as X,f as B,g as C,J as F,R as L,p as H,O as R,v as U,q as Y,r as P,u as A,H as J,W as Z,X as $}from"../chunks/index.65d438b6.js";import{f as x,a as ee}from"../chunks/index.16426cb6.js";function K(s,e,i){const r=s.slice();return r[9]=e[i],r}function N(s){let e,i;return{c(){e=w("img"),this.h()},l(r){e=b(r,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){H(e,"transform","translate(0, "+(s[1]<2?s[1]*s[9]:-s[1]*s[9]/(s[4].length-1))+"px)"),R(e.src,i=`https://www.devsamples.com/parallax-layer${s[9]}.png`)||M(e,"src",i),M(e,"alt",`parallax layer ${s[9]}`),M(e,"class","svelte-1fk8y27")},m(r,n){q(r,e,n)},p(r,n){n&2&&H(e,"transform","translate(0, "+(r[1]<2?r[1]*r[9]:-r[1]*r[9]/(r[4].length-1))+"px)")},d(r){r&&v(e)}}}function le(s){let e,i,r,n,u,_,f;return{c(){e=w("p"),i=Y("You have scrolled "),r=Y(s[1]),n=Y(" pixels"),u=O(),_=w("p"),f=Y(s[3])},l(l){e=b(l,"P",{});var t=T(e);i=P(t,"You have scrolled "),r=P(t,s[1]),n=P(t," pixels"),t.forEach(v),u=S(l),_=b(l,"P",{});var p=T(_);f=P(p,s[3]),p.forEach(v)},m(l,t){q(l,e,t),h(e,i),h(e,r),h(e,n),q(l,u,t),q(l,_,t),h(_,f)},p(l,t){t&2&&A(r,l[1]),t&8&&A(f,l[3])},i:J,o:J,d(l){l&&v(e),l&&v(u),l&&v(_)}}}function te(s){let e,i,r,n,u,_,f,l,t,p,I,E,k,o;return{c(){e=w("div"),i=w("p"),r=Y("You have scrolled "),n=Y(s[1]),u=Y(" pixels"),_=O(),f=w("p"),l=Y(s[3]),t=O(),p=w("img"),this.h()},l(m){e=b(m,"DIV",{class:!0});var c=T(e);i=b(c,"P",{});var D=T(i);r=P(D,"You have scrolled "),n=P(D,s[1]),u=P(D," pixels"),D.forEach(v),_=S(c),f=b(c,"P",{});var a=T(f);l=P(a,s[3]),a.forEach(v),t=S(c),p=b(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(v),this.h()},h(){R(p.src,I="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-1.png")||M(p,"src",I),M(p,"alt","heart"),M(p,"class","svelte-1fk8y27"),M(e,"class","story svelte-1fk8y27")},m(m,c){q(m,e,c),h(e,i),h(i,r),h(i,n),h(i,u),h(e,_),h(e,f),h(f,l),h(e,t),h(e,p),o=!0},p(m,c){(!o||c&2)&&A(n,m[1]),(!o||c&8)&&A(l,m[3])},i(m){o||(Q(()=>{o&&(k&&k.end(1),E=Z(e,x,{y:200,duration:2e3}),E.start())}),o=!0)},o(m){E&&E.invalidate(),k=$(e,ee,{}),o=!1},d(m){m&&v(e),m&&k&&k.end()}}}function se(s){let e=!1,i=()=>{e=!1},r,n,u,_,f,l,t,p,I,E;Q(s[6]);let k=s[4],o=[];for(let a=0;a<k.length;a+=1)o[a]=N(K(s,k,a));const m=[te,le],c=[];function D(a,g){return a[2]&&a[0]>0?0:a[0]===0?1:-1}return~(l=D(s))&&(t=c[l]=m[l](s)),{c(){n=w("main"),u=w("div");for(let a=0;a<o.length;a+=1)o[a].c();_=O(),f=w("div"),t&&t.c(),this.h()},l(a){n=b(a,"MAIN",{class:!0});var g=T(n);u=b(g,"DIV",{class:!0});var y=T(u);for(let V=0;V<o.length;V+=1)o[V].l(y);y.forEach(v),_=S(g),f=b(g,"DIV",{class:!0});var d=T(f);t&&t.l(d),d.forEach(v),g.forEach(v),this.h()},h(){M(u,"class","container svelte-1fk8y27"),M(f,"class","text svelte-1fk8y27"),M(n,"class","svelte-1fk8y27")},m(a,g){q(a,n,g),h(n,u);for(let y=0;y<o.length;y+=1)o[y]&&o[y].m(u,null);h(n,_),h(n,f),~l&&c[l].m(f,null),p=!0,I||(E=[G(window,"scroll",s[5]),G(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(i,100),s[6]()})],I=!0)},p(a,[g]){if(g&2&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,a[1]),r=setTimeout(i,100)),g&18){k=a[4];let d;for(d=0;d<k.length;d+=1){const V=K(a,k,d);o[d]?o[d].p(V,g):(o[d]=N(V),o[d].c(),o[d].m(u,null))}for(;d<o.length;d+=1)o[d].d(1);o.length=k.length}let y=l;l=D(a),l===y?~l&&c[l].p(a,g):(t&&(U(),X(c[y],1,1,()=>{c[y]=null}),B()),~l?(t=c[l],t?t.p(a,g):(t=c[l]=m[l](a),t.c()),C(t,1),t.m(f,null)):t=null)},i(a){p||(C(t),p=!0)},o(a){X(t),p=!1},d(a){a&&v(n),F(o,a),~l&&c[l].d(),I=!1,L(E)}}}function re(s,e,i){let r;const n=[0,1,2,3],u=["Keep scrolling...","More scrolling...","Almost there...","You did it!","You are done!"];let _=0,f=0,l=!0;const t=Math.floor(600/u.length);function p(){const E=f;i(0,f=Math.max(0,Math.floor(_/t))),i(2,l=f===E)}function I(){i(1,_=window.pageYOffset)}return s.$$.update=()=>{s.$$.dirty&1&&i(3,r=u[f])},[f,_,l,r,n,p,I]}class ie extends W{constructor(e){super(),j(this,e,re,se,z,{})}}export{ie as component};