(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d14e5acc"],{1546:function(t,s,i){"use strict";var a=i("71b7"),e=i.n(a);e.a},"47d8":function(t,s,i){"use strict";var a=i("6f68"),e=i.n(a);e.a},"6f68":function(t,s,i){},"71b7":function(t,s,i){},"8f47":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"collage_detail active_detail"},[a("navbar",{attrs:{text:t.eventinfo.title}}),a("scroller",[a("div",{staticClass:"active_img"},[a("activeSlide",{attrs:{imgsurl:t.imgsurl}})],1),a("div",{staticClass:"active_time"},[a("div",[a("span",{staticClass:"active_price"},[t._v(t._s(t.eventinfo.member_limit)+"人拼团价--")]),a("span",{staticClass:"active_price"},[t._v(t._s(t.goods.sale_price)+"元")]),t.cd.endtime>t.cd.nowtime&&t.cd.nowtime>t.cd.starttime?a("span",{staticClass:"countdown"},[t._v("剩余时间:"+t._s(t.cd.day)+"天"+t._s(t.cd.hour)+":"+t._s(t.cd.min)+":"+t._s(t.cd.sec))]):t.cd.nowtime>t.cd.endtime?a("span",{staticClass:"active_timeout"},[t._v("活动已结束")]):a("span",{staticClass:"active_not_begin"},[t._v("活动未开始")])])]),a("div",{staticClass:"flex good_detail"},[a("p",{staticClass:"red active_price"},[a("span",{staticClass:"price-icon"},[t._v("¥"+t._s(t.goods.sale_price))])]),a("p",{staticClass:"cost_price"},[a("small",{staticClass:"tag"},[t._v("拼团价")]),a("br"),a("del",{staticClass:"market_price"},[a("span",{staticClass:"prize-icon"},[t._v("¥")]),t._v("原价"+t._s(t.goods.market_price))])]),a("p",{staticClass:"good_name"},[t._v(t._s(t.goods.title))]),a("router-link",{staticClass:"red",attrs:{to:"/collage/instruction/"+t.eventinfo.id}},[t._v("活动说明"),a("i",{staticClass:"iconfont icon-warning1 f12 f-ml-base"})])],1),0==t.groupid&&0!=t.eventinfo.is_open&&""!=t.collagegroup.lists?a("div",{staticClass:"group_record"},[a("div",{staticClass:"gorup_record_header"},[a("p",{staticClass:"group_num"},[a("span",[t._v(t._s(t.collagegroup.count))]),t._v("人在拼单，可直接参与")]),a("p",{staticClass:"view_more"},[a("router-link",{staticClass:"flex",attrs:{to:"/collage/group_more/"+t.goods.id+"/"+t.eventinfo.id},on:{click:t.view_more}},[a("span",{staticClass:"gray"},[t._v("查看更多")]),a("i",{staticClass:"weui-cell__ft"})])],1)]),t._l(t.collagegroup.lists,function(s,i){return a("div",{key:i,staticClass:"group_record_content"},[a("div",{staticClass:"record_item"},[a("div",{staticClass:"record_header"},[a("img",{staticClass:"headimgurl",attrs:{src:s.headimgurl}}),a("div",{staticClass:"differ_num"},[a("p",{staticClass:"nickname"},[t._v(t._s(s.nickname))]),a("small",{staticClass:"differ_info"},[t._v("还差"),a("strong",{staticClass:"red"},[t._v(t._s(s.need_count)+"人")]),t._v("拼成,剩余 "),a("strong",{staticClass:"group_time",attrs:{rel:""}},[t._v(t._s(s.time_str))]),t._v(" 结束\n            ")])])]),a("div",{staticClass:"go_group"},[a("router-link",{attrs:{to:"/collage/group_detail/"+s.id}},[t._v("去拼团")])],1),a("div",{staticStyle:{clear:"both"}})])])})],2):t._e(),""!=t.goodsparam?a("div",{staticClass:"switch-card"},[a("div",{staticClass:"switch-card__hd",on:{click:t.toggleArrow}},[a("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),a("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir})]),a("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goodsparam,function(s,i){return a("div",{key:i,staticClass:"switch-card__item"},[a("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(s.title))]),a("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(s.param_value))])])}),0)]):t._e(),a("div",{staticClass:"detail_estimate"},[a("van-tabs",{attrs:{swipeable:""}},[a("van-tab",{staticClass:"van_tab detail",attrs:{title:"商品详情"}},[a("div",{staticClass:"detail"},[a("div",{domProps:{innerHTML:t._s(t.content)}})])]),a("van-tab",{staticClass:"van_tab estimate",attrs:{title:"评价"}},[a("div",{},[a("img",{staticClass:"null_img",attrs:{src:i("fa95")}})]),a("small",[t._v("暂无相关评价")])])],1)],1)]),""!=t.needpayurl?a("div",{staticClass:"bottom-btn"},[a("a",{staticClass:"gopay",on:{click:function(s){t.gopay(t.outtradeno)}}},[t._v("去支付")])]):""==t.needpayurl&&0==t.groupid?a("div",{staticClass:"bottom-btn"},[a("a",{staticClass:"costprice",on:{click:t.original_cost}},[t._v("原价购买"),a("span",[t._v("¥"+t._s(t.goods.market_price))])]),a("a",{staticClass:"collage_num",on:{click:t.joincollage}},[t._v(t._s(t.eventinfo.member_limit)+"人团"),a("span",[t._v("¥"+t._s(t.goods.sale_price))])])]):a("div",{staticClass:"bottom-btn"},[a("a",{staticClass:"invite",on:{click:t.invite_collage}},[t._v("邀请好友拼团")])]),a("transition",{attrs:{name:"fade"}},[t.show?a("div",{staticClass:"dialog",on:{click:function(s){t.show=!1}}},[a("div",{staticClass:"share_tips"},[a("img",{attrs:{src:i("e984")}})])]):t._e()]),a("van-toast",{attrs:{id:"van-toast"}})],1)},e=[],o=(i("8383"),i("d9a1")),r=i("ed08"),n=i("fade"),c=i("9d8d"),l={data:function(){return{cd:{day:0,hour:0,min:0,sec:0,starttime:0,endtime:0,nowtime:0},userdata:[],collagegroup:{},eventinfo:{},content:"",goods:{},groupid:0,needpayurl:"",outtradeno:"",goodsparam:[],imgsurl:[],arrowDir:"top",show:!1}},components:{activeSlide:o["a"],navbar:c["a"]},computed:{},methods:{view_more:function(){},gopay:function(t,s){Object(r["d"])(t)},original_cost:function(){var t=this.goods.id,s=1,i=1,a=this.goods.market_price,e={goods_id:t,event_type:s,is_original:i,activePrice:a,PHPSESSID:window.localStorage.getItem("PHPSESSID")};this.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(e)}),this.$router.push("/confirm_order/"+this.goods.goods_id)},joincollage:function(){var t=this;Object(r["h"])(r["g"]+"/collage/Api/buy_now",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){if(0==s.code)Object(n["e"])(s.msg);else{var i=/goods_id\/(\d+)\/event_type\/(\d+)\/event_id\/(\d+)\/pbid\/(\d+)/.exec(s.url),a=i[1],e=i[2],o=i[3],r=i[4],c=t.goods.sale_price,l={goods_id:a,event_type:e,event_id:o,pbid:r,activePrice:c,PHPSESSID:window.localStorage.getItem("PHPSESSID")};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(l)}),t.$router.push("/confirm_order/"+t.goods.goods_id)}})},invite_collage:function(){this.show=!this.show},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"},countdown:function(){var t=this,s=t.cd.endtime;this.cd.nowtime=Date.parse(new Date)/1e3;var i=s-Date.parse(new Date)/1e3,a=parseInt(i/60/60/24),e=parseInt(i/60/60%24),o=parseInt(i/60%60),r=parseInt(i%60);this.cd.day=a,this.cd.hour=e,this.cd.min=o,this.cd.sec=r,setTimeout(function(){t.countdown()},1e3)},cdtime:function(){var t=this;setInterval(function(){for(var s=0;s<t.collagegroup.count;s++){var i=t.collagegroup.lists[s].left_time--,a=parseInt(i/60/60/24),e=parseInt(i/60/60%24),o=parseInt(i/60%60),r=parseInt(i%60);t.collagegroup.lists[s].time_str=a+"天"+e+":"+o+":"+r}},1e3)}},created:function(){var t=this,s=this.$route.params.id;this.userdata=JSON.parse(window.localStorage.getItem("userInfo")),console.log("xxx",this.userdata),Object(r["h"])(r["g"]+"/collage/Api/goods_detail",{id:s,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){t.collagegroup=s.collage_group,t.eventinfo=s.event_info,t.content=s.goods.goods.content.replace(/\<img/gi,'<img style="width:100% !important;height:auto" '),t.goods=s.goods,t.groupid=s.group_id,t.needpayurl=s.need_pay_url,t.outtradeno=s.out_trade_no,t.imgsurl=s.goods.goods.imgs_url,t.goodsparam=s.goods.shop_goods.goods_param,t.cd.endtime=s.event_info.end_time,t.cd.starttime=s.event_info.start_time;var i=s.share_url?s.share_url:"";s.nickname?s.nickname:t.userdata.nickName;console.log("wzh",i);var a={title:t.eventinfo.title,desc:"请您帮砍价",link:i,imgUrl:t.goods.cover,type:"link"};Object(r["f"])(a)}),this.countdown(),this.cdtime()}},d=l,_=(i("1546"),i("048f")),g=Object(_["a"])(d,a,e,!1,null,"8b3b2782",null);g.options.__file="index.vue";s["default"]=g.exports},d9a1:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"slide"},[i("van-swipe",{staticClass:"swiper",on:{change:t.toggleswiper}},t._l(t.imgsurl,function(s,a){return i("van-swipe-item",{key:a,staticClass:"swiper-item"},[i("a",{staticClass:"slide-url",on:{click:function(s){t.showslide(a)}}},[i("img",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:s}})])])}),1),i("p",{staticClass:"padding"},[i("span",{staticClass:"currentslide"},[t._v(t._s(t.currentnum))]),t._v("/"),i("span",{staticClass:"totalslide"},[t._v(t._s(t.imgsurl.length))])])],1)},e=[],o=i("fade"),r={data:function(){return{currentnum:1}},props:{imgsurl:Array},methods:{toggleswiper:function(t){this.currentnum=t+1},showslide:function(t){Object(o["b"])({images:this.imgsurl,startPosition:t})}}},n=r,c=(i("47d8"),i("048f")),l=Object(c["a"])(n,a,e,!1,null,null,null);l.options.__file="activeSlide.vue";s["a"]=l.exports},e984:function(t,s,i){t.exports=i.p+"img/share_tips.c0050942.png"},fa95:function(t,s,i){t.exports=i.p+"img/null.17d21c9e.png"}}]);