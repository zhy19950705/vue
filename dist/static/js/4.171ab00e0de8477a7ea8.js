webpackJsonp([4],{"9Zhg":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("Dd8w"),i=t.n(a),o=t("NYxO"),d={components:{Headersec:t("3nlj").a},data:function(){return{mainArea:!1,havePage:!1,slideName:"slide-go"}},computed:i()({},Object(o.b)(["this.$store.state.address","this.$store.state.chooseAddress","this.$store.state.isChoose","this.$store.state.comname"])),mounted:function(){this.mainArea=!0,0===this.$store.state.address.length?this.havePage=!1:this.havePage=!0,"addressAdd"===this.$store.state.comname?this.slidename="slide-back":this.slidename="slide-go",this.setComname("address")},methods:i()({},Object(o.c)({setChooseAddress:"SET_CHOOSEADDRESS",setIsChoose:"SET_ISCHOOSE",setComname:"SET_COMNAME"}),{onAddAddress:function(){this.$router.push("./addaddress")},onChooseAddress:function(e){1===this.$store.state.isChoose&&(this.setChooseAddress(e),this.$router.push("./orderwait"),this.setIsChoose(2))}})},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page"},[t("headersec",{attrs:{tabname:"我的地址"}}),e._v(" "),t("transition",{attrs:{name:e.slideName}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.mainArea,expression:"mainArea"}],staticClass:"containner"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("\n        !havePage\n      ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.havePage,expression:"havePage"}]},e._l(this.$store.state.address,function(s){return t("div",{staticClass:"address-item"},[t("p",[e._v(e._s(s))])])}))])]),e._v(" "),t("div",{staticClass:"pageBottom",on:{click:e.onAddAddress}},[t("span",{staticClass:"tabbar-label"},[e._v("新增地址")])])],1)},staticRenderFns:[]};var r=t("VU/8")(d,n,!1,function(e){t("KFSF")},"data-v-661bc325",null);s.default=r.exports},KFSF:function(e,s){}});
//# sourceMappingURL=4.171ab00e0de8477a7ea8.js.map