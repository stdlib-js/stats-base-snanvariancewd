// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function t(r,t,n,a){var i,s,o,f,d,u,N,l;if(r<=0)return NaN;if(1===r||0===a)return(u=n[0])==u&&r-t>0?0:NaN;for(f=a<0?(1-r)*a:0,o=0,s=0,N=0,l=0;l<r;l++)(u=n[f])==u&&(i=e(u-s),s=e(s+e(i/(N+=1))),o=e(o+e(i*e(u-s)))),f+=a;return(d=N-t)<=0?NaN:e(o/d)}function n(r,t,n,a,i){var s,o,f,d,u,N,l,m;if(r<=0)return NaN;if(1===r||0===a)return(N=n[i])==N&&r-t>0?0:NaN;for(d=i,f=0,o=0,l=0,m=0;m<r;m++)(N=n[d])==N&&(s=e(N-o),o=e(o+e(s/(l+=1))),f=e(f+e(s*e(N-o)))),d+=a;return(u=l-t)<=0?NaN:e(f/u)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
