import{S as ce,i as ue,s as he,k as v,q as N,a as O,l as g,m,r as y,h,c as D,n as w,p as fe,b as K,D as a,R as te,P as A,B as le,J as ae,Q as _e,u as ie}from"../../../chunks/index-0b635c87.js";function ne(c,e,n){const s=c.slice();return s[8]=e[n],s[10]=n,s}function se(c,e,n){const s=c.slice();return s[11]=e[n],s[10]=n,s}function oe(c){let e,n=c[11]+"",s,f,r,b,u,T,k;function E(){return c[7](c[10])}return{c(){e=v("li"),s=N(n),f=O(),r=v("button"),b=N("Completed"),u=O()},l(o){e=g(o,"LI",{});var i=m(e);s=y(i,n),f=D(i),r=g(i,"BUTTON",{});var L=m(r);b=y(L,"Completed"),L.forEach(h),u=D(i),i.forEach(h)},m(o,i){K(o,e,i),a(e,s),a(e,f),a(e,r),a(r,b),a(e,u),T||(k=A(r,"click",E),T=!0)},p(o,i){c=o,i&1&&n!==(n=c[11]+"")&&ie(s,n)},d(o){o&&h(e),T=!1,k()}}}function re(c){let e,n=c[8]+"",s,f,r,b,u,T,k;return{c(){e=v("li"),s=N(n),f=O(),r=v("button"),b=N("Remove"),u=O()},l(E){e=g(E,"LI",{});var o=m(e);s=y(o,n),f=D(o),r=g(o,"BUTTON",{});var i=m(r);b=y(i,"Remove"),i.forEach(h),u=D(o),o.forEach(h)},m(E,o){K(E,e,o),a(e,s),a(e,f),a(e,r),a(r,b),a(e,u),T||(k=A(r,"click",c[5]),T=!0)},p(E,o){o&2&&n!==(n=E[8]+"")&&ie(s,n)},d(E){E&&h(e),T=!1,k()}}}function de(c){let e,n,s,f,r,b,u,T,k,E,o,i,L,H,J,Q,B,j,C,R,z,F,P,G,X,U=c[0],_=[];for(let l=0;l<U.length;l+=1)_[l]=oe(se(c,U,l));let V=c[1],d=[];for(let l=0;l<V.length;l+=1)d[l]=re(ne(c,V,l));return{c(){e=v("div"),n=v("h1"),s=N("TODO LIST"),f=O(),r=v("label"),b=N(`Ny uppgift\r
        `),u=v("input"),T=O(),k=v("button"),E=N("Lägg till uppgift"),o=O(),i=v("div"),L=v("div"),H=v("h1"),J=N("NEW"),Q=O(),B=v("ol");for(let l=0;l<_.length;l+=1)_[l].c();j=O(),C=v("div"),R=v("h1"),z=N("COMPLETED"),F=O(),P=v("ol");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var p=m(e);n=g(p,"H1",{});var t=m(n);s=y(t,"TODO LIST"),t.forEach(h),f=D(p),r=g(p,"LABEL",{});var I=m(r);b=y(I,`Ny uppgift\r
        `),u=g(I,"INPUT",{}),I.forEach(h),T=D(p),k=g(p,"BUTTON",{});var Y=m(k);E=y(Y,"Lägg till uppgift"),Y.forEach(h),o=D(p),i=g(p,"DIV",{class:!0});var q=m(i);L=g(q,"DIV",{});var M=m(L);H=g(M,"H1",{});var Z=m(H);J=y(Z,"NEW"),Z.forEach(h),Q=D(M),B=g(M,"OL",{class:!0});var $=m(B);for(let S=0;S<_.length;S+=1)_[S].l($);$.forEach(h),M.forEach(h),j=D(q),C=g(q,"DIV",{style:!0});var W=m(C);R=g(W,"H1",{});var x=m(R);z=y(x,"COMPLETED"),x.forEach(h),F=D(W),P=g(W,"OL",{class:!0});var ee=m(P);for(let S=0;S<d.length;S+=1)d[S].l(ee);ee.forEach(h),W.forEach(h),q.forEach(h),p.forEach(h),this.h()},h(){w(B,"class","svelte-1kka0eu"),w(P,"class","svelte-1kka0eu"),fe(C,"display","grid"),w(i,"class","layout svelte-1kka0eu"),w(e,"class","container svelte-1kka0eu")},m(l,p){K(l,e,p),a(e,n),a(n,s),a(e,f),a(e,r),a(r,b),a(r,u),te(u,c[2]),a(e,T),a(e,k),a(k,E),a(e,o),a(e,i),a(i,L),a(L,H),a(H,J),a(L,Q),a(L,B);for(let t=0;t<_.length;t+=1)_[t].m(B,null);a(i,j),a(i,C),a(C,R),a(R,z),a(C,F),a(C,P);for(let t=0;t<d.length;t+=1)d[t].m(P,null);G||(X=[A(u,"input",c[6]),A(k,"click",c[3])],G=!0)},p(l,[p]){if(p&4&&u.value!==l[2]&&te(u,l[2]),p&17){U=l[0];let t;for(t=0;t<U.length;t+=1){const I=se(l,U,t);_[t]?_[t].p(I,p):(_[t]=oe(I),_[t].c(),_[t].m(B,null))}for(;t<_.length;t+=1)_[t].d(1);_.length=U.length}if(p&34){V=l[1];let t;for(t=0;t<V.length;t+=1){const I=ne(l,V,t);d[t]?d[t].p(I,p):(d[t]=re(I),d[t].c(),d[t].m(P,null))}for(;t<d.length;t+=1)d[t].d(1);d.length=V.length}},i:le,o:le,d(l){l&&h(e),ae(_,l),ae(d,l),G=!1,_e(X)}}}function pe(c,e,n){let s=["göra app"],f=[],r="";function b(){r!=""&&s.push(r),n(0,s)}function u(o){let i=s.splice(o,1)[0];f.push(i),n(0,s),n(1,f)}function T(o){f.splice(o,1),n(1,f)}function k(){r=this.value,n(2,r)}return[s,f,r,b,u,T,k,o=>u(o)]}class ge extends ce{constructor(e){super(),ue(this,e,pe,de,he,{})}}export{ge as default};
