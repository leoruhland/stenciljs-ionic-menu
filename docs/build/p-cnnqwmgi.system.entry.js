System.register(["./p-d4bf7031.system.js"],function(t){"use strict";var e,n,i,o,r,s;return{setters:[function(t){e=t.r;n=t.f;i=t.c;o=t.e;r=t.h;s=t.H}],execute:function(){var u=function(){function t(t){e(this,t);this.inputId="ion-selopt-"+c++;this.disabled=false;this.selected=false;this.ionSelectOptionDidLoad=n(this,"ionSelectOptionDidLoad",7);this.ionSelectOptionDidUnload=n(this,"ionSelectOptionDidUnload",7)}t.prototype.componentWillLoad=function(){if(this.value===undefined){this.value=this.el.textContent||""}};t.prototype.componentDidLoad=function(){this.ionSelectOptionDidLoad.emit()};t.prototype.componentDidUnload=function(){this.ionSelectOptionDidUnload.emit()};t.prototype.hostData=function(){var t;var e=i(this);return{role:"option",id:this.inputId,class:(t={},t[e]=true,t)}};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});t.prototype.render=function(){return r(s,this.hostData())};Object.defineProperty(t,"style",{get:function(){return":host{display:none}"},enumerable:true,configurable:true});return t}();t("ion_select_option",u);var c=0}}});