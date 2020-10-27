(this["webpackJsonpreact-portfolio-tjh"]=this["webpackJsonpreact-portfolio-tjh"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(23),r=a.n(i),c=(a(89),a(7)),s=a(10),o=a(9),m=a(8),u=a(21),d=a(6),p=a(16),h=(a(90),a(40)),f=a(32),b=a(35),g=a(82),E=a(18),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.CSSTransitionGroup,{transitionName:"toggle",transitionEnterTimeout:300,transitionLeaveTimeout:300},this.props.hidden?null:l.a.createElement("div",{className:"toggle-base"},this.props.children)))}}]),a}(l.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClick=n.onClick.bind(Object(E.a)(n)),n.state={hidden:!0},n}return Object(s.a)(a,[{key:"onClick",value:function(){this.setState((function(e,t){return{hidden:!e.hidden}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{onClick:this.onClick,title:this.props.title,className:"d-inline-block navbar-title m-0"},this.props.title),l.a.createElement(v,{title:this.props.subtitle,className:"font-italic",hidden:this.state.hidden},this.props.subtitle))}}]),a}(l.a.Component);var y=function(e){return l.a.createElement(b.a,{className:"sticky-inner border-bottom",expand:"lg"},l.a.createElement(b.a.Brand,{className:"font-weight-bold"},l.a.createElement(w,{title:e.title,subtitle:e.subtitle})),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link text-uppercase p-0",to:"/react-portfolio-tjh"},"Home"),l.a.createElement(u.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/workflow"},"Workflow"),l.a.createElement(u.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/contact"},"Let\u2019s Chat"))))},k=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),i=a[0],r=a[1],c=Object(n.useRef)(null),s=function(){c&&c.current&&r(c.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",(function(){return s}))}}),[]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"sticky-wrapper".concat(i?" sticky":""),ref:c},l.a.createElement(y,e)))},N=a(19),j=a(17),x=a(43),C=a(31),S=a(25),O=a(22);var T=function(){return l.a.createElement("footer",{className:"mt-5 fixed-bottom bg-red pl-3 pr-3 border-top"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-md-between p-3"},l.a.createElement(j.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12},l.a.createElement(x.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},l.a.createElement(O.a,{className:"display-5",icon:C.a})),l.a.createElement(x.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},l.a.createElement(O.a,{className:"display-5",icon:C.b})),l.a.createElement(x.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},l.a.createElement(O.a,{className:"display-5",icon:C.c})),l.a.createElement(u.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},l.a.createElement(O.a,{className:"display-5",icon:S.b}))),l.a.createElement(j.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12},l.a.createElement("font",{className:"text-center align-self-center text-sm-left text-white"},"\xa9 ",(new Date).getFullYear()," Tom Hammer. ",l.a.createElement("span",{className:"text-nowrap"},"All Rights Reserved."))))))},I=a(73);var A=function(e){return l.a.createElement(I.a,{className:"jumbotron-fluid p-0 bg-transparent"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-center pt-5"},l.a.createElement(j.a,{md:10,sm:12,className:"text-center"},e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),l.a.createElement(N.a,{className:"justify-content-center pb-4"},l.a.createElement(j.a,{lg:5,md:7,sm:12,className:"text-center"},e.text&&l.a.createElement("p",{className:"display-3 font-weight-light"},e.text),l.a.createElement("h2",{className:"display-4"},l.a.createElement(O.a,{className:"display-4 p-2 color-red",icon:S.d}),l.a.createElement(O.a,{className:"display-4 p-2 color-red",icon:S.a}),l.a.createElement(O.a,{className:"display-4 p-2 color-red",icon:S.c}))))))},B=a(29),L=(a(108),a(34)),M=a(83),F=a(51),W=a(52);var D=function(e){var t=Object(W.b)({opacity:1,from:{opacity:0}});return l.a.createElement(W.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t},l.a.createElement("p",{className:"g-card-title text-white"},e.title),l.a.createElement("p",{className:"g-card-sub-title text-white"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))};var H=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),i=a[0],r=a[1];return l.a.createElement(f.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300},l.a.createElement(F.BrowserView,null,l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),i&&l.a.createElement(D,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))),l.a.createElement(F.MobileView,null,l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(D,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))))},G=a(75),P=a.n(G),R=a(76),_=a.n(R),V=a(77),q=a.n(V),J=a(78),U=a.n(J),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={items:[{id:0,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:U.a,link:"https://buggycarwash.com",selected:!1},{id:1,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:q.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:2,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:_.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:3,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:P.a,link:"https://www.bestofbobspremium.com/",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(B.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return l.a.createElement(H,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-around text-center"},l.a.createElement(M.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"}},(function(t){return l.a.createElement("div",null,t.small&&l.a.createElement(L.Carousel,null,e.makeItems(e.state.items)),t.medium&&l.a.createElement(L.Carousel,{centerMode:!0,centerSlidePercentage:50},e.makeItems(e.state.items)),t.large&&l.a.createElement(L.Carousel,{centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)),t.xlarge&&l.a.createElement(L.Carousel,{centerMode:!0,centerSlidePercentage:25},e.makeItems(e.state.items)))}))))}}]),a}(l.a.Component);var Q=function(e){return l.a.createElement("div",null,l.a.createElement(A,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(Y,null))};var $=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-center"},l.a.createElement(j.a,{md:8},e.children)))};var z=function(e){return l.a.createElement("div",null,l.a.createElement(A,{title:e.title}),l.a.createElement($,null,l.a.createElement("div",{className:"d-flex flex-column-reverse flex-xl-row justify-content-xl-between"},l.a.createElement("div",null,l.a.createElement("p",{className:"lead"},"I am a front-end engineer and digital creator focused on writing clean and readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),l.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. Although I am passionate about living a healthy lifestyle, I do also enjoy the occasional happy hour or get together with coworkers and friends. I love to stay busy and on the move, both in and out of the workplace.")),l.a.createElement("div",{className:"d-flex justify-content-center justify-content-xl-end"},e.about.images.map((function(e){var t=e.id,a=e.src,n=e.title,i=e.description;return l.a.createElement("img",{key:t,src:a,title:n,alt:i,className:"about-img border-red mb-5 ml-0 ml-xl-5 mb-xl-0"})}))))))};var K=function(e){return l.a.createElement("div",null,l.a.createElement(A,{title:e.title}),l.a.createElement($,null,l.a.createElement("p",{className:"lead"},"My development workflow is something I've been constantly improving over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.")))},X=a(28),Z=a(15),ee=a(80),te=a(79),ae=a.n(te),ne=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",message:"",disabled:!1,emailSent:null},e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;e.setState(Object(X.a)({},l,n))},e.handleSubmit=function(t){t.preventDefault(),console.log(t.target),e.setState({disabled:!0}),ae.a.post("http://localhost:3030/api/email",e.state).then((function(t){t.data.success?e.setState({disabled:!1,emailSent:!0}):e.setState({disabled:!1,emailSent:!1})})).catch((function(t){console.log(t),e.setState({disabled:!1,emailSent:!1})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A,{title:this.props.title}),l.a.createElement($,null,l.a.createElement(Z.a,{onSubmit:this.handleSubmit},l.a.createElement(Z.a.Group,null,l.a.createElement(Z.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(Z.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(Z.a.Group,null,l.a.createElement(Z.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(Z.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(Z.a.Group,null,l.a.createElement(Z.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(Z.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(ee.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),le=a(81),ie=a.n(le),re=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={siteTitle:"TH | Front-End Engineer and Digital Creator",title:"Tom Hammer ",subtitle:" | Front-End Engineer and Digital Creator",headerLinks:[{title:"Home",path:"/react-portfolio-tjh"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and always learning.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"},about:{images:[{id:0,src:ie.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a cute dog pic?"}],title:"About Tom"},workflow:{title:"Tom's Workflow"},contact:{title:"Let's Chat"}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"main-container",fluid:!0},l.a.createElement(k,this.state),l.a.createElement(d.a,{path:"/react-portfolio-tjh",exact:!0,render:function(){return l.a.createElement(Q,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(z,{about:e.state.about,title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/workflow",render:function(){return l.a.createElement(K,{title:e.state.workflow.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(ne,{title:e.state.contact.title})}})),l.a.createElement(T,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(131);r.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){e.exports=a.p+"static/media/bobs.f4d65053.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/yale.af72c76e.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/buggy.ad17bbda.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/about-image.ff5d0bcf.jpg"},84:function(e,t,a){e.exports=a(132)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.bb253af2.chunk.js.map