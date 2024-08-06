!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=581)}({0:function(t,e,i){"use strict";function n(t,e,i,n,o,a,r,s,u,c){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var h in u)p.call(u,h)&&!p.call(f.components,h)&&(f.components[h]=u[h])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var d=f.render;f.render=function(t,e){return l.call(e),d(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},197:function(t,e,i){"use strict";i.r(e);var n=i(198),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},198:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n;n=uni.getSystemInfoSync().platform;var o={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===n,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,e){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=o},199:function(t,e){t.exports={"uni-fab":{position:"fixed",justifyContent:"center",alignItems:"center",zIndex:10},"uni-fab--active":{opacity:1},"uni-fab--leftBottom":{left:"5",bottom:"20",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--leftTop":{left:"5",top:"30",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--rightBottom":{right:"5",bottom:"20",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--rightTop":{right:"5",top:"30",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab__circle":{position:"fixed",justifyContent:"center",alignItems:"center",width:"55",height:"55",backgroundColor:"#3c3e49",borderRadius:"55",zIndex:11},"uni-fab__circle--leftBottom":{left:"15",bottom:"30"},"uni-fab__circle--leftTop":{left:"15",top:"40"},"uni-fab__circle--rightBottom":{right:"15",bottom:"30"},"uni-fab__circle--rightTop":{right:"15",top:"40"},"uni-fab__circle--left":{left:0},"uni-fab__circle--right":{right:0},"uni-fab__circle--top":{top:0},"uni-fab__circle--bottom":{bottom:0},"uni-fab__plus":{fontWeight:"bold"},"fab-circle-v":{position:"absolute",width:"3",height:"31",left:"26",top:"12",backgroundColor:"#FFFFFF",transform:"rotate(0deg)",transitionProperty:"transform",transitionDuration:300},"@TRANSITION":{"fab-circle-v":{property:"transform",duration:300},"fab-circle-h":{property:"transform",duration:300},"uni-fab__content":{property:"width,height",duration:200},"uni-fab__item":{property:"opacity",duration:200}},"fab-circle-h":{position:"absolute",width:"31",height:"3",left:"12",top:"26",backgroundColor:"#FFFFFF",transform:"rotate(0deg)",transitionProperty:"transform",transitionDuration:300},"uni-fab__plus--active":{transform:"rotate(135deg)"},"uni-fab__content":{flexDirection:"row",borderRadius:"55",overflow:"hidden",transitionProperty:"width,height",transitionDuration:200,width:"55",borderColor:"#DDDDDD",borderWidth:"1rpx",borderStyle:"solid"},"uni-fab__content--other-platform":{borderWidth:"0",boxShadow:"0 0 5px 2px rgba(0, 0, 0, 0.2)"},"uni-fab__content--left":{justifyContent:"flex-start"},"uni-fab__content--right":{justifyContent:"flex-end"},"uni-fab__content--flexDirection":{flexDirection:"column",justifyContent:"flex-end"},"uni-fab__content--flexDirectionStart":{flexDirection:"column",justifyContent:"flex-start"},"uni-fab__content--flexDirectionEnd":{flexDirection:"column",justifyContent:"flex-end"},"uni-fab__item":{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"55",height:"55",opacity:0,transitionProperty:"opacity",transitionDuration:200},"uni-fab__item--active":{opacity:1},"uni-fab__item-image":{width:"25",height:"25",marginBottom:"3"},"uni-fab__item-text":{color:"#FFFFFF",fontSize:"12"},"uni-fab__item--first":{width:"55"}}},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__33C5XXX"}},200:function(t,e,i){"use strict";var n=i(201),o=i.n(n);e.default=o.a},201:function(t,e,i){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{uniFab:((n=i(480))&&n.__esModule?n:{default:n}).default},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(e){t("log",e," at pages/extUI/fab/fab.nvue:63"),this.content[e.index].active=!e.item.active,uni.showModal({title:"提示",content:"您".concat(this.content[e.index].active?"选中了":"取消了").concat(e.item.text),success:function(e){e.confirm?t("log","用户点击确定"," at pages/extUI/fab/fab.nvue:70"):e.cancel&&t("log","用户点击取消"," at pages/extUI/fab/fab.nvue:72")}})},fabClick:function(){uni.showToast({title:"点击了悬浮按钮",icon:"none"})},switchBtn:function(t,e){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=e),this.$forceUpdate()}}};e.default=o}).call(this,i(26).default)},202:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF",width:"250"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"uni-fab-box":{flexDirection:"row",justifyContent:"center",position:"absolute",top:0,bottom:0,left:0,right:0},"uni-padding-wrap":{flexDirection:"column",justifyContent:"center",alignItems:"center"}}},26:function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var r=e.map((function(t){if("[object object]"===Object.prototype.toString.call(t).toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=n(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),s="";if(r.length>1){var u=r.pop();s=r.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=r[0];console[a](s)}},411:function(t,e,i){"use strict";var n={"uni-fab":i(480).default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["uni-fab-box"]},[i("view",{staticClass:["uni-padding-wrap"]},[i("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn(0)}}},[i("u-text",{staticClass:["word-btn-white"]},[t._v("切换菜单("+t._s(t.directionStr)+"显示)")])]),i("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("left","bottom")}}},[i("u-text",{staticClass:["word-btn-white"]},[t._v("左下角显示")])]),i("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("right","bottom")}}},[i("u-text",{staticClass:["word-btn-white"]},[t._v("右下角显示")])]),i("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("left","top")}}},[i("u-text",{staticClass:["word-btn-white"]},[t._v("左上角显示")])]),i("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("right","top")}}},[i("u-text",{staticClass:["word-btn-white"]},[t._v("右上角显示")])])]),i("uni-fab",{ref:"fab",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:t.trigger,fabClick:t.fabClick}})],1)])},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},421:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)?i("view",{staticClass:["uni-fab"],class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[i("view",{staticClass:["uni-fab__content"],class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("view",{staticClass:["uni-fab__item","uni-fab__item--first"]}):t._e(),t._l(t.content,(function(e,n){return i("view",{key:n,staticClass:["uni-fab__item"],class:{"uni-fab__item--active":t.isShow},on:{click:function(i){t._onItemClick(n,e)}}},[i("u-image",{staticClass:["uni-fab__item-image"],attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"widthFix"}}),i("u-text",{staticClass:["uni-fab__item-text"],style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?i("view",{staticClass:["uni-fab__item","uni-fab__item--first"]}):t._e()],2)]):t._e(),i("view",{staticClass:["uni-fab__circle","uni-fab__plus"],class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:t._onClick}},[i("view",{staticClass:["fab-circle-v"],class:{"uni-fab__plus--active":t.isShow}}),i("view",{staticClass:["fab-circle-h"],class:{"uni-fab__plus--active":t.isShow}})])])},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}))},480:function(t,e,i){"use strict";i.r(e);var n=i(421),o=i(197);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var r=i(0);var s=Object(r.a)(o.default,n.b,n.c,!1,null,"5f1cf90a","dc829768",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(481).default,this.options.style):Object.assign(this.options.style,i(481).default)}).call(s),e.default=s.exports},481:function(t,e,i){"use strict";i.r(e);var n=i(199),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},482:function(t,e,i){"use strict";i.r(e);var n=i(202),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},581:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(86);n.default.mpType="page",n.default.route="pages/extUI/fab/fab",n.default.el="#root",new Vue(n.default)},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}var c=i(8).version;function l(){var t="";if("n"===p()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var f=function(){return parseInt((new Date).getTime()/1e3)},p=function(){return"n"},h=0,d=0,_=function(){return h=f(),"n"===p()&&uni.setStorageSync("__page__residence__time",f()),h},g=0,v=0,y=function(){var t=(new Date).getTime();return g=t,v=0,t},m=function(){var t=(new Date).getTime();return v=t,t},b=function(t){var e=0;return 0!==g&&(e=v-g),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},S=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,o=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===p()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},w=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},D=i(9).default,T=i(2).default||i(2),x=uni.getSystemInfoSync(),C=function(t){function e(){var t;return r(this,e),(t=n(this,o(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,_(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,w(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,w(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(i)}}]),e}(function(){function t(){var e,i;r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:l(),ut:p(),mpn:(i="","wx"!==p()&&"qq"!==p()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:T.appid,usv:c,v:"n"===p()?plus.runtime.version:"",ch:(e="","n"===p()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:f(),tt:"",p:"android"===x.platform?"a":"i",brand:x.brand||"",md:x.model,sv:x.system.replace(/(Android|iOS)\s/,""),mpsdk:x.SDKVersion||"",mpv:x.version||"",lang:x.language,pr:x.pixelRatio,ww:x.windowWidth,wh:x.windowHeight,sw:x.screenWidth,sh:x.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(m(),b("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,m();var i=b();y();var n=S(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=S(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===p()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=D&&D.pages[n]&&D.pages[n].titleNView&&D.pages[n].titleNView.titleText||D&&D.pages[n]&&D.pages[n].navigationBarTitleText||"",this.__licationShow)return y(),this.__licationShow=!1,void(this._lastPageRoute=i);if(m(),this._lastPageRoute=i,b("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}y()}},{key:"_pageHide",value:function(){if(!this.__licationHide){m();var t=b("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=f(),this.statData.sc=function(t){var e=p(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=f(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",f()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===p()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,o=void 0===n?"":n,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:i,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:f(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;T.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=f(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var a=this._reportingRequestData;if("n"===p()&&(a=uni.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===p()&&uni.setStorageSync("__UNI__STAT__DATA",a),d=f(),"n"===p()&&(h=uni.getStorageSync("__page__residence__time")),!(d-h<10)||e){var r=this._reportingRequestData;"n"===p()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),_();var s=[],u=[],l=[],g=function(t){r[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(i):3===t?l.push(i):u.push(i)}))};for(var v in r)g(v);s.push.apply(s,u.concat(l));var y={usv:c,t:n,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===p()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==p()||"a"!==this.statData.p?this._sendRequest(y):setTimeout((function(){i._sendRequest(y)}),200):this.imageRequest(y)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var o in e)i[e[o]]=t[e[o]],n+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),k=!1,I={onLaunch:function(t){C.report(t,this)},onReady:function(){C.ready(this)},onLoad:function(t){if(C.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return C.interceptShare(!1),e.call(this,t)}}},onShow:function(){k=!1,C.show(this)},onHide:function(){k=!0,C.hide(this)},onUnload:function(){k?k=!1:C.hide(this)},onError:function(t){C.error(t)}};!function(){var t=i(10);(t.default||t).mixin(I),uni.report=function(t,e){C.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},86:function(t,e,i){"use strict";var n=i(411),o=i(200),a=i(0);var r=Object(a.a)(o.default,n.b,n.c,!1,null,null,"cabc37b8",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(482).default,this.options.style):Object.assign(this.options.style,i(482).default)}).call(r),e.default=r.exports},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});
