import"./p-212d0ebd.js";import{createGesture as t}from"./p-095752cd.js";const e=(e,o,n,r,a)=>{const i=e.ownerDocument.defaultView;return t({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&o(),onStart:n,onMove:t=>{r(t.deltaX/i.innerWidth)},onEnd:t=>{const e=i.innerWidth,o=t.deltaX/e,n=t.velocityX,r=n>=0&&(n>.2||t.deltaX>e/2),s=(r?1-o:o)*e;let d=0;if(s>5){const t=s/Math.abs(n);d=Math.min(t,300)}a(r,o,d)}})};export{e as createSwipeBackGesture};