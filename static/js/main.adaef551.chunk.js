(this["webpackJsonphbs-web"]=this["webpackJsonphbs-web"]||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},45:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),o=a(4),s=a(5),l=a(7),u=a(6),p=(a(45),{apiKey:"AIzaSyCR0I3uV1AvChz-iMBSQMjhLJtGqpUC6bU",authDomain:"hbs-personal.firebaseapp.com",databaseURL:"https://hbs-personal.firebaseio.com",projectId:"hbs-personal",storageBucket:"hbs-personal.appspot.com",messagingSenderId:"454239726753",appId:"1:454239726753:web:8c4b0ea94b08f815a514e0",measurementId:"G-35NXTCMPLQ"}),m={pageSize:2},h=(a(46),a(76)),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.global.mainData.toc,t=this.props.global.mainData.headline;return t=t[0]?t[0]:"",r.a.createElement("div",null,r.a.createElement(h.a,{className:"site-header sticky-top py-1"},r.a.createElement("div",{className:"container d-flex flex-column flex-md-row justify-content-between"},e.map((function(e,t){return r.a.createElement(h.a.Item,null,r.a.createElement(h.a.Link,{href:e.link},e.title))})))),r.a.createElement("div",{className:"position-relative overflow-hidden text-center bg-light"},r.a.createElement("div",{className:"col-md-5 p-lg-1 mx-auto my-4",dangerouslySetInnerHTML:{__html:t.data}})))}}]),a}(r.a.Component),g=a(16),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){this.props.listTopics;return r.a.createElement("div",null,this.props.listTopics.map((function(e){return r.a.createElement("div",{className:"row col-12"},r.a.createElement("h2",{class:"display-4 font-weight-normal"},e.title),r.a.createElement("p",{class:"lead font-weight-normal"},e.desc))})),"list topic")}}]),a}(r.a.Component),f=a(77),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.baseLink=this.props.baseLink,this.currentPage=this.props.currentPage,this.totalPage=this.props.numberChild/m.pageSize,this.items=[];for(var e=1;e<=this.totalPage;e++){this.totalPage>10?1===e?(this.items.push(r.a.createElement(f.a.Item,{key:e,active:e===this.currentPage,onClick:this.props.changePage,href:"".concat(this.baseLink).concat(e)},e)),this.items.push(r.a.createElement(f.a.Ellipsis,null))):e===this.totalPage?(this.items.push(r.a.createElement(f.a.Ellipsis,null)),this.items.push(r.a.createElement(f.a.Item,{key:e,active:e===this.currentPage,href:"".concat(this.baseLink).concat(e)},e))):this.currentPage-3<=e&&e<=this.currentPage+3&&this.items.push(r.a.createElement(f.a.Item,{key:e,active:e===this.currentPage,href:"".concat(this.baseLink).concat(e)},e)):this.items.push(r.a.createElement(f.a.Item,{key:e,active:e===this.currentPage,href:"".concat(this.baseLink).concat(e)},e))}}},{key:"render",value:function(){return r.a.createElement(f.a,null,this.items)}}]),a}(r.a.Component),j=a(11),E=a.n(j),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={listTopics:[],numberChild:5},n.getTopicData=n.getTopicData.bind(Object(g.a)(n)),n.changePage=n.changePage.bind(Object(g.a)(n)),n.page=n.props.match.params.page?n.props.match.params.page:1,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getTopicData()}},{key:"componentWillUpdate",value:function(e){this.props.match.params.page!==e.match.params.page&&this.getTopicData()}},{key:"changePage",value:function(e){this.page=this.props.match.params.page?this.props.match.params.page:1,this.getTopicData(),console.log(this.props.location.search),this.props.history.push("/topics/"+e)}},{key:"getTopicData",value:function(){var e=this;E.a.apps.length||E.a.initializeApp(p),E.a.analytics(),this.page=this.props.match.params.page?this.props.match.params.page:1;var t=E.a.database(),a=(this.page-1)*m.pageSize+1,n=this.page*m.pageSize;console.log(m.pageSize),t.ref("topic/summary").on("value",(function(t){var a=t.val(),n=a.length>0?a[0].count:0;e.setState({numberChild:n})})),t.ref("topic/topic").orderByChild("id").startAt(a).endAt(n).on("value",(function(t){var a=[];t.forEach((function(e){a.push(e.val())})),e.setState({listTopics:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-body"},r.a.createElement(d,{listTopics:this.state.listTopics}),r.a.createElement(v,{baseLink:"#/topics/",currentPage:this.page,numberChild:this.state.numberChild,changePage:this.changePage}))}}]),a}(r.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),E.a.apps.length||E.a.initializeApp(p),E.a.analytics(),E.a.database().ref("topic/topic").orderByKey("order").orderByChild("active").equalTo(1).once("value",(function(e){e.forEach((function(e){console.log(e.key,e.val())}))})),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-body"})}}]),a}(r.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.global.mainData.mainContent;return r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",{className:"col-md-5 p-lg-1 mx-auto my-4",dangerouslySetInnerHTML:{__html:e.data}})})))}}]),a}(r.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).renderPage=n.renderPage.bind(Object(g.a)(n)),n.renderHomePage=n.renderHomePage.bind(Object(g.a)(n)),n.renderListTopicPage=n.renderListTopicPage.bind(Object(g.a)(n)),n.renderSingleTopicPage=n.renderSingleTopicPage.bind(Object(g.a)(n)),n.renderDocsPage=n.renderDocsPage.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"renderPage",value:function(e){switch(e){case"index":return this.renderHomePage();case"topics":return this.renderListTopicPage();case"docs":return this.renderDocsPage();default:return this.renderHomePage()}}},{key:"renderHomePage",value:function(){return r.a.createElement(k,{global:this.props.global})}},{key:"renderListTopicPage",value:function(){return r.a.createElement(O,Object.assign({global:this.props.global},this.props))}},{key:"renderSingleTopicPage",value:function(){return r.a.createElement(y,Object.assign({global:this.props.global},this.props))}},{key:"renderDocsPage",value:function(){return r.a.createElement("div",null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrap"},this.renderPage(this.props.route))}}]),a}(r.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.global.mainData.footerLink,t=[];return e&&(t=(t=e.filter((function(e){return 0===e.link}))).map((function(t){var a=t.group,n=e.filter((function(e){return 0!==e.link&&e.group===a}));return n=n.map((function(e){return{link:e.link,title:e.title}})),{title:t.title,children:n}}))),r.a.createElement("footer",{className:"navbar fixed-bottom"},r.a.createElement("div",{className:"row col-12"},r.a.createElement("div",{className:"col-4 col-md"},r.a.createElement("small",{className:"d-block mb-3 text-muted"},"\xa9 2020")),t.map((function(e){return r.a.createElement("div",{className:"col-4 col-md"},r.a.createElement("h5",null,e.title),r.a.createElement("ul",{className:"list-unstyled text-small"},e.children.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:e.link},e.title))}))))}))))}}]),a}(r.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-body"},r.a.createElement(b,{global:this.props.global}),r.a.createElement(P,Object.assign({global:this.props.global,route:this.props.route},this.props)),r.a.createElement(C,{global:this.props.global}))}}]),a}(r.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(T,Object.assign({global:this.props.global,route:this.props.route},this.props))}}]),a}(r.a.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e),E.a.apps.length||E.a.initializeApp(p),E.a.analytics();var r=E.a.database();return n.state={global:{mainData:{toc:[],topic:[],footerLink:[],mainContent:[],headline:[]}}},r.ref("main/").on("value",(function(e){var t=e.val();if(t){var a={mainData:t};n.setState({global:a})}})),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,Object.assign({mainConfig:!0,global:this.state.global,route:this.props.route},this.props))}}]),a}(r.a.Component);a(66),a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(35),N=a(8);c.a.render(r.a.createElement(L.a,null,r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/index",route:"index",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(N.b,{path:"/docs",render:function(e){return r.a.createElement(D,Object.assign({},e,{route:"docs"}))}}),r.a.createElement(N.b,{path:"/topics/:page?",render:function(e){return r.a.createElement(D,Object.assign({},e,{route:"topics"}))}}),r.a.createElement(N.b,{path:"/topic/:topicName",render:function(e){return r.a.createElement(D,Object.assign({},e,{route:"topic"}))}}),r.a.createElement(N.a,{to:"/index"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.adaef551.chunk.js.map