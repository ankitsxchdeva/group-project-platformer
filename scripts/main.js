'use strict';function v(f,l,g,k){f.f.fa(f.H,l,g,k,void 0)}function y(f,l,g,k){f.f.i?v(f,l,g,k):f.f.qb()._OnMessageFromDOM({type:"event",component:f.H,handler:l,dispatchOpts:k||null,data:g,responseId:null})}function I(f,l,g){f.f.b(f.H,l,g)}function L(f,l){for(const [g,k]of l)I(f,g,k)}window.da=class{constructor(f,l){this.f=f;this.H=l}Aa(){}};
window.fb=class{constructor(f,l){this.Ra=f;this.Yb=l;this.A=-1;this.W=-Infinity;this.cc=()=>{this.A=-1;this.W=Date.now();this.I=!0;this.Ra();this.I=!1};this.Sa=this.I=!1}};"use strict";function M(f,l){const g=l.elementId,k=f.Ca(g,l);f.h.set(g,k);l.isVisible||(k.style.display="none");l=f.ia(k);l.addEventListener("focus",()=>{N(f,"elem-focused",g)});l.addEventListener("blur",()=>{N(f,"elem-blurred",g)});f.T&&document.body.appendChild(k)}
function P(f,l){I(f,"get-element",g=>{const k=f.h.get(g.elementId);return l(k,g)})}function N(f,l,g){var k;k||(k={});k.elementId=g;v(f,l,k)}
window.Za=class extends self.da{constructor(f,l){super(f,l);this.h=new Map;this.T=!0;L(this,[["create",g=>M(this,g)],["destroy",g=>{{g=g.elementId;const k=this.h.get(g);this.T&&k.parentElement.removeChild(k);this.h.delete(g)}}],["set-visible",g=>{this.T&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.T){var k=this.h.get(g.elementId);k.style.left=g.left+"px";k.style.top=g.top+"px";k.style.width=g.width+"px";k.style.height=g.height+"px";g=g.fontSize;null!==
g&&(k.style.fontSize=g+"em")}}],["update-state",g=>{{const k=this.h.get(g.elementId);this.ga(k,g)}}],["focus",g=>{{const k=this.ia(this.h.get(g.elementId));g.focus?k.focus():k.blur()}}],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);P(this,g=>g)}Ca(){throw Error("required override");}ga(){throw Error("required override");}ia(f){return f}};
"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let l=0;function g(h){const a=document.createElement("script");a.async=!1;a.type="module";return h.ic?new Promise(d=>{const e="c3_resolve_"+l;++l;self[e]=d;a.textContent=h.lc+`\n\nself["${e}"]();`;document.head.appendChild(a)}):new Promise((d,e)=>{a.onload=d;a.onerror=e;a.src=h;document.head.appendChild(a)})}let k=!1,p=!1;function z(){if(!k){try{new Worker("blob://",{get type(){p=!0}})}catch(h){}k=!0}return p}const J=
/safari\//i.test(navigator.userAgent)&&!/chrome\/|chromium\/|edg\//i.test(navigator.userAgent);let w=new Audio;const A={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus")&&!J,"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function K(h){h=
await F(h);return(new TextDecoder("utf-8")).decode(h)}function F(h){return new Promise((a,d)=>{const e=new FileReader;e.onload=m=>a(m.target.result);e.onerror=m=>d(m);e.readAsArrayBuffer(h)})}const x=[];let B=0;window.RealFile=window.File;const C=[],t=new Map,D=new Map;let E=0;const G=[];self.runOnStartup=function(h){if("function"!==typeof h)throw Error("runOnStartup called without a function");G.push(h)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.O=class h{constructor(a){this.i=
a.nc;this.K=null;this.c="";this.Z=a.kc;this.N={};this.ta=this.Wa=null;this.U=[];this.J=this.g=this.wa=null;this.u=-1;this.bc=()=>this.Kb();this.Va=[];this.a=a.Xa;this.V="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&z()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(/android/i.test(navigator.userAgent)){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],
10)||(this.i=!1)}else this.i=!1;this.X=this.j=null;"html5"!==this.a&&"playable-ad"!==this.a||!this.V||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.b("runtime","cordova-fetch-local-file",d=>this.xb(d));this.b("runtime","create-job-worker",()=>this.yb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ga(a)):this.Ga(a)}bb(){return f&&"cordova"===this.a}ea(){const a=
navigator.userAgent;return f&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}async Ga(a){"macos-wkwebview"===this.a&&this.Vb();if("playable-ad"===this.a){this.j=self.c3_base64files;this.X={};await this.lb();for(let e=0,m=a.B.length;e<m;++e){var d=a.B[e].toLowerCase();this.X.hasOwnProperty(d)?a.B[e]={ic:!0,lc:this.X[d]}:this.j.hasOwnProperty(d)&&(a.B[e]=URL.createObjectURL(this.j[d]))}}a.dc?this.c=a.dc:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,
d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.pc&&(this.N=a.pc);d=new MessageChannel;this.K=d.port1;this.K.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Hb(e));this.J=new self.cb(this);await Q(this.J);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.sb(a,d.port2):await this.rb(a,d.port2)}ja(a){a=
this.N.hasOwnProperty(a)?this.N[a]:a.endsWith("/workermain.js")&&this.N.hasOwnProperty("workermain.js")?this.N["workermain.js"]:"playable-ad"===this.a&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ca(a,d,e){if(a.startsWith("blob:"))return new Worker(a,e);if("cordova"===this.a&&this.V)return a=await this.ba(e.hc?a:this.Z+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,d);
if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}m(){return Math.max(window.innerWidth,1)}l(){return Math.max(window.innerHeight,1)}Ea(a){var d=this.J;return{baseUrl:this.c,windowInnerWidth:this.m(),windowInnerHeight:this.l(),devicePixelRatio:window.devicePixelRatio,isFullscreen:h.C(),projectData:a.uc,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,
previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.sc||"",exportType:a.Xa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.tc,jobScheduler:{inputPort:d.ra,outputPort:d.va,maxNumWorkers:d.$b},supportedAudioFormats:A,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.Z+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.Z+"opus.wasm.wasm",isFileProtocol:this.V,isiOSCordova:this.bb(),isiOSWebView:this.ea(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async sb(a,
d){var e=this.ja(a.oc);this.Wa=await this.ca(e,this.c,{type:"module",name:"Runtime",hc:!0});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let m=a.za||[],r=a.B;m=await Promise.all(m.map(n=>this.s(n)));r=await Promise.all(r.map(n=>this.s(n)));if("cordova"===this.a)for(let n=0,q=a.$.length;n<q;++n){const u=a.$[n],H=u[0];if(H===a.ya||"scriptsInEvents.js"===H||H.endsWith("/scriptsInEvents.js"))u[1]=
await this.s(H)}this.Wa.postMessage(Object.assign(this.Ea(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:m,engineScripts:r,projectScripts:a.$,mainProjectScript:a.ya,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...R(this.J)]);this.U=C.map(n=>new n(this));this.Da();self.c3_callFunction=(n,q)=>this.wa.tb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async rb(a,d){this.g=document.createElement("canvas");
this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.U=C.map(n=>new n(this));this.Da();var e=a.B.map(n=>"string"===typeof n?(new URL(n,this.c)).toString():n);Array.isArray(a.za)&&e.unshift(...a.za);e=await Promise.all(e.map(n=>this.s(n)));await Promise.all(e.map(n=>g(n)));e=self.C3_ProjectScriptsStatus;const m=a.ya,r=a.$;for(let [n,q]of r)if(q||(q=n),n===m)try{q=await this.s(q),await g(q),"preview"!==this.a||e[n]||this.Ma(n,"main script did not run to completion")}catch(u){this.Ma(n,
u)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.s(q),await g(q);"preview"===this.a&&"object"!==typeof self.qc.rc?(this.S(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ea(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:G}),this.Ia(),this.ta=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.ta,a))}Ma(a,d){this.S();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ia(){this.S()}S(){const a=window.ec;a&&(a.parentElement.removeChild(a),window.ec=null)}async yb(){const a=await S(this.J);return{outputPort:a,transferables:[a]}}qb(){if(this.i)throw Error("not available in worker mode");
return this.ta}fa(a,d,e,m,r){this.K.postMessage({type:"event",component:a,handler:d,dispatchOpts:m||null,data:e,responseId:null},r)}eb(a,d){const e=E++,m=new Promise((r,n)=>{D.set(e,{resolve:r,reject:n})});this.K.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:e},void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Db(a);if("result"===d)this.Nb(a);else if("runtime-ready"===d)this.Ob();else if("alert-error"===
d)this.S(),alert(a.message);else if("creating-runtime"===d)this.Ia();else throw Error(`unknown message '${d}'`);}Db(a){const d=a.component,e=a.handler,m=a.data,r=a.responseId;if(a=t.get(d))if(a=a.get(e)){var n=null;try{n=a(m)}catch(q){console.error(`Exception in '${d}' handler '${e}':`,q);null!==r&&this.R(r,!1,""+q);return}if(null===r)return n;n&&n.then?n.then(q=>this.R(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${e}':`,q);this.R(r,!1,""+q)}):this.R(r,!0,n)}else console.warn(`[DOM] No handler '${e}' for component '${d}'`);
else console.warn(`[DOM] No event handlers for component '${d}'`)}R(a,d,e){let m;e&&e.transferables&&(m=e.transferables);this.K.postMessage({type:"result",responseId:a,isOk:d,result:e},m)}Nb(a){const d=a.responseId,e=a.isOk;a=a.result;const m=D.get(d);e?m.resolve(a):m.reject(a);D.delete(d)}b(a,d,e){let m=t.get(a);m||(m=new Map,t.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,e)}static aa(a){if(C.includes(a))throw Error("DOM handler already added");C.push(a)}Da(){for(const a of this.U)if("runtime"===
a.H){this.wa=a;return}throw Error("cannot find runtime DOM handler");}Hb(a){this.fa("debugger","message",a)}Ob(){for(const a of this.U)a.Aa()}static C(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||c)}static Oa(a){c=!!a}Na(){-1===this.u&&this.Va.length&&(this.u=requestAnimationFrame(this.bc))}jb(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Kb(){this.u=-1;for(const a of this.Va)a();this.Na()}pa(){this.wa.pa()}$a(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.$a(a)}async s(a){return"cordova"===this.a&&(a.startsWith("file:")||this.V&&this.ab(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.ba(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async xb(a){const d=a.filename;switch(a.as){case "text":return await this.Ya(d);case "buffer":return await this.ba(d);default:throw Error("unsupported type");}}Ba(a){const d=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((e,m)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(e,m)},m)})}async Ya(a){a=await this.Ba(a);return await K(a)}ha(){if(x.length&&!(8<=B)){B++;var a=x.shift();this.mb(a.filename,a.mc,a.fc)}}ba(a){return new Promise((d,e)=>{x.push({filename:a,mc:m=>{B--;this.ha();d(m)},fc:m=>{B--;this.ha();e(m)}});this.ha()})}async mb(a,d,e){try{const m=await this.Ba(a),r=await F(m);d(r)}catch(m){e(m)}}Vb(){var a={type:"ready"};if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async lb(){const a=[];for(const [d,e]of Object.entries(this.j))a.push(this.kb(d,e));await Promise.all(a)}async kb(a,d){if("object"===typeof d)this.j[a]=new Blob([d.str],{type:d.type}),this.X[a]=d.str;else{let e=await this.pb(d);e||(e=this.nb(d));this.j[a]=e}}async pb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}nb(a){a=this.Tb(a);return this.ib(a.data,a.jc)}Tb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var e=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];e="base64"===d[1]||"base64"===m?atob(e):decodeURIComponent(e);return{jc:a,data:e}}ib(a,d){var e=a.length;let m=e>>2,r=new Uint8Array(e),n=new Uint32Array(r.buffer,0,m),q,u;for(u=q=0;q<m;++q)n[q]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(e&=
3;e--;)r[u]=a.charCodeAt(u),++u;return new Blob([r],{type:d})}}}"use strict";
{const f=self.O;function l(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},z={dispatchRuntimeEvent:!0};function J(b){return new Promise((c,h)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>h(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,h)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>h(d);a.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function K(b){return new Promise((c,h)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>h(d);a.readAsText(b)})}async function F(b,c,h){if(!/firefox/i.test(navigator.userAgent))return await A(b);var a=await K(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const e=d.getAttribute("width"),m=d.getAttribute("height");if(!e.includes("%")&&!m.includes("%"))return await A(b)}d.setAttribute("width",c+"px");d.setAttribute("height",h+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await A(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["input",
"textarea","datalist","select"]),C=new Set(["canvas","body","html"]);function t(b){C.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function D(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,h,a,d){b=await F(b,c,h);const e=document.createElement("canvas");e.width=a;e.height=d;e.getContext("2d").drawImage(b,0,0,c,h);return e};let E=!1;document.addEventListener("pause",()=>E=!0);document.addEventListener("resume",()=>E=!1);function G(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}f.aa(class extends self.da{constructor(b){super(b,"runtime");this.Ta=!0;this.v=-1;this.xa="any";this.Pa=this.Qa=!1;this.sa=
this.M=this.o=null;b.b("canvas","update-size",a=>this.Qb(a));b.b("runtime","invoke-download",a=>this.Gb(a));b.b("runtime","raster-svg-image",a=>this.Lb(a));b.b("runtime","get-svg-image-size",a=>this.Eb(a));b.b("runtime","set-target-orientation",a=>this.Pb(a));b.b("runtime","register-sw",()=>this.Mb());b.b("runtime","post-to-debugger",a=>this.Ka(a));b.b("runtime","go-to-script",a=>this.Ka(a));b.b("runtime","before-start-ticking",()=>this.wb());b.b("runtime","debug-highlight",a=>this.zb(a));b.b("runtime",
"enable-device-orientation",()=>this.hb());b.b("runtime","enable-device-motion",()=>this.gb());b.b("runtime","add-stylesheet",a=>this.ub(a));b.b("runtime","alert",a=>this.vb(a));b.b("runtime","hide-cordova-splash",()=>this.Fb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||x(d)||a.preventDefault()});const h=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);h.addEventListener("selectstart",
t);h.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),h.addEventListener("pointerdown",t)):h.addEventListener("touchstart",t);this.L=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",D,{passive:!1});window.addEventListener("wheel",D,{passive:!1});window.addEventListener("resize",()=>this.Rb());window.addEventListener("fullscreenchange",
()=>this.D());window.addEventListener("webkitfullscreenchange",()=>this.D());window.addEventListener("mozfullscreenchange",()=>this.D());window.addEventListener("fullscreenerror",a=>this.la(a));window.addEventListener("webkitfullscreenerror",a=>this.la(a));window.addEventListener("mozfullscreenerror",a=>this.la(a));b.ea()&&window.addEventListener("focusout",()=>{{const e=document.activeElement;if(e){var a=e.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));
a="textarea"===a?!0:"input"===a?d.has(e.type.toLowerCase()||"text"):x(e)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.Sb(a);this.ua=new Set;this.ac=new WeakSet;this.Zb=!1}wb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.oa(!0)),document.addEventListener("resume",()=>this.oa(!1))):document.addEventListener("visibilitychange",()=>this.oa(document.hidden));return{isSuspended:!(!document.hidden&&!E)}}Aa(){window.addEventListener("focus",()=>
this.G("window-focus"));window.addEventListener("blur",()=>{this.G("window-blur",{parentHasFocus:G()});this.L=0});window.addEventListener("focusin",c=>{c=c.target;(B.has(c.tagName.toLowerCase())||x(c))&&this.G("keyboard-blur")});window.addEventListener("keydown",c=>this.Ja("keydown",c));window.addEventListener("keyup",c=>this.Ja("keyup",c));window.addEventListener("dblclick",c=>this.ma("dblclick",c,k));window.addEventListener("wheel",c=>this.Ib(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ka(c);this.F("pointerdown",c)}),this.f.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.M=new self.fb(()=>this.ob(),5),this.M.Sa=!0,window.addEventListener("pointerrawupdate",c=>this.Jb(c))):window.addEventListener("pointermove",c=>this.F("pointermove",c)),window.addEventListener("pointerup",c=>this.F("pointerup",c)),window.addEventListener("pointercancel",c=>this.F("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ka(c);this.na("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.na("pointermove",c)),window.addEventListener("mouseup",c=>this.na("pointerup",c)),window.addEventListener("touchstart",c=>{this.ka(c);this.P("pointerdown",c)}),window.addEventListener("touchmove",c=>this.P("pointermove",c)),window.addEventListener("touchend",c=>this.P("pointerup",c)),window.addEventListener("touchcancel",c=>this.P("pointercancel",c)));const b=()=>this.pa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}G(b,c){v(this,b,c||null,z)}m(){return this.f.m()}l(){return this.f.l()}Rb(){const b=this.m(),c=this.l();this.G("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.C()});this.f.ea()&&(-1!==this.v&&clearTimeout(this.v),this.La(b,c,0))}Ub(b,c,h){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.La(b,c,h),48)}La(b,c,h){const a=
this.m(),d=this.l();this.v=-1;a!=b||d!=c?this.G("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.C()}):10>h&&this.Ub(a,d,h+1)}Pb(b){this.xa=b.targetOrientation}Wb(){const b=this.xa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}D(){const b=f.C();b&&"any"!==this.xa&&this.Wb();v(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.l()})}la(b){console.warn("[Construct 3] Fullscreen request failed: ",b);v(this,"fullscreenerror",{isFullscreen:f.C(),innerWidth:this.m(),
innerHeight:this.l()})}oa(b){b?this.f.jb():this.f.Na();v(this,"visibilitychange",{hidden:b})}Ja(b,c){"Backspace"===c.key&&t(c);const h=g.get(c.code)||c.code;y(this,b,{code:h,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},k)}Ib(b){v(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},k)}ma(b,c,
h){l(c)||y(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},h)}na(b,c){if(!l(c)){var h=this.L;"pointerdown"===b&&0!==h?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");y(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:h,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},
k);this.L=c.buttons;this.ma(c.type,c,p)}}F(b,c){if(this.M&&"pointermove"!==b){var h=this.M;h.I||(-1!==h.A&&(self.clearTimeout(h.A),h.A=-1),h.W=Date.now())}h=0;"mouse"===c.pointerType&&(h=this.L);y(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:h,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,
twist:c.twist||0,timeStamp:c.timeStamp},k);"mouse"===c.pointerType&&(h="mousemove","pointerdown"===b?h="mousedown":"pointerup"===b&&(h="mouseup"),this.ma(h,c,p),this.L=c.buttons)}Jb(b){this.sa=b;b=this.M;if(-1===b.A){var c=Date.now(),h=c-b.W,a=b.Yb;h>=a&&b.Sa?(b.W=c,b.I=!0,b.Ra(),b.I=!1):b.A=self.setTimeout(b.cc,Math.max(a-h,4))}}ob(){this.F("pointermove",this.sa);this.sa=null}P(b,c){for(let h=0,a=c.changedTouches.length;h<a;++h){const d=c.changedTouches[h];y(this,b,{pointerId:d.identifier,pointerType:"touch",
button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},k)}}ka(b){window!==window.top&&window.focus();this.Ha(b.target)&&document.activeElement&&!this.Ha(document.activeElement)&&document.activeElement.blur()}Ha(b){return!b||b===document||b===window||b===document.body||
"canvas"===b.tagName.toLowerCase()}hb(){this.Qa||(this.Qa=!0,window.addEventListener("deviceorientation",b=>this.Bb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Cb(b)))}gb(){this.Pa||(this.Pa=!0,window.addEventListener("devicemotion",b=>this.Ab(b)))}Bb(b){v(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Cb(b){v(this,
"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Ab(b){let c=null;var h=b.acceleration;h&&(c={x:h.x||0,y:h.y||0,z:h.z||0});h=null;var a=b.accelerationIncludingGravity;a&&(h={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});v(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:h,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},k)}Qb(b){const c=
this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Ta&&(c.style.display="",this.Ta=!1)}Gb(b){const c=b.url;b=b.filename;const h=document.createElement("a"),a=document.body;h.textContent=b;h.href=c;h.download=b;a.appendChild(h);h.click();a.removeChild(h)}async Lb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,
c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Eb(b){return await self.C3_GetSvgImageSize(b.blob)}async ub(b){await J(b.url)}pa(){var b=[...this.ua];this.ua.clear();if(!this.Zb)for(const c of b)(b=c.play())&&b.catch(()=>{this.ac.has(c)||this.ua.add(c)})}Fb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}zb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=
this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&(this.o.style.display="none")}Mb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ka(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}tb(b,c){return this.f.eb(this.H,{name:b,params:c})}vb(b){alert(b.message)}Sb(b){"entered-fullscreen"===b?(f.Oa(!0),this.D()):"exited-fullscreen"===b?(f.Oa(!1),this.D()):
console.warn("Unknown wrapper message: ",b)}})}"use strict";async function Q(f){if(f.Xb)throw Error("already initialised");f.Xb=!0;var l=f.Y.ja("dispatchworker.js");f.qa=await f.Y.ca(l,f.c,{name:"DispatchWorker"});l=new MessageChannel;f.ra=l.port1;f.qa.postMessage({type:"_init","in-port":l.port2},[l.port2]);f.va=await S(f)}function R(f){return[f.ra,f.va]}
async function S(f){const l=f.Ua.length;var g=f.Y.ja("jobworker.js");g=await f.Y.ca(g,f.c,{name:"JobWorker"+l});const k=new MessageChannel,p=new MessageChannel;f.qa.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);g.postMessage({type:"init",number:l,"dispatch-port":k.port2,"output-port":p.port2},[k.port2,p.port2]);f.Ua.push(g);return p.port1}
self.cb=class{constructor(f){this.Y=f;this.c=f.c;this.c="preview"===f.a?this.c+"workers/":this.c+f.Z;this.$b=Math.min(navigator.hardwareConcurrency||2,16);this.qa=null;this.Ua=[];this.va=this.ra=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.O({nc:!0,oc:"workermain.js",B:["scripts/c3runtime.js"],$:[],ya:"",kc:"scripts/",za:["box2d.wasm.js"],Xa:"html5"}));"use strict";
{function f(l){l.stopPropagation()}self.O.aa(class extends self.Za{constructor(l){super(l,"button")}Ca(l,g){const k=document.createElement("input");var p=k;g.isCheckbox?(k.type="checkbox",p=document.createElement("label"),p.appendChild(k),p.appendChild(document.createTextNode("")),p.style.fontFamily="sans-serif",p.style.userSelect="none",p.style.webkitUserSelect="none",p.style.display="inline-block",p.style.color="black"):k.type="button";p.style.position="absolute";p.addEventListener("touchstart",
f);p.addEventListener("touchmove",f);p.addEventListener("touchend",f);p.addEventListener("mousedown",f);p.addEventListener("mouseup",f);p.addEventListener("keydown",f);p.addEventListener("keyup",f);k.addEventListener("click",()=>{var z={isChecked:k.checked};z.elementId=l;y(this,"click",z)});g.id&&(k.id=g.id);this.ga(p,g);return p}Fa(l){return"input"===l.tagName.toLowerCase()?l:l.firstChild}ia(l){return this.Fa(l)}ga(l,g){const k=this.Fa(l);k.checked=g.isChecked;k.disabled=!g.isEnabled;l.title=g.title;
l===k?k.value=g.text:l.lastChild.textContent=g.text}})}"use strict";self.O.aa(class extends self.da{constructor(f){super(f,"mouse");I(this,"cursor",l=>{document.documentElement.style.cursor=l})}});