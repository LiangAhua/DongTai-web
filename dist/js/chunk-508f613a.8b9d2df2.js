(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508f613a"],{"13d5":function(t,e,s){"use strict";var a=s("23e7"),n=s("d58f").left,i=s("a640"),c=s("ae40"),l=s("2d00"),r=s("605d"),o=i("reduce"),u=c("reduce",{1:0}),h=!r&&l>79&&l<83;a({target:"Array",proto:!0,forced:!o||!u||h},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"5a36":function(t,e,s){"use strict";s("eb51")},a623:function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").every,i=s("a640"),c=s("ae40"),l=i("every"),r=c("every");a({target:"Array",proto:!0,forced:!l||!r},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},c4e3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"container"},[s("div",{staticClass:"fixed-warp"},[s("div",{staticClass:"slider-warp"},[s("div",{staticClass:"title flex-column-center",staticStyle:{height:"54px"}},[s("div",{staticClass:"flex-row-space-between"},[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(t.$t("views.vulnList.filter")))]),s("el-button",{staticClass:"resetAllBtn",staticStyle:{height:"14px"},attrs:{type:"text"},on:{click:t.reset}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(t.$t("views.vulnList.resetAll"))+" ")])])],1)]),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.$t("views.vulnList.project_name")))]),s("div",{staticClass:"reset-btn",on:{click:function(e){return t.projectNameChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.$t("views.vulnList.reset")))])])]),s("div",{staticClass:"search-box"},[s("el-autocomplete",{staticClass:"commonInput",staticStyle:{margin:"12px 0 0 0"},attrs:{size:"small",clearable:"",placeholder:t.$t("views.vulnList.searchName"),"fetch-suggestions":t.querySearchAsync},on:{select:t.handleSelect},model:{value:t.kw,callback:function(e){t.kw=e},expression:"kw"}})],1),t._l(t.searchOptionsObj.projects,(function(e){return s("div",{key:e.id,staticClass:"flex-row-space-between module-line",class:t.searchObj.project_id===e.id?"selectedLine":"",style:0===e.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px"},on:{click:function(s){return t.projectNameChange(e.id,0===e.count)}}},[s("div",{staticClass:"selectOption",attrs:{title:e.project_name}},[s("span",[t._v(" "+t._s(t.projectNameSplit(e.project_name,12))+t._s(e.project_name.length>12?"...":"")+" ")])]),s("div",{staticClass:"num"},[s("span",[t._v(" "+t._s(e.count)+" ")])])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.type"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(e){return t.typeChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.reset"))+" ")])])]),t._l(t.searchOptionsObj.type,(function(e){return s("div",{key:e.type,staticClass:"flex-row-space-between module-line",class:t.searchObj.type===e.type?"selectedLine":"",style:0===e.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return t.typeChange(e.type,0===e.count)}}},[s("div",{staticClass:"selectOption"},[t._v(" "+t._s(e.type)+" ")]),s("div",{staticClass:"num"},[t._v(" "+t._s(e.count)+" ")])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.level"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(e){return t.levelChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.reset"))+" ")])])]),t._l(t.searchOptionsObj.level,(function(e){return s("div",{key:e.level_id,staticClass:"flex-row-space-between module-line",class:t.searchObj.level===e.level_id?"selectedLine":"",style:0===e.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return t.levelChange(e.level_id,0===e.count)}}},[s("div",{staticClass:"selectOption"},[t._v(" "+t._s(e.level)+" ")]),s("div",{staticClass:"num"},[t._v(" "+t._s(e.count)+" ")])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.language"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(e){return t.languageChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("views.vulnList.reset"))+" ")])])]),t._l(t.searchOptionsObj.language,(function(e){return s("div",{key:e.language,staticClass:"flex-row-space-between module-line",class:t.searchObj.language===e.language?"selectedLine":"",style:0===e.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return t.languageChange(e.language,0===e.count)}}},[s("div",{staticClass:"selectOption"},[t._v(" "+t._s(e.language)+" ")]),s("div",{staticClass:"num"},[t._v(" "+t._s(e.count)+" ")])])}))],2)]),s("div",{staticClass:"main-warp"},[s("div",{staticClass:"tool-box"},[s("div",{staticClass:"selectForm"},[s("div",{staticClass:"sort-box"},[s("el-select",{staticClass:"commonSelect vulnSelect",staticStyle:{width:"150px","font-size":"14px"},attrs:{size:"small",placeholder:t.$t("views.vulnList.sort"),clearable:""},on:{change:t.newSelectData},model:{value:t.searchObj.order,callback:function(e){t.$set(t.searchObj,"order",e)},expression:"searchObj.order"}},t._l(t.searchOptionsObj.orderOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),null===t.searchObj.sort?s("i",{staticClass:"el-icon-sort sort-btn",on:{click:function(e){return t.sortSelect(!0)}}}):t._e(),!0===t.searchObj.sort?s("i",{staticClass:"el-icon-sort-up sort-btn",on:{click:function(e){return t.sortSelect(!1)}}}):t._e(),!1===t.searchObj.sort?s("i",{staticClass:"el-icon-sort-down sort-btn",on:{click:function(e){return t.sortSelect(null)}}}):t._e()],1),s("el-select",{staticClass:"commonSelect",staticStyle:{"margin-left":"10px",width:"150px","font-size":"14px"},attrs:{placeholder:t.$t("views.vulnList.developLanguage"),size:"small",clearable:""},on:{change:t.newSelectData},model:{value:t.searchObj.language,callback:function(e){t.$set(t.searchObj,"language",e)},expression:"searchObj.language"}},[s("el-option",{attrs:{label:"JAVA",value:"JAVA"}}),s("el-option",{attrs:{label:"PYTHON",value:"PYTHON"}})],1),s("el-select",{staticClass:"commonSelect",staticStyle:{"margin-left":"10px",width:"160px","font-size":"14px"},attrs:{size:"small",placeholder:t.$t("views.vulnList.vulnStatus"),clearable:""},on:{change:t.newSelectData},model:{value:t.searchObj.status,callback:function(e){t.$set(t.searchObj,"status",e)},expression:"searchObj.status"}},t._l(t.searchOptionsObj.statusOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),s("div",{staticClass:"selectInput"},[s("el-input",{staticClass:"commonInput",staticStyle:{width:"370px"},attrs:{size:"small",placeholder:t.$t("views.vulnList.searchExample")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newSelectData(e)}},model:{value:t.searchObj.url,callback:function(e){t.$set(t.searchObj,"url",e)},expression:"searchObj.url"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.newSelectData},slot:"suffix"})])],1)],1),s("div",{staticClass:"checked-bar"},[s("el-checkbox",{attrs:{value:t.tableData.length>0&&t.tableData.every((function(t){return t.checked}))},on:{change:t.selectAll}},[t._v(t._s(t.$t("views.vulnList.choose"))+" "),s("span",{staticStyle:{color:"#1a80f2"}},[t._v(t._s(t.tableData.filter((function(t){return t.checked})).length))]),t._v(" "+t._s(t.$t("views.vulnList.strip")))]),s("div",[s("el-button",{staticClass:"checkedAllBtn",on:{click:function(e){return t.recheck("project")}}},[t._v(" "+t._s(t.$t("views.vulnList.verificationBatch"))+" ")]),s("el-button",{staticClass:"checkedAllBtn",on:{click:function(e){return t.recheck("all")}}},[t._v(" "+t._s(t.$t("views.vulnList.verificationAll"))+" ")])],1)],1)]),s("div",{staticClass:"tool-box-placeholder"}),t._l(t.tableData,(function(e){return s("div",{key:e.id,staticClass:"card"},[s("div",{staticClass:"card-title flex-row-space-between",staticStyle:{height:"33px","min-height":"32px"}},[s("span",{staticClass:"title",staticStyle:{"font-size":"14px","font-weight":"bold",height:"32px"}},[s("el-checkbox",{staticStyle:{"margin-right":"12px","margin-top":"2px"},model:{value:e.checked,callback:function(s){t.$set(e,"checked",s)},expression:"item.checked"}}),"zh_cn"===t.$i18n.locale?s("span",{on:{click:function(s){return t.goDetail(e.id)}}},[t._v(" "+t._s(""+e.uri+t.$t("views.vulnList.is")+e.http_method+t.$t("views.vulnList.reqHas")+e.type+t.$t("views.vulnList.vule")+(e.taint_position?"，"+t.$t("views.vulnList.position")+"："+e.taint_position:""))+" ")]):t._e(),"en"===t.$i18n.locale?s("span",{on:{click:function(s){return t.goDetail(e.id)}}},[t._v(" "+t._s(e.type+' on "'+e.uri+'" with '+e.http_method)+" "+t._s(e.taint_position?", Positon:"+e.taint_position:"")+" ")]):t._e()],1),s("span",{staticClass:"time flex-column-center",staticStyle:{"font-size":"12px",height:"32px"}},[t._v(" "+t._s(e.first_time)+" ")])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"top-stack"},[s("i",{staticClass:"iconfont iconyuandianzhong"}),s("span",[t._v(" "+t._s(e.top_stack)+" ")])]),s("div",{staticClass:"bottom-stack"},[s("i",{staticClass:"iconfont iconyuandianzhong"}),s("span",[t._v(" "+t._s(e.bottom_stack)+" ")])]),s("div",{staticClass:"infoLine flex-row-space-between"},[s("div",{staticClass:"flex-row-space-between",staticStyle:{width:"60%"}},[s("span",{staticClass:"info"},[s("i",{staticClass:"iconfont iconyingyong",staticStyle:{color:"#a3b0e2"}}),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.project_name,placement:"top-start",disabled:e.project_name.length<=11}},[s("span",{staticClass:"dot",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.$router.push("/project/projectDetail/"+e.project_id)}}},[t._v(" "+t._s(e.project_name))])])],1),s("span",{staticClass:"info",staticStyle:{flex:"1.5"}},[s("i",{staticClass:"iconfont",class:t.switchServerType(e.server_type)}),t._v(" "+t._s(e.server_name)+" ")]),s("span",{staticClass:"info",style:1===e.level_type?{color:"#EA7171"}:2===e.level_type?{color:"#F39D0A"}:3===e.level_type?{color:"#2E8FE9"}:4===e.level_type?{color:"#7BC1AB"}:""},[s("i",{staticClass:"iconfont iconweixian"}),t._v(" "+t._s(e.level)+" ")]),s("span",{staticClass:"info",staticStyle:{flex:"1.2"}},[s("i",{staticClass:"iconfont iconshijian-2",staticStyle:{color:"#a2a5ab","font-size":"14px"}}),t._v(" "+t._s(e.latest_time)+" ")])]),s("div",[s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#e7f5e4"}}),s("span",{staticStyle:{background:"#e7f5e4",color:"#63974e"}},[t._v(" "+t._s(e.language)+" ")])]),s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#fce9de"}}),s("span",{staticClass:"showDot",staticStyle:{background:"#fce9de",color:"#e07d43"},attrs:{title:e.type}},[t._v(" "+t._s(e.type)+" ")])]),s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#e5f3f3"}}),s("span",{staticStyle:{background:"#e5f3f3",color:"#3c9aa2"}},[t._v(" "+t._s(e.status)+" ")])])])])])])}))],2)])},n=[],i=(s("99af"),s("a623"),s("4de4"),s("4160"),s("d81d"),s("13d5"),s("45fc"),s("b0c0"),s("159b"),s("2909")),c=s("5530"),l=(s("96cf"),s("1da1")),r=s("d4ec"),o=s("bee2"),u=s("262e"),h=s("2caf"),p=s("9ab4"),v=s("60a3"),d=s("73ec"),f=s("8c73"),b=function(t){Object(u["a"])(s,t);var e=Object(h["a"])(s);function s(){var t;return Object(r["a"])(this,s),t=e.apply(this,arguments),t.page=1,t.pageSize=20,t.dataEnd=!1,t.tableData=[],t.searchOptionsObj={language:[],level:[],type:[],projects:[],orderOptions:[{label:t.$t("views.vulnList.orderOptions.type"),value:"type"},{label:t.$t("views.vulnList.orderOptions.level"),value:"level"},{label:t.$t("views.vulnList.orderOptions.url"),value:"url"},{label:t.$t("views.vulnList.orderOptions.latest_time"),value:"latest_time"},{label:t.$t("views.vulnList.orderOptions.first_time"),value:"first_time"}],statusOptions:[]},t.searchObj={sort:null,language:"",level:"",type:"",project_name:"",url:"",order:"",status:"",project_id:""},t.kw="",t}return Object(o["a"])(s,[{key:"getStatus",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.services.vuln.vulStatus();case 2:if(e=t.sent,201===e.status){t.next=6;break}return this.$message.error(e.msg),t.abrupt("return");case 6:this.searchOptionsObj.statusOptions=e.data.map((function(t){return{value:t.id,label:t.name}}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.getStatus(),this.getTableData(),this.vulnSummary()}},{key:"querySearchAsync",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,s){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,this.services.setting.searchProject({name:e});case 3:a=t.sent,201===a.status&&(n=a.data.map((function(t){return{value:t.name,id:t.id}})),s(n));case 5:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}()},{key:"handleSelect",value:function(t){this.projectNameChange(t.id,!1)}},{key:"sortSelect",value:function(t){this.searchObj.sort=t,this.newSelectData()}},{key:"recheck",value:function(t){var e=this;this.$confirm("".concat(this.$t("views.vulnList.will")).concat("all"===t?this.$t("views.vulnList.all"):this.$t("views.vulnList.batch")).concat(this.$t("views.vulnList.recheckDesc")),this.$t("views.vulnList.recheckInfo"),{confirmButtonText:this.$t("views.vulnList.confirmButtonText"),cancelButtonText:this.$t("views.vulnList.cancelButtonText"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a={},"all"!==t){s.next=7;break}return s.next=4,e.services.vuln.vulRecheckAll({type:t});case 4:a=s.sent,s.next=14;break;case 7:if(e.tableData.some((function(t){return t.checked}))){s.next=10;break}return e.$message({type:"warning",message:e.$t("views.vulnList.chooseWarning"),showClose:!0}),s.abrupt("return");case 10:return n=e.tableData.map((function(t){if(t.checked)return t.id})).filter((function(t){return t})),s.next=13,e.services.vuln.vulRecheck({ids:String(n)});case 13:a=s.sent;case 14:if(201===a.status){s.next=18;break}e.$message({type:"error",message:a.msg,showClose:!0}),s.next=21;break;case 18:return e.$message({type:"success",message:a.msg,showClose:!0}),s.next=21,e.newSelectData();case 21:case"end":return s.stop()}}),s)}))))}},{key:"selectAll",value:function(t){var e=this,s=this.tableData.length>0&&this.tableData.every((function(t){return t.checked}));s?this.tableData.forEach((function(t){return e.$set(t,"checked",!1)})):this.tableData.forEach((function(t){return e.$set(t,"checked",!0)})),console.log(t)}},{key:"reset",value:function(){this.searchObj.sort=null,this.searchObj.language="",this.searchObj.level="",this.searchObj.type="",this.searchObj.project_name="",this.searchObj.status="",this.searchObj.project_id="",this.searchObj.url="",this.kw="",this.newSelectData()}},{key:"languageChange",value:function(t,e){e||(this.searchObj.language=t,this.newSelectData())}},{key:"levelChange",value:function(t,e){e||(this.searchObj.level=t,this.newSelectData())}},{key:"typeChange",value:function(t,e){e||(this.searchObj.type=t,this.newSelectData())}},{key:"projectNameChange",value:function(t,e){e||(this.searchObj.project_id=t,this.newSelectData())}},{key:"newSelectData",value:function(){this.page=1,this.dataEnd=!1,this.tableData=[],this.vulnSummary(),this.getTableData()}},{key:"mounted",value:function(){window.addEventListener("scroll",this.myScroll)}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.myScroll)}},{key:"myScroll",value:function(){var t=document.documentElement.scrollTop+window.innerHeight>document.documentElement.offsetHeight-1;t&&(this.dataEnd||(this.page+=1,this.getTableData()))}},{key:"getTableData",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,s,a,n,l,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:this.page,pageSize:this.pageSize,language:this.searchObj.language,level:this.searchObj.level,type:this.searchObj.type,project_name:this.searchObj.project_name,url:this.searchObj.url,order:"".concat(!1===this.searchObj.sort&&this.searchObj.order?"-":"").concat(this.searchObj.order),status_id:this.searchObj.status,project_id:this.searchObj.project_id},this.loadingStart(),t.next=4,this.services.vuln.vulnList(e);case 4:if(s=t.sent,a=s.status,n=s.data,l=s.msg,this.loadingDone(),201===a){t.next=12;break}return this.$message({type:"error",message:l,showClose:!0}),t.abrupt("return");case 12:r=n.reduce((function(t,e){return t.push(Object(c["a"])(Object(c["a"])({},e),{},{first_time:Object(d["a"])(e.first_time),latest_time:Object(d["b"])(e.latest_time)})),t}),[]),r.length<20&&(this.dataEnd=!0),this.tableData=[].concat(Object(i["a"])(this.tableData),Object(i["a"])(r));case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"vulnSummary",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,s,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={language:this.searchObj.language,level:this.searchObj.level,type:this.searchObj.type,project_name:this.searchObj.project_name,url:this.searchObj.url,order:"".concat(!1===this.searchObj.sort&&this.searchObj.order?"-":"").concat(this.searchObj.order),status_id:this.searchObj.status,project_id:this.searchObj.project_id},this.loadingStart(),t.next=4,this.services.vuln.vulnSummary(e);case 4:if(s=t.sent,a=s.status,n=s.data,i=s.msg,this.loadingDone(),201===a){t.next=12;break}return this.$message({type:"error",message:i,showClose:!0}),t.abrupt("return");case 12:this.searchOptionsObj.language=n.language,this.searchOptionsObj.level=n.level,this.searchOptionsObj.type=n.type,this.searchOptionsObj.projects=n.projects;case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"goDetail",value:function(t){this.$router.push("/vuln/vulnDetail/".concat(this.page,"/").concat(t,"?status=")+this.searchObj.status)}},{key:"switchServerType",value:function(t){switch(t){case"tomcat":return"icontomcat";case"jetty":return"iconJetty";case"resin":return"iconresin";case"weblogic":return"iconwebLogic";case"websphere":return"iconwebSphere";case"jboss":return"iconJBoss";default:return"iconyingyong"}}},{key:"projectNameSplit",value:function(t,e){return t.length>e?t.substring(0,e):t}}]),s}(f["a"]);b=Object(p["b"])([Object(v["a"])({name:"VulnList"})],b);var g=b,m=g,y=(s("5a36"),s("2877")),_=Object(y["a"])(m,a,n,!1,null,"4645fdb4",null);e["default"]=_.exports},d58f:function(t,e,s){var a=s("1c0b"),n=s("7b0b"),i=s("44ad"),c=s("50c4"),l=function(t){return function(e,s,l,r){a(s);var o=n(e),u=i(o),h=c(o.length),p=t?h-1:0,v=t?-1:1;if(l<2)while(1){if(p in u){r=u[p],p+=v;break}if(p+=v,t?p<0:h<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:h>p;p+=v)p in u&&(r=s(r,u[p],p,o));return r}};t.exports={left:l(!1),right:l(!0)}},eb51:function(t,e,s){}}]);
//# sourceMappingURL=chunk-508f613a.8b9d2df2.js.map