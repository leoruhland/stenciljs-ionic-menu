System.register(["./p-d4bf7031.system.js"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){function r(){return Math.random()<.5?"Hello":"Hola"}var o=function(){function t(t){e(this,t);this.state=false}t.prototype.formattedName=function(){if(this.name){return this.name.substr(0,1).toUpperCase()+this.name.substr(1).toLowerCase()}return""};t.prototype.render=function(){var t=this;return[n("ion-header",null,n("ion-toolbar",{color:"primary"},n("ion-buttons",{slot:"start"},n("ion-back-button",{defaultHref:"/"})),n("ion-title",null,"Profile: ",this.name))),n("ion-content",{class:"ion-padding"},n("p",null,r(),"! My name is ",this.formattedName(),". My name was passed in through a route param!"),n("ion-item",null,n("ion-label",null,"Setting (",this.state.toString(),")"),n("ion-toggle",{checked:this.state,onIonChange:function(e){return t.state=e.detail.checked}})))]};Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}();t("app_profile",o)}}});