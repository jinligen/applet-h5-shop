(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c1cfc54"],{2179:function(t,a,e){},4533:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"active_lists"},[e("navbar",{attrs:{text:"所有秒杀活动"}}),e("scroller",[e("van-tabs",{attrs:{border:"false",sticky:"",swipeable:""},model:{value:t.tabActive,callback:function(a){t.tabActive=a},expression:"tabActive"}},[e("van-tab",{attrs:{title:"正在疯抢"}},[e("activeLists",{attrs:{activeType:"2",activeData:t.datas.on_going}})],1),e("van-tab",{attrs:{title:"即将开抢"}},[e("activeLists",{attrs:{activeType:"2",isStart:!1,activeData:t.datas.not_start}})],1)],1)],1)],1)},n=[],i=e("ed08"),c=e("9d8d"),r=e("8bdf"),o={data:function(){return{datas:[],going:[],end:[],notStart:[],tabActive:0}},components:{navbar:c["a"],activeLists:r["a"]},methods:{},created:function(){var t=this;Object(i["c"])("shop/api/getEventLists/event_type/2").then(function(a){t.datas=a})}},v=o,d=(e("e7bc"),e("048f")),l=Object(d["a"])(v,s,n,!1,null,"fc3dfad2",null);l.options.__file="index.vue";a["default"]=l.exports},e7bc:function(t,a,e){"use strict";var s=e("2179"),n=e.n(s);n.a}}]);