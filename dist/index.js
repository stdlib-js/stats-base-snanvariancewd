"use strict";var m=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var w=m(function(A,N){
var o=require('@stdlib/number-float64-base-to-float32/dist');function T(a,i,c,f){var l,v,n,u,s,e,r,t;if(a<=0)return NaN;if(a===1||f===0)return e=c[0],e===e&&a-i>0?0:NaN;for(f<0?u=(1-a)*f:u=0,n=0,v=0,r=0,t=0;t<a;t++)e=c[u],e===e&&(l=o(e-v),r+=1,v=o(v+o(l/r)),n=o(n+o(l*o(e-v)))),u+=f;return s=r-i,s<=0?NaN:o(n/s)}N.exports=T
});var y=m(function(B,x){
var q=require('@stdlib/number-float64-base-to-float32/dist');function _(a,i,c,f,l){var v,n,u,s,e,r,t,d;if(a<=0)return NaN;if(a===1||f===0)return r=c[l],r===r&&a-i>0?0:NaN;for(s=l,u=0,n=0,t=0,d=0;d<a;d++)r=c[s],r===r&&(v=q(r-n),t+=1,n=q(n+q(v/t)),u=q(u+q(v*q(r-n)))),s+=f;return e=t-i,e<=0?NaN:q(u/e)}x.exports=_
});var M=m(function(C,F){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=w(),O=y();E(j,"ndarray",O);F.exports=j
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=M(),p,R=g(b(__dirname,"./native.js"));h(R)?p=k:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
