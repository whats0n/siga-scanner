(function(e){function r(r){for(var n,c,i=r[0],u=r[1],s=r[2],p=0,d=[];p<i.length;p++)c=i[p],o[c]&&d.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(r);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),e=c(c.s=t[0]))}return e}var n={},o={app:0},a=[];function c(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)c.d(t,n,function(r){return e[r]}.bind(null,n));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=r,i=i.slice();for(var s=0;s<i.length;s++)r(i[s]);var l=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[e.error?t("div",{staticClass:"v-error-message"},[e._v(e._s(e.error))]):e._e(),e.noStreamApiSupport?[t("label",{staticClass:"v-btn-photo"},[t("QrcodeCapture",{on:{detect:e.handleDetect}}),t("span",{staticClass:"v-btn"},[e._v("Scan")])],1)]:[t("button",{staticClass:"v-btn",on:{click:function(r){return r.preventDefault(),e.handleClick(r)}}},[e._v("Scan")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],staticClass:"v-modal"},[e.result?e._e():t("QrcodeDropZone",{staticClass:"v-modal__container",on:{decode:e.handleDecode}},[t("QrcodeStream",{on:{init:e.handleInit,decode:e.handleDecode}})],1)],1)]],2)},a=[],c=(t("7f7f"),t("96cf"),t("3b8d")),i=(t("ac6a"),t("9a3e")),u=document.querySelectorAll(".js-qrcode-info"),s={name:"app",components:{QrcodeStream:i["QrcodeStream"],QrcodeDropZone:i["QrcodeDropZone"],QrcodeCapture:i["QrcodeCapture"]},data:function(){return{result:"",noStreamApiSupport:!1,opened:!1,error:null}},watch:{result:function(e){Array.prototype.forEach.call(u,function(r){r.value=e})}},methods:{handleClick:function(){this.opened=!0,this.result=""},handleDetect:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(r){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:t=e.sent,n=t.content,this.handleDecode(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.handleDecode(null);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function r(r){return e.apply(this,arguments)}return r}(),handleDecode:function(e){this.result=e,this.error=null,e||(this.error="Incorrect picture, we cannot find QR code here. Please try again"),this.opened=!1},handleInit:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:e.next=9;break;case 5:e.prev=5,e.t0=e["catch"](0),"StreamApiNotSupportedError"===e.t0.name&&(this.noStreamApiSupport=!0),"NotAllowedError"===e.t0.name?this.error="ERROR: you need to grant camera access permisson":"NotFoundError"===e.t0.name?this.error="ERROR: no camera on this device":"NotSupportedError"===e.t0.name?this.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===e.t0.name?this.error="ERROR: is the camera already in use?":"OverconstrainedError"===e.t0.name?this.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===e.t0.name&&(this.error="ERROR: Stream API is not supported in this browser");case 9:case"end":return e.stop()}},e,this,[[0,5]])}));function r(r){return e.apply(this,arguments)}return r}()}},l=s,p=(t("5c0b"),t("2877")),d=Object(p["a"])(l,o,a,!1,null,null,null),f=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,r,t){"use strict";var n=t("5e27"),o=t.n(n);o.a},"5e27":function(e,r,t){}});
//# sourceMappingURL=app.b60be138.js.map