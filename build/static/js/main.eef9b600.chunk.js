(this["webpackJsonpreact-portfolio-tjh"]=this["webpackJsonpreact-portfolio-tjh"]||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),c=(a(86),a(7)),s=a(11),o=a(9),m=a(8),d=a(26),u=a(6),p=a(16),h=a(32),f=a(79),g=(a(87),a(18)),b=a(17),E=a(40),v=a(30),y=a(22),w=a(20);var k=function(){return l.a.createElement("footer",{className:"mt-5 fixed-bottom bg-red pl-3 pr-3 border-top"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-md-between p-3"},l.a.createElement(b.a,{className:"p-0",md:3,sm:12},l.a.createElement(E.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},l.a.createElement(w.a,{className:"display-5",icon:v.a})),l.a.createElement(E.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},l.a.createElement(w.a,{className:"display-5",icon:v.b})),l.a.createElement(E.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},l.a.createElement(w.a,{className:"display-5",icon:v.c})),l.a.createElement(d.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},l.a.createElement(w.a,{className:"display-5",icon:y.b}))),l.a.createElement(b.a,{className:"p-0 d-flex justify-content-center justify-content-md-end",md:3,sm:12},l.a.createElement("font",{className:"text-white"},"\xa9 2020 Tom Hammer. All Rights Reserved.")))))},N=a(69);var j=function(e){return l.a.createElement(N.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center pt-5"},l.a.createElement(b.a,{md:10,sm:12,className:"text-center"},e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),l.a.createElement(g.a,{className:"justify-content-center py-4"},l.a.createElement(b.a,{md:5,sm:12,className:"text-center"},e.text&&l.a.createElement("p",{className:"display-3 font-weight-light"},e.text),l.a.createElement("h2",{className:"display-4 mt-4"},l.a.createElement(w.a,{className:"display-4 p-2 color-red",icon:y.d}),l.a.createElement(w.a,{className:"display-4 p-2 color-red",icon:y.a}),l.a.createElement(w.a,{className:"display-4 p-2 color-red",icon:y.c}))))))},x=a(29),C=(a(94),a(70)),S=a(80),T=a(48);var I=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return l.a.createElement(T.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title text-white"},e.title),l.a.createElement("p",{className:"g-card-sub-title text-white"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))},O=a(72);var A=function(e){return l.a.createElement(O.CSSTransitionGroup,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(I,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})))},W=a(73),B=a.n(W),L=a(74),F=a.n(L),H=a(75),D=a.n(H),G=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={items:[{id:0,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:B.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:1,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:F.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:2,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:D.a,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(x.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return l.a.createElement(A,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-around text-center"},l.a.createElement(S.a,{query:"(max-width: 1520px)"},(function(t){return t?l.a.createElement(C.Carousel,null,e.makeItems(e.state.items)):l.a.createElement("div",null,e.makeItems(e.state.items))}))))}}]),a}(l.a.Component);var M=function(e){return l.a.createElement("div",null,l.a.createElement(j,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(G,null))};var _=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center"},l.a.createElement(b.a,{md:8},e.children)))};var q=function(e){return l.a.createElement("div",null,l.a.createElement(j,{title:e.title}),l.a.createElement(_,null,l.a.createElement("p",{className:"lead"},"I am a front-end engineer and digital creator focused on writing clean and readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),l.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. Although I am passionate about living a healthy lifestyle, I do also enjoy the occasional happy hour or get together with coworkers and friends. I love to stay busy and on the move, both in and out of the workplace."),l.a.createElement("div",{className:""})))};var R=function(e){return l.a.createElement("div",null,l.a.createElement(j,{title:e.title}),l.a.createElement(_,null,l.a.createElement("p",{className:"lead"},"My development workflow is something I've been constantly improving over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.")))},J=a(28),U=a(15),V=a(77),P=a(76),Q=a.n(P),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",message:"",disabled:!1,emailSent:null},e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;e.setState(Object(J.a)({},l,n))},e.handleSubmit=function(t){t.preventDefault(),console.log(t.target),e.setState({disabled:!0}),Q.a.post("http://localhost:3030/api/email",e.state).then((function(t){t.data.success?e.setState({disabled:!1,emailSent:!0}):e.setState({disabled:!1,emailSent:!1})})).catch((function(t){console.log(t),e.setState({disabled:!1,emailSent:!1})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,{title:this.props.title}),l.a.createElement(_,null,l.a.createElement(U.a,{onSubmit:this.handleSubmit},l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(U.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(U.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(U.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(V.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),$=a(78),z=a.n($),K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"Tom Hammer",siteTitle:"TH | Front-End Engineer and Digital Creator",headerLinks:[{title:"Home",path:"/react-portfolio-tjh"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and slightly humorous.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"},about:{images:[{id:0,src:z.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a cute dog pic?"}],title:"About Tom"},workflow:{title:"Tom's Workflow"},contact:{title:"Let's Chat"}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"main-container",fluid:!0},l.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,{className:"font-weight-bold"},l.a.createElement("h1",{className:"d-inline-block navbar-title"},this.state.title,l.a.createElement("span",{className:"font-italic"},this.state.subtitle))),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navbar-toggle"},l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link text-uppercase p-0",to:"/react-portfolio-tjh"},"Home"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/workflow"},"Workflow"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/contact"},"Let\u2019s Chat")))),l.a.createElement(u.a,{path:"/react-portfolio-tjh",exact:!0,render:function(){return l.a.createElement(M,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(u.a,{path:"/about",render:function(){return l.a.createElement(q,{title:e.state.about.title})}}),l.a.createElement(u.a,{path:"/workflow",render:function(){return l.a.createElement(R,{title:e.state.workflow.title})}}),l.a.createElement(u.a,{path:"/contact",render:function(){return l.a.createElement(Y,{title:e.state.contact.title})}})),l.a.createElement(k,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127);r.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a.p+"static/media/yale.148b9602.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/buggy.2c8fffdf.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/about-image.d18bea88.jpg"},81:function(e,t,a){e.exports=a(128)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.eef9b600.chunk.js.map