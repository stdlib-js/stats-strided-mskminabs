"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var j=y(function(L,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist');function D(r,e,v,m,t,b,x){var n,o,c,f,u,i,a,q,s;for(n=e.data,o=t.data,c=e.accessors[0],f=t.accessors[0],i=m,a=x,s=0;s<r&&f(o,a)!==0;s++)i+=v,a+=b;if(s===r)return NaN;if(u=g(c(n,i)),p(u))return u;for(s+=1,s;s<r;s++)if(i+=v,a+=b,!f(o,a)){if(q=g(c(n,i)),p(q))return q;q<u&&(u=q)}return u}P.exports=D
});var l=y(function(Q,w){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-abs/dist'),h=require('@stdlib/array-base-arraylike2object/dist'),E=j();function F(r,e,v,m,t,b,x){var n,o,c,f,u,i,a;if(r<=0)return NaN;if(f=h(e),u=h(t),f.accessorProtocol||u.accessorProtocol)return E(r,f,v,m,u,b,x);for(o=m,c=x,a=0;a<r&&t[c]!==0;a++)o+=v,c+=b;if(a===r)return NaN;if(n=R(e[o]),O(n))return n;for(a+=1,a;a<r;a++)if(o+=v,c+=b,!t[c]){if(i=R(e[o]),O(i))return i;i<n&&(n=i)}return n}w.exports=F
});var B=y(function(S,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),G=l();function H(r,e,v,m,t){return G(r,e,v,z(r,v),m,t,z(r,t))}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=l();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
