(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t){},,,,,function(e,t,a){e.exports=a.p+"static/media/resume.89bdee43.pdf"},,,,function(e,t,a){e.exports=a(50)},,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/RunBuddy.57b462f0.jpg"},function(e,t,a){e.exports=a.p+"static/media/Horiseon.e86e8cfc.jpg"},function(e,t,a){e.exports=a.p+"static/media/Stockwise.b4d179f4.jpg"},function(e,t,a){e.exports=a.p+"static/media/The-Kings-Mile.307ee160.jpg"},,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/background.c1704262.mp4"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(11),r=a.n(l),o=(a(27),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," Benjamin Gaither "))}),c=a(7),m=function(){return i.a.createElement("div",{className:"main-footer"},i.a.createElement("div",{className:"icon-container"},i.a.createElement("a",{href:"https://github.com/mattgaither"},i.a.createElement(c.b,{className:"icon"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/benjamin-gaither-88732794/",className:"linkedin"},i.a.createElement(c.c,{className:"icon"})),i.a.createElement("a",{href:"mailto:mattgaither2@gmail.com"},i.a.createElement(c.a,{className:"icon"}))))},s=a(16);var u=function(e){var t=e.currentPage,a=e.handlePageChange;return i.a.createElement("div",{className:"nav nav-tabs"},i.a.createElement("ul",{className:"nav-item"},i.a.createElement("a",{href:"#home",onClick:function(){return a("Home")},className:"Home"===t?"nav-link active":"nav-link"},"Home")),i.a.createElement("ul",{className:"nav-item"},i.a.createElement("a",{href:"#project",onClick:function(){return a("Projects")},className:"Projects"===t?"nav-link active":"nav-link"},"Projects")),i.a.createElement("ul",{className:"nav-item"},i.a.createElement("a",{href:"#contact",onClick:function(){return a("Contact Me")},className:"Contact Me"===t?"nav-link active":"nav-link"},"Contact Me")),i.a.createElement("ul",{className:"nav-item"},i.a.createElement("a",{href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav-link active":"nav-link"},"Resume")))};function h(){return i.a.createElement("div",{className:"About-me "},i.a.createElement("h2",null,"About Me"),i.a.createElement("div",null,i.a.createElement("p",null,"My name is Benjamin (Matt) Gaither. I am working on completeing a Full Stack Bootcamp that is offered by Michigan State University and I am also in Jefferson State Community College working towards a degree. I decided to change my occupation when the pandemic started and took my job. I have worked in a customer service for the past two years and have learned a lot about engineering roles while working. I am a dedicated hard worker and I am never afraid to ask questions. I have been on the other side of the technology long enough to know and explain what could make hundreds of positions easier for the company, which in turn will maximize productivity and decrease employee burn out. My experience in my current role will provide valuable insights and a fresh perspective to the engineering role. Personally, I am looking for a long term carreer in something I love to do and will excel at quickly. I hope you can tell how hard I work and by the determination I put in the following projects and how this will benefit the company.")))}var d=a(5),g=a(29),p=a(30),f=a(31),v=a(32),E=function(){var e=[{appName:"Run Buddy",github:"https://github.com/mattgaither/run-buddy/",link:"https://mattgaither.github.io/run-buddy/",img:g,alt:"A picture of the Run Buddy homepage",id:"1"},{appName:"Horiseon",github:"https://mattgaither.github.io/challenge/",link:"https://mattgaither.github.io/challenge/",img:p,alt:"A picture of the Run Buddy homepage",id:"2"},{appName:"Stockwise",github:"https://mattgaither.github.io/stock-project/",link:"https://github.com/mattgaither/stock-project",img:f,alt:"A picture of the Run Buddy homepage",id:"3"},{appName:"The Kings Mile",github:"https://github.com/alanam79/The_Kings_Mile",link:"https://the-kings-mile.herokuapp.com/",img:v,alt:"A picture of the Run Buddy homepage",id:"4"}];return i.a.createElement("div",{className:"Projects"}," ",e.map(function(e,t){return i.a.createElement("div",{className:"card-container"},i.a.createElement(d.a,null,i.a.createElement(d.a.Img,{variant:"top",src:e.img}),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Title,null,e.appName),i.a.createElement(d.a.Text,null,i.a.createElement("a",{href:e.github},"GitHub Page")," ",i.a.createElement("br",null),i.a.createElement("a",{href:e.link,className:"Card text"},"Deployed Page")))))})," ")},b=a(12),k=a(13),y=a(17),N=a(14),w=a(18),C=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={name:"",email:"",message:""},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),i.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})),i.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){}}]),t}(i.a.Component),j=a(8),x=a(15),I=a.n(x),M=function(){return i.a.createElement("div",{className:"main-container"},i.a.createElement(j.a,{file:I.a},i.a.createElement(j.b,{pageNumber:1})))};a(45);function P(){var e=Object(n.useState)("Home"),t=Object(s.a)(e,2),a=t[0],l=t[1];return i.a.createElement("div",null,i.a.createElement(u,{currentPage:a,handlePageChange:function(e){return l(e)}}),"Home"===a?i.a.createElement(h,null):"Resume"===a?i.a.createElement(M,null):"Projects"===a?i.a.createElement(E,null):"Contact Me"===a?i.a.createElement(C,null):void 0)}a(47);var S=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,null),i.a.createElement(P,null),i.a.createElement(m,null))},B=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,51)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),l(e),r(e)})},R=function(){var e=a(49);return i.a.createElement("div",{className:"videoContainer"},i.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:"videoTag",style:{position:"fixed",zIndex:"-1",top:"0",left:"0",width:"100vw"}},i.a.createElement("source",{src:e,type:"video/mp4"})))};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null),i.a.createElement(S,null))),B()}],[[19,3,2]]]);
//# sourceMappingURL=main.fbab8882.chunk.js.map