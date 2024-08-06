!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=595)}({0:function(t,e,i){"use strict";function n(t,e,i,n,r,o,a,s,u,c){var l,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in u)p.call(u,f)&&!p.call(d.components,f)&&(d.components[f]=u[f])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var g=d.render;d.render=function(t,e){return l.call(e),g(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:d}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},13:function(t,e,i){"use strict";i.r(e);var n=i(6),r=i(3);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);var a=i(0);var s=Object(a.a)(r.default,n.b,n.c,!1,null,"16726384","7d32c988",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(14).default,this.options.style):Object.assign(this.options.style,i(14).default)}).call(s),e.default=s.exports},14:function(t,e,i){"use strict";i.r(e);var n=i(5),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__33C5XXX"}},21:function(t,e,i){"use strict";i.r(e);var n=i(22),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},22:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=n},23:function(t,e){t.exports={"uni-badge":{justifyContent:"center",flexDirection:"row",height:"20",lineHeight:"20",color:"#333333",borderRadius:"100",backgroundColor:"rgba(0,0,0,0)",textAlign:"center",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:"12",paddingTop:"0",paddingRight:"6",paddingBottom:"0",paddingLeft:"6"},"uni-badge--inverted":{paddingTop:0,paddingRight:"5",paddingBottom:0,paddingLeft:0,color:"#f1f1f1"},"uni-badge--default":{color:"#333333",backgroundColor:"#f1f1f1"},"uni-badge--default-inverted":{color:"#999999",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--primary":{color:"#ffffff",backgroundColor:"#007aff"},"uni-badge--primary-inverted":{color:"#007aff",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--success":{color:"#ffffff",backgroundColor:"#4cd964"},"uni-badge--success-inverted":{color:"#4cd964",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--warning":{color:"#ffffff",backgroundColor:"#f0ad4e"},"uni-badge--warning-inverted":{color:"#f0ad4e",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--error":{color:"#ffffff",backgroundColor:"#dd524d"},"uni-badge--error-inverted":{color:"#dd524d",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--small":{transform:"scale(0.8)",transformOrigin:"center center"}}},24:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("u-text",{staticClass:["uni-badge"],class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}))},252:function(t,e,i){"use strict";i.r(e);var n=i(253),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},253:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t("dom"),n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){return{elId:"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;i.getComponentRect(this.$refs["uni-grid"],(function(i){e.width=parseInt((i.size.width-1)/e.column)+"px",t(e.width)}))}}};e.default=n}).call(this,i(57).default)},254:function(t,e){t.exports={"uni-grid-wrap":{flex:1,flexDirection:"column"},"uni-grid":{flexDirection:"row",flexWrap:"wrap"},"uni-grid--border":{borderLeftColor:"#e5e5e5",borderLeftStyle:"solid",borderLeftWidth:"1"}}},255:function(t,e,i){"use strict";i.r(e);var n=i(256),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},256:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},257:function(t,e){t.exports={"uni-grid-item__box":{position:"relative",flex:1,flexDirection:"column"},"uni-grid-item--border":{position:"relative",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"1",borderRightColor:"#e5e5e5",borderRightStyle:"solid",borderRightWidth:"1"},"uni-grid-item--border-top":{borderTopColor:"#e5e5e5",borderTopStyle:"solid",borderTopWidth:"1"},"uni-highlight":{"backgroundColor:active":"#f1f1f1"}}},258:function(t,e,i){"use strict";var n=i(259),r=i.n(n);e.default=r.a},259:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i(13)),r=s(i(506)),o=s(i(508)),a=s(i(35));function s(t){return t&&t.__esModule?t:{default:t}}var u={components:{uniSection:n.default,uniGrid:r.default,uniGridItem:o.default,uniBadge:a.default},data:function(){return{dynamicList:[],list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},methods:{change:function(t){var e=t.detail.index;this.list[e].badge&&this.list[e].badge++,uni.showToast({title:"点击第".concat(e+1,"个宫格"),icon:"none"})},add:function(){this.dynamicList.length<9?this.dynamicList.push({url:"/static/c".concat(this.dynamicList.length+1,".png"),text:"Grid ".concat(this.dynamicList.length+1),color:this.dynamicList.length%2==0?"#f5f5f5":"#fff"}):uni.showToast({title:"最多添加9个",icon:"none"})},del:function(){this.dynamicList.splice(this.dynamicList.length-1,1)}}};e.default=u},260:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},image:{width:"50rpx",height:"50rpx"},text:{fontSize:"26rpx",marginTop:"10rpx"},"grid-dynamic-box":{marginBottom:"15"},"grid-item-box":{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"15",paddingRight:0,paddingBottom:"15",paddingLeft:0},"grid-dot":{position:"absolute",top:"5",right:"15"},swiper:{height:"420"}}},3:function(t,e,i){"use strict";i.r(e);var n=i(4),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},35:function(t,e,i){"use strict";i.r(e);var n=i(24),r=i(21);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);var a=i(0);var s=Object(a.a)(r.default,n.b,n.c,!1,null,"6232635d","229c32c4",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(36).default,this.options.style):Object.assign(this.options.style,i(36).default)}).call(s),e.default=s.exports},36:function(t,e,i){"use strict";i.r(e);var n=i(23),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},390:function(t,e,i){"use strict";var n={"uni-section":i(13).default,"uni-grid":i(506).default,"uni-grid-item":i(508).default,"uni-badge":i(35).default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["warp"]},[i("u-text",{staticClass:["example-info"]},[t._v("宫格组件主要使用场景如：商品推荐列表、热门内容等")]),i("uni-section",{attrs:{title:"默认样式（3列）",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-grid",{attrs:{column:3,highlight:!0},on:{change:t.change}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1),i("uni-section",{attrs:{title:"滑动视图",type:"line"}}),i("view",{staticClass:["example-body"]},[i("swiper",{staticClass:["swiper"],attrs:{indicatorDots:!0}},[i("swiper-item",[i("uni-grid",{attrs:{column:3,highlight:!0},on:{change:t.change}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1),i("swiper-item",[i("uni-grid",{attrs:{column:3,highlight:!0},on:{change:t.change}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1),i("swiper-item",[i("uni-grid",{attrs:{column:3,highlight:!0},on:{change:t.change}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1)],1)],1),i("uni-section",{attrs:{title:"动态加载",type:"line"}}),i("view",{staticClass:["example-body"]},[0!==t.dynamicList.length?i("view",{staticClass:["grid-dynamic-box"]},[i("uni-grid",{attrs:{column:3,highlight:!0},on:{change:t.change}},t._l(t.dynamicList,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"],style:{backgroundColor:e.color}},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1):t._e(),i("button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("点击添加一个宫格")]),0!==t.dynamicList.length?i("button",{staticStyle:{marginTop:"15px"},attrs:{type:"primary"},on:{click:t.del}},[t._v("点击删除一个宫格")]):t._e()],1),i("uni-section",{attrs:{title:"无边框带角标（3列）",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-grid",{attrs:{column:3,showBorder:!1,square:!1},on:{change:t.change}},t._l(t.list,(function(e,n){return n<6?i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))]),e.badge?i("view",{staticClass:["grid-dot"]},[i("uni-badge",{attrs:{text:e.badge,type:e.type}})],1):t._e()],1)]):t._e()})),1)],1),i("uni-section",{attrs:{title:"矩形宫格（3列）",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-grid",{attrs:{column:3,square:!1,highlight:!1},on:{change:t.change}},t._l(t.list,(function(e,n){return i("uni-grid-item",{key:n,attrs:{index:n}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:e.url,mode:"aspectFill"}}),i("u-text",{staticClass:["text"]},[t._v(t._s(e.text))])],1)])})),1)],1),i("uni-section",{attrs:{title:"边框颜色（4列 无文字）",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-grid",{attrs:{column:4,borderColor:"#03a9f4"},on:{change:t.change}},[i("uni-grid-item",{attrs:{index:0}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:"/static/c1.png",mode:"aspectFill"}})],1)]),i("uni-grid-item",{attrs:{index:1}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:"/static/c2.png",mode:"aspectFill"}})],1)]),i("uni-grid-item",{attrs:{index:2}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:"/static/c3.png",mode:"aspectFill"}})],1)]),i("uni-grid-item",{attrs:{index:3}},[i("view",{staticClass:["grid-item-box"]},[i("u-image",{staticClass:["image"],attrs:{src:"/static/c4.png",mode:"aspectFill"}})],1)])],1)],1)],1)])},o=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},439:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-grid-wrap"]},[e("view",{ref:"uni-grid",staticClass:["uni-grid"],class:{"uni-grid--border":this.showBorder},style:{"border-left-style":"solid","border-left-color":this.borderColor,"border-left-width":this.showBorder?"1px":0},attrs:{id:this.elId}},[this._t("default")],2)])},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}))},441:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("view",{staticClass:["uni-grid-item"],style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("view",{staticClass:["uni-grid-item__box"],class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:t._onClick}},[t._t("default")],2)]):t._e()},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}))},5:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},506:function(t,e,i){"use strict";i.r(e);var n=i(439),r=i(252);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);var a=i(0);var s=Object(a.a)(r.default,n.b,n.c,!1,null,"7850ae18","3449b054",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(507).default,this.options.style):Object.assign(this.options.style,i(507).default)}).call(s),e.default=s.exports},507:function(t,e,i){"use strict";i.r(e);var n=i(254),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},508:function(t,e,i){"use strict";i.r(e);var n=i(441),r=i(255);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);var a=i(0);var s=Object(a.a)(r.default,n.b,n.c,!1,null,"098ac062","52821532",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(509).default,this.options.style):Object.assign(this.options.style,i(509).default)}).call(s),e.default=s.exports},509:function(t,e,i){"use strict";i.r(e);var n=i(257),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},510:function(t,e,i){"use strict";i.r(e);var n=i(260),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=r.a},57:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},595:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(94);n.default.mpType="page",n.default.route="pages/extUI/grid/grid",n.default.el="#root",new Vue(n.default)},6:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-section"],attrs:{nvue:""}},[t.type?i("view",{staticClass:["uni-section__head"]},[i("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),i("view",{staticClass:["uni-section__content"]},[i("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}))},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}var c=i(8).version;function l(){var t="";if("n"===p()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var d=function(){return parseInt((new Date).getTime()/1e3)},p=function(){return"n"},f=0,g=0,h=function(){return f=d(),"n"===p()&&uni.setStorageSync("__page__residence__time",d()),f},_=0,y=0,m=function(){var t=(new Date).getTime();return _=t,y=0,t},v=function(){var t=(new Date).getTime();return y=t,t},b=function(t){var e=0;return 0!==_&&(e=y-_),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},x=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,r=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===p()?i.$mp&&i.$mp.page.is+r:i.$scope&&i.$scope.route+r||i.$mp&&i.$mp.page.route+r},S=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},w=i(9).default,C=i(2).default||i(2),k=uni.getSystemInfoSync(),D=function(t){function e(){var t;return a(this,e),(t=n(this,r(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(e,t),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,h(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,S(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,S(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(i)}}]),e}(function(){function t(){var e,i;a(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:l(),ut:p(),mpn:(i="","wx"!==p()&&"qq"!==p()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:C.appid,usv:c,v:"n"===p()?plus.runtime.version:"",ch:(e="","n"===p()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:d(),tt:"",p:"android"===k.platform?"a":"i",brand:k.brand||"",md:k.model,sv:k.system.replace(/(Android|iOS)\s/,""),mpsdk:k.SDKVersion||"",mpv:k.version||"",lang:k.language,pr:k.pixelRatio,ww:k.windowWidth,wh:k.windowHeight,sw:k.screenWidth,sh:k.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(v(),b("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,v();var i=b();m();var n=x(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=x(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===p()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=w&&w.pages[n]&&w.pages[n].titleNView&&w.pages[n].titleNView.titleText||w&&w.pages[n]&&w.pages[n].navigationBarTitleText||"",this.__licationShow)return m(),this.__licationShow=!1,void(this._lastPageRoute=i);if(v(),this._lastPageRoute=i,b("page").overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}m()}},{key:"_pageHide",value:function(){if(!this.__licationHide){v();var t=b("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=d(),this.statData.sc=function(t){var e=p(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=d(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",d()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===p()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,r=void 0===n?"":n,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:i,e_v:"object"==typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:d(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;C.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=d(),r=this._navigationBarTitle;t.ttn=r.page,t.ttpj=r.config,t.ttc=r.report;var o=this._reportingRequestData;if("n"===p()&&(o=uni.getStorageSync("__UNI__STAT__DATA")||{}),o[t.lt]||(o[t.lt]=[]),o[t.lt].push(t),"n"===p()&&uni.setStorageSync("__UNI__STAT__DATA",o),g=d(),"n"===p()&&(f=uni.getStorageSync("__page__residence__time")),!(g-f<10)||e){var a=this._reportingRequestData;"n"===p()&&(a=uni.getStorageSync("__UNI__STAT__DATA")),h();var s=[],u=[],l=[],_=function(t){a[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(i):3===t?l.push(i):u.push(i)}))};for(var y in a)_(y);s.push.apply(s,u.concat(l));var m={usv:c,t:n,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===p()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==p()||"a"!==this.statData.p?this._sendRequest(m):setTimeout((function(){i._sendRequest(m)}),200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var r in e)i[e[r]]=t[e[r]],n+=e[r]+"="+t[e[r]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),T=!1,R={onLaunch:function(t){D.report(t,this)},onReady:function(){D.ready(this)},onLoad:function(t){if(D.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return D.interceptShare(!1),e.call(this,t)}}},onShow:function(){T=!1,D.show(this)},onHide:function(){T=!0,D.hide(this)},onUnload:function(){T?T=!1:D.hide(this)},onError:function(t){D.error(t)}};!function(){var t=i(10);(t.default||t).mixin(R),uni.report=function(t,e){D.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}},94:function(t,e,i){"use strict";var n=i(390),r=i(258),o=i(0);var a=Object(o.a)(r.default,n.b,n.c,!1,null,null,"3e1c9674",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(510).default,this.options.style):Object.assign(this.options.style,i(510).default)}).call(a),e.default=a.exports}});
