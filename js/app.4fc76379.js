(function(e){function t(t){for(var r,a,u=t[0],i=t[1],p=t[2],l=0,d=[];l<u.length;l++)a=u[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("p",{staticClass:"decode-result"},[e._v("Last result: "),n("b",[e._v(e._s(e.result))])]),e.noStreamApiSupport?[n("QrcodeCapture",{on:{decode:e.onDecode}})]:[n("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}},[e._v("Scan")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],staticClass:"v-modal"},[n("QrcodeDropZone",{staticClass:"v-modal__container",on:{decode:e.onDecode}},[n("QrcodeStream",{on:{init:e.onInit,decode:e.onDecode}})],1)],1)]],2)},c=[],a=(n("7f7f"),n("96cf"),n("3b8d")),u=(n("ac6a"),n("9a3e")),i=document.querySelectorAll(".js-qrcode-info"),p={name:"app",components:{QrcodeStream:u["QrcodeStream"],QrcodeDropZone:u["QrcodeDropZone"],QrcodeCapture:u["QrcodeCapture"]},data:function(){return{result:"",noStreamApiSupport:!1,opened:!1}},watch:{result:function(e){Array.prototype.forEach.call(i,function(t){t.value=e})}},methods:{handleClick:function(){this.opened=!0},onDecode:function(e){this.opened=!1,this.result=e},onInit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),"StreamApiNotSupportedError"===e.t0.name&&(this.noStreamApiSupport=!0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(t){return e.apply(this,arguments)}return t}()}},s=p,l=(n("5c0b"),n("2877")),d=Object(l["a"])(s,o,c,!1,null,null,null),f=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.4fc76379.js.map