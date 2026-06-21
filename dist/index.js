"use strict";var y=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var j=y(function(L,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist');function D(r,a,i,m,t,b,x){var u,o,c,f,v,n,e,q,s;for(u=a.data,o=t.data,c=a.accessors[0],f=t.accessors[0],n=m,e=x,s=0;s<r&&f(o,e)!==0;s++)n+=i,e+=b;if(s===r)return NaN;if(v=g(c(u,n)),p(v))return v;for(s+=1,s;s<r;s++)if(n+=i,e+=b,!f(o,e)){if(q=g(c(u,n)),p(q))return q;q<v&&(v=q)}return v}P.exports=D
});var l=y(function(Q,w){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-abs/dist'),h=require('@stdlib/array-base-arraylike2object/dist'),E=j();function F(r,a,i,m,t,b,x){var u,o,c,f,v,n,e;if(r<=0)return NaN;if(f=h(a),v=h(t),f.accessorProtocol||v.accessorProtocol)return E(r,f,i,m,v,b,x);for(o=m,c=x,e=0;e<r&&t[c]!==0;e++)o+=i,c+=b;if(e===r)return NaN;if(u=R(a[o]),O(u))return u;for(e+=1,e;e<r;e++)if(o+=i,c+=b,!t[c]){if(n=R(a[o]),O(n))return n;n<u&&(u=n)}return u}w.exports=F
});var B=y(function(S,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),G=l();function H(r,a,i,m,t){return G(r,a,i,z(r,i),m,t,z(r,t))}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=l();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
