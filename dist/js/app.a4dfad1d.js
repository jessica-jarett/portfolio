(function(e){function t(t){for(var i,a,s=t[0],o=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},c={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bde":function(e,t,n){},"0ca0":function(e,t,n){e.exports=n.p+"img/html.5559db89.svg"},1287:function(e,t,n){e.exports=n.p+"img/git.b2d54cc9.svg"},"1f10":function(e,t,n){e.exports=n.p+"img/css.e65aa6fb.svg"},2382:function(e,t,n){"use strict";n("0bde")},"26ed":function(e,t,n){"use strict";n("7b16")},"26f7":function(e,t,n){e.exports=n.p+"img/careers-thumb.6a900df6.jpg"},"277b":function(e,t,n){e.exports=n.p+"img/linkedin.ff187686.svg"},"2f5d":function(e,t,n){e.exports=n.p+"img/vue.be28c6fc.svg"},"379c":function(e,t,n){"use strict";n("3c31")},"3c31":function(e,t,n){},"42f7":function(e,t,n){},"450e":function(e,t,n){e.exports=n.p+"img/javascript.cd9a6a22.svg"},"4a54":function(e,t,n){var i={"./careers-thumb.jpg":"26f7","./rmsg-thumb.jpg":"ee4d"};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=r,e.exports=c,c.id="4a54"},"513d":function(e,t,n){"use strict";n("880f")},"55c5":function(e,t,n){"use strict";n("d479")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function c(e,t,n,c,r,a){var s=Object(i["w"])("app-header"),o=Object(i["w"])("router-view"),l=Object(i["w"])("app-footer");return Object(i["r"])(),Object(i["e"])("div",null,[Object(i["i"])(s),Object(i["i"])(o),Object(i["i"])(l)])}var r={class:"row"},a={class:"flex justify-space-between align-center"},s=["src"],o=Object(i["h"])("About"),l=Object(i["h"])("Featured Experience"),f=Object(i["h"])("Skills"),u=Object(i["f"])("li",null,[Object(i["f"])("a",{href:"https://github.com/jessica-jarett/portfolio",rel:"noreferrer",target:"_blank"},"Github")],-1);function d(e,t,n,c,d,p){var b=Object(i["w"])("router-link");return Object(i["r"])(),Object(i["e"])("header",null,[Object(i["f"])("div",r,[Object(i["f"])("div",a,[Object(i["i"])(b,{to:"/",class:"logo"},{default:Object(i["B"])((function(){return[Object(i["f"])("img",{src:d.logo,width:"50",height:"50",alt:"Go home"},null,8,s)]})),_:1}),Object(i["f"])("div",{class:"mobile-only hamburger",onClick:t[0]||(t[0]=function(e){return p.toggleModal()})}),Object(i["f"])("nav",{onClick:t[1]||(t[1]=function(e){return p.toggleModal()})},[Object(i["f"])("ul",null,[Object(i["f"])("li",null,[Object(i["i"])(b,{to:"/about"},{default:Object(i["B"])((function(){return[o]})),_:1})]),Object(i["f"])("li",null,[Object(i["i"])(b,{to:"/featured-experience"},{default:Object(i["B"])((function(){return[l]})),_:1})]),Object(i["f"])("li",null,[Object(i["i"])(b,{to:"/skills"},{default:Object(i["B"])((function(){return[f]})),_:1})]),u])])])])])}var p=n("7b46"),b=n.n(p),m={name:"AppHeader",data:function(){return{logo:n("73d7")}},mounted:function(){var e=document.querySelector("header"),t=new b.a(e);t.init()},methods:{toggleModal:function(){var e=document.querySelector("body");e.classList.toggle("modal-open")}}};n("513d");m.render=d;var g=m,j={class:"row"},v={class:"social"},O={class:"social-link",href:"https://www.linkedin.com/in/jessicajarett/",rel:"noreferrer",target:"_blank"},h=["src"],y={class:"copyright"};function x(e,t,n,c,r,a){return Object(i["r"])(),Object(i["e"])("footer",null,[Object(i["f"])("div",j,[Object(i["f"])("div",v,[Object(i["f"])("a",O,[Object(i["f"])("img",{src:r.linkedin,width:"30",height:"30",alt:"LinkedIn Profile"},null,8,h)])]),Object(i["f"])("div",y," Copyright ©"+Object(i["y"])((new Date).getFullYear())+". All rights reserved. ",1)])])}var k={name:"AppFooter",data:function(){return{linkedin:n("277b")}}};n("379c");k.render=x;var _=k,w={name:"App",components:{AppHeader:g,AppFooter:_}};w.render=c;var E=w,L=n("6c02"),I={class:"home-page"},M={class:"hero"},A={class:"row"},S=Object(i["f"])("div",{class:"hero__left"},[Object(i["f"])("h1",null,[Object(i["h"])(" Hi, I'm Jess, "),Object(i["f"])("span",{class:"break-small break-large"},"Front-End Web Developer")]),Object(i["f"])("p",null,"Thank you for visiting my page!"),Object(i["f"])("p",null,"Here you will find some of my work examples, and a link to my Github to view the source code of this project. If you are interested in collaborating, please contact me using the form below."),Object(i["f"])("a",{class:"button",target:"_blank",href:"Resume.pdf"}," Download Resume ")],-1),H={class:"hero__right"},T={class:"image"},C=["src"],F={class:"contact"},P=Object(i["f"])("a",{name:"contact"},null,-1),D={class:"row"},J=Object(i["f"])("h2",null,"Contact Me",-1),B={class:"experience-posts"},N={class:"row"},U=Object(i["f"])("h2",null,"Featured Experience",-1);function q(e,t,n,c,r,a){var s=Object(i["w"])("contact"),o=Object(i["w"])("experience-posts");return Object(i["r"])(),Object(i["e"])("div",I,[Object(i["f"])("section",M,[Object(i["f"])("div",A,[S,Object(i["f"])("div",H,[Object(i["f"])("div",T,[Object(i["f"])("img",{src:r.imgJess,width:"266",height:"266",alt:"Jess Jarett"},null,8,C)])])])]),Object(i["f"])("section",F,[P,Object(i["f"])("div",D,[J,Object(i["i"])(s)])]),Object(i["f"])("section",B,[Object(i["f"])("div",N,[U,Object(i["i"])(o)])])])}n("a4d3"),n("e01a");var G={class:"experience-post__image"},z=["src","alt"],R={class:"experience-post__detail"},W={class:"experience-post__title"},K={class:"experience-post__flex flex align-center"},Q={class:"experience-post__year"},Y={class:"experience-post__tag"},X={class:"experience-post__description"},$=Object(i["h"])("Read more");function V(e,t,n,c,r,a){var s=Object(i["w"])("router-link");return Object(i["r"])(),Object(i["e"])("div",null,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(r.experienceList,(function(e){return Object(i["r"])(),Object(i["e"])("div",{class:"experience-post",key:e.id},[Object(i["f"])("div",G,[Object(i["f"])("img",{src:a.loadImg(e.image),width:"246",height:"180",alt:e.title},null,8,z)]),Object(i["f"])("div",R,[Object(i["f"])("div",W,Object(i["y"])(e.title),1),Object(i["f"])("div",K,[Object(i["f"])("div",Q,Object(i["y"])(e.year),1),Object(i["f"])("div",Y,Object(i["y"])(e.tag),1)]),Object(i["f"])("div",X,Object(i["y"])(e.description),1),Object(i["i"])(s,{class:"button experience-post__link",to:"/featured-experience/"+e.slug},{default:Object(i["B"])((function(){return[$]})),_:2},1032,["to"])])])})),128))])}n("d3b7");var Z=n("4a54"),ee={name:"ExperiencePosts",data:function(){return{experienceList:[]}},methods:{getExperience:function(){var e=this;fetch("experience.json").then((function(e){return e.json()})).then((function(t){return e.experienceList=t}))},loadImg:function(e){return Z("./"+e)}},mounted:function(){this.getExperience()}};n("55c5");ee.render=V;var te=ee,ne=Object(i["g"])('<div class="g-recaptcha" data-sitekey="6LfQly0cAAAAAJWKxvlCna72kqtTgUPUSHzLNMl5"></div><div class="contact-form__container"><label for="name">Name:</label><input type="text" name="name" id="name"></div><div class="contact-form__container"><label for="email">Email:</label><input type="text" name="email" id="email"></div><div class="contact-form__container"><label for="message">Message:</label><textarea label="Message" type="text" id="message" name="message"></textarea></div><input class="button" type="submit" value="Send">',5),ie=[ne];function ce(e,t,n,c,r,a){return Object(i["r"])(),Object(i["e"])("form",{class:"contact-form",ref:"form",onSubmit:t[0]||(t[0]=Object(i["C"])((function(){return a.sendEmail&&a.sendEmail.apply(a,arguments)}),["prevent"]))},ie,544)}var re=n("f8c5"),ae={name:"Contact",methods:{sendEmail:function(e){re["a"].sendForm("service_yfzq93h","template_8p9mnf7",e.target,"user_LpznQK1EU3i0qMky0v6yx").then((function(){alert("Message successfully sent!")}),(function(e){alert("Message failed to send:"+e.text)}))}}};n("73f9");ae.render=ce;var se=ae,oe={name:"Home",components:{ExperiencePosts:te,Contact:se},data:function(){return{imgJess:n("f573")}}};n("83a4");oe.render=q;var le=oe,fe={class:"about-page"},ue={class:"row"},de=Object(i["f"])("h1",null,"About",-1),pe=Object(i["f"])("h2",null,"Introduction",-1),be={class:"image"},me=["src"],ge=Object(i["f"])("p",null,"My name is Jess, and I’m a Front-End Web Developer with 7 years of professional experience working for 3 companies in the Syracuse, NY area.",-1),je=Object(i["f"])("p",null,"My passion for development goes back to when I was a pre-teen, spending a lot of my free time on Neopets. Neopets was virtual pet website that gave each of its users their own personal hosted website. I quickly taught myself the well-known HTML elements and used my free website to teach other player’s how to code. Fast-forward 6 years and I was in high school making myspace layouts for all of my friends and taking 4 years of web design classes. Little did I know that my hobby would help prepare me for a future career.",-1),ve=Object(i["f"])("p",null,"College experience included a four-year job at my college’s Alumni Association. I was responsible for digitizing their magazine archive and adding them to their new website. I learned a lot about content management system’s and organization. My final summer was spent at an internship at Equitable (formerly AXA US), as a developer on their User Experience team.",-1),Oe=Object(i["f"])("p",null,"Today, I am a developer at Bankers Healthcare Group. As the lead front-end developer on my team, I am responsible for the successful launch and maintence of all public-facing websites. This role has taught me a lot about the development lifecycle, as I am often involved in a project from ideation, to design/developer collaboration, development, all the way to launch.",-1),he=Object(i["f"])("p",null,"At Bankers Healthcare Group, I am leading an effort of gathering shared assets (logos/fonts/colors) and code/components, and adding them to a private NPM repository available for any BHG developer to use. BHG IT is full of distributed teams whose work does not cross paths. Having a shared code repository makes sure developers save time, code consistently, and can contribute to a project that benefits themselves and others.",-1),ye=Object(i["f"])("p",null,"I also host a Front-End Developer Meetup on a bi-weekly basis. Its important to me to mentor and foster relationships with junior developers. I am always learning new things in my field by explaining and teaching others.",-1),xe=Object(i["f"])("h2",null,"My hobbies",-1),ke=Object(i["f"])("p",null,"My favorite pasttime is hiking. I have spent a few months this last year remotely working from various locations in the Western United States and would spend my afternoons hiking in the Cascades or the Rockies. Every day after work I would find a fantastic hike within an hour’s drive and life felt like a vacation.",-1),_e=Object(i["f"])("p",null,"Other hobbies of mine include cooking, slow-jogging, and reading a good non-fiction book.",-1);function we(e,t,n,c,r,a){return Object(i["r"])(),Object(i["e"])("div",fe,[Object(i["f"])("div",ue,[de,pe,Object(i["f"])("div",be,[Object(i["f"])("img",{src:r.tree,width:"346",height:"428",alt:"About Jess Jarett"},null,8,me)]),ge,je,ve,Oe,he,ye,xe,ke,_e])])}var Ee={name:"About",data:function(){return{tree:n("7232")}}};n("b7e5");Ee.render=we;var Le=Ee,Ie={class:"experience-page"},Me={class:"row"},Ae=Object(i["f"])("h1",null,"Featured Experience",-1);function Se(e,t,n,c,r,a){var s=Object(i["w"])("experience-posts");return Object(i["r"])(),Object(i["e"])("div",Ie,[Object(i["f"])("div",Me,[Ae,Object(i["i"])(s)])])}var He={name:"Experience",components:{ExperiencePosts:te}};n("26ed");He.render=Se;var Te=He,Ce={class:"experience-detail"},Fe={class:"row"},Pe={class:"experience-detail__title"},De={class:"experience-detail__top"},Je={class:"experience-detail__image"},Be=["src","alt"],Ne={class:"experience-detail__description"},Ue={class:"experience-detail__website flex align-center"},qe=Object(i["f"])("h3",null,"Link: ",-1),Ge=["href"],ze={class:"experience-detail__tech flex align-center"},Re=Object(i["f"])("h3",null,"Technology used: ",-1),We={class:"experience-detail__flex flex align-center"},Ke={class:"experience-detail__year"},Qe={class:"experience-detail__tag"},Ye=["innerHTML"];function Xe(e,t,n,c,r,a){var s=this;return Object(i["r"])(),Object(i["e"])("div",Ce,[Object(i["f"])("div",Fe,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(r.experienceList,(function(e){return Object(i["r"])(),Object(i["e"])("div",{key:e.id},[e.slug==s.$route.params.slug?(Object(i["r"])(),Object(i["e"])(i["a"],{key:0},[Object(i["f"])("h1",Pe,Object(i["y"])(e.title),1),Object(i["f"])("div",De,[Object(i["f"])("div",Je,[Object(i["f"])("img",{src:a.loadImg(e.image),width:"246",height:"180",alt:e.title},null,8,Be)]),Object(i["f"])("div",null,[Object(i["f"])("div",Ne,[Object(i["f"])("div",Ue,[qe,Object(i["f"])("a",{href:e.url,rel:"noreferrer",target:"_blank"},Object(i["y"])(e.url),9,Ge)]),Object(i["f"])("div",ze,[Re,Object(i["f"])("span",null,Object(i["y"])(e.technology),1)])]),Object(i["f"])("div",We,[Object(i["f"])("div",Ke,Object(i["y"])(e.year),1),Object(i["f"])("div",Qe,Object(i["y"])(e.tag),1)])])]),Object(i["f"])("div",{class:"experience-detail__body",innerHTML:e.body},null,8,Ye)],64)):Object(i["d"])("",!0)])})),128))])])}var $e=n("4a54"),Ve={name:"ExperienceDetail",data:function(){return{experienceList:[]}},methods:{getExperience:function(){var e=this;fetch("../experience.json").then((function(e){return e.json()})).then((function(t){return e.experienceList=t}))},loadImg:function(e){return $e("./"+e)}},mounted:function(){this.getExperience()}};n("2382");Ve.render=Xe;var Ze=Ve,et={class:"skills-page"},tt={class:"row"},nt=Object(i["f"])("h1",null,"Skills",-1),it=Object(i["f"])("h2",null,"Language & Frameworks",-1),ct={class:"flex flex-wrap"},rt={class:"skill__image"},at=["src","alt"],st={class:"skill__modal"},ot={class:"skill__title"},lt={class:"skill__image"},ft=["src","alt"],ut=["innerHTML"],dt=Object(i["f"])("h2",null,"Other Skills",-1),pt={class:"flex flex-wrap"},bt={class:"skill__image"},mt=["src","alt"],gt={class:"skill__modal"},jt={class:"skill__title"},vt={class:"skill__image"},Ot=["src","alt"],ht=["innerHTML"];function yt(e,t,n,c,r,a){return Object(i["r"])(),Object(i["e"])("div",et,[Object(i["f"])("div",tt,[nt,it,Object(i["f"])("div",ct,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(r.skillsList.languages,(function(e){return Object(i["r"])(),Object(i["e"])("div",{onClick:t[1]||(t[1]=function(e){return e.target.classList.add("active")}),key:e.id,class:"skill"},[Object(i["f"])("div",rt,[Object(i["f"])("img",{src:a.loadImg(e.image),alt:e.title},null,8,at)]),Object(i["f"])("div",st,[Object(i["f"])("div",{class:"skill__modal-close",onClick:t[0]||(t[0]=function(e){return e.target.parentElement.parentElement.classList.remove("active")})}),Object(i["f"])("div",ot,Object(i["y"])(e.title),1),Object(i["f"])("div",lt,[Object(i["f"])("img",{src:a.loadImg(e.image),alt:e.title},null,8,ft)]),Object(i["f"])("div",{class:"skill__description",innerHTML:e.description},null,8,ut)])])})),128))]),dt,Object(i["f"])("div",pt,[(Object(i["r"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(r.skillsList.other,(function(e){return Object(i["r"])(),Object(i["e"])("div",{onClick:t[3]||(t[3]=function(e){return e.target.classList.add("active")}),key:e.id,class:"skill"},[Object(i["f"])("div",bt,[Object(i["f"])("img",{src:a.loadImg(e.image),alt:e.title},null,8,mt)]),Object(i["f"])("div",gt,[Object(i["f"])("div",{class:"skill__modal-close",onClick:t[2]||(t[2]=function(e){return e.target.parentElement.parentElement.classList.remove("active")})}),Object(i["f"])("div",jt,Object(i["y"])(e.title),1),Object(i["f"])("div",vt,[Object(i["f"])("img",{src:a.loadImg(e.image),alt:e.title},null,8,Ot)]),Object(i["f"])("div",{class:"skill__description",innerHTML:e.description},null,8,ht)])])})),128))])])])}var xt=n("ec3e"),kt={name:"Skills",data:function(){return{skillsList:[]}},methods:{getSkills:function(){var e=this;fetch("skills.json").then((function(e){return e.json()})).then((function(t){return e.skillsList=t}))},loadImg:function(e){return xt("./"+e)}},mounted:function(){this.getSkills()}};n("9e0d");kt.render=yt;var _t=kt,wt=[{path:"/",name:"Home",component:le},{path:"/about",name:"About",component:Le},{path:"/featured-experience",name:"Experience",component:Te},{path:"/featured-experience/:slug",name:"ExperienceDetail",component:Ze},{path:"/skills",name:"Skills",component:_t}],Et=Object(L["a"])({history:Object(L["b"])(),scrollBehavior:function(e,t){return t||(e.hash?{el:e.hash}:{x:0,y:0})},routes:wt}),Lt=Et;Object(i["c"])(E).use(Lt).mount("#app")},"594c":function(e,t,n){e.exports=n.p+"img/sass.4a44ff4a.svg"},7232:function(e,t,n){e.exports=n.p+"img/jess-tree.71f7594e.jpg"},"73d7":function(e,t,n){e.exports=n.p+"img/logo.41349a04.png"},"73f9":function(e,t,n){"use strict";n("42f7")},"7b16":function(e,t,n){},"83a4":function(e,t,n){"use strict";n("8479")},8479:function(e,t,n){},"880f":function(e,t,n){},"9e0d":function(e,t,n){"use strict";n("deb3")},a575:function(e,t,n){e.exports=n.p+"img/angular.fabb8a34.svg"},a76a:function(e,t,n){e.exports=n.p+"img/public-speaking.819e6c92.svg"},b7e5:function(e,t,n){"use strict";n("c2e0")},b96e:function(e,t,n){e.exports=n.p+"img/stencil.e00fcaf5.svg"},c2e0:function(e,t,n){},d308:function(e,t,n){e.exports=n.p+"img/responsive-development.2136afdf.svg"},d479:function(e,t,n){},d77d:function(e,t,n){e.exports=n.p+"img/symfony.5a87ea28.svg"},dd3e:function(e,t,n){e.exports=n.p+"img/ada-compliance.45fe688a.svg"},deb3:function(e,t,n){},ec3e:function(e,t,n){var i={"./ada-compliance.svg":"dd3e","./agile.svg":"fa5d","./angular.svg":"a575","./component-development.svg":"f753","./css.svg":"1f10","./git.svg":"1287","./html.svg":"0ca0","./javascript.svg":"450e","./npm.svg":"eed0","./public-speaking.svg":"a76a","./responsive-development.svg":"d308","./sass.svg":"594c","./stencil.svg":"b96e","./symfony.svg":"d77d","./vue.svg":"2f5d"};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=r,e.exports=c,c.id="ec3e"},ee4d:function(e,t,n){e.exports=n.p+"img/rmsg-thumb.04305fb0.jpg"},eed0:function(e,t,n){e.exports=n.p+"img/npm.0079ba43.svg"},f573:function(e,t,n){e.exports=n.p+"img/jess.0897b897.png"},f753:function(e,t,n){e.exports=n.p+"img/component-development.6c728ec1.svg"},fa5d:function(e,t,n){e.exports=n.p+"img/agile.e1d313f6.svg"}});
//# sourceMappingURL=app.a4dfad1d.js.map