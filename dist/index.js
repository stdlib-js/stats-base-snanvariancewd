"use strict";var m=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(f){throw (i=0, f)}};};var w=m(function(A,N){
var q=require('@stdlib/number-float64-base-to-float32/dist');function T(a,i,f,s){var c,v,n,u,o,e,r,t;if(a<=0)return NaN;if(a===1||s===0)return e=f[0],e===e&&a-i>0?0:NaN;for(s<0?u=(1-a)*s:u=0,n=0,v=0,r=0,t=0;t<a;t++)e=f[u],e===e&&(c=q(e-v),r+=1,v=q(v+q(c/r)),n=q(n+q(c*q(e-v)))),u+=s;return o=r-i,o<=0?NaN:q(n/o)}N.exports=T
});var y=m(function(B,x){
var l=require('@stdlib/number-float64-base-to-float32/dist');function _(a,i,f,s,c){var v,n,u,o,e,r,t,d;if(a<=0)return NaN;if(a===1||s===0)return r=f[c],r===r&&a-i>0?0:NaN;for(o=c,u=0,n=0,t=0,d=0;d<a;d++)r=f[o],r===r&&(v=l(r-n),t+=1,n=l(n+l(v/t)),u=l(u+l(v*l(r-n)))),o+=s;return e=t-i,e<=0?NaN:l(u/e)}x.exports=_
});var M=m(function(C,F){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=w(),O=y();E(j,"ndarray",O);F.exports=j
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=M(),p,R=g(b(__dirname,"./native.js"));h(R)?p=k:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
