import{r as n,c as i,d as t,h as s,H as e}from"./p-212d0ebd.js";import{s as o}from"./p-8d8e0c6f.js";class r{constructor(i){n(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const n=i(this);this.loadingSpinner=t.get("infiniteLoadingSpinner",t.get("spinner","ios"===n?"lines":"crescent"))}}hostData(){const n=i(this);return{class:{[n]:!0,[`infinite-scroll-content-${n}`]:!0}}}__stencil_render(){return s("div",{class:"infinite-loading"},this.loadingSpinner&&s("div",{class:"infinite-loading-spinner"},s("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&s("div",{class:"infinite-loading-text",innerHTML:o(this.loadingText)}))}render(){return s(e,this.hostData(),this.__stencil_render())}static get style(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}export{r as ion_infinite_scroll_content};