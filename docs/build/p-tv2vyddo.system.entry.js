System.register(["./p-d4bf7031.system.js","./p-02683056.system.js"],function(n){"use strict";var t,i,e,r,o,s;return{setters:[function(n){t=n.r;i=n.c;e=n.d;r=n.h;o=n.H},function(n){s=n.s}],execute:function(){var c=function(){function n(n){t(this,n)}n.prototype.componentDidLoad=function(){if(this.loadingSpinner===undefined){var n=i(this);this.loadingSpinner=e.get("infiniteLoadingSpinner",e.get("spinner",n==="ios"?"lines":"crescent"))}};n.prototype.hostData=function(){var n;var t=i(this);return{class:(n={},n[t]=true,n["infinite-scroll-content-"+t]=true,n)}};n.prototype.__stencil_render=function(){return r("div",{class:"infinite-loading"},this.loadingSpinner&&r("div",{class:"infinite-loading-spinner"},r("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&r("div",{class:"infinite-loading-text",innerHTML:s(this.loadingText)}))};n.prototype.render=function(){return r(o,this.hostData(),this.__stencil_render())};Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:true,configurable:true});return n}();n("ion_infinite_scroll_content",c)}}});