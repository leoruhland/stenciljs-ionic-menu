import{r as t,c as i,f as e,d as a,h as s,e as n}from"./p-212d0ebd.js";import{t as o}from"./p-abb02dce.js";import{a as r,d as h}from"./p-8aba239f.js";class l{constructor(a){t(this,a),this.mode=i(this),this.animated=!0,this.ionNavWillLoad=e(this,"ionNavWillLoad",7),this.ionNavWillChange=e(this,"ionNavWillChange",3),this.ionNavDidChange=e(this,"ionNavDidChange",3)}swipeHandlerChanged(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}componentWillLoad(){this.ionNavWillLoad.emit()}async componentDidLoad(){this.gesture=(await __sc_import_app("./p-5058b25b.js")).createSwipeBackGesture(this.el,()=>!!this.swipeHandler&&this.swipeHandler.canStart(),()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,i,e)=>{this.ani&&this.ani.progressEnd(t,i,e),this.swipeHandler&&this.swipeHandler.onEnd(t)}),this.swipeHandlerChanged()}componentDidUnload(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,i,e){const a=await this.lock();let s=!1;try{s=await this.transition(t,i,e)}catch(t){console.error(t)}return a(),s}async setRouteId(t,i,e){return{changed:await this.setRoot(t,i,{duration:"root"===e?0:void 0,direction:"back"===e?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,i,e){if(this.activeComponent===t)return!1;const a=this.activeEl,s=await r(this.delegate,this.el,t,["ion-page","ion-page-invisible"],i);return this.activeComponent=t,this.activeEl=s,await this.commit(s,a,e),await h(this.delegate,a),!0}async transition(t,i,e={}){if(i===t)return!1;this.ionNavWillChange.emit();const{el:s,mode:n}=this,r=this.animated&&a.getBoolean("animated",!0),h=this.animation||e.animationBuilder||a.get("navAnimation");return await o(Object.assign({mode:n,animated:r,animationBuilder:h,enteringEl:t,leavingEl:i,baseEl:s,progressCallback:e.progressAnimation?t=>this.ani=t:void 0},e)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let i;return this.waitPromise=new Promise(t=>i=t),void 0!==t&&await t,i}render(){return s("slot",null)}get el(){return n(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}export{l as ion_router_outlet};