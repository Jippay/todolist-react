(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=(a(15),a(7)),m=a(3),s=a(4),i=a(5),u=a(8),d=a(6),f=a(9),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={element:"",items:[]},a.onChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.setState({element:"",items:[].concat(Object(o.a)(a.state.items),[{element:a.state.element}])})},a.deleteItem=function(e){var t=a.state.items;t.splice(e,1),a.setState({items:t})},a.renderTodo=function(){return a.state.items.map((function(e,t){return r.a.createElement("div",{className:"card mb-3",key:t},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,e.element,r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return a.deleteItem(t)}}))))}))},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card my-3"},r.a.createElement("div",{className:"card-header"},"To-Do List"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"element"},"Chose \xe0 faire"),r.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"element",onChange:this.onChange,value:this.state.element})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Ajouter une chose \xe0 faire !")))),this.renderTodo())}}]),t}(n.Component);var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ba625f6b.chunk.js.map