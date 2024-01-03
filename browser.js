// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",u=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},f=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)},l="function",c={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function s(e){var r=c[e];return"function"==typeof r?r:c.default}var y={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function h(e){var r=y[e];return"function"==typeof r?r:y.default}var p="function"==typeof Object.defineProperty?Object.defineProperty:null,g=Object.defineProperty;function m(e){return"number"==typeof e}function w(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+w(i):w(i)+e,n&&(e="-"+e)),e}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function E(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===v.call(e.specifier)?v.call(t):d.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function A(e){return"string"==typeof e}var T=Math.abs,_=String.prototype.toLowerCase,x=String.prototype.toUpperCase,j=String.prototype.replace,V=/e\+(\d)$/,k=/e-(\d)$/,L=/^(\d+)$/,B=/^(\d+)e/,R=/\.0$/,S=/\.0*e/,I=/(\..*[^0])0*e/;function C(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!m(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":T(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,I,"$1e"),t=j.call(t,S,"e"),t=j.call(t,R,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,V,"e+0$1"),t=j.call(t,k,"e-0$1"),e.alternate&&(t=j.call(t,L,"$1."),t=j.call(t,B,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===x.call(e.specifier)?x.call(t):_.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function O(e,r,t){var n=r-e.length;return n<0?e:e=t?e+F(n):F(n)+e}var M=String.fromCharCode,U=isNaN,N=Array.isArray;function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Y(e){var r,t,n,i,o,a,u,f,l;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(A(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,U(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):M(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function G(e){var r,t,n,i;for(t=[],i=0,n=W.exec(e);n;)(r=e.slice(i,W.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=W.lastIndex,n=W.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Z(e){return"string"==typeof e}function X(e){var r,t,n;if(!Z(e))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=G(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Y.apply(null,t)}var J,z=Object.prototype,q=z.toString,D=z.__defineGetter__,H=z.__defineSetter__,K=z.__lookupGetter__,Q=z.__lookupSetter__;J=function(){try{return p({},"x",{}),!0}catch(e){return!1}}()?g:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===q.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(K.call(e,r)||Q.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(e,r,t.get),a&&H&&H.call(e,r,t.set),e};var ee=J;function re(e,r,t){ee(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function te(e){return null!==e&&"object"==typeof e}function ne(e){return te(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ie(){return/^\s*function\s*([^(]*)/i}re(te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!f(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(te));var oe=/^\s*function\s*([^(]*)/i;function ae(e){var r,t,n;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=oe.exec(n.toString()))return r[1]}return ne(e)?"Buffer":t}re(ie,"REGEXP",oe);var ue={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fe="function"==typeof Float64Array,le="function"==typeof Float64Array?Float64Array:null,ce="function"==typeof Float64Array?Float64Array:void 0,se=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,NaN]),t=r,e=(fe&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},ye="function"==typeof Float32Array,he=Number.POSITIVE_INFINITY,pe="function"==typeof Float32Array?Float32Array:null,ge="function"==typeof Float32Array?Float32Array:void 0,me=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,5e40]),t=r,e=(ye&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===he}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},we="function"==typeof Uint32Array,be="function"==typeof Uint32Array?Uint32Array:null,de="function"==typeof Uint32Array?Uint32Array:void 0,ve=function(){var e,r,t;if("function"!=typeof be)return!1;try{r=new be(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(we&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")},Ee="function"==typeof Int32Array,Ae="function"==typeof Int32Array?Int32Array:null,Te="function"==typeof Int32Array?Int32Array:void 0,_e=function(){var e,r,t;if("function"!=typeof Ae)return!1;try{r=new Ae([1,3.14,-3.14,2147483648]),t=r,e=(Ee&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},xe="function"==typeof Uint16Array,je="function"==typeof Uint16Array?Uint16Array:null,Ve="function"==typeof Uint16Array?Uint16Array:void 0,ke=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je(r=[1,3.14,-3.14,65536,65537]),t=r,e=(xe&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ve:function(){throw new Error("not implemented")},Le="function"==typeof Int16Array,Be="function"==typeof Int16Array?Int16Array:null,Re="function"==typeof Int16Array?Int16Array:void 0,Se=function(){var e,r,t;if("function"!=typeof Be)return!1;try{r=new Be([1,3.14,-3.14,32768]),t=r,e=(Le&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")},Ie="function"==typeof Uint8Array,Ce="function"==typeof Uint8Array?Uint8Array:null,Fe="function"==typeof Uint8Array?Uint8Array:void 0,Oe=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,256,257]),t=r,e=(Ie&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")},Me="function"==typeof Uint8ClampedArray,Ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Pe=function(){var e,r,t;if("function"!=typeof Ue)return!1;try{r=new Ue([-1,0,1,3.14,4.99,255,256]),t=r,e=(Me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")},Ye="function"==typeof Int8Array,We="function"==typeof Int8Array?Int8Array:null,$e="function"==typeof Int8Array?Int8Array:void 0,Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,128]),t=r,e=(Ye&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")};function Ze(e){return"number"==typeof e}var Xe=Number,Je=Xe.prototype.toString,ze=r();function qe(e){return"object"==typeof e&&(e instanceof Xe||(ze?function(e){try{return Je.call(e),!0}catch(e){return!1}}(e):"[object Number]"===u(e)))}function De(e){return Ze(e)||qe(e)}re(De,"isPrimitive",Ze),re(De,"isObject",qe);var He=Xe.NEGATIVE_INFINITY,Ke=Math.floor;function Qe(e){return Ke(e)===e}function er(e){return e<he&&e>He&&Qe(e)}function rr(e){return Ze(e)&&er(e)}function tr(e){return qe(e)&&er(e.valueOf())}function nr(e){return rr(e)||tr(e)}function ir(e){return rr(e)&&e>=0}function or(e){return tr(e)&&e.valueOf()>=0}function ar(e){return ir(e)||or(e)}function ur(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Qe(e.length)&&e.length>=0&&e.length<=4294967295}function fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Qe(e.length)&&e.length>=0&&e.length<=9007199254740991}re(nr,"isPrimitive",rr),re(nr,"isObject",tr),re(ar,"isPrimitive",ir),re(ar,"isObject",or);var lr="function"==typeof ArrayBuffer;function cr(e){return lr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e)}function sr(e){return"object"==typeof e&&null!==e&&!f(e)}var yr=/./;function hr(e){return"boolean"==typeof e}var pr=Boolean,gr=Boolean.prototype.toString,mr=r();function wr(e){return"object"==typeof e&&(e instanceof pr||(mr?function(e){try{return gr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function br(e){return hr(e)||wr(e)}function dr(){return new Function("return this;")()}re(br,"isPrimitive",hr),re(br,"isObject",wr);var vr="object"==typeof self?self:null,Er="object"==typeof window?window:null,Ar="object"==typeof globalThis?globalThis:null,Tr=function(e){if(arguments.length){if(!hr(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return dr()}if(Ar)return Ar;if(vr)return vr;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),_r=Tr.document&&Tr.document.childNodes,xr=Int8Array,jr="function"==typeof yr||"object"==typeof xr||"function"==typeof _r?function(e){return ae(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ae(e).toLowerCase():r};function Vr(e){return"function"===jr(e)}function kr(e,r){if(!(this instanceof kr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ze(e))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ze(r))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return ee(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),ee(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}re(kr,"BYTES_PER_ELEMENT",8),re(kr.prototype,"BYTES_PER_ELEMENT",8),re(kr.prototype,"byteLength",16),re(kr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),re(kr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Lr="function"==typeof Math.fround?Math.fround:null,Br=new me(1),Rr="function"==typeof Lr?Lr:function(e){return Br[0]=e,Br[0]};function Sr(e,r){if(!(this instanceof Sr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ze(e))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ze(r))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return ee(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Rr(e)}),ee(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Rr(r)}),this}function Ir(e){return e instanceof kr||e instanceof Sr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Cr(e){return Qe(e/2)}function Fr(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}re(Sr,"BYTES_PER_ELEMENT",4),re(Sr.prototype,"BYTES_PER_ELEMENT",4),re(Sr.prototype,"byteLength",8),re(Sr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),re(Sr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Or=Fr()?Symbol.iterator:null;function Mr(e,r,t){ee(e,r,{configurable:!1,enumerable:!1,get:t})}function Ur(e){return e.re}function Nr(e){return e.im}function Pr(e,r){return new me(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Yr(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Wr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ur(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ir(n))return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ur(n),Nr(n))}return r}function $r(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,ur(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ir(o))return new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ur(o),Nr(o))}return n}function Gr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ir(n=r[i]))return null;e[o]=Ur(n),e[o+1]=Nr(n),o+=2}return e}var Zr=2*me.BYTES_PER_ELEMENT,Xr=Fr();function Jr(e){return e instanceof Hr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function zr(e){return e===Hr||"Complex128Array"===e.name}function qr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Zr}function Dr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Zr}function Hr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Hr))return 0===r?new Hr:1===r?new Hr(arguments[0]):2===r?new Hr(arguments[0],arguments[1]):new Hr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new me(0);else if(1===r)if(ir(arguments[0]))t=new me(2*arguments[0]);else if(fr(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&Ir(t[0])){if(null===(t=Gr(new me(2*n),t))){if(!Cr(n))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(arguments[0])}}else{if(qr(t))t=Pr(t,0);else if(Dr(t))t=Yr(t,0);else if(!Cr(n))throw new RangeError(X("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(t)}else if(cr(arguments[0])){if(!Qe((t=arguments[0]).byteLength/Zr))throw new RangeError(X("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Zr,t.byteLength));t=new me(t)}else{if(!sr(arguments[0]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Xr)throw new TypeError(X("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vr(t[Or]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Vr((t=t[Or]()).next))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Wr(t))instanceof Error)throw t;t=new me(t)}else{if(!cr(t=arguments[0]))throw new TypeError(X("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ir(e=arguments[1]))throw new TypeError(X("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Qe(e/Zr))throw new RangeError(X("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Zr,e));if(2===r){if(!Qe((n=t.byteLength-e)/Zr))throw new RangeError(X("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Zr,n));t=new me(t,e)}else{if(!ir(n=arguments[2]))throw new TypeError(X("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Zr>t.byteLength-e)throw new RangeError(X("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Zr));t=new me(t,e,2*n)}}return re(this,"_buffer",t),re(this,"_length",t.length/2),this}function Kr(e){return e.re}function Qr(e){return e.im}function et(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ur(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ir(n))return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Kr(n),Qr(n))}return r}function rt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,ur(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ir(o))return new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Kr(o),Qr(o))}return n}function tt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ir(n=r[i]))return null;e[o]=Kr(n),e[o+1]=Qr(n),o+=2}return e}re(Hr,"BYTES_PER_ELEMENT",Zr),re(Hr,"name","Complex64Array"),re(Hr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y,p;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Vr(n=arguments[1]))throw new TypeError(X("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Jr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ir(c=n.call(r,e.get(y),y)))o[p]=Ur(c),o[p+1]=Nr(c);else{if(!(ur(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(fr(e)){if(n){for(f=e.length,u=e.get&&e.set?s("default"):h("default"),y=0;y<f;y++)if(!Ir(u(e,y))){l=!0;break}if(l){if(!Cr(f))throw new RangeError(X("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,y=0;y<f;y++)o[y]=n.call(r,u(e,y),y);return i}for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ir(c=n.call(r,u(e,y),y)))o[p]=Ur(c),o[p+1]=Nr(c);else{if(!(ur(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(sr(e)&&Xr&&Vr(e[Or])){if(!Vr((o=e[Or]()).next))throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?$r(o,n,r):Wr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,y=0;y<f;y++)o[y]=a[y];return i}throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),re(Hr,"of",(function(){var e,r;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Mr(Hr.prototype,"buffer",(function(){return this._buffer.buffer})),Mr(Hr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Mr(Hr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),re(Hr.prototype,"BYTES_PER_ELEMENT",Hr.BYTES_PER_ELEMENT),re(Hr.prototype,"copyWithin",(function(e,r){if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),re(Hr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,re(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Sr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),re(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Or&&re(t,Or,(function(){return r.entries()})),t})),re(Hr.prototype,"get",(function(e){var r;if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ir(e))throw new TypeError(X("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Sr((r=this._buffer)[e*=2],r[e+1])})),Mr(Hr.prototype,"length",(function(){return this._length})),re(Hr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ir(t=arguments[1]))throw new TypeError(X("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ir(e)){if(t>=this._length)throw new RangeError(X("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ur(e),void(n[t+1]=Nr(e))}if(Jr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!fr(e))throw new TypeError(X("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ir(e[f])){o=!0;break}if(o){if(!Cr(a))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ur(u),n[t+1]=Nr(u),t+=2}}));var nt=2*se.BYTES_PER_ELEMENT,it=Fr();function ot(e){return e instanceof lt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function at(e){return e===lt||"Complex64Array"===e.name}function ut(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===nt/2}function ft(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===nt}function lt(){var e,r,t,n;if(r=arguments.length,!(this instanceof lt))return 0===r?new lt:1===r?new lt(arguments[0]):2===r?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(ir(arguments[0]))t=new se(2*arguments[0]);else if(fr(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&Ir(t[0])){if(null===(t=tt(new se(2*n),t))){if(!Cr(n))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(arguments[0])}}else{if(ut(t))t=Pr(t,0);else if(ft(t))t=Yr(t,0);else if(!Cr(n))throw new RangeError(X("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(t)}else if(cr(arguments[0])){if(!Qe((t=arguments[0]).byteLength/nt))throw new RangeError(X("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",nt,t.byteLength));t=new se(t)}else{if(!sr(arguments[0]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===it)throw new TypeError(X("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vr(t[Or]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Vr((t=t[Or]()).next))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=et(t))instanceof Error)throw t;t=new se(t)}else{if(!cr(t=arguments[0]))throw new TypeError(X("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ir(e=arguments[1]))throw new TypeError(X("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Qe(e/nt))throw new RangeError(X("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",nt,e));if(2===r){if(!Qe((n=t.byteLength-e)/nt))throw new RangeError(X("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",nt,n));t=new se(t,e)}else{if(!ir(n=arguments[2]))throw new TypeError(X("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*nt>t.byteLength-e)throw new RangeError(X("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*nt));t=new se(t,e,2*n)}}return re(this,"_buffer",t),re(this,"_length",t.length/2),this}re(lt,"BYTES_PER_ELEMENT",nt),re(lt,"name","Complex128Array"),re(lt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y,p;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Vr(n=arguments[1]))throw new TypeError(X("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ot(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ir(c=n.call(r,e.get(y),y)))o[p]=Kr(c),o[p+1]=Qr(c);else{if(!(ur(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(fr(e)){if(n){for(f=e.length,u=e.get&&e.set?s("default"):h("default"),y=0;y<f;y++)if(!Ir(u(e,y))){l=!0;break}if(l){if(!Cr(f))throw new RangeError(X("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,y=0;y<f;y++)o[y]=n.call(r,u(e,y),y);return i}for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ir(c=n.call(r,u(e,y),y)))o[p]=Kr(c),o[p+1]=Qr(c);else{if(!(ur(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(sr(e)&&it&&Vr(e[Or])){if(!Vr((o=e[Or]()).next))throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?rt(o,n,r):et(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,y=0;y<f;y++)o[y]=a[y];return i}throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),re(lt,"of",(function(){var e,r;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Mr(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Mr(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Mr(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),re(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),re(lt.prototype,"copyWithin",(function(e,r){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),re(lt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,re(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new kr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),re(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Or&&re(t,Or,(function(){return r.entries()})),t})),re(lt.prototype,"get",(function(e){var r;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ir(e))throw new TypeError(X("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new kr((r=this._buffer)[e*=2],r[e+1])})),Mr(lt.prototype,"length",(function(){return this._length})),re(lt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ir(t=arguments[1]))throw new TypeError(X("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ir(e)){if(t>=this._length)throw new RangeError(X("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Kr(e),void(n[t+1]=Qr(e))}if(ot(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*nt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!fr(e))throw new TypeError(X("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ir(e[f])){o=!0;break}if(o){if(!Cr(a))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*nt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Kr(u),n[t+1]=Qr(u),t+=2}}));var ct=[se,me,_e,ve,Se,ke,Ge,Oe,Pe,Hr,lt],st=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],yt=st.length;function ht(e){var r,t=function(e){var r;if(f(e))return"generic";if(ne(e))return null;for(r=0;r<yt;r++)if(e instanceof ct[r])return st[r];return ue[ae(e)]||null}(e);return typeof(r=e).get===l&&typeof r.set===l?s(t):h(t)}return function(e,r,t){var n,i,o,a,u,l,c;for(i=e.length,n=ht(e),o={},c=0;c<i;c++)l=n(e,c),u=o[a=r.call(t,l,c,e)],f(u)?u.push(l):o[a]=[l];return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).groupValuesBy=r();
//# sourceMappingURL=browser.js.map
