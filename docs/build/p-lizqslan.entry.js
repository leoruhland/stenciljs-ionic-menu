import{r as t,h as e}from"./p-212d0ebd.js";class a{constructor(e){t(this,e),this.state=!1}formattedName(){return this.name?this.name.substr(0,1).toUpperCase()+this.name.substr(1).toLowerCase():""}render(){return[e("ion-header",null,e("ion-toolbar",{color:"primary"},e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Profile: ",this.name))),e("ion-content",{class:"ion-padding"},e("p",null,Math.random()<.5?"Hello":"Hola","! My name is ",this.formattedName(),". My name was passed in through a route param!"),e("ion-item",null,e("ion-label",null,"Setting (",this.state.toString(),")"),e("ion-toggle",{checked:this.state,onIonChange:t=>this.state=t.detail.checked})))]}static get style(){return""}}export{a as app_profile};