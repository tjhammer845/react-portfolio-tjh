(this.webpackJsonptjhammer845=this.webpackJsonptjhammer845||[]).push([[0],{129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),i=a.n(r),c=(a(86),a(13)),o=a(7),s=a(10),m=a(9),u=a(8),d=a(20),h=a(6),p=a(16),b=a(37),g=a(33),f=a(79),E=a(17),w=a(35),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("h4",{title:this.props.subtitle,className:"d-block d-md-inline-block m-0"},l.a.createElement(w.CSSTransitionGroup,{transitionName:"toggle",transitionEnterTimeout:600,transitionLeaveTimeout:600,className:"toggle-base font-italic"},this.props.hidden?null:l.a.createElement("span",null,this.props.children)))}}]),a}(l.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClick=n.onClick.bind(Object(E.a)(n)),n.state={hidden:!0},n}return Object(s.a)(a,[{key:"onClick",value:function(){this.setState((function(e,t){return{hidden:!e.hidden}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-block d-md-flex align-content-center"},l.a.createElement("h1",{onClick:this.onClick,title:this.props.title,className:"d-inline-block navbar-title m-0"},l.a.createElement("img",{className:"logo",src:this.props.logo.imgSrc,alt:this.props.logo.imgSrc}),this.props.title),l.a.createElement(k,{hidden:this.state.hidden},this.props.subtitle))}}]),a}(l.a.Component);var y=function(e){return l.a.createElement(g.a,{className:"sticky-inner border-bottom",expand:"lg"},l.a.createElement(g.a.Brand,{className:"font-weight-bold"},l.a.createElement(v,e)),l.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(g.a.Collapse,{id:"navbar-toggle"},l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link text-uppercase p-0",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/workflow"},"Workflow"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/contact"},"Let\u2019s Chat"))))},N=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],i=a[1],c=Object(n.useRef)(null),o=function(){c&&c.current&&i(c.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",(function(){return o}))}}),[]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"sticky-wrapper".concat(r?" sticky":""),ref:c},l.a.createElement(y,e)))},A=a(18),I=a(26),j=a(39),M=a(30),x=a(24),C=a(21);var S=function(){return l.a.createElement("footer",{className:"mt-5 fixed-bottom pl-3 pr-3 border-top"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(A.a,{className:"justify-content-md-between p-3"},l.a.createElement(I.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12},l.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},l.a.createElement(C.a,{className:"display-5",icon:M.a})),l.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},l.a.createElement(C.a,{className:"display-5",icon:M.b})),l.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},l.a.createElement(C.a,{className:"display-5",icon:M.c})),l.a.createElement(d.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},l.a.createElement(C.a,{className:"display-5",icon:x.b}))),l.a.createElement(I.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12},l.a.createElement("font",{className:"text-center align-self-center text-sm-left color-gold"},"\xa9 ",(new Date).getFullYear()," Tom Hammer. ",l.a.createElement("span",{className:"text-nowrap"},"All Rights Reserved."))))))},T=a(68);var O=function(e){return l.a.createElement(T.a,{className:"jumbotron-fluid p-0 bg-transparent"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(A.a,{className:"justify-content-center pt-5"},l.a.createElement(I.a,{md:10,sm:12,className:"text-center"},e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),l.a.createElement(A.a,{className:"justify-content-center pb-4"},l.a.createElement(I.a,{lg:5,md:7,sm:12,className:"text-center"},e.text&&l.a.createElement("p",{className:"display-3 font-weight-light"},e.text),l.a.createElement("h2",{className:"display-4"},l.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.d}),l.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.a}),l.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.c}))))))},D=a(28),W=(a(106),a(32)),G=a(80),Z=a(46),L=a(47);var R=function(e){var t=Object(L.b)({opacity:1,from:{opacity:0}});return l.a.createElement(L.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t},l.a.createElement("p",{className:"g-card-title text-white"},e.title),l.a.createElement("p",{className:"g-card-sub-title text-white mb-4"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))};var _=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],i=a[1];return l.a.createElement(w.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300},l.a.createElement(Z.BrowserView,null,l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),r&&l.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))),l.a.createElement(Z.MobileView,null,l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))))},Y=a(70),B=a.n(Y),F=a(71),P=a.n(F),z=a(72),J=a.n(z),V=a(73),Q=a.n(V),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[{id:0,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:J.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:1,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:P.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:2,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:B.a,link:"https://www.bestofbobspremium.com/",selected:!1},{id:3,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:Q.a,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(D.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return l.a.createElement(_,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(A.a,{className:"justify-content-around text-center"},l.a.createElement(G.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"}},(function(t){return l.a.createElement("div",null,t.small&&l.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0},e.makeItems(e.state.items)),t.medium&&l.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50},e.makeItems(e.state.items)),t.large&&l.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)),t.xlarge&&l.a.createElement(W.Carousel,{infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)))}))))}}]),a}(l.a.Component);var U=function(e){return l.a.createElement("div",null,l.a.createElement(O,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(X,null))};var H=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(A.a,{className:"justify-content-center"},l.a.createElement(I.a,{md:8},e.children)))};var K=function(e){return l.a.createElement("div",null,l.a.createElement(O,{title:e.title}),l.a.createElement(H,null,l.a.createElement("div",{className:"d-flex flex-column-reverse flex-xl-row justify-content-xl-between"},l.a.createElement("div",null,l.a.createElement("p",{className:"lead"},"I am a regular guy focused on making things pretty and writing clean, readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),l.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace.")),l.a.createElement("div",{className:"d-flex justify-content-center justify-content-xl-end"},e.about.images.map((function(e){var t=e.id,a=e.src,n=e.title,r=e.description;return l.a.createElement("img",{key:t,src:a,title:n,alt:r,className:"about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0"})}))))))};var q=function(e){return l.a.createElement("div",null,l.a.createElement(O,{title:e.title}),l.a.createElement(H,null,e.workflow.images.map((function(e){var t=e.id,a=e.src,n=e.title,r=e.description;return l.a.createElement("img",{key:t,src:a,title:n,alt:r,className:"workflow-img d-inline-block border-gold m-2 mb-5"})})),l.a.createElement("p",{className:"lead"},"My workflow has been, is and will always be a constant work-in-progress. As I learn and evolve as a developer, I strive to incorporate the new tips, tools, methods and applications I discover that provide greater efficiency to my performance. I've listed out the main components that are typically involved in my everyday workflow, such as equipment, development tools and productivity applications as well as links to where to find each product for purchase."),l.a.createElement("h2",null,"Equipment"),l.a.createElement("ul",null,l.a.createElement("li",null,"I use a ",l.a.createElement("a",{href:"https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop/xn9500cto212s",target:"_blank"},"Dell XPS 15 9500 Touch")," with i9 Processor, 3TB of internal storage and 64GB of installed RAM, running on ",l.a.createElement("a",{href:"https://www.microsoft.com/en-us/p/windows-10-pro/",target:"_blank"},"Windows 10 Pro"),". "),l.a.createElement("li",null,"My screen extends with the ",l.a.createElement("a",{href:"https://www.lg.com/us/monitors/lg-34wn80c-b-ultrawide-monitor",target:"_blank"},"LG 34WN80C-B 34 Inch UltraWide\u2122")," as an external monitor. "),l.a.createElement("li",null,"I test iOS with the ",l.a.createElement("a",{href:"https://support.apple.com/kb/sp583?locale=en_US",target:"_blank"},"Mac Book Pro (13-inch, Mid 2010)"),",",l.a.createElement("a",{href:"https://www.apple.com/ipad-10.2/",target:"_blank"},"iPad (10.2-inch)"),", and ",l.a.createElement("a",{href:"https://www.apple.com/shop/refurbished/iphone/iphone-xs-max",target:"_blank"},"iPhone XS Max.")),l.a.createElement("li",null,"I key with the ",l.a.createElement("a",{href:"https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/Wireless-Keyboards/K63-Wireless-Mechanical-Gaming-Keyboard-and-Gaming-Lapboard-Combo-%E2%80%94-Blue-LED-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9515031-NA",target:"_blank"},"Corsair K63 Wireless Mechanical Gaming Keyboard and Gaming Lapboard Combo \u2013 Blue LED \u2013 Cherry MX Red"),"."),l.a.createElement("li",null,"I scroll with the ",l.a.createElement("a",{href:"https://www.jellycomb.com/collections/mice/products/mv045-ergonomic-mouse",target:"_blank"},"Jelly Comb MV045 Ergonomic Mouse"),"."),l.a.createElement("li",null,"I prefer to use the ",l.a.createElement("a",{href:"https://www.logitech.com/en-us/product/hd-webcam-c615",target:"_blank"},"Logitech HD Webcam C615")," over the built-in webcam."),l.a.createElement("li",null,"I use the ",l.a.createElement("a",{href:"https://www.amazon.com/Neewer-Advanced-Multiple-3200-5600K-Included/dp/B07ZF5V9LZ/ref=pd_lpo_421_t_2/133-6234101-5304966?_encoding=UTF8&pd_rd_i=B07ZF5V9LZ&pd_rd_r=c0d42005-dff6-46d4-b8ba-fa108a444eb3&pd_rd_w=xSkbb&pd_rd_wg=JxjL6&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=Z3V5Y3E66JTGETXANDSB&psc=1&refRID=Z3V5Y3E66JTGETXANDSB",target:"_blank"},"Neewer Advanced 18-inch LED Ring Light")," when I need optimum lighting."),l.a.createElement("li",null,"For noise proofing, I listen with either the ",l.a.createElement("a",{href:"https://www.sony.com/electronics/headband-headphones/wh-1000xm4",target:"_blank"},"Sony WH-100XM4 Wireless")," or the",l.a.createElement("a",{href:"https://www.bose.com/en_us/support/products/bose_headphones_support/bose_around_ear_headphones_support/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html",target:"_blank"},"Bose QuietComfort 25"),"."),l.a.createElement("li",null,"I print with the ",l.a.createElement("a",{href:"https://www.usa.canon.com/internet/portal/us/home/products/details/printers/inkjet-single-function/ip-series/ip8720",target:"_blank"},"Canon Pixma iP8720"),".")),l.a.createElement("h2",null,"Development Tools"),l.a.createElement("ul",null,l.a.createElement("li",null,"I back up my work to ",l.a.createElement("a",{href:"https://www.github.com/",target:"_blank"},"Github")," and every file to",l.a.createElement("a",{href:"https://drive.google.com/",target:"_blank"},"Google Drive")," and",l.a.createElement("a",{href:"https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",target:"_blank"},"OneDrive"),". "),l.a.createElement("li",null,"As per work, I use ",l.a.createElement("a",{href:"https://visualstudio.microsoft.com/",target:"_blank"},"Visual Studio")," for my IDE."),l.a.createElement("li",null,"As per personal, I use ",l.a.createElement("a",{href:"https://atom.io/",target:"_blank"},"Atom")," as my text editor, with ",l.a.createElement("a",{href:"https://atom.io/packages/vim-mode-plus",target:"_blank"},"Vim mode")," installed."),l.a.createElement("li",null,"My terminal of choice is ",l.a.createElement("a",{href:"https://docs.microsoft.com/en-us/powershell/",target:"_blank"},"PowerShell"),"."),l.a.createElement("li",null,"For FTP, I use ",l.a.createElement("a",{href:"https://filezilla-project.org/",target:"_blank"},"FileZilla"),"."),l.a.createElement("li",null,"For local testing, I use ",l.a.createElement("a",{href:"https://www.apachefriends.org/index.html",target:"_blank"},"XAMPP"),"."),l.a.createElement("li",null,"I debug with ",l.a.createElement("a",{href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank"},"DevTools"),"and ",l.a.createElement("a",{href:"https://www.mozilla.org/en-US/firefox/developer/",target:"_blank"},"Firefox Developer"),"."),l.a.createElement("li",null,"I check for accessibility with ",l.a.createElement("a",{href:"",target:"_blank"},"WAVE"),", ",l.a.createElement("a",{href:"",target:"_blank"},"NVDA"),", and ",l.a.createElement("a",{href:"",target:"_blank"},"Lighthouse")),l.a.createElement("li",null,"My favorite CSS framework is ",l.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank"},"Bootstrap"),"."),l.a.createElement("li",null,"My favorite JavaScript framework is ",l.a.createElement("a",{href:"https://jquery.com/",target:"_blank"},"jQuery"),"."),l.a.createElement("li",null,"My favorite JavaScript library is ",l.a.createElement("a",{href:"https://reactjs.org/",target:"_blank"},"React"),"."),l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://classic.yarnpkg.com/en/",target:"_blank"},"yarn")," and",l.a.createElement("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm")," for package management. "),l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://gulpjs.com/",target:"_blank"},"gulp"),"to minify, uglify, and concatenate files."),l.a.createElement("li",null,"I style with ",l.a.createElement("a",{href:"https://sass-lang.com/",target:"_blank"},"sass"),"and ",l.a.createElement("a",{href:"http://lesscss.org/",target:"_blank"},"Less"),"."),l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://www.browserstack.com/",target:"_blank"},"BrowserStack")," to test across browsers, operating systems and devices."),l.a.createElement("li",null,"When I hit a roadblock, I turn to ",l.a.createElement("a",{href:"https://stackoverflow.com/",target:"_blank"},"Stack Overflow"),". ")),l.a.createElement("h2",null,"Productivity Apps"),l.a.createElement("ul",null,l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://www.nurgo-software.com/products/aquasnap",target:"_blank"},"AquaSnap ")," as my window management tool."),l.a.createElement("li",null,"I design with ",l.a.createElement("a",{href:"https://www.adobe.com/products/photoshop.html",target:"_blank"},"Photoshop"),",",l.a.createElement("a",{href:"https://www.adobe.com/products/illustrator.html",target:"_blank"},"Illustrator"),", and ",l.a.createElement("a",{href:"https://www.adobe.com/products/xd.html",target:"_blank"},"XD"),"."),l.a.createElement("li",null,"For scheduling, I use ",l.a.createElement("a",{href:"https://calendar.google.com/",target:"_blank"},"Google Calendar"),"."),l.a.createElement("li",null,"For general note-taking and to-dos, I prefer ",l.a.createElement("a",{href:"https://evernote.com/",target:"_blank"},"Evernote"),"."),l.a.createElement("li",null,"For project tasks, I\u2019ve grown accustomed to ",l.a.createElement("a",{href:"https://github.com/features/project-management/",target:"_blank"},"Git Projects"),",",l.a.createElement("a",{href:"https://www.atlassian.com/software/jira",target:"_blank"},"Jira"),"and ",l.a.createElement("a",{href:"https://www.workfront.com/",target:"_blank"},"Workfront"),"."),l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://outlook.live.com/",target:"_blank"},"Outlook")," for my email client."),l.a.createElement("li",null,"I use ",l.a.createElement("a",{href:"https://justgetflux.com/",target:"_blank"},"f.lux")," to protect my vision. "),l.a.createElement("li",null,"I spellcheck with ",l.a.createElement("a",{href:"https://grammarly.com/",target:"_blank"},"Grammarly"),"."))))},$=a(74),ee=a.n($),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),ee()({method:"POST",url:"/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(l.a.Component),ae=a(75),ne=a.n(ae),le=a(76),re=a.n(le),ie=a(77),ce=a.n(ie),oe=a(78),se=a.n(oe),me=(a(129),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e,n;Object(o.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state=(e={title:"Tom Hammer",subtitle:"Front-End Engineer and Digital Creator",siteTitle:n.title+" | "+n.subtitle},Object(c.a)(e,"siteTitle","TH | Front-End Engineer and Digital Creator"),Object(c.a)(e,"logo",{imgSrc:ne.a,title:n.siteTitle}),Object(c.a)(e,"headerLinks",[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}]),Object(c.a)(e,"home",{title:"Creative, logical, and always learning.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"}),Object(c.a)(e,"about",{images:[{id:0,src:re.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a puppy pic?"}],title:"About Tom"}),Object(c.a)(e,"workflow",{images:[{id:0,src:ce.a,title:"Tom's Desk 1",description:"Working from home should be efficient."},{id:1,src:se.a,title:"Tom's Desk 2",description:"Working from home should be painless."}],title:"Tom's Workflow"}),Object(c.a)(e,"contact",{title:"Let's Chat"}),e),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"main-container",fluid:!0},l.a.createElement(N,this.state),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(U,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(h.a,{path:"/about",render:function(){return l.a.createElement(K,{about:e.state.about,title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/workflow",render:function(){return l.a.createElement(q,{workflow:e.state.workflow,title:e.state.workflow.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(te,{title:e.state.contact.title})}})),l.a.createElement(S,null))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(130);i.a.render(l.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a.p+"static/media/bobs.f4d65053.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/yale.af72c76e.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/buggy.ad17bbda.jpg"},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAArCAYAAADSZm7JAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI4VDE4OjMzOjUwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yOFQyMTo0OTo1Ny0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphOGZmY2FkNS02MGZjLTJlNDAtYWNmYS00NTQ1ODViMWQ0MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYzAxMDQxNC02NzMwLThhNGYtYjMwMS03MmI4OTg4NzM3YTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGNlYzYxZi0wNTlhLWMzNDctOGE5Yi0zYzU3MmI3MzU2OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwY2VjNjFmLTA1OWEtYzM0Ny04YTliLTNjNTcyYjczNTY5NCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yOFQxODozMzo1MC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzFiMzhjMi02N2RkLTQxNDYtOGNiMC0yN2M2MDAwNDM3YTIiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjhUMTg6MzM6NTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThmZmNhZDUtNjBmYy0yZTQwLWFjZmEtNDU0NTg1YjFkNDA5IiBzdEV2dDp3aGVuPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cfXP4wAAAbxJREFUaN7tmsuRhCAQhk3BFEjBFCaFOe6VFEzBFDjt3Qi2yhRMwRRMwX25NV1UAw3KCDv/oQ9DNQ8/mvannWbbtgYmN0AAMAADsKqBfby//Vdrv2wj1nJ+APawnsCaXX4A9rCRAOuvBNZboX6GqcCciuljAn1W4tsBmB/YnfitvrEB7NcG4jdcAUyRBdYAbCZ+973NcPPkAKb3iZeAnxGCMJmBKYecWPbfOhew74knMnEtwOgJGEn7QtqnvznPAqaZBdYCzCUnFmYMfRSYHVV0R7oKgLWWnKDjdp5nUynAuKhaSdJsMgJLMROQE7NHcqyp0eaLqiFSbpQAbIhYv0mJNq6j5PiVCozmqZtgzZ0lQX7GjQE2Hri7XQ2sk6p7W1ZYJ8zERtgs3J3Skn6fsPHci8Ck5rDRVUMqFBiVE1pQK0vOYb63pLc0UhAwUbEw8Jz6TB22CI7plcAkcuLGJPhDOqxmpT8ITkQWpV/rXVJSLMx6l6ypWiGVE9mrFa56WGnAemGN7Gn1sNJlxcQUC5sY4fpKX41i5ASAWXJiShnj1YCZBIF9DBj+LwFgAAZgAAZgMAADMAADMACDfQKGgKgwxKVnAgAAAABJRU5ErkJggg=="},76:function(e,t,a){e.exports=a.p+"static/media/about-image.ff5d0bcf.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/desk1.bb037cb2.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/desk2.560307f4.jpg"},81:function(e,t,a){e.exports=a(131)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.29733702.chunk.js.map