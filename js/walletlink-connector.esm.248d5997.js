parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gSIY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WalletLinkConnector=void 0;var e=require("@web3-react/abstract-connector");function r(){return(r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function t(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,n(e,r)}function n(e,r){return(n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=1,a=function(e){function n(r){var t,n=r.url,i=r.appName,a=r.appLogoUrl,c=r.darkMode,u=r.supportedChainIds;return(t=e.call(this,{supportedChainIds:u})||this).url=n,t.appName=i,t.appLogoUrl=a,t.darkMode=c||!1,t.handleChainChanged=t.handleChainChanged.bind(o(t)),t.handleAccountsChanged=t.handleAccountsChanged.bind(o(t)),t}t(n,e);var a=n.prototype;return a.activate=function(){try{var e=this,t=function(){return Promise.resolve(e.provider.request({method:"eth_requestAccounts"})).then(function(r){var t=r[0];return e.provider.on("chainChanged",e.handleChainChanged),e.provider.on("accountsChanged",e.handleAccountsChanged),{provider:e.provider,account:t}})},n=function(){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)e.provider=window.ethereum;else{var t=function(){if(!e.walletLink)return Promise.resolve(require("_bundle_loader")(require.resolve("walletlink")).then(function(e){var r;return null!=(r=null==e?void 0:e.default)?r:e})).then(function(t){e.walletLink=new t(r({appName:e.appName,darkMode:e.darkMode},e.appLogoUrl?{appLogoUrl:e.appLogoUrl}:{})),e.provider=e.walletLink.makeWeb3Provider(e.url,i)})}();if(t&&t.then)return t.then(function(){})}}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},a.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},a.getChainId=function(){try{return Promise.resolve(this.provider.chainId)}catch(e){return Promise.reject(e)}},a.getAccount=function(){try{return Promise.resolve(this.provider.request({method:"eth_requestAccounts"})).then(function(e){return e[0]})}catch(e){return Promise.reject(e)}},a.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},a.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},a.handleChainChanged=function(e){this.emitUpdate({chainId:e})},a.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},n}(e.AbstractConnector);exports.WalletLinkConnector=a;
},{"@web3-react/abstract-connector":"xxwS","_bundle_loader":"TUK3","walletlink":[["dist.7d9c3ef0.js","mpMC"],"mpMC"]}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));b.load([]).then(function(){require("gSIY");});
},{}]},{},[0], null)