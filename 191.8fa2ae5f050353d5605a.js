(self.webpackChunkcst_frontend=self.webpackChunkcst_frontend||[]).push([[191],{8191:(t,e,n)=>{"use strict";n.r(e),n.d(e,{LandingModule:()=>M});var a=n(1116),i=n(3319),o=n(8619),c=n(932),r=n(8870);let s=(()=>{class t{constructor(t){this.reservationsS=t,this.getCurrentDate=c.Ux,this.qAvailables=0,this.reservationsS.getAvailables().subscribe(t=>this.qAvailables=t.availables)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-available-block"]],decls:41,vars:5,consts:[["id","block-available",1,"block","text-light",2,"background","#00A89Ccc"],[1,"row"],[1,"col-lg-3","block-sep","rounded-pill"],[1,"card","bg-info"],[1,"card-body"],[2,"text-align","center","font-size","75px"],[2,"text-align","center"],[1,"col-lg-9"],[1,"card","text-dark"],["method","GET","action","reservar"],[1,"form-group","col"],["id","check-in","type","date","name","checkin","required","","onchange","evaluateCheckinDate();",1,"form-control",3,"value","min"],["id","check-out","type","date","name","checkout","required","","onchange","evaluateCheckoutDate();",1,"form-control",3,"value","min"],["type","number","name","cabsq","value","1","min","1","max","3","maxlength","1","required","",1,"form-control"],["type","number","name","guestq","value","1","min","1","max","6","required","",1,"form-control"],[2,"opacity","0"],[1,"btn","btn-primary","btn-block","form-control"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o.TgZ(2,"strong"),o._uU(3,"Disponibilidad"),o.qZA(),o.qZA(),o._UZ(4,"br"),o.TgZ(5,"div",1),o.TgZ(6,"div",2),o.TgZ(7,"div",3),o.TgZ(8,"div",4),o.TgZ(9,"h1",5),o._uU(10),o.qZA(),o.TgZ(11,"h1",6),o._uU(12,"Disponibles ahora"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"div",7),o.TgZ(14,"div",8),o.TgZ(15,"div",4),o.TgZ(16,"form",9),o.TgZ(17,"h2"),o._uU(18,"Haz una reserva"),o.qZA(),o.TgZ(19,"div",1),o.TgZ(20,"div",10),o.TgZ(21,"label"),o._uU(22,"Check in"),o.qZA(),o._UZ(23,"input",11),o.qZA(),o.TgZ(24,"div",10),o.TgZ(25,"label"),o._uU(26,"Check out"),o.qZA(),o._UZ(27,"input",12),o.qZA(),o.TgZ(28,"div",10),o.TgZ(29,"label"),o._uU(30,"Caba\xf1as"),o.qZA(),o._UZ(31,"input",13),o.qZA(),o.TgZ(32,"div",10),o.TgZ(33,"label"),o._uU(34,"Hu\xe9spedes"),o.qZA(),o._UZ(35,"input",14),o.qZA(),o.TgZ(36,"div",10),o.TgZ(37,"label",15),o._uU(38,"a"),o.qZA(),o.TgZ(39,"button",16),o._uU(40,"Reservar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(10),o.Oqu(e.qAvailables),o.xp6(13),o.Q6J("value",e.getCurrentDate())("min",e.getCurrentDate()),o.xp6(4),o.Q6J("value",e.getCurrentDate(1))("min",e.getCurrentDate(1)))},styles:[""]}),t})();var l=n(529),g=n(132),d=n(814);function Z(t,e){if(1&t&&o._UZ(0,"button",21),2&t){const t=e.index;o.Tol(0==t?"active":""),o.uIk("data-bs-slide-to",t)("aria-current",0==t)}}function u(t,e){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"img",22),o.qZA()),2&t){const t=e.$implicit,n=e.index,a=o.oxw();o.Gre("carousel-item ",0==n?"active":""," text-center"),o.xp6(1),o.Q6J("src",a.albumURL+t,o.LSH)}}let p=(()=>{class t{constructor(t,e){this.albumS=t,this.featuresS=e,this.albumURL=l.N.assetsURL+"album/",this.description="",this.featuresS.getDescription().subscribe(t=>this.description=t.description),this.video="v1.mp4",this.images=[],this.albumS.list().subscribe(t=>this.images=t.filter(t=>"v1.mp4"!=t))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.$),o.Y36(d.k))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-features-block"]],decls:32,vars:4,consts:[["id","block-features",1,"block",2,"background","#18535Fcc"],[1,"row"],[1,"col-lg-6","text-light"],[2,"text-align","justify","text-justify","inter-word"],[1,"col-lg-6"],[1,"text-light",2,"text-align","center"],["controls","",2,"height","80vh","width","100%"],["type","video/mp4",3,"src"],[1,"col-lg"],[1,"col","mt-4"],[1,"text-light","mb-3",2,"text-align","center"],["id","fcarousel","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#fcarousel","aria-label","Slide 1",3,"class",4,"ngFor","ngForOf"],[1,"carousel-inner"],[3,"class",4,"ngFor","ngForOf"],["type","button","data-bs-target","#fcarousel","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#fcarousel","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["type","button","data-bs-target","#fcarousel","aria-label","Slide 1"],[1,"album-image-cst",3,"src"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h1"),o.TgZ(4,"strong"),o._uU(5,"Caracteristicas"),o.qZA(),o.qZA(),o._UZ(6,"br"),o.TgZ(7,"h3",3),o._uU(8),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"h3",5),o._uU(11,"Interior"),o.qZA(),o.TgZ(12,"video",6),o._UZ(13,"source",7),o.qZA(),o.qZA(),o._UZ(14,"div",8),o.TgZ(15,"div",9),o.TgZ(16,"h3",10),o._uU(17,"Exterior"),o.qZA(),o.TgZ(18,"div",11),o.TgZ(19,"div",12),o.YNc(20,Z,1,5,"button",13),o.qZA(),o.TgZ(21,"div",14),o.YNc(22,u,2,4,"div",15),o.qZA(),o.TgZ(23,"button",16),o._UZ(24,"span",17),o.TgZ(25,"span",18),o._uU(26,"Anterior"),o.qZA(),o.qZA(),o.TgZ(27,"button",19),o._UZ(28,"span",20),o.TgZ(29,"span",18),o._uU(30,"Siguiente"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(31,"div",8),o.qZA(),o.qZA()),2&t&&(o.xp6(8),o.Oqu(e.description),o.xp6(5),o.Q6J("src",e.albumURL+e.video,o.LSH),o.xp6(7),o.Q6J("ngForOf",e.images),o.xp6(2),o.Q6J("ngForOf",e.images))},directives:[a.sg],styles:[".album-image-cst[_ngcontent-%COMP%]{width:100%}@media (min-width:992px){.album-image-cst[_ngcontent-%COMP%]{width:auto;height:450px}}"]}),t})();function b(t,e){if(1&t&&o._UZ(0,"button",15),2&t){const t=e.index;o.Tol(0==t?"active":""),o.uIk("data-bs-slide-to",t)("aria-current",0==t)}}function m(t,e){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"img",16),o.qZA()),2&t){const t=e.$implicit,n=e.index,a=o.oxw();o.Gre("carousel-item ",0==n?"active":""," text-center"),o.xp6(1),o.Q6J("src",a.albumgzURL+t,o.LSH)}}let v=(()=>{class t{constructor(t){this.albumS=t,this.albumgzURL=l.N.assetsURL+"album-gz/",this.images=[],this.albumS.listGZ().subscribe(t=>this.images=t)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.$))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-green-zone-block"]],decls:21,vars:2,consts:[["id","block-greenzone",1,"block","text-light",2,"background","#00A89Ccc"],[2,"text-align","center"],[1,"row","mt-3"],[1,"col-lg"],[1,"col"],["id","gzcarousel","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#gzcarousel","aria-label","Slide 1",3,"class",4,"ngFor","ngForOf"],[1,"carousel-inner"],[3,"class",4,"ngFor","ngForOf"],["type","button","data-bs-target","#gzcarousel","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#gzcarousel","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["type","button","data-bs-target","#gzcarousel","aria-label","Slide 1"],[1,"album-image-cst",3,"src"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1",1),o.TgZ(2,"strong"),o._uU(3,"Zona verde"),o.qZA(),o.qZA(),o.TgZ(4,"div",2),o._UZ(5,"div",3),o.TgZ(6,"div",4),o.TgZ(7,"div",5),o.TgZ(8,"div",6),o.YNc(9,b,1,5,"button",7),o.qZA(),o.TgZ(10,"div",8),o.YNc(11,m,2,4,"div",9),o.qZA(),o.TgZ(12,"button",10),o._UZ(13,"span",11),o.TgZ(14,"span",12),o._uU(15,"Anterior"),o.qZA(),o.qZA(),o.TgZ(16,"button",13),o._UZ(17,"span",14),o.TgZ(18,"span",12),o._uU(19,"Siguiente"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(20,"div",3),o.qZA(),o.qZA()),2&t&&(o.xp6(9),o.Q6J("ngForOf",e.images),o.xp6(2),o.Q6J("ngForOf",e.images))},directives:[a.sg],styles:[".album-image-cst[_ngcontent-%COMP%]{width:100%}@media (min-width:992px){.album-image-cst[_ngcontent-%COMP%]{width:auto;height:450px}}"]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-location-block"]],decls:6,vars:0,consts:[["id","block-location",1,"block","text-light",2,"background","#18535Fcc"],["id","map",1,"mt-3"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.7250469728328!2d-72.99152508124237!3d5.791920713212091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDcnMjkuOSJOIDcywrA1OScyNS44Ilc!5e0!3m2!1ses-419!2sco!4v1602293936206!5m2!1ses-419!2sco","frameborder","0","allowfullscreen","","aria-hidden","false","tabindex","0",2,"border","0"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o.TgZ(2,"strong"),o._uU(3,"Ubicaci\xf3n"),o.qZA(),o.qZA(),o.TgZ(4,"div",1),o._UZ(5,"iframe",2),o.qZA(),o.qZA())},styles:["#map[_ngcontent-%COMP%]{width:100%;height:75vh}#map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:95%}"]}),t})();var f=n(5506),A=n(2695);function q(t,e){if(1&t&&(o.TgZ(0,"span",7),o._uU(1),o.qZA()),2&t){const t=o.oxw(2);o.xp6(1),o.hij("",t.data.distance," Km.")}}function T(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",8),o.TgZ(1,"button",9),o.NdJ("click",function(){o.CHM(t);const e=o.oxw(2);return e.showVideo(e.data.yt_video)}),o._uU(2,"Video"),o.qZA(),o.qZA()}}function _(t,e){if(1&t&&(o.TgZ(0,"div",1),o.TgZ(1,"div",2),o.TgZ(2,"strong"),o._uU(3),o.qZA(),o.YNc(4,q,2,1,"span",3),o.qZA(),o.TgZ(5,"div",4),o._UZ(6,"img",5),o.qZA(),o.YNc(7,T,3,0,"div",6),o.qZA()),2&t){const t=o.oxw();o.xp6(3),o.Oqu(t.data.name),o.xp6(1),o.Q6J("ngIf",t.data.distance),o.xp6(2),o.Q6J("src",t.data.external_image?t.data.external_image:t.placesURL+t.data.id+".jpg",o.LSH),o.xp6(1),o.Q6J("ngIf",t.data.yt_video)}}let x=(()=>{class t{constructor(t){this.alerts=t,this.placesURL=l.N.assetsURL+"places/"}ngOnInit(){}showVideo(t){this.alerts.showYTVideo(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(A.m))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-place-card"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","card","onclick","setCitiInfo(9); $('#cityModal').modal('show');",4,"ngIf"],["onclick","setCitiInfo(9); $('#cityModal').modal('show');",1,"card"],[1,"card-header"],["class","float-end",4,"ngIf"],[1,"card-body"],[2,"width","100%",3,"src"],["class","card-footer",4,"ngIf"],[1,"float-end"],[1,"card-footer"],[1,"btn","btn-info","w-100",3,"click"]],template:function(t,e){1&t&&o.YNc(0,_,8,4,"div",0),2&t&&o.Q6J("ngIf",e.data)},directives:[a.O5],styles:[""]}),t})();function k(t,e){1&t&&o._UZ(0,"app-place-card",3),2&t&&o.Q6J("data",e.$implicit)}let U=(()=>{class t{constructor(t){this.placesS=t,this.places=[],this.placesS.list().subscribe(t=>this.places=t)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-interest-block"]],decls:6,vars:1,consts:[["id","block-interest",1,"block","text-light",2,"background","#00A89Ccc"],[1,"row","text-dark","mt-3"],["class","col-lg-4 mb-2",3,"data",4,"ngFor","ngForOf"],[1,"col-lg-4","mb-2",3,"data"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o.TgZ(2,"strong"),o._uU(3,"Lugares de inter\xe9s"),o.qZA(),o.qZA(),o.TgZ(4,"div",1),o.YNc(5,k,1,1,"app-place-card",2),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Q6J("ngForOf",e.places))},directives:[a.sg,x],styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-annotations-block"]],decls:28,vars:0,consts:[["id","block-show-annotations","hidden","",1,"block","text-light",2,"background","#18535F"],[1,"row"],[1,"col-lg-12"],["id","block-annotation","hidden","",1,"block","text-light",2,"background","#00A89C"],["action","insert_annotation.php"],[1,"form-group"],["name","annotation","required","",1,"form-control"],[1,"input-group"],[1,"custom-file"],["type","file","id","uploadPhotos","aria-describedby","inputGroupFileAddon04","accept","image/*","multiple","","name","images",1,"custom-file-input"],["for","uploadPhotos","data-browse","Buscar",1,"custom-file-label"],[1,"btn","btn-secondary"],[1,"col-lg-6"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o.TgZ(2,"strong"),o._uU(3,"Comentarios"),o.qZA(),o.qZA(),o.TgZ(4,"div",1),o._UZ(5,"div",2),o.qZA(),o.qZA(),o.TgZ(6,"div",3),o.TgZ(7,"h1"),o.TgZ(8,"strong"),o._uU(9,"Deja tu comentario"),o.qZA(),o.qZA(),o.TgZ(10,"div",1),o.TgZ(11,"div",2),o.TgZ(12,"form",4),o.TgZ(13,"div",5),o.TgZ(14,"label"),o._uU(15,"Comentario"),o.qZA(),o._UZ(16,"textarea",6),o.qZA(),o.TgZ(17,"div",5),o.TgZ(18,"label"),o._uU(19,"Subir fotos"),o.qZA(),o.TgZ(20,"div",7),o.TgZ(21,"div",8),o._UZ(22,"input",9),o.TgZ(23,"label",10),o._uU(24,"Elegir fotos"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(25,"button",11),o._uU(26,"Subir comentarios"),o.qZA(),o.qZA(),o.qZA(),o._UZ(27,"div",12),o.qZA(),o.qZA())},styles:[""]}),t})();const C=[{path:"",component:(()=>{class t{constructor(t){this.router=t}ngOnInit(){setTimeout(()=>{const t=document.querySelector("#block-available");null==t||t.scrollIntoView({behavior:"smooth",block:"start"})},8e3)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-landing"]],decls:81,vars:0,consts:[["id","navbar",1,"shadow-sm"],[1,"sticky-top","navbar","navbar-expand-lg","navbar-light","bg-light"],["href","#block-main",1,"navbar-brand",2,"background","var(--light)","padding","5px"],["src","assets/img/logo.png",1,"logo-img"],[1,"badge","bg-info","d-lg-none"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item","active"],["href","#block-main",1,"nav-link"],[1,"nav-item"],["href","#block-available",1,"nav-link"],["href","#block-features",1,"nav-link"],["href","#block-greenzone",1,"nav-link"],["href","#block-location",1,"nav-link"],["href","#block-interest",1,"nav-link"],["href","#block-show-annotations",1,"nav-link"],[1,"badge","bg-info","d-none","d-lg-block"],["id","block-main",1,"navbar-aux"],["id","block-image",1,"block","block-full"],["src","/assets/img/prime.jpg",2,"width","100%"],[1,"blocks"],["id","image-aux",1,"block"],[1,"bg-dark","text-light"],[1,"row"],[1,"col-lg-1"],[1,"col-lg-10"],[1,"icon-bar"],["id","mySidenav",1,"sidenav"],["href","https://api.whatsapp.com/send?phone=573204297099&fbclid=IwAR3xnQReQCo7YIMjxluyTABBt68V40ic95a5ETv5WhIt_VcmnAo5h3xkekc","id","whatsapp"],["width","20","src","assets/img/icons/WA.svg"],["href","https://www.facebook.com/Caba%C3%B1as-Santa-Teresa-217047545900255/","id","facebook"],["width","20","src","assets/img/icons/FB.svg"],[1,"icon-bar2"],["id","mySidenav2",1,"sidenav"],["id","petfriendly"],["width","60","src","assets/img/petfriendly.png"],["id","cityModal","tabindex","-1","role","dialog","aria-labelledby","cityModalTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],["id","cityModalTitle",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close","onclick","$('#cityVideoFrame').attr('src','');",1,"close"],["aria-hidden","true"],[1,"modal-body"],["id","city-distance"],["id","cityVideoFrame","src","","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",2,"width","100%"],[1,"modal-footer"],["type","button","data-dismiss","modal","onclick","$('#cityVideoFrame').attr('src','');",1,"btn","btn-secondary"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"nav",1),o.TgZ(2,"a",2),o._UZ(3,"img",3),o._UZ(4,"br"),o.TgZ(5,"span",4),o._uU(6,"Contacto: 320 429 7099"),o.qZA(),o.qZA(),o.TgZ(7,"button",5),o._UZ(8,"span",6),o.qZA(),o.TgZ(9,"div",7),o.TgZ(10,"ul",8),o.TgZ(11,"li",9),o.TgZ(12,"a",10),o._uU(13,"Inicio"),o.qZA(),o.qZA(),o.TgZ(14,"li",11),o.TgZ(15,"a",12),o._uU(16,"Disponibilidad"),o.qZA(),o.qZA(),o.TgZ(17,"li",11),o.TgZ(18,"a",13),o._uU(19,"Caracteristicas"),o.qZA(),o.qZA(),o.TgZ(20,"li",11),o.TgZ(21,"a",14),o._uU(22,"Zona verde"),o.qZA(),o.qZA(),o.TgZ(23,"li",11),o.TgZ(24,"a",15),o._uU(25,"Ubicaci\xf3n"),o.qZA(),o.qZA(),o.TgZ(26,"li",11),o.TgZ(27,"a",16),o._uU(28,"Lugares de inter\xe9s"),o.qZA(),o.qZA(),o.TgZ(29,"li",11),o.TgZ(30,"a",17),o._uU(31,"Comentarios"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(32,"span",18),o._uU(33,"Contacto: 320 429 7099"),o.qZA(),o.qZA(),o.qZA(),o._UZ(34,"div",19),o.TgZ(35,"div",20),o._UZ(36,"img",21),o.qZA(),o.TgZ(37,"div",22),o._UZ(38,"div",23),o._UZ(39,"app-available-block"),o._UZ(40,"app-features-block"),o._UZ(41,"app-green-zone-block"),o._UZ(42,"app-location-block"),o._UZ(43,"app-interest-block"),o._UZ(44,"app-annotations-block"),o.qZA(),o.TgZ(45,"footer",24),o.TgZ(46,"div",25),o._UZ(47,"div",26),o.TgZ(48,"div",27),o.TgZ(49,"p"),o._uU(50,"Copyright 2021 \xa9 Caba\xf1as Santa Teresa"),o.qZA(),o.qZA(),o.TgZ(51,"div",26),o._uU(52,"FS"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(53,"div",28),o.TgZ(54,"div",29),o.TgZ(55,"a",30),o._UZ(56,"img",31),o.qZA(),o.TgZ(57,"a",32),o._UZ(58,"img",33),o.qZA(),o.qZA(),o.qZA(),o.TgZ(59,"div",34),o.TgZ(60,"div",35),o.TgZ(61,"a",36),o._UZ(62,"img",37),o.qZA(),o.qZA(),o.qZA(),o.TgZ(63,"div",38),o.TgZ(64,"div",39),o.TgZ(65,"div",40),o.TgZ(66,"div",41),o.TgZ(67,"h5",42),o._uU(68,"Modal title"),o.qZA(),o.TgZ(69,"button",43),o.TgZ(70,"span",44),o._uU(71,"\xd7"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(72,"div",45),o.TgZ(73,"strong"),o._uU(74,"Distancia: "),o.qZA(),o._UZ(75,"a",46),o.TgZ(76,"div"),o._UZ(77,"iframe",47),o.qZA(),o.qZA(),o.TgZ(78,"div",48),o.TgZ(79,"button",49),o._uU(80,"Cerrar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA())},directives:[s,p,v,h,U,y],styles:["#image-aux[_ngcontent-%COMP%]{display:none}.navbar-aux[_ngcontent-%COMP%]{height:106px}.icon-bar[_ngcontent-%COMP%], .icon-bar2[_ngcontent-%COMP%]{position:fixed;top:25%;transform:translateY(-50%)}.icon-bar2[_ngcontent-%COMP%]{width:100%}#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{left:0}#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{left:0;transition:.3s}#mySidenav2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;padding:3px;text-decoration:none;font-size:15px;color:#fff;border-radius:0 5px 5px 0}#mySidenav2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:right;right:0}#whatsapp[_ngcontent-%COMP%]{top:20px;background-color:#4caf50}#facebook[_ngcontent-%COMP%]{top:55px;background-color:#2196f3}#petfriendly[_ngcontent-%COMP%]{top:10px;background-color:gray}#invisible-logo[_ngcontent-%COMP%]{height:8em}#logo-col[_ngcontent-%COMP%]{max-width:100%;flex:0 0 100%}#logo-margin[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:392px){#invisible-logo[_ngcontent-%COMP%]{height:13em}#logo-margin[_ngcontent-%COMP%]{display:initial}}@media only screen and (min-width:520px){#invisible-logo[_ngcontent-%COMP%]{height:18em}#logo-margin[_ngcontent-%COMP%]{display:initial}#logo-col[_ngcontent-%COMP%]{max-width:33.333333%;flex:0 0 33.333333%}}@media only screen and (min-width:992px){.block[_ngcontent-%COMP%]{padding-left:60px;padding-right:60px}#block-main[_ngcontent-%COMP%]{background-size:100%}#invisible-logo[_ngcontent-%COMP%]{height:50vh}#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px}#facebook[_ngcontent-%COMP%]{top:70px}.navbar-aux[_ngcontent-%COMP%]{height:76px}#block-image[_ngcontent-%COMP%]{position:fixed;top:76px}.blocks[_ngcontent-%COMP%]{z-index:0}.blocks[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]{position:relative}footer[_ngcontent-%COMP%]{z-index:1}#image-aux[_ngcontent-%COMP%]{display:block}}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(C)],i.Bz]}),t})();var O=n(2693);let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[f.E,g.$,r.E,d.k],imports:[[a.ez,w,O.JF]]}),t})()}}]);