import{r as e,f as t,c as i,h as s,H as h,e as c}from"./p-212d0ebd.js";import{f as n,b as o}from"./p-c1fca2fc.js";import{c as a,h as d}from"./p-20d65ce5.js";class l{constructor(i){e(this,i),this.inputId=`ion-cb-${r++}`,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=t(this,"ionChange",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7),this.ionStyle=t(this,"ionStyle",7)}componentWillLoad(){this.emitStyle()}checkedChanged(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:e,indeterminate:t,disabled:c,checked:l,value:r,color:u,el:b}=this,m=e+"-lbl",k=i(this),p=n(b);p&&(p.id=m),o(!0,b,this.name,l?r:"",c);let g=s("path",t?{d:"M6 12L18 12"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===k&&(g=s("path",t?{d:"M2 12H22"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),s(h,{onClick:this.onClick,role:"checkbox","aria-disabled":c?"true":null,"aria-checked":`${l}`,"aria-labelledby":m,class:Object.assign({},a(u),{[k]:!0,"in-item":d("ion-item",b),"checkbox-checked":l,"checkbox-disabled":c,"checkbox-indeterminate":t,interactive:!0})},s("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},g),s("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:e=>this.buttonEl=e}))}get el(){return c(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"}}let r=0;export{l as ion_checkbox};