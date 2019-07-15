import{r as e,f as t,c as s,h as i,H as a,e as n}from"./p-212d0ebd.js";import{f as l,b as o}from"./p-c1fca2fc.js";import{h}from"./p-20d65ce5.js";import{f as r,h as c,j as d}from"./p-d50d6489.js";class p{constructor(s){e(this,s),this.childOpts=[],this.inputId=`ion-sel-${f++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=e=>{this.setFocus(),this.open(e)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=t(this,"ionChange",7),this.ionCancel=t(this,"ionCancel",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7),this.ionStyle=t(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.didInit&&(this.updateOptions(),this.ionChange.emit({value:this.value}),this.emitStyle())}async selectOptionChanged(){await this.loadOptions(),this.didInit&&(this.updateOptions(),this.updateOverlayOptions(),this.emitStyle(),void 0!==this.value&&this.el.forceUpdate())}async componentDidLoad(){if(await this.loadOptions(),void 0===this.value)if(this.multiple){const e=this.childOpts.filter(e=>e.selected);this.value=e.map(e=>e.value)}else{const e=this.childOpts.find(e=>e.selected);e&&(this.value=e.value)}this.updateOptions(),this.emitStyle(),this.el.forceUpdate(),this.didInit=!0}async open(e){if(this.disabled||this.isExpanded)return;const t=this.overlay=await this.createOverlay(e);return this.isExpanded=!0,t.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await t.present(),t}createOverlay(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}updateOverlayOptions(){if(!this.overlay)return;const e=this.overlay;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(this.childOpts);break;case"popover":const t=e.querySelector("ion-select-popover");t&&(t.options=this.createPopoverOptions(this.childOpts));break;default:e.inputs=this.createAlertInputs(this.childOpts,this.multiple?"checkbox":"radio")}}createActionSheetButtons(e){const t=e.map(e=>({role:e.selected?"selected":"",text:e.textContent,handler:()=>{this.value=e.value}}));return t.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),t}createAlertInputs(e,t){return e.map(e=>({type:t,label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled}))}createPopoverOptions(e){return e.map(e=>({text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:()=>{this.value=e.value,this.close()}}))}async openPopover(e){const t=this.interfaceOptions,i=s(this),a=Object.assign({mode:i},t,{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.createPopoverOptions(this.childOpts)}});return r.create(a)}async openActionSheet(){const e=s(this),t=this.interfaceOptions,i=Object.assign({mode:e},t,{buttons:this.createActionSheetButtons(this.childOpts),cssClass:["select-action-sheet",t.cssClass]});return c.create(i)}async openAlert(){const e=this.getLabel(),t=e?e.textContent:null,i=this.interfaceOptions,a=this.multiple?"checkbox":"radio",n=s(this),l=Object.assign({mode:n},i,{header:i.header?i.header:t,inputs:this.createAlertInputs(this.childOpts,a),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return d.create(l)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}async loadOptions(){this.childOpts=await Promise.all(Array.from(this.el.querySelectorAll("ion-select-option")).map(e=>e.componentOnReady()))}updateOptions(){let e=!0;for(const t of this.childOpts){const s=e&&v(this.value,t.value,this.compareWith);t.selected=s,s&&!this.multiple&&(e=!1)}}getLabel(){return l(this.el)}hasValue(){return""!==this.getText()}getText(){const e=this.selectedText;return null!=e&&""!==e?e:b(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:e,name:t,disabled:n,isExpanded:r,value:c,el:d}=this,p=s(this),v=this.inputId+"-lbl",m=l(d);m&&(m.id=v);let b=!1,y=this.getText();""===y&&null!=e&&(y=e,b=!0),o(!0,d,t,u(c),n);const f={"select-text":!0,"select-placeholder":b};return i(a,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":n?"true":null,"aria-expanded":`${r}`,"aria-labelledby":v,class:{[p]:!0,"in-item":h("ion-item",d),"select-disabled":n}},i("div",{class:f},y),i("div",{class:"select-icon",role:"presentation"},i("div",{class:"select-icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:n,ref:e=>this.buttonEl=e}))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"}}const u=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},v=(e,t,s)=>void 0!==e&&(Array.isArray(e)?e.some(e=>m(e,t,s)):m(e,t,s)),m=(e,t,s)=>"function"==typeof s?s(e,t):"string"==typeof s?e[s]===t[s]:e===t,b=(e,t,s)=>void 0===t?"":Array.isArray(t)?t.map(t=>y(e,t,s)).filter(e=>null!==e).join(", "):y(e,t,s)||"",y=(e,t,s)=>{const i=e.find(e=>m(e.value,t,s));return i?i.textContent:null};let f=0;export{p as ion_select};