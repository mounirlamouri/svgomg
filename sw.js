(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function handleFontRequest(e){var r,t,n;return regeneratorRuntime.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(caches.match(e));case 2:if(r=s.sent,!r){s.next=5;break}return s.abrupt("return",r);case 5:return s.next=7,regeneratorRuntime.awrap(fetch(e.clone()));case 7:return t=s.sent,s.next=10,regeneratorRuntime.awrap(caches.open("svgomg-fonts"));case 10:return n=s.sent,n.put(e,t.clone()),s.abrupt("return",t);case 13:case"end":return s.stop()}},null,this)}require("babelify/node_modules/babel-core/node_modules/regenerator/runtime"),require("./cache-polyfill");var storage=require("../utils/storage"),version=require("../../changelog.json")[0].version,cacheVerion=version.split(".")[0];self.addEventListener("install",function(e){var r=this;e.waitUntil(function(e){var t,n,s;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return t=storage.get("active-version"),e.next=3,regeneratorRuntime.awrap(caches.open("svgomg-static-"+cacheVerion));case 3:return n=e.sent,e.next=6,regeneratorRuntime.awrap(n.addAll(["./","imgs/icon.png","css/all.css","js/gzip-worker.js","js/page.js","js/prism-worker.js","js/svgo-worker.js","changelog.json",new Request("https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata",{mode:"no-cors"})]));case 6:return e.next=8,regeneratorRuntime.awrap(t);case 8:s=e.sent,s&&s.split(".")[0]!==version.split(".")[0]||self.skipWaiting&&self.skipWaiting();case 10:case"end":return e.stop()}},null,r)}())});var expectedCaches=["svgomg-static-"+cacheVerion];self.addEventListener("activate",function(e){var r=this;e.waitUntil(function(e){var t,n,s,a,c,o,i;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(caches.keys());case 2:t=e.sent,n=!0,s=!1,a=void 0,e.prev=6,c=t[Symbol.iterator]();case 8:if(n=(o=c.next()).done){e.next=18;break}if(i=o.value,/^svgomg-/.test(i)){e.next=12;break}return e.abrupt("continue",15);case 12:if(-1!=expectedCaches.indexOf(i)){e.next=15;break}return e.next=15,regeneratorRuntime.awrap(caches["delete"](i));case 15:n=!0,e.next=8;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](6),s=!0,a=e.t0;case 24:e.prev=24,e.prev=25,!n&&c["return"]&&c["return"]();case 27:if(e.prev=27,!s){e.next=30;break}throw a;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.next=34,regeneratorRuntime.awrap(storage.set("active-version",version));case 34:case"end":return e.stop()}},null,r,[[6,20,24,32],[25,,27,31]])}())}),self.addEventListener("fetch",function(e){var r=new URL(e.request.url);"fonts.gstatic.com"==r.host?e.respondWith(handleFontRequest(e.request)):e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
//# sourceMappingURL=out.js.map

},{"../../changelog.json":4,"../utils/storage":7,"./cache-polyfill":5,"babelify/node_modules/babel-core/node_modules/regenerator/runtime":2}],2:[function(require,module,exports){
(function (process,global){
!function(t){"use strict";function r(t,r,e,o){var i=Object.create((r||n).prototype);return i._invoke=f(t,e||null,new h(o||[])),i}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function n(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(t){this.arg=t}function u(t){function r(r,e){var n=t[r](e),a=n.value;return a instanceof c?Promise.resolve(a.arg).then(o,i):Promise.resolve(a).then(function(t){return n.value=t,n})}function e(t,e){var o=n?n.then(function(){return r(t,e)}):new Promise(function(n){n(r(t,e))});return n=o["catch"](function(t){}),o}"object"==typeof process&&process.domain&&(r=process.domain.bind(r));var n,o=r.bind(t,"next"),i=r.bind(t,"throw");r.bind(t,"return");this._invoke=e}function f(t,r,n){var o=L;return function(i,a){if(o===b)throw new Error("Generator is already running");if(o===E){if("throw"===i)throw a;return y()}for(;;){var c=n.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===v){n.delegate=null;var u=c.iterator["return"];if(u){var f=e(u,c.iterator,a);if("throw"===f.type){i="throw",a=f.arg;continue}}if("return"===i)continue}var f=e(c.iterator[i],c.iterator,a);if("throw"===f.type){n.delegate=null,i="throw",a=f.arg;continue}i="next",a=v;var l=f.arg;if(!l.done)return o=x,l;n[c.resultName]=l.value,n.next=c.nextLoc,n.delegate=null}if("next"===i)o===x?n.sent=a:n.sent=v;else if("throw"===i){if(o===L)throw o=E,a;n.dispatchException(a)&&(i="next",a=v)}else"return"===i&&n.abrupt("return",a);o=b;var f=e(t,r,n);if("normal"===f.type){o=n.done?E:x;var l={value:f.arg,done:n.done};if(f.arg!==j)return l;n.delegate&&"next"===i&&(a=v)}else"throw"===f.type&&(o=E,i="throw",a=f.arg)}}}function l(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function s(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var r=t[g];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function o(){for(;++e<t.length;)if(d.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=v,o.done=!0,o};return n.next=n}}return{next:y}}function y(){return{value:v,done:!0}}var v,d=Object.prototype.hasOwnProperty,g="function"==typeof Symbol&&Symbol.iterator||"@@iterator",w="object"==typeof module,m=t.regeneratorRuntime;if(m)return void(w&&(module.exports=m));m=t.regeneratorRuntime=w?module.exports:{},m.wrap=r;var L="suspendedStart",x="suspendedYield",b="executing",E="completed",j={},k=i.prototype=n.prototype;o.prototype=k.constructor=i,i.constructor=o,o.displayName="GeneratorFunction",m.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return r?r===o||"GeneratorFunction"===(r.displayName||r.name):!1},m.mark=function(t){return t.__proto__=i,t.prototype=Object.create(k),t},m.awrap=function(t){return new c(t)},a(u.prototype),m.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return m.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(k),k[g]=function(){return this},k.toString=function(){return"[object Generator]"},m.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},m.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=v,this.done=!1,this.delegate=null,this.tryEntries.forEach(s),!t)for(var r in this)"t"===r.charAt(0)&&d.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=d.call(o,"catchLoc"),c=d.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&d.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?this.next=o.finallyLoc:this.complete(i),j},complete:function(t,r){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&r&&(this.next=r)},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),s(e),j}},"catch":function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;s(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:p(t),resultName:r,nextLoc:e},j}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":3}],3:[function(require,module,exports){
function drainQueue(){if(!draining){draining=!0;for(var e,o=queue.length;o;){e=queue,queue=[];for(var r=-1;++r<o;)e[r]();o=queue.length}draining=!1}}function noop(){}var process=module.exports={},queue=[],draining=!1;process.nextTick=function(e){queue.push(e),draining||setTimeout(drainQueue,0)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],4:[function(require,module,exports){
module.exports=[
  {
    "version": "1.5.0",
    "changes": [
      "Updating SVGO"
    ]
  },
  {
    "version": "1.4.3",
    "changes": [
      "Fixing layout in Chrome beta."
    ]
  },
  {
    "version": "1.4.2",
    "changes": [
      "Better cache cleanup."
    ]
  },
  {
    "version": "1.4.1",
    "changes": [
      "Fixes to 'remove hidden items'."
    ]
  },
  {
    "version": "1.4.0",
    "changes": [
      "Updated to SVGO v0.5.1, bringing:",
      "Remove useless defs option.",
      "Round number in number lists.",
      "And loads of fixes!"
    ]
  },
  {
    "version": "1.3.0",
    "changes": [
      "Using manifest spec for icons etc."
    ]
  },
  {
    "version": "1.2.4",
    "changes": [
      "Download button now works in IE."
    ]
  },
  {
    "version": "1.2.3",
    "changes": [
      "Fixing bug introduced by browserify."
    ]
  },
  {
    "version": "1.2.2",
    "changes": [
      "Better font loading."
    ]
  },
  {
    "version": "1.2.1",
    "changes": [
      "Lots of performance improvements."
    ]
  },
  {
    "version": "1.2.0",
    "changes": [
      "Code view.",
      "Prettify code option."
    ]
  },
  {
    "version": "1.1.7",
    "changes": [
      "Performance improvements."
    ]
  },
  {
    "version": "1.1.6",
    "changes": [
      "Fix zooming with mouse wheels."
    ]
  },
  {
    "version": "1.1.5",
    "changes": [
      "Removing erroneous scrollbars in Firefox."
    ]
  },
  {
    "version": "1.1.4",
    "changes": [
      "Fixed 'about' link."
    ]
  },
  {
    "version": "1.1.3",
    "changes": [
      "Reverting some painting stuff until I get a handle on the performance.",
      "Using simpler demo SVG."
    ]
  },
  {
    "version": "1.1.2",
    "changes": [
      "Sharper rendering on desktop Chrome & Safari.",
      "Fixed right mouse button issue."
    ]
  },
  {
    "version": "1.1.1",
    "changes": [
      "Reset zooming on image load."
    ]
  },
  {
    "version": "1.1.0",
    "changes": [
      "Click/touch and drag panning.",
      "Pinch zooming.",
      "Wheel zooming."
    ]
  },
  {
    "version": "1.0.4",
    "changes": [
      "Fixing checkered background in IE.",
      "Improving slider touch interaction."
    ]
  },
  {
    "version": "1.0.3",
    "changes": [
      "Fixing SVG output in Firefox."
    ]
  },
  {
    "version": "1.0.2",
    "changes": [
      "Caching fonts for offline use.",
      "Removing tap delay on iPhone/iPad.",
      "Fixing iOS add-to-homescreen.",
      "Better mobile demo image."
    ]
  },
  {
    "version": "1.0.1",
    "changes": [
      "Layout fixes.",
      "Better mobile keyboard handling.",
      "A lighter demo SVG for mobile.",
      "Fixing drag & drop."
    ]
  },
  {
    "version": "1.0.0",
    "changes": [
      "First release."
    ]
  }
]
},{}],5:[function(require,module,exports){
"use strict";Cache.prototype.add||(Cache.prototype.add=function(t){return this.addAll([t])}),Cache.prototype.addAll||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(e){return Promise.all(e.map(function(e,n){return r.put(t[n],e)}))}).then(function(){return void 0})}),CacheStorage.prototype.match||(CacheStorage.prototype.match=function(t,e){var r=this;return this.keys().then(function(n){var o;return n.reduce(function(n,u){return n.then(function(){return o||r.open(u).then(function(r){return r.match(t,e)}).then(function(t){return o=t})})},Promise.resolve())})}),module.exports=self.caches;
//# sourceMappingURL=out.js.map

},{}],6:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function promisifyRequest(e){return new Promise(function(t,n){function r(n){t(e.result),i()}function o(t){n(e.error),i()}function i(){e.removeEventListener("complete",r),e.removeEventListener("success",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)}e.addEventListener("complete",r),e.addEventListener("success",r),e.addEventListener("error",o),e.addEventListener("abort",o)})}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),IndexedDouchebag=function(){function e(t,n,r){_classCallCheck(this,e);var o=indexedDB.open(t,n);this.ready=promisifyRequest(o),o.onupgradeneeded=function(e){r(o.result,e.oldVersion)}}return _createClass(e,[{key:"transaction",value:function(e,t,n){return this.ready.then(function(r){var o="readonly";t.apply?n=t:t&&(o=t);var i,u=r.transaction(e,o),a=n(u,r),s=promisifyRequest(u);return a?(i=a[0]&&"result"in a[0]?Promise.all(a.map(promisifyRequest)):promisifyRequest(a),s.then(function(){return i})):s})}},{key:"get",value:function(e,t){return this.transaction(e,function(n){return n.objectStore(e).get(t)})}},{key:"put",value:function(e,t,n){return this.transaction(e,"readwrite",function(r){r.objectStore(e).put(n,t)})}},{key:"delete",value:function(e,t){return this.transaction(e,"readwrite",function(n){n.objectStore(e)["delete"](t)})}}]),e}();module.exports=IndexedDouchebag;
//# sourceMappingURL=out.js.map

},{}],7:[function(require,module,exports){
"use strict";function getIdb(){return idb||(idb=new Idb("svgo-keyval",1,function(e){e.createObjectStore("keyval")})),idb}var Idb=require("./indexeddouchbag"),idb;self.indexedDB?module.exports={get:function(e){return getIdb().get("keyval",e)},set:function(e,t){return getIdb().put("keyval",e,t)},"delete":function(e){return getIdb()["delete"]("keyval",e)}}:module.exports={get:function(e){return Promise.resolve(localStorage.getItem(e))},set:function(e,t){return Promise.resolve(localStorage.setItem(e,t))},"delete":function(e){return Promise.resolve(localStorage.removeItem(e))}};
//# sourceMappingURL=out.js.map

},{"./indexeddouchbag":6}]},{},[1])


//# sourceMappingURL=sw.js.map