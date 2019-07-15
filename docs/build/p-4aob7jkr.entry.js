import{r as e,c as s,f as t,h as i,e as o,H as r}from"./p-212d0ebd.js";import{g as a}from"./p-20d65ce5.js";import{d as n}from"./p-abb02dce.js";import{a as d,d as l}from"./p-8aba239f.js";import{B as c,p as m,d as p,e as h}from"./p-d50d6489.js";const u=(e,s)=>{const t=new e,i=new e;i.addElement(s.querySelector("ion-backdrop"));const o=new e;return o.addElement(s.querySelector(".modal-wrapper")),o.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),i.fromTo("opacity",.01,.4),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(i).add(o))},w=(e,s)=>{const t=new e,i=new e;i.addElement(s.querySelector("ion-backdrop"));const o=new e,r=s.querySelector(".modal-wrapper");o.addElement(r);const a=r.getBoundingClientRect();return o.beforeStyles({opacity:1}).fromTo("translateY","0%",`${s.ownerDocument.defaultView.innerHeight-a.top}px`),i.fromTo("opacity",.4,0),Promise.resolve(t.addElement(s).easing("ease-out").duration(250).add(i).add(o))},b=(e,s)=>{const t=new e,i=new e;i.addElement(s.querySelector("ion-backdrop"));const o=new e;return o.addElement(s.querySelector(".modal-wrapper")),o.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),i.fromTo("opacity",.01,.32),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(i).add(o))},f=(e,s)=>{const t=new e,i=new e;i.addElement(s.querySelector("ion-backdrop"));const o=new e,r=s.querySelector(".modal-wrapper");return o.addElement(r),o.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),i.fromTo("opacity",.32,0),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(i).add(o))};class y{constructor(i){e(this,i),this.presented=!1,this.mode=s(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.didPresent=t(this,"ionModalDidPresent",7),this.willPresent=t(this,"ionModalWillPresent",7),this.willDismiss=t(this,"ionModalWillDismiss",7),this.didDismiss=t(this,"ionModalDidDismiss",7)}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,c)}lifecycle(e){const s=this.usersElement,t=D[e.type];if(s&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});s.dispatchEvent(i)}}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const s=Object.assign({},this.componentProps,{modal:this.el});return this.usersElement=await d(this.delegate,e,this.component,["ion-page"],s),await n(this.usersElement),m(this,"modalEnter",u,b)}async dismiss(e,s){const t=await p(this,e,s,"modalLeave",w,f);return t&&await l(this.delegate,this.usersElement),t}onDidDismiss(){return h(this.el,"ionModalDidDismiss")}onWillDismiss(){return h(this.el,"ionModalWillDismiss")}hostData(){const e=s(this);return{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0},a(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}__stencil_render(){const e={"modal-wrapper":!0,[s(this)]:!0};return[i("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),i("div",{role:"dialog",class:e})]}get el(){return o(this)}render(){return i(r,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"}}const D={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};export{y as ion_modal};