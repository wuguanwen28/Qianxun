(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dae5bcb"],{"6d2c":function(t,a,i){},9685:function(t,a,i){"use strict";var e=i("6d2c"),s=i.n(e);s.a},c84b:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail"},[i("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回",border:!1,"left-arrow":"",fixed:!0},on:{"click-left":t.returnBack}}),i("div",{staticClass:"detail-box"},[i("div",{staticClass:"image"},[i("img",{staticClass:"img-auto",attrs:{src:t.productDetailData.large_img}}),i("ul",{staticClass:"pro-box"},[i("li",{staticClass:"pro-name"},[t._v(t._s(t.productDetailData.name))]),i("li",{staticClass:"pro-name small"},[t._v(t._s(t.productDetailData.enname))]),i("li",{staticClass:"pro-like",on:{click:t.like}},[i("van-icon",{attrs:{name:"star",size:"24px",color:t.isLike?"#ff0000":"#ffffff"}})],1)])]),i("div",{staticClass:"rule-box"},[i("div",{staticClass:"pro-rule"},t._l(t.rules,(function(a,e){return i("div",{key:e,staticClass:"rule-item"},[i("span",{staticClass:"fl rule-title"},[t._v(t._s(a.title))]),i("ul",{staticClass:"fl rule-list"},t._l(a.rule,(function(a,s){return i("li",{key:s,class:{active:a.isActive},on:{click:function(i){return t.toggleRule(a,e)}}},[t._v(t._s(a.text))])})),0)])})),0),i("div",{staticClass:"pro-desc"},[i("div",{staticClass:"desc-title"},[t._v("商品描述:")]),i("div",{staticClass:"desc-info"},t._l(t.desc,(function(a,e){return i("p",{key:e},[t._v(t._s(a))])})),0)]),i("div",{staticClass:"pro-price-count"},[i("div",{staticClass:"price fl"},[t._v("￥"+t._s(t.productDetailData.price))]),i("div",{staticClass:"count fr"},[i("van-stepper",{attrs:{"disable-input":""},model:{value:t.count,callback:function(a){t.count=a},expression:"count"}})],1)])])]),i("div",{staticClass:"action"},[i("div",{staticClass:"fl cart"},[i("van-goods-action-icon",{attrs:{icon:"chat-o",color:"#fff",text:"客服"},on:{click:function(a){return t.goPage("Service")}}}),i("van-goods-action-icon",{attrs:{icon:"cart-o",color:"#fff",badge:0==t.shopcartTotal?"":t.shopcartTotal>=100?"99+":t.shopcartTotal,text:"购物车"},on:{click:function(a){return t.goPage("Shopcart")}}})],1),i("div",{staticClass:"fr"},[i("button",{staticClass:"fl",on:{click:t.addShopcart}},[t._v("加入购物车")]),i("button",{staticClass:"fl",on:{click:t.commit}},[t._v("立即购买")])])])],1)},s=[],o=(i("4160"),i("a15b"),i("159b"),i("5530")),c=i("2f62"),n=i("fa7d"),r={name:"Detail",data:function(){return{count:1}},created:function(){var t=this;this.$toast.loading({forbidClick:!0,duration:0,message:"加载中..."}),this.$store.commit("detailModule/emptyData");var a=this.$route.params.pid;a=void 0==a?"rena_ice002":a,this.axios({method:"GET",url:"/productDetail",params:{appkey:this.appkey,pid:a}}).then((function(a){600==a.data.code&&(t.$store.commit("detailModule/changeProductDetailData",a.data.result[0]),t.$toast.clear(),t.findlike())})).catch((function(a){t.$toast.clear()})),this.shopcartRows()},computed:Object(o["a"])({},Object(c["b"])("detailModule",["productDetailData","rules","desc","isLike","shopcartTotal"])),methods:{toggleRule:function(t,a){this.$store.commit("detailModule/toggleRule",{item:t,index:a})},returnBack:function(){this.$router.go(-1)},findlike:function(){var t=this,a=n["a"].getToken(this);"false"!=this.$cookies.get("isLogin")&&this.axios({method:"GET",url:"/findlike",params:{appkey:this.appkey,pid:this.productDetailData.pid,tokenString:a}}).then((function(a){1e3==a.data.code&&t.$store.commit("detailModule/changeData",{key:"isLike",value:a.data.result.length>0})})).catch((function(t){}))},like:function(){var t=this,a=n["a"].isLogin("登录后才能收藏商品，是否登录？",this);if(a){var i=n["a"].getToken(this),e=this.isLike?"/notlike":"/like",s=this.isLike?"star-o":"star";this.axios({method:"POST",url:e,data:{appkey:this.appkey,pid:this.productDetailData.pid,tokenString:i},transformRequest:n["a"].transformRequest}).then((function(a){t.$toast.clear(),t.$toast({message:a.data.msg,icon:s}),t.$store.commit("detailModule/changeData",{key:"isLike",value:!t.isLike})})).catch((function(a){t.$toast.clear()}))}},addShopcart:function(t){var a=this,i="buy"==t?"立即购买":"加入购物车",e=n["a"].isLogin("登录后才能"+i+"，是否登录？",this);if(e){var s=[];this.rules.forEach((function(t){for(var a=0;a<t.rule.length;a++)if(t.rule[a].isActive){s.push(t.rule[a].text);break}}));var o=n["a"].getToken(this);this.axios({method:"POST",url:"/addShopcart",data:{appkey:this.appkey,pid:this.productDetailData.pid,count:this.count,rule:s.join("/"),tokenString:o},transformRequest:n["a"].transformRequest}).then((function(i){3e3==i.data.code&&(a.$toast.success({message:i.data.msg}),1==i.data.status&&a.$store.commit("detailModule/changeData",{key:"shopcartTotal",value:a.shopcartTotal+1}),"buy"==t&&a.$router.push({name:"Pay",query:{sids:i.data.sid}}))})).catch((function(t){}))}},shopcartRows:function(){var t=this,a=n["a"].getToken(this);this.axios({method:"GET",url:"/shopcartRows",params:{appkey:this.appkey,tokenString:a}}).then((function(a){8e3==a.data.code&&t.$store.commit("detailModule/changeData",{key:"shopcartTotal",value:a.data.result})})).catch((function(t){}))},goPage:function(t){"Shopcart"==t?this.$router.push({name:t}):this.$toast("该功能尚未开放")},commit:function(){this.addShopcart("buy")}}},l=r,u=(i("9685"),i("2877")),d=Object(u["a"])(l,e,s,!1,null,"3573084a",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5dae5bcb.60abc55d.js.map