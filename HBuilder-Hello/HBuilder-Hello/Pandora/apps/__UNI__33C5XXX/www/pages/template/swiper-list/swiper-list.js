!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=613)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,s,r,o,u,c){var l,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var h in u)f.call(u,h)&&!f.call(p.components,h)&&(p.components[h]=u[h])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(t,e){return l.call(e),d(t,e)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:p}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},111:function(t,e,i){"use strict";var n=i(408),a=i(348),s=i(0);var r=Object(s.a)(a.default,n.b,n.c,!1,null,null,"01481421",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(553).default,this.options.style):Object.assign(this.options.style,i(553).default)}).call(r),e.default=r.exports},12:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__33C5XXX"}},26:function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var s=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var r=e.map((function(t){if("[object object]"===Object.prototype.toString.call(t).toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=n(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),o="";if(r.length>1){var u=r.pop();o=r.join("---COMMA---"),0===u.indexOf(" at ")?o+=u:o+="---COMMA---"+u}else o=r[0];console[s](o)}},348:function(t,e,i){"use strict";var n=i(349),a=i.n(n);e.default=a.a},349:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=(n=i(614))&&n.__esModule?n:{default:n};var s=weex.requireModule("dom"),r={components:{swiperPage:a.default},data:function(){return{tabList:[],tabIndex:0,cacheTab:[],scrollInto:"",indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onLoad:function(){for(var t=0;t<6;t++)this.tabList.push({id:"tab"+t,name:"Tab "+(t+1),pageid:t+1})},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=this.$refs.page,this.switchTab(this.tabIndex),this.getTabbarItemsSize()},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var i=this.tabListSize[e];this.updateIndicator(i.left,i.width),this._touchTabIndex=e,this.switchTab(e)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var e=t.detail.dx,i=this._lastTabIndex;if(e>1?i++:e<-1&&i--,!(i===this._lastTabIndex||i<0||i>this.pageList.length-1)){0===this.pageList[i].dataList.length&&this.loadTabData(i);var n=Math.abs(this.swiperWidth/e),a=this.tabListSize[this._lastTabIndex],s=this.tabListSize[i],r=a.left+(s.left-a.left)/n,o=a.width+(s.width-a.width)/n;this.updateIndicator(r,o)}}},animationfinish:function(t){var e=t.detail.current;this._touchTabIndex===e&&(this.isTap=!1),this._lastTabIndex=e,this.switchTab(e),this.updateIndicator(this.tabListSize[e].left,this.tabListSize[e].width)},getTabbarItemsSize:function(){var e=this;uni.createSelectorQuery().in(this).select("#tab-bar").boundingClientRect().exec((function(t){e.tabbarWidth=t[0].width})),uni.createSelectorQuery().in(this).select("#tab-bar-view").boundingClientRect().exec((function(t){e.swiperWidth=t[0].width}));for(var i=uni.createSelectorQuery().in(this),n=0;n<this.tabList.length;n++)i.select("#"+this.tabList[n].id).boundingClientRect();i.exec((function(i){t("log",JSON.stringify(i)," at pages/template/swiper-list/swiper-list.nvue:169"),i.forEach((function(t){e.tabListSize[t.dataset.id]=t}))})),setTimeout((function(){e.updateIndicator(e.tabListSize[e.tabIndex].left,e.tabListSize[e.tabIndex].width)}),100)},updateIndicator:function(t,e){this.indicatorLineLeft=t,this.indicatorLineWidth=e},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100)this.cacheTab.indexOf(this.tabIndex)<0&&this.cacheTab.push(this.tabIndex);if(this.tabIndex=t,this.scrollTabTo(t),this.cacheTab.length>3){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var e=this.$refs["tabitem"+t][0],i=0;t>0&&(i=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(i=this.tabListSize[0].width)),s.scrollToElement(e,{offset:-i})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};e.default=r}).call(this,i(26).default)},350:function(t,e,i){"use strict";i.r(e);var n=i(351),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},351:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{pid:{type:[Number,String],default:""}},data:function(){return{dataList:[]}},created:function(){},methods:{loadData:function(){},clear:function(){this.dataList.length=0}}};e.default=n},352:function(t,e){t.exports={"uni-swiper-page":{flex:1,flexDirection:"column",position:"absolute",left:0,top:0,right:0,bottom:0,alignItems:"center",justifyContent:"center"}}},353:function(t,e){t.exports={tabs:{flex:1,flexDirection:"column",overflow:"hidden",backgroundColor:"#ffffff"},"tab-bar":{width:"750rpx",height:"84rpx",flexDirection:"row"},"scroll-view-indicator":{position:"relative",height:"2",backgroundColor:"rgba(0,0,0,0)"},"scroll-view-underline":{position:"absolute",top:0,bottom:0,width:0,backgroundColor:"#007AFF"},"@TRANSITION":{"scroll-view-animation":{duration:200,property:"left"}},"scroll-view-animation":{transitionDuration:200,transitionProperty:"left"},"tab-bar-line":{height:"1rpx",backgroundColor:"#cccccc"},"tab-view":{flex:1},"uni-tab-item":{flexWrap:"nowrap",paddingLeft:"25",paddingRight:"25"},"uni-tab-item-title":{color:"#555555",fontSize:"30rpx",height:"80rpx",lineHeight:"80rpx",flexWrap:"nowrap"},"uni-tab-item-title-active":{color:"#007AFF"},"swiper-item":{flex:1,flexDirection:"column"},"swiper-page":{flex:1,flexDirection:"row",position:"absolute",left:0,top:0,right:0,bottom:0}}},408:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["tabs"]},[i("scroll-view",{ref:"tabbar1",staticClass:["tab-bar"],attrs:{id:"tab-bar",scroll:!1,scrollX:!0,showScrollbar:!1,scrollIntoView:t.scrollInto}},[i("view",{staticStyle:{flexDirection:"column"}},[i("view",{staticStyle:{flexDirection:"row"}},t._l(t.tabList,(function(e,n){return i("view",{key:e.id,ref:"tabitem"+n,refInFor:!0,staticClass:["uni-tab-item"],attrs:{id:e.id,dataId:n,dataCurrent:n},on:{click:t.ontabtap}},[i("u-text",{staticClass:["uni-tab-item-title"],class:t.tabIndex==n?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])])})),0),i("view",{staticClass:["scroll-view-indicator"]},[i("view",{ref:"underline",staticClass:["scroll-view-underline"],class:t.isTap?"scroll-view-animation":"",style:{left:t.indicatorLineLeft+"px",width:t.indicatorLineWidth+"px"}})])])]),i("view",{staticClass:["tab-bar-line"]}),i("swiper",{ref:"swiper1",staticClass:["tab-view"],attrs:{id:"tab-bar-view",current:t.tabIndex,duration:300},on:{change:t.onswiperchange,transition:t.onswiperscroll,animationfinish:t.animationfinish,onAnimationEnd:t.animationfinish}},t._l(t.tabList,(function(t,e){return i("swiper-item",{key:e,staticClass:["swiper-item"]},[i("swiperPage",{ref:"page",refInFor:!0,staticClass:["swiper-page"],attrs:{pid:t.pageid}})],1)})),1)],1)])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},416:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-swiper-page"]},[e("u-text",[this._v("Tab View "+this._s(this.pid))])])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},552:function(t,e,i){"use strict";i.r(e);var n=i(352),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},553:function(t,e,i){"use strict";i.r(e);var n=i(353),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},613:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(111);n.default.mpType="page",n.default.route="pages/template/swiper-list/swiper-list",n.default.el="#root",new Vue(n.default)},614:function(t,e,i){"use strict";i.r(e);var n=i(416),a=i(350);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var r=i(0);var o=Object(r.a)(a.default,n.b,n.c,!1,null,"41ff1aa0","3e8c9500",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(552).default,this.options.style):Object.assign(this.options.style,i(552).default)}).call(o),e.default=o.exports},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}var c=i(8).version;function l(){var t="";if("n"===f()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var p=function(){return parseInt((new Date).getTime()/1e3)},f=function(){return"n"},h=0,d=0,_=function(){return h=p(),"n"===f()&&uni.setStorageSync("__page__residence__time",p()),h},g=0,v=0,y=function(){var t=(new Date).getTime();return g=t,v=0,t},b=function(){var t=(new Date).getTime();return v=t,t},m=function(t){var e=0;return 0!==g&&(e=v-g),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},S=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,a=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===f()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},w=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},T=i(9).default,D=i(2).default||i(2),I=uni.getSystemInfoSync(),x=function(t){function e(){var t;return r(this,e),(t=n(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,_(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,w(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,w(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(i)}}]),e}(function(){function t(){var e,i;r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:l(),ut:f(),mpn:(i="","wx"!==f()&&"qq"!==f()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:D.appid,usv:c,v:"n"===f()?plus.runtime.version:"",ch:(e="","n"===f()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:p(),tt:"",p:"android"===I.platform?"a":"i",brand:I.brand||"",md:I.model,sv:I.system.replace(/(Android|iOS)\s/,""),mpsdk:I.SDKVersion||"",mpv:I.version||"",lang:I.language,pr:I.pixelRatio,ww:I.windowWidth,wh:I.windowHeight,sw:I.screenWidth,sh:I.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(b(),m("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,b();var i=m();y();var n=S(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=S(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===f()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=T&&T.pages[n]&&T.pages[n].titleNView&&T.pages[n].titleNView.titleText||T&&T.pages[n]&&T.pages[n].navigationBarTitleText||"",this.__licationShow)return y(),this.__licationShow=!1,void(this._lastPageRoute=i);if(b(),this._lastPageRoute=i,m("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}y()}},{key:"_pageHide",value:function(){if(!this.__licationHide){b();var t=m("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=p(),this.statData.sc=function(t){var e=f(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=p(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",p()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===f()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,a=void 0===n?"":n,s=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:i,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:p(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;D.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=p(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var s=this._reportingRequestData;if("n"===f()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===f()&&uni.setStorageSync("__UNI__STAT__DATA",s),d=p(),"n"===f()&&(h=uni.getStorageSync("__page__residence__time")),!(d-h<10)||e){var r=this._reportingRequestData;"n"===f()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),_();var o=[],u=[],l=[],g=function(t){r[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?o.push(i):3===t?l.push(i):u.push(i)}))};for(var v in r)g(v);o.push.apply(o,u.concat(l));var y={usv:c,t:n,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===f()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==f()||"a"!==this.statData.p?this._sendRequest(y):setTimeout((function(){i._sendRequest(y)}),200):this.imageRequest(y)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var a in e)i[e[a]]=t[e[a]],n+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),k=!1,L={onLaunch:function(t){x.report(t,this)},onReady:function(){x.ready(this)},onLoad:function(t){if(x.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return x.interceptShare(!1),e.call(this,t)}}},onShow:function(){k=!1,x.show(this)},onHide:function(){k=!0,x.hide(this)},onUnload:function(){k?k=!1:x.hide(this)},onError:function(t){x.error(t)}};!function(){var t=i(10);(t.default||t).mixin(L),uni.report=function(t,e){x.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});
