webpackJsonp([9],{G8L4:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"post",function(){return W});var s=n("7+uW"),i=n("Dd8w"),o=n.n(i),r=n("NYxO"),l={name:"TheEntry",computed:o()({},Object(r.b)(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[n("i",{staticClass:"fa fa-plus text-md"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/articles/create"}},[n("i",{staticClass:"fa fa-paint-brush text-md"}),t._v("\n            创作文章\n          ")])],1)])]),t._v(" "),n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[]};var u={name:"TheHeader",components:{TheEntry:n("VU/8")(l,c,!1,function(t){n("G8L4")},"data-v-0a4e2654",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/vuejs-liuwei/dist/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},staticRenderFns:[]};function v(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var s=t.getBoundingClientRect(),i=window.getComputedStyle(t,null),o=parseInt(i.getPropertyValue("padding-right"))||0,r=parseInt(i.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=s.left-n.offsetWidth/2+(t.offsetWidth-o)/2+"px",a.top=s.top-n.offsetHeight+r+"px",a.display="block",a.visibility="visible"}}var p={name:"TheFooter",directives:{title:{bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],s=function(n){"mouseenter"===n.type?v(t,e.value):v()};a.forEach(function(e){t.addEventListener(e,s,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,s,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])})),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var m={name:"App",components:{TheHeader:n("VU/8")(u,d,!1,function(t){n("TZCM")},"data-v-00d1419e",null).exports,TheFooter:n("VU/8")(p,h,!1,function(t){n("puUf")},"data-v-0016443a",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var g=n("VU/8")(m,f,!1,function(t){n("m1Tf")},null,null).exports,b=n("/ocq"),_=[{path:"/auth/register",name:"Register",component:function(){return n.e(1).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",component:function(){return n.e(2).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e(6).then(n.bind(null,"3Jfp"))}},{path:"/users/1/edit",name:"EditUsers",component:function(){return n.e(5).then(n.bind(null,"56Zq"))},children:[{path:"",name:"EditProfile",component:function(){return n.e(4).then(n.bind(null,"Plmk"))},meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:function(){return n.e(3).then(n.bind(null,"o8vE"))},meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:function(){return n.e(7).then(n.bind(null,"6m7U"))},meta:{auth:!0}}]},{path:"/articles/create",name:"Create",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}}];s.a.use(b.a);var y=new b.a({mode:"history",linkExactActiveClass:"active",routes:_});y.beforeEach(function(t,e,n){var a=y.app,s=a.$options.store.state.auth;a.$message.hide(),s&&-1!==t.path.indexOf("/auth/")||!s&&t.meta.auth?n("/"):n()});var w=y,C=n("W3Iv"),E=n.n(C),k=n("BO1k"),x=n.n(k),T=n("d7EF"),I=n.n(T),S=n("pFYg"),L=n.n(S);function N(t,e,n){n=n&&"object"===(void 0===n?"undefined":L()(n))?n:{};var a="string"==typeof t.value?t.value.trim():"",s=n,i=s.title,o=void 0===i?"该项":i,r=s.error,l="";if(e.required&&""===a)l=o+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==a&&(l="输入的"+o+"不匹配")}else if(n.regex)try{n.regex.test(a)||(l=o+"格式不正确")}catch(t){}l?U(t,void 0===r?l:r):U(t)}function U(t,e){var n=t.parentElement,a=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),n=e.querySelector(".help-block")}return n}(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}var j={validator:{bind:function(t,e,n){var a=e.value,s=e.arg,i=e.modifiers,o=-1!==["change","blur","input"].indexOf(s)?s:"change",r=function(){U(t)},l=function(){N(t,i,a)};t.addEventListener("input",r,!1),t.addEventListener(o,l,!1),t.destroy=function(){t.removeEventListener("input",r,!1),t.removeEventListener(o,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,s=e.modifiers,i=t.closest("[data-validator-form]"),o=i?i.querySelector("[type=submit]"):null;if(o){var r=function(){N(t,s,a),i.querySelectorAll(".has-error").length?o.canSubmit=!1:o.canSubmit=!0};o.addEventListener("click",r,!1),t.destroySubmitBtn=function(){o.removeEventListener("click",r,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},dropdown:{bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},s=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",s,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",s,!1),t.destroy=null}},unbind:function(t){t.destroy()}}},A=!0,P=!1,$=void 0;try{for(var R,B=x()(E()(j));!(A=(R=B.next()).done);A=!0){var D=R.value,H=I()(D,2),q=H[0],F=H[1];s.a.directive(q,F)}}catch(t){P=!0,$=t}finally{try{!A&&B.return&&B.return()}finally{if(P)throw $}}var V={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var z=n("VU/8")(V,O,!1,function(t){n("d1G4")},"data-v-aeb6b896",null).exports;s.a.component("Message",z);var M=n("ssT3"),W=function(t,e){var n=t.commit,a=t.state,s=e.article,i=e.articleId,o=a.articles;if(Array.isArray(o)||(o=[]),s){var r=s.title,l=s.content,c=new Date;if(void 0===i){var u=o[o.length-1];i=u?parseInt(u.articleId)+1:o.length+1,o.push({uid:1,articleId:i,title:r,content:l,date:c})}n("UPDATE_ARTICLES",o),w.push({name:"Home",params:{articleId:i,showMsg:!0}})}};s.a.use(r.a);var G={user:M.a.getItem("user"),auth:M.a.getItem("auth"),articles:M.a.getItem("articles")},J={UPDATE_USER:function(t,e){t.user=e,M.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,M.a.setItem("auth",e)},UPDATE_ARTICLES:function(t,e){t.articles=e,M.a.setItem("articles",e)}},Y=o()({login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),w.push("/")},logout:function(t){(0,t.commit)("UPDATE_AUTH",!1),w.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,s=n.user;s&&"object"===(void 0===s?"undefined":L()(s))&&(e=o()({},s,e)),a("UPDATE_USER",e)}},a),Z=new r.a.Store({state:G,mutations:J,actions:Y}),Q=n("e7x4"),K=n.n(Q),X={install:function(t){K.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=K.a,t.prototype.$swal=K.a}},tt={install:function(t){var e=new(t.extend(z)),n=e.$mount().$el;t.nextTick(function(){document.querySelector("#main-container").prepend(n)}),e.$on("update:show",function(t){e.show=t});var a={show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.msg=n,e.type=a,e.show=!1,t.nextTick(function(){e.show=!0})},hide:function(){t.nextTick(function(){e.show=!1})}};t.prototype.$message=a}};s.a.use(X),s.a.use(tt),s.a.config.productionTip=!1,new s.a({el:"#app",router:w,store:Z,components:{App:g},template:"<App/>"})},TZCM:function(t,e){},d1G4:function(t,e){},m1Tf:function(t,e){},puUf:function(t,e){},ssT3:function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=localStorage;e.a={setItem:function(t,e){i.setItem(t,s()(e))},getItem:function(t){try{return JSON.parse(i.getItem(t))}catch(t){return null}},removeItem:function(t){i.removeItem(t)}}}},["NHnr"]);
//# sourceMappingURL=app.c87e0f7e30641fb3812f.js.map