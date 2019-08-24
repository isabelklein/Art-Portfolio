(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/headshot.726248ad.jpg"},42:function(e,t,a){e.exports=a(64)},47:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),l=(a(47),a(7)),c=a(8),s=a(10),m=a(9),u=a(11),p=(a(17),a(14)),d=a(28),h=a(36),f=a(12),b=a(29),g=a.n(b),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"headshot"},o.a.createElement("img",{src:g.a,className:"headshot",alt:""}),o.a.createElement("div",{className:"about-text-header"},"Hi, I'm Isabel.",o.a.createElement("div",{className:"about-text"},"I'm a student-athlete at the University of Washington pursuing a B.S. in Human Centered Design and Engineering with interest in UX and interaction design. In 2017 I hand-illustrated one 32-page children's book, Bella Bella Brush (published May 2018) by author Tamara Tobias, and in 2019 I am working on a second book. I am always looking to expand my experiences whether it is through more illustration, traditional art, graphic design, or UX design. Please feel free to reach out at isabelmklein@outlook.com."),o.a.createElement("div",{className:"headshot-border"})))}}]),t}(o.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"about-text-header",style:{marginTop:"250px"}},"Please feel free to reach out.",o.a.createElement("div",{className:"about-text",style:{marginTop:"10px"}},"Email: isabelmklein@outlook.com",o.a.createElement("a",{className:"about-text",href:"https://www.linkedin.com/in/isabelmklein/",target:"_Blank",rel:"noopener noreferrer",style:{opacity:.5,position:"fixed",bottom:"50px",textDecoration:"none"}},"LinkedIn"),o.a.createElement("a",{className:"about-text",href:"https://github.com/isabelklein/Art-Portfolio",target:"_Blank",rel:"noopener noreferrer",style:{opacity:.5,position:"fixed",bottom:"25px",textDecoration:"none"}},"I created this site using ReactJS. See it on GitHub")))}}]),t}(o.a.Component),x=a(30),y=(a(58),[{name:"0",alt:""},{name:"1",alt:""},{name:"2",alt:""},{name:"3",alt:""},{name:"4",alt:""},{name:"5",alt:""},{name:"6",alt:""},{name:"7",alt:""},{name:"8",alt:""},{name:"9",alt:""},{name:"10",alt:""},{name:"11",alt:""},{name:"12",alt:""},{name:"13",alt:""},{name:"14",alt:""},{name:"15",alt:""},{name:"16",alt:""},{name:"17",alt:""},{name:"18",alt:""},{name:"19",alt:""},{name:"20",alt:""},{name:"21",alt:""},{name:"22",alt:""}]),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={photoIndex:0,isOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,r=Math.round(y.length/2),i=[y.slice(0,r),y.slice(r,2*r)];return o.a.createElement("div",{class:"row"},i.map(function(t){return o.a.createElement("div",{class:"column"},t.map(function(t,a){return o.a.createElement("img",{src:"/Art-Portfolio/portfolio/"+t.name+".jpg",alt:"",onClick:function(){return e.setState({isOpen:!0,photoIndex:y.findIndex(function(e){return e.name===t.name})})}})}))}),o.a.createElement("div",null,n&&o.a.createElement(x.a,{mainSrc:"/Art-Portfolio/portfolio/"+y[a].name+".jpg",nextSrc:y[(a+1)%y.length],prevSrc:y[(a+y.length-1)%y.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+y.length-1)%y.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%y.length})}})))}}]),t}(o.a.Component),j=a(66),k=a(67);function w(){var e=Object(d.a)(["\n.fade-enter {\n    opacity: 0.01;\n}\n\n.fade-enter.fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n}\n\n.fade-exit {\n    opacity: 1;\n}\n\n.fade-exit.fade-exit-active {\n    opacity: 0.01;\n    transition: opacity 300ms ease-in;\n}    \n\ndiv.transition-group {\n        position: relative;\n   }\n\n   section.route-section {\n     position: absolute;\n     width: 100%;\n     top: 0;\n     left: 0;\n   }\n"]);return w=function(){return e},e}var N=h.a.div(w()),I=Object(f.f)(function(e){var t=e.location;return o.a.createElement(N,null,o.a.createElement(j.a,null,o.a.createElement(k.a,{key:t.key,timeout:{enter:300,exit:300},classNames:"fade"},o.a.createElement("section",{className:"route-section"},o.a.createElement(f.c,{location:t},o.a.createElement(f.a,{path:"/Art-Portfolio/",exact:!0,component:O}),o.a.createElement(f.a,{path:"/Art-Portfolio/about",exact:!0,component:v}),o.a.createElement(f.a,{path:"/Art-Portfolio/contact",exact:!0,component:E}))))))}),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"top-border"}),o.a.createElement("header",{className:"App-header"},"Isabel Klein",o.a.createElement("div",{className:"description"},"artist and illustrator",o.a.createElement(p.b,{to:"/Art-Portfolio/"}," ",o.a.createElement("button",{className:"navigation",style:{top:"150px"}},"WORK")),o.a.createElement(p.b,{to:"/Art-Portfolio/about"}," ",o.a.createElement("button",{className:"navigation",style:{top:"180px"}},"ABOUT")),o.a.createElement(p.b,{to:"/Art-Portfolio/contact"}," ",o.a.createElement("button",{className:"navigation",style:{top:"210px"}},"CONTACT")))),o.a.createElement(I,null)))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.67b05f0a.chunk.js.map