(this["webpackJsonpexcalidraw-claymate"]=this["webpackJsonpexcalidraw-claymate"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),c=n.n(r),o=(n(46),n(6)),l=n.n(o),u=(n(70),n(4)),d=n(1),s=n.n(d),f=n(2),m=(n(71),n(17)),g=n(38),h=n.n(g),b=function(e){return new Promise((function(t){var n=new h.a;e.forEach((function(t,a){var i=a+1===e.length;n.addFrame(t.imageData,{delay:i?2e3:500})})),n.on("finished",(function(e){Object(m.a)(e,{fileName:"excalidraw-claymate.gif"}).then(t)})),n.render()}))},v=function(){var e=Object(f.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n    <html>\n      <style>\n        svg { width: 100%; height: 100%; }\n      </style>\n      <script>\n        let index = 0;\n        document.addEventListener('DOMContentLoaded', () => {\n          document.getElementById('scene' + index).style.display = 'block';\n        });\n        document.addEventListener('keydown', (event) => {\n          if (event.key === 'ArrowRight' && index < ".concat(t.length-1,") {\n            document.getElementById('scene' + index).style.display = 'none';\n            index += 1;\n            document.getElementById('scene' + index).style.display = 'block';\n          }\n          if (event.key === 'ArrowLeft' && index > 0) {\n            document.getElementById('scene' + index).style.display = 'none';\n            index -= 1;\n            document.getElementById('scene' + index).style.display = 'block';\n          }\n          if (event.key.toLowerCase() === \"f\") {\n            if (document.fullscreenElement === document.body) {\n              document.exitFullscreen();\n            } else {\n              document.body.requestFullscreen();\n            }\n          }\n        });\n      <\/script>\n      <body>\n  "),t.forEach((function(e,t){var a=Object(o.exportToSvg)(e.drawing);a.id="scene".concat(t),a.style.display="none",n+=a.outerHTML})),n+="</body></html>",e.next=5,Object(m.a)(new Blob([n],{type:"text/html"}),{fileName:"excalidraw-claymate.html"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=n(39),y=function(e){var t=e.scene,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(n.current){var e=n.current.getContext("2d");e&&e.putImageData(t.imageData,0,0)}}),[t]),i.a.createElement("canvas",{ref:n,width:t.width,height:t.height})},w=function(e){var t=e.scenes,n=e.currentIndex,r=e.updateScenes,c=e.moveToScene,o=e.addScene,l=function(){var e=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){0===t.length&&o()}),[t,o]),i.a.createElement("div",{className:"Claymate"},i.a.createElement("div",{className:"Claymate-scenes"},t.map((function(e,a){var o="MissingId";return Object(p.isEmpty)(t[a].drawing.elements)||(o=t[a].drawing.elements[0].id),i.a.createElement("div",{key:e.id,className:"Claymate-scene ".concat(a===n?"Claymate-current-scene":""),onClick:function(){return c(a)},"data-testid":o},i.a.createElement(y,{scene:e}),i.a.createElement("button",{type:"button",className:"Claymate-delete","aria-label":"Delete",disabled:t.length<=1,onClick:function(a){a.stopPropagation(),function(e){var a=t.findIndex((function(t){return t.id===e}));if(a>=0){var i=t.length-1;if(i>0){var c;if(void 0!==n){var o=a===n;if(n>a||o){var l=n;o&&(n===i?l=n-1:0===n&&(l=1)),c={index:n>0?n-1:n,drawing:t[l].drawing}}}r((function(t){return t.filter((function(t){return t.id!==e}))}),c)}}}(e.id)}},"\u2716"),i.a.createElement("button",{type:"button",className:"Claymate-left","aria-label":"Move Left",disabled:0===a,onClick:function(n){n.stopPropagation(),function(e){var n=t.findIndex((function(t){return t.id===e}));r((function(e){var t=Object(u.a)(e);return t[n-1]=e[n],t[n]=e[n-1],t}),{index:n-1,drawing:t[n].drawing})}(e.id)}},"\u2b05"),i.a.createElement("button",{type:"button",className:"Claymate-right","aria-label":"Move Right",disabled:a===t.length-1,onClick:function(n){n.stopPropagation(),function(e){var n=t.findIndex((function(t){return t.id===e}));r((function(e){var t=Object(u.a)(e);return t[n+1]=e[n],t[n]=e[n+1],t}),{index:n+1,drawing:t[n].drawing})}(e.id)}},"\u27a1"))}))),i.a.createElement("div",{className:"Claymate-buttons"},i.a.createElement("button",{type:"button",onClick:o},"Add scene"),i.a.createElement("button",{type:"button",onClick:l,disabled:0===t.length},"Export GIF"),i.a.createElement("button",{type:"button",onClick:d,disabled:0===t.length},"Export HTML"),i.a.createElement("button",{type:"button",onClick:function(){r((function(e){return Object(u.a)(e).reverse()}),void 0!==n?{index:t.length-1-n,drawing:t[n].drawing}:void 0)},disabled:t.length<=1},"Reverse order")))},x=n(9),O=n(7),j=n(24),E=n.n(j),C=n(40),S=function(e,t){var n=Object(o.exportToCanvas)({elements:e.elements}),a=t?t.width:n.width,i=t?t.height:n.height,r=n.getContext("2d");if(r)return{id:Object(C.a)(),width:a,height:i,imageData:r.getImageData(0,0,a,i),drawing:e}},k=function(){try{var e,t=JSON.parse(localStorage.getItem("claymate-scenes")||"");if(t&&t.length>0)return t.map((function(t){t.appState.collaborators=new Map;var n=S(t,e?{width:e.width,height:e.height}:void 0);return void 0===e&&(e=n),n}))}catch(i){try{var n=function(){try{var e=JSON.parse(localStorage.getItem("excalidraw-elements")||"");return e.appState.collaborators=new Map,e}catch(t){return null}}();if(n){var a=S(n);if(a)return[a]}}catch(r){}}return null},I=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),c=Object(O.a)(r,2),o=c[0],l=c[1],d=Object(a.useState)(0),s=Object(O.a)(d,2),f=s[0],m=s[1],g=Object(a.useState)([]),h=Object(O.a)(g,2),b=h[0],v=h[1],p=Object(a.useState)(),y=Object(O.a)(p,2),w=y[0],j=y[1];Object(a.useEffect)((function(){if(!n){var e=k();e&&e.length>0&&(v(e),m(0),j(e[0].drawing))}}),[n,i]),Object(a.useEffect)((function(){!function(e){var t=JSON.stringify(e.map((function(e){return e.drawing})));localStorage.setItem("claymate-scenes",t)}(b)}),[b]);var C,I,N=Object(a.useCallback)((function(e){l((function(e){return e+1})),j(e)}),[]),D=Object(a.useCallback)((function(e){N(b[e].drawing),m(e)}),[N,m,b]),M=Object(a.useCallback)((function(e,t){v(e),t&&(N(t.drawing),m(t.index))}),[m,N,v]),B=void 0!==f&&f<b.length?Object(x.a)(Object(x.a)({},b[f]),{},{drawing:w}):void 0;null!=B&&1!==b.length&&(C=B.width,I=B.height),Object(a.useEffect)((function(){if(null!=f&&w){var e=S(w,void 0===C||void 0===I?void 0:{width:C,height:I});e&&M((function(t){var n=Object(u.a)(t);return n[f]=e,n}),void 0)}}),[w,f,b.length,M,C,I]);var L=Object(a.useCallback)((function(){if(w){var e=S(w,b[0]&&{width:b[0].width,height:b[0].height});e&&M((function(t){return[].concat(Object(u.a)(t),[e])}),{index:b.length,drawing:w})}}),[M,b,w]);return{initialised:n,moveToScene:D,addScene:L,onChange:function(e,t){if(null==w||!E()(e,w.elements)||!E()(t,w.appState)){var n={elements:e.map((function(e){return Object(x.a)({},e)})),appState:Object(x.a)({},t)};j(n)}},drawingVersion:o,currentIndex:f,scenes:b,updateScenes:M,initialData:w}},N=function(){var e=I(),t=e.moveToScene,n=e.addScene,a=e.onChange,r=e.drawingVersion,c=e.currentIndex,o=e.initialData,u=e.scenes,d=e.updateScenes;return i.a.createElement("div",{className:"ClaymateApp"},i.a.createElement(l.a,{key:r,initialData:o,onChange:a}),i.a.createElement(w,{scenes:u,currentIndex:c,updateScenes:d,moveToScene:t,addScene:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){e.exports=n(139)},46:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.5b5ce32f.chunk.js.map