(function(){var e,t,n,r,o,i,s,a,u,c,l,p,f,d,h,g,m,v,y,b,w,S,x,k,E,T,C,P,L,M,N,j,q,R,A,F,O,D,_,$,z,W,H,I,U,B,G,V,X,J=[].slice,K={}.hasOwnProperty,Q=function(e,t){function n(){this.constructor=e}for(var r in t)K.call(t,r)&&(e[r]=t[r]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},Y=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};for(w={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},L=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},N=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,b=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==N&&(N=function(e){return setTimeout(e,50)},b=function(e){return clearTimeout(e)}),q=function(e){var t,n;return t=L(),(n=function(){var r;return r=L()-t,r>=33?(t=L(),e(r,function(){return N(n)})):setTimeout(n,33-r)})()},j=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?J.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},S=function(){var e,t,n,r,o,i,s;for(t=arguments[0],r=2<=arguments.length?J.call(arguments,1):[],i=0,s=r.length;s>i;i++)if(n=r[i])for(e in n)K.call(n,e)&&(o=n[e],null!=t[e]&&"object"==typeof t[e]&&null!=o&&"object"==typeof o?S(t[e],o):t[e]=o);return t},m=function(e){var t,n,r,o,i;for(n=t=0,o=0,i=e.length;i>o;o++)r=e[o],n+=Math.abs(r),t++;return n/t},k=function(e,t){var n,r,o;if(null==e&&(e="options"),null==t&&(t=!0),o=document.querySelector("[data-pace-"+e+"]")){if(n=o.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(i){return r=i,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},s=function(){function e(){}return e.prototype.on=function(e,t,n,r){var o;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[e]&&(o[e]=[]),this.bindings[e].push({handler:t,ctx:n,once:r})},e.prototype.once=function(e,t,n){return this.on(e,t,n,!0)},e.prototype.off=function(e,t){var n,r,o;if(null!=(null!=(r=this.bindings)?r[e]:void 0)){if(null==t)return delete this.bindings[e];for(n=0,o=[];n<this.bindings[e].length;)o.push(this.bindings[e][n].handler===t?this.bindings[e].splice(n,1):n++);return o}},e.prototype.trigger=function(){var e,t,n,r,o,i,s,a,u;if(n=arguments[0],e=2<=arguments.length?J.call(arguments,1):[],null!=(s=this.bindings)?s[n]:void 0){for(o=0,u=[];o<this.bindings[n].length;)a=this.bindings[n][o],r=a.handler,t=a.ctx,i=a.once,r.apply(null!=t?t:this,e),u.push(i?this.bindings[n].splice(o,1):o++);return u}},e}(),c=window.Pace||{},window.Pace=c,S(c,s.prototype),M=c.options=S({},w,window.paceOptions,k()),G=["ajax","document","eventLag","elements"],H=0,U=G.length;U>H;H++)O=G[H],M[O]===!0&&(M[O]=w[O]);u=function(e){function t(){return V=t.__super__.constructor.apply(this,arguments)}return Q(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(M.target),!e)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){u=e}return this.el=void 0},e.prototype.render=function(){var e,t,n,r,o,i,s;if(null==document.querySelector(M.target))return!1;for(e=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=["webkitTransform","msTransform","transform"],o=0,i=s.length;i>o;o++)t=s[o],e.children[0].style[t]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),e.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),a=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,r,o,i,s;if(null!=this.bindings[e]){for(i=this.bindings[e],s=[],r=0,o=i.length;o>r;r++)n=i[r],s.push(n.call(this,t));return s}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),W=window.XMLHttpRequest,z=window.XDomainRequest,$=window.WebSocket,x=function(e,t){var n,r,o;o=[];for(r in t.prototype)try{o.push(null==e[r]&&"function"!=typeof t[r]?"function"==typeof Object.defineProperty?Object.defineProperty(e,r,{get:function(){return t.prototype[r]},configurable:!0,enumerable:!0}):e[r]=t.prototype[r]:void 0)}catch(i){n=i}return o},C=[],c.ignore=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[],C.unshift("ignore"),n=t.apply(null,e),C.shift(),n},c.track=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[],C.unshift("track"),n=t.apply(null,e),C.shift(),n},F=function(e){var t;if(null==e&&(e="GET"),"track"===C[0])return"force";if(!C.length&&M.ajax){if("socket"===e&&M.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),Y.call(M.ajax.trackMethods,t)>=0)return!0}return!1},l=function(e){function t(){var e,n=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(r,o){return F(r)&&n.trigger("request",{type:r,url:o,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var n;return n=new W(t),e(n),n};try{x(window.XMLHttpRequest,W)}catch(r){}if(null!=z){window.XDomainRequest=function(){var t;return t=new z,e(t),t};try{x(window.XDomainRequest,z)}catch(r){}}if(null!=$&&M.ajax.trackWebSockets){window.WebSocket=function(e,t){var r;return r=null!=t?new $(e,t):new $(e),F("socket")&&n.trigger("request",{type:"socket",url:e,protocols:t,request:r}),r};try{x(window.WebSocket,$)}catch(r){}}}return Q(t,e),t}(a),I=null,E=function(){return null==I&&(I=new l),I},A=function(e){var t,n,r,o;for(o=M.ajax.ignoreURLs,n=0,r=o.length;r>n;n++)if(t=o[n],"string"==typeof t){if(-1!==e.indexOf(t))return!0}else if(t.test(e))return!0;return!1},E().on("request",function(t){var n,r,o,i,s;return i=t.type,o=t.request,s=t.url,A(s)?void 0:c.running||M.restartOnRequestAfter===!1&&"force"!==F(i)?void 0:(r=arguments,n=M.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var t,n,s,a,u,l;if(t="socket"===i?o.readyState<2:0<(a=o.readyState)&&4>a){for(c.restart(),u=c.sources,l=[],n=0,s=u.length;s>n;n++){if(O=u[n],O instanceof e){O.watch.apply(O,r);break}l.push(void 0)}return l}},n))}),e=function(){function e(){var e=this;this.elements=[],E().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,n,r,o;return r=e.type,t=e.request,o=e.url,A(o)?void 0:(n="socket"===r?new d(t):new h(t),this.elements.push(n))},e}(),h=function(){function e(e){var t,n,r,o,i,s,a=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,e.addEventListener("progress",function(e){return a.progress=e.lengthComputable?100*e.loaded/e.total:a.progress+(100-a.progress)/2},!1),s=["load","abort","timeout","error"],r=0,o=s.length;o>r;r++)t=s[r],e.addEventListener(t,function(){return a.progress=100},!1);else i=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?a.progress=100:3===e.readyState&&(a.progress=50),"function"==typeof i?i.apply(null,arguments):void 0}}return e}(),d=function(){function e(e){var t,n,r,o,i=this;for(this.progress=0,o=["error","open"],n=0,r=o.length;r>n;n++)t=o[n],e.addEventListener(t,function(){return i.progress=100},!1)}return e}(),r=function(){function e(e){var t,n,r,i;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),i=e.selectors,n=0,r=i.length;r>n;n++)t=i[n],this.elements.push(new o(t))}return e}(),o=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},M.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t,n=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),i=function(){function e(){var e,t,n,r,o,i=this;this.progress=0,e=0,o=[],r=0,n=L(),t=setInterval(function(){var s;return s=L()-n-50,n=L(),o.push(s),o.length>M.eventLag.sampleCount&&o.shift(),e=m(o),++r>=M.eventLag.minSamples&&e<M.eventLag.lagThreshold?(i.progress=100,clearInterval(t)):i.progress=100*(3/(e+3))},50)}return e}(),f=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=M.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=j(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/M.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,M.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+M.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),D=null,R=null,v=null,_=null,g=null,y=null,c.running=!1,T=function(){return M.restartOnPushState?c.restart():void 0},null!=window.history.pushState&&(B=window.history.pushState,window.history.pushState=function(){return T(),B.apply(window.history,arguments)}),null!=window.history.replaceState&&(X=window.history.replaceState,window.history.replaceState=function(){return T(),X.apply(window.history,arguments)}),p={ajax:e,elements:r,document:n,eventLag:i},(P=function(){var e,n,r,o,i,s,a,u;for(c.sources=D=[],s=["ajax","elements","document","eventLag"],n=0,o=s.length;o>n;n++)e=s[n],M[e]!==!1&&D.push(new p[e](M[e]));for(u=null!=(a=M.extraSources)?a:[],r=0,i=u.length;i>r;r++)O=u[r],D.push(new O(M));return c.bar=v=new t,R=[],_=new f})(),c.stop=function(){return c.trigger("stop"),c.running=!1,v.destroy(),y=!0,null!=g&&("function"==typeof b&&b(g),g=null),P()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var e;return c.running=!0,v.render(),e=L(),y=!1,g=q(function(t,n){var r,o,i,s,a,u,l,p,d,h,g,m,b,w,S,x;for(p=100-v.progress,o=g=0,i=!0,u=m=0,w=D.length;w>m;u=++m)for(O=D[u],h=null!=R[u]?R[u]:R[u]=[],a=null!=(x=O.elements)?x:[O],l=b=0,S=a.length;S>b;l=++b)s=a[l],d=null!=h[l]?h[l]:h[l]=new f(s),i&=d.done,d.done||(o++,g+=d.tick(t));return r=g/o,v.update(_.tick(t,r)),v.done()||i||y?(v.update(100),c.trigger("done"),setTimeout(function(){return v.finish(),c.running=!1,c.trigger("hide")},Math.max(M.ghostTime,Math.max(M.minTime-(L()-e),0)))):n()})},c.start=function(e){S(M,e),c.running=!0;try{v.render()}catch(t){u=t}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return c}):"object"==typeof exports?module.exports=c:M.startOnPageLoad&&c.start()}).call(this),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(k.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!s(o,"-")&&b[o]!==n)return"pfx"!=t||o}return!1}function u(e,t,r){for(var o in e){var s=t[e[o]];if(s!==n)return r===!1?e[o]:i(s,"function")?s.bind(r||t):s}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?a(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),u(o,t,n))}function l(){h.input=function(n){for(var r=0,o=n.length;r<o;r++)N[n[r]]=!!(n[r]in w);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,o,i,s=0,a=e.length;s<a;s++)w.setAttribute("type",o=e[s]),r="text"!==w.type,r&&(w.value=S,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(m.appendChild(w),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,m.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=S)),M[e[s]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var p,f,d="2.8.3",h={},g=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),S=":)",x={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",T=E.split(" "),C=E.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},L={},M={},N={},j=[],q=j.slice,R=function(e,n,r,o){var i,s,a,u,c=t.createElement("div"),l=t.body,p=l||t.createElement("body");if(parseInt(r,10))for(;r--;)a=t.createElement("div"),a.id=o?o[r]:v+(r+1),c.appendChild(a);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),c.id=v,(l?c:p).innerHTML+=i,p.appendChild(c),l||(p.style.background="",p.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(p)),s=n(c,e),l?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),m.style.overflow=u),!!s},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return R("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var s=e in o;return s||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),s=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,s}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty;f=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=q.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,s=t.apply(i,n.concat(q.call(arguments)));return Object(s)===s?s:i}return t.apply(e,n.concat(q.call(arguments)))};return r}),L.flexbox=function(){return c("flexWrap")},L.flexboxlegacy=function(){return c("boxDirection")},L.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},L.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},L.webgl=function(){return!!e.WebGLRenderingContext},L.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:R(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},L.geolocation=function(){return"geolocation"in navigator},L.postmessage=function(){return!!e.postMessage},L.websqldatabase=function(){return!!e.openDatabase},L.indexedDB=function(){return!!c("indexedDB",e)},L.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},L.history=function(){return!(!e.history||!history.pushState)},L.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},L.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},L.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},L.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},L.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},L.backgroundsize=function(){return c("backgroundSize")},L.borderimage=function(){return c("borderImage")},L.borderradius=function(){return c("borderRadius")},L.boxshadow=function(){return c("boxShadow")},L.textshadow=function(){return""===t.createElement("div").style.textShadow},L.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},L.cssanimations=function(){return c("animationName")},L.csscolumns=function(){return c("columnCount")},L.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),s(b.backgroundImage,"gradient")},L.cssreflections=function(){return c("boxReflect")},L.csstransforms=function(){return!!c("transform")},L.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in m.style&&R("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},L.csstransitions=function(){return c("transition")},L.fontface=function(){var e;return R('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,s=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(s)&&0===s.indexOf(r.split(" ")[0])}),e},L.generatedcontent=function(){var e;return R(["#",v,"{font:0/0 a}#",v,':after{content:"',S,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},L.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},L.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},L.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},L.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},L.webworkers=function(){return!!e.Worker},L.applicationcache=function(){return!!e.applicationCache},L.svg=function(){return!!t.createElementNS&&!!t.createElementNS(P.svg,"svg").createSVGRect},L.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==P.svg},L.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(P.svg,"animate")))},L.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(P.svg,"clipPath")))};for(var D in L)f(L,D)&&(p=D.toLowerCase(),h[p]=L[D](),j.push((h[p]?"":"no-")+p));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(m.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[g]];return t||(t={},m++,e[g]=m,v[m]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),s=0,a=r(),u=a.length;s<u;s++)i.createElement(a[s]);return i}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=o(e);return!y.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||a(e,r),e}var c,l,p="3.7.0",f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:p,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:i,createDocumentFragment:s};e.html5=y,u(t)}(this,t),h._version=d,h._prefixes=k,h._domPrefixes=C,h._cssomPrefixes=T,h.mq=A,h.hasEvent=F,h.testProp=function(e){return a([e])},h.testAllProps=c,h.testStyles=R,h.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+j.join(" "):""),h}(this,this.document);