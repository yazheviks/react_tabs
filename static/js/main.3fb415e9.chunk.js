(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),l=n(2),o=n(3),s=n(5),u=n(4),b=n(6),m=(n(14),n(1)),p=n.n(m),v=p.a.PropTypes.oneOfType([p.a.string,p.a.object]),d=(p.a.shape({title:p.a.string.isRequired,content:v.isRequired,id:p.a.number.isRequired}),function(e){var t=e.callback,n=e.tab,a=e.stateActive,r=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",href:"#",onClick:function(){t(n.id,r)},className:a===n.id?"nav-link active":"nav-link"},n.title))}),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={active:e.props.index,content:e.props.tabs[e.props.index].content},e.onTabSelected=function(t,n){e.setState({active:t,content:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tabs,n=this.state,a=n.active,r=n.content;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs"},t.map((function(t){return c.a.createElement("li",{className:"nav-item",key:t.id},c.a.createElement(d,{callback:e.onTabSelected,tab:t,stateActive:a},t.content))}))),c.a.createElement("div",null,r))}}]),n}(c.a.PureComponent),f=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"},{title:"JSX here",content:c.a.createElement("div",null,c.a.createElement("h1",null,"Checking JSX children"),c.a.createElement("button",{type:"button",className:"btn btn-dark"},"I guess working"))}].map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{id:t})})),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={tabs:f},e}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,{tabs:this.state.tabs,index:1}))}}]),n}(c.a.PureComponent);i.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.3fb415e9.chunk.js.map