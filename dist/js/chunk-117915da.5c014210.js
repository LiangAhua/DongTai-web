(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-117915da"],{"183b":function(e,t,a){},"57fe":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"container"},[e.sliderWarpContract?e._e():a("div",{staticClass:"fixed-warp"},[a("div",{staticClass:"slider-warp"},[a("div",{staticClass:"titleForm flex-row-space-between"},[a("el-select",{staticStyle:{width:"90px"},attrs:{size:"mini"},model:{value:e.searchObj.order,callback:function(t){e.$set(e.searchObj,"order",t)},expression:"searchObj.order"}},e._l(e.orderOptions,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),a("el-input",{staticStyle:{width:"106px"},attrs:{size:"mini"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.newSelectData},slot:"suffix"})])],1),a("div",{staticClass:"page-line flex-column-center"},[a("div",{staticClass:"flex-row-space-between"},[a("div",{staticClass:"flex-column-center"},[a("el-pagination",{attrs:{small:"",layout:"prev, next",total:e.total,"current-page":e.page,"page-size":20},on:{"current-change":e.currentChange}})],1),a("div",{staticClass:"flex-column-center"},[a("span",{staticStyle:{color:"#969ba4","line-height":"25px"}},[a("strong",{staticStyle:{color:"#38435a","font-weight":"400"}},[e._v(e._s(e.page))]),e._v("/"+e._s(Math.ceil(e.total/20))+" ")])]),a("div",{staticClass:"flex-column-center"},[a("el-button",{staticStyle:{color:"#5782db"},attrs:{type:"text"},on:{click:e.getTableData}},[e._v(" "+e._s(e.$t("views.scaDetail.reload"))+" ")])],1)])]),e._l(e.tableData,(function(t){return a("div",{key:t.id,staticClass:"card",class:t.id===e.selectedId?"selected":"",on:{click:function(a){return e.idChange(t.id)}}},[a("div",{staticClass:"titleLine"},[e._v(" "+e._s(t.package_name)+" ")]),a("div",{staticClass:"infoLine flex-row-space-between"},[a("span",{style:1===t.level_type?{color:"#EA7171"}:2===t.level_type?{color:"#F39D0A"}:3===t.level_type?{color:"#2E8FE9"}:4===t.level_type?{color:"#7BC1AB"}:""},[a("i",{staticClass:"iconfont iconweixian"}),e._v(" "+e._s(t.level)+" ")]),a("span",{staticStyle:{display:"flex","align-items":"center"}},[a("i",{staticClass:"iconfont iconbanben-2",staticStyle:{color:"#a2a5ab","font-size":"14px"}}),a("span",{staticClass:"long-dot",attrs:{title:t.version}},[e._v(" "+e._s(t.version)+" ")])])])])}))],2)]),a("div",{staticClass:"operateCol",style:e.sliderWarpContract?{}:{"margin-left":"228px"}},[a("div",{staticStyle:{height:"100%"}},[a("i",{staticClass:"iconfont operateIcon",class:e.sliderWarpContract?"iconopen1-2":"iconopen11",on:{click:function(t){e.sliderWarpContract=!e.sliderWarpContract}}})])]),e.scaObj&&e.scaObj.package_name?a("div",{staticClass:"sca-warp",class:e.sliderWarpContract?"slider-warp-contract":"slider-warp-spreadOut"},[a("div",{staticClass:"sca-title"},[e._v(" "+e._s(e.scaObj.package_name)+" ")]),a("div",{staticClass:"sca-info"},[a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconbanben-3"}),e._v(" "+e._s(e.$t("views.scaDetail.version"))+"： ")]),e._v(" "+e._s(e.scaObj.version)+" ")]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconwendangzhongxin"}),e._v(" "+e._s(e.$t("views.scaDetail.signature_value"))+"： ")]),e._v(" "+e._s(e.scaObj.signature_value)+" ")]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconapp"}),e._v(" "+e._s(e.$t("views.scaDetail.project_name"))+"： ")]),a("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$router.push("/project/projectDetail/"+e.scaObj.project_id)}}},[e._v(" "+e._s(e.scaObj.project_name)+" ")])]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconicon_details_banben"}),e._v(" "+e._s(e.$t("views.scaDetail.version_now"))+"： ")]),e._v(" "+e._s(e.scaObj.project_version)+" ")]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconweixian-2"}),e._v(" "+e._s(e.$t("views.scaDetail.level"))+"： ")]),e._v(" "+e._s(e.scaObj.level)+" ")]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconlishi"}),e._v(" "+e._s(e.$t("views.scaDetail.vul_count"))+"： ")]),e._v(" "+e._s(""+e.scaObj.vul_count+e.$t("views.scaDetail.unit"))+" ")]),a("div",{staticClass:"info-line"},[a("span",[a("i",{staticClass:"iconfont iconapp"}),e._v(" "+e._s(e.$t("views.scaDetail.agent"))+"： ")]),e._v(" "+e._s(e.scaObj.agent_name)+" ")])]),a("div",{staticClass:"module-title"},[e._v(" "+e._s(e.$t("views.scaDetail.vulList"))+" ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.scaObj.vuls}},[a("el-table-column",{attrs:{label:e.$t("views.scaDetail.cveNumber"),prop:"vulcve"}}),a("el-table-column",{attrs:{label:e.$t("views.scaDetail.cweNumber"),prop:"vulcwe"}}),a("el-table-column",{attrs:{label:e.$t("views.scaDetail.vulName"),prop:"vulname"}}),a("el-table-column",{attrs:{label:e.$t("views.scaDetail.vulLevel"),prop:"level"}}),a("el-table-column",{attrs:{label:e.$t("views.scaDetail.safeVersion"),prop:"safe_version"}}),a("el-table-column",{attrs:{label:e.$t("views.scaDetail.operate"),width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("i",{staticClass:"iconfont iconxiangqing detail",on:{click:function(t){return e.detailShow(s)}}})]}}],null,!1,1564135453)})],1)],1):e._e(),e.vulDetailDialogShow?a("el-dialog",{attrs:{width:"75%",visible:e.vulDetailDialogShow,title:e.$t("views.scaDetail.vulDetail.title")},on:{"update:visible":function(t){e.vulDetailDialogShow=t}}},[a("div",{staticClass:"detail-module-label"},[e._v(" "+e._s(e.$t("views.scaDetail.vulDetail.num"))+": "),a("div",{staticClass:"detail-module-content",staticStyle:{display:"inline-block"}},[e._v(" "+e._s(e.vulDetail.vulcve)+" ")])]),a("div",{staticClass:"detail-module-label"},[e._v(" "+e._s(e.$t("views.scaDetail.vulDetail.name"))+": "),a("div",{staticClass:"detail-module-content",staticStyle:{display:"inline-block"}},[e._v(" "+e._s(e.vulDetail.vulname)+" ")])]),a("div",{staticClass:"detail-module-label"},[e._v(" "+e._s(e.$t("views.scaDetail.vulDetail.desc"))+": ")]),a("div",{staticClass:"detail-module-content"},[a("MyMarkdownIt",{attrs:{content:e.vulDetail.overview}})],1),a("div",{staticClass:"detail-module-label"},[e._v(" "+e._s(e.$t("views.scaDetail.vulDetail.detail"))+": ")]),a("div",{staticClass:"detail-module-content"},[a("MyMarkdownIt",{attrs:{content:e.vulDetail.teardown}})],1)]):e._e()],1)},i=[],l=(a("96cf"),a("1da1")),n=a("d4ec"),c=a("bee2"),r=a("262e"),o=a("2caf"),v=a("9ab4"),u=a("60a3"),d=a("8c73"),p=function(e){Object(r["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.sliderWarpContract=!1,e.scaObj={},e.tableData=[],e.page=1,e.selectedId=0,e.total=0,e.vulDetailDialogShow=!1,e.searchObj={language:"",level:"",project_name:"",keyword:"",order:""},e.orderOptions=[{label:e.$t("views.scaList.orderOptions.project_name"),value:"project_name"},{label:e.$t("views.scaList.orderOptions.level"),value:"level"},{label:e.$t("views.scaList.orderOptions.package_name"),value:"package_name"},{label:e.$t("views.scaList.orderOptions.version"),value:"version"},{label:e.$t("views.scaList.orderOptions.language"),value:"language"},{label:e.$t("views.scaList.orderOptions.vul_count"),value:"vul_count"}],e}return Object(c["a"])(a,[{key:"created",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page=parseInt(this.$route.params.page),this.selectedId=parseInt(this.$route.params.id),e.next=4,this.getScaDetail();case 4:return e.next=6,this.getTableData();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"newSelectData",value:function(){this.page=1,this.getTableData()}},{key:"currentChange",value:function(e){this.page=e,this.getTableData()}},{key:"getTableData",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,s,i,l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:this.page,pageSize:10,language:this.searchObj.language,level:this.searchObj.level,project_name:this.searchObj.project_name,keyword:this.searchObj.keyword,order:this.searchObj.order},this.loadingStart(),e.next=4,this.services.sca.scaList(t);case 4:if(a=e.sent,s=a.status,i=a.data,l=a.page,n=a.msg,this.loadingDone(),201===s){e.next=13;break}return this.$message({type:"error",message:n,showClose:!0}),e.abrupt("return");case 13:this.tableData=i,this.total=l.alltotal;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"idChange",value:function(e){this.selectedId=e,this.getScaDetail()}},{key:"getScaDetail",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingStart(),e.next=3,this.services.sca.getScaDetail(this.selectedId);case 3:if(t=e.sent,a=t.data,s=t.status,i=t.msg,this.loadingDone(),201===s){e.next=11;break}return this.$message({type:"error",message:i,showClose:!0}),e.abrupt("return");case 11:this.scaObj=a;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"detailShow",value:function(e){this.vulDetail=e,this.vulDetailDialogShow=!0}}]),a}(d["a"]);p=Object(v["b"])([Object(u["a"])({name:"ScaDetail"})],p);var b=p,_=b,h=(a("e473"),a("2877")),w=Object(h["a"])(_,s,i,!1,null,"316acc11",null);t["default"]=w.exports},e473:function(e,t,a){"use strict";a("183b")}}]);
//# sourceMappingURL=chunk-117915da.5c014210.js.map