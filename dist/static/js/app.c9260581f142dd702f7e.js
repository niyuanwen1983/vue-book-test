webpackJsonp([1],{"/t7G":function(t,e){},BHyM:function(t,e){},CxRu:function(t,e){},Dyrz:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/home"}},[n("i",{staticClass:"iconfont icon-shouye"}),t._v(" "),n("span",[t._v("首页")])]),t._v(" "),n("router-link",{attrs:{to:"/list"}},[n("i",{staticClass:"iconfont icon-liebiaoyemian"}),t._v(" "),n("span",[t._v("列表")])]),t._v(" "),n("router-link",{attrs:{to:"/collect"}},[n("i",{staticClass:"iconfont icon-shoucang"}),t._v(" "),n("span",[t._v("收藏")])]),t._v(" "),n("router-link",{attrs:{to:"/add"}},[n("i",{staticClass:"iconfont icon-tianjia"}),t._v(" "),n("span",[t._v("添加")])])],1)},staticRenderFns:[]};var r={name:"App",components:{Tab:n("VU/8")(null,a,!1,function(t){n("o6gp")},"data-v-494ec6e5",null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Tab")],1)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("zrh4")},null,null).exports,c=n("/ocq"),l=n("Xxa5"),u=n.n(l),d=n("exGp"),p=n.n(d),v={props:{title:{type:String,default:""},back:{type:Boolean,default:!1}},name:"MHeader",methods:{goBack:function(){this.$router.go(-1)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._t("default"),this._v("\n  "+this._s(this.title)+"\n  "),this.back?e("i",{staticClass:"iconfont icon-fanhui",on:{click:this.goBack}}):this._e()],2)},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(t){n("BHyM")},"data-v-a201202a",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,n){return e("swiper-slide",{key:n},[e("img",{attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var m=n("VU/8")({name:"carousel",props:["swiperSlides"],data:function(){return{swiperOption:{autoplay:3500,setWrapperSize:!0,pagination:{el:".swiper-pagination"},observeParents:!0}}}},_,!1,function(t){n("Dyrz")},"data-v-f9d22746",null).exports,g=n("mtWM"),k=n.n(g);k.a.defaults.baseURL="http://localhost:3000",k.a.interceptors.response.use(function(t){return t.data});var w={name:"Home",data:function(){return{title:"首页（属性）",sliders:[],hotBooks:[]}},created:function(){this.getSlider(),this.getHot()},methods:{getSlider:function(){var t=this;return p()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/sliders");case 2:t.sliders=e.sent;case 3:case"end":return e.stop()}},e,t)}))()},getHot:function(){var t=this;return p()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/hot");case 2:t.hotBooks=e.sent;case 3:case"end":return e.stop()}},e,t)}))()}},components:{MHeader:h,Swiper:m}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MHeader",{attrs:{back:!0,title:t.title}},[t._v("首页（插槽）")]),t._v(" "),n("div",{staticClass:"content"},[n("Swiper",{attrs:{swiperSlides:t.sliders}}),t._v(" "),n("div",{staticClass:"container"},[n("h3",[t._v("热门图书")]),t._v(" "),n("ul",t._l(t.hotBooks,function(e){return n("li",[n("img",{attrs:{src:e.bookCover,alt:""}}),t._v(" "),n("b",[t._v(t._s(e.bookName))])])}))])],1)],1)},staticRenderFns:[]};var x=n("VU/8")(w,b,!1,function(t){n("ZSrn")},"data-v-003dd46e",null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  add\n")])},staticRenderFns:[]};var R=n("VU/8")({name:"Add"},C,!1,function(t){n("hMXi")},"data-v-3b750f13",null).exports,y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  collect\n")])},staticRenderFns:[]};var S=n("VU/8")({name:"Collect"},y,!1,function(t){n("CxRu")},"data-v-af85da88",null).exports,H={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  detail\n")])},staticRenderFns:[]};var U=n("VU/8")({name:"Detail"},H,!1,function(t){n("/t7G")},"data-v-6db0b0b1",null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("list")])},staticRenderFns:[]};var E=n("VU/8")({name:"List"},$,!1,function(t){n("ckvN")},"data-v-5d5d079c",null).exports;i.a.use(c.a);var F=new c.a({routes:[{path:"/home",component:x},{path:"/collect",component:S},{path:"/add",component:R},{path:"/detail",component:U},{path:"/list",component:E}]}),M=n("7QTg"),V=n.n(M);n("v2ns");i.a.config.productionTip=!1,i.a.use(V.a),new i.a({el:"#app",router:F,components:{App:o},template:"<App/>"})},ZSrn:function(t,e){},ckvN:function(t,e){},hMXi:function(t,e){},o6gp:function(t,e){},v2ns:function(t,e){},zrh4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c9260581f142dd702f7e.js.map