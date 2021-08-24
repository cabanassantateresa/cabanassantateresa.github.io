(self.webpackChunkcst_frontend=self.webpackChunkcst_frontend||[]).push([[358],{6358:(t,e,a)=>{"use strict";a.r(e),a.d(e,{MakeReservationModule:()=>A});var i=a(1116),r=a(3319),n=a(1041),o=a(878),s=a(932),d=a(8619),l=a(8870),c=a(2695),u=a(3229);function Z(t,e){if(1&t&&(d.TgZ(0,"td"),d._uU(1),d.ALo(2,"date"),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.Oqu(d.xi3(2,1,t.date,"dd/MM/yyyy"))}}function g(t,e){if(1&t&&(d.TgZ(0,"td"),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.Oqu(t.availables)}}function h(t,e){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"td"),d._uU(2),d.ALo(3,"date"),d.qZA(),d.TgZ(4,"td"),d._uU(5),d.ALo(6,"date"),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.ALo(9,"currency"),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(d.xi3(3,3,t.start,"dd/MM/yyyy")),d.xp6(3),d.Oqu(d.xi3(6,6,t.finish,"dd/MM/yyyy")),d.xp6(3),d.Oqu(d.gM2(9,9,t.price,"COP","symbol-narrow","3.0"))}}function p(t,e){if(1&t&&(d.TgZ(0,"td"),d._uU(1),d.ALo(2,"currency"),d.qZA()),2&t){const t=d.oxw();d.xp6(1),d.Oqu(d.gM2(2,1,t.defaultPrice.price,"COP","symbol-narrow","3.0"))}}function q(t,e){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"td"),d._uU(2),d.ALo(3,"date"),d.qZA(),d.TgZ(4,"td"),d._uU(5),d.ALo(6,"currency"),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(d.xi3(3,2,t.date,"dd/MM/yyyy")),d.xp6(3),d.Oqu(d.gM2(6,5,t.price,"COP","symbol-narrow","3.0"))}}const b=[{path:"",component:(()=>{class t{constructor(t,e,a,i,r,o,d,l){this.route=t,this.router=e,this.reservationsS=a,this.fb=i,this.alerts=r,this.pricesS=o,this.currencyPipe=d,this.datePipe=l,this.transformDate=s.Mu,this.getCurrentDate=s.Ux,this.getDays=s.gw,this.month=[];const c=this.route.snapshot.queryParams;this.maxGuests=6*c.cabsq,this.form=this.fb.group({checkin:[this.currentDate=c.checkin,n.kI.required],checkout:[c.checkout,n.kI.required],cab_quantity:[c.cabsq,n.kI.required],guest_quantity:[c.guestq,n.kI.required],name:[null,n.kI.required],surname:[null,n.kI.required],phone:[null,n.kI.required],email:[null],price:[null,n.kI.required],status_id:[1,n.kI.required],nights:[{value:(0,s.gw)(c.checkin,c.checkout),disabled:!0}]}),this.alerts.showLoadingConsults2([{ob:this.pricesS.list(),cb:t=>{this.prices=t,this.defaultPrice=this.prices.shift()}},{ob:this.reservationsS.getMonth(this.currentDate),cb:t=>this.month=t}],()=>{this.reCalculate()})}ngOnInit(){}today(){this.alerts.showLoadingConsult(this.reservationsS.getMonth(this.currentDate=(0,s.Ux)()),t=>this.month=t)}prevDay(){this.alerts.showLoadingConsult(this.reservationsS.getMonth(this.currentDate=(0,s.Mu)(this.currentDate,-1)),t=>this.month=t)}nextDay(){this.alerts.showLoadingConsult(this.reservationsS.getMonth(this.currentDate=(0,s.Mu)(this.currentDate,1)),t=>this.month=t)}pickDay(t){""!=t.target.value&&this.alerts.showLoadingConsult(this.reservationsS.getMonth(this.currentDate=t.target.value),t=>this.month=t)}reCalculateNights(){var t,e,a,i,r;let n=(0,s.gw)(null===(t=this.form.get("checkin"))||void 0===t?void 0:t.value,null===(e=this.form.get("checkout"))||void 0===e?void 0:e.value);n<=0&&(n=1,null===(a=this.form.get("checkout"))||void 0===a||a.setValue((0,s.Mu)(null===(i=this.form.get("checkin"))||void 0===i?void 0:i.value,1))),null===(r=this.form.get("nights"))||void 0===r||r.setValue(n),this.reCalculate()}setMaxGuests(){var t;this.maxGuests=6*(null===(t=this.form.get("cab_quantity"))||void 0===t?void 0:t.value)}tryInsert(){this.alerts.showLoadingUpdate(this.reservationsS.insert(this.form.value),{icon:"success",title:"Has registrado tu reserva. Ser\xe1s contactado en un momento."},{ob:(0,o.of)(null),cb:()=>this.router.navigate(["/"])})}showAbstract(){const t=this.form.value;this.form.valid?this.reservationsS.verifyRange(t.checkin,t.checkout,t.cab_quantity).subscribe(e=>{if(e.ok){let e=document.createElement("div"),a=this.dates.map(t=>`\n          <tr>\n            <td>${this.datePipe.transform(t.date,"dd/MM/yyyy")}</td>\n            <td>${this.currencyPipe.transform(t.price,"COP","symbol-narrow","3.0")}</td>\n          </tr>`).join("");e.innerHTML=`\n            <div class="table-responsive">\n              <table class="table">\n                  <tbody>\n                      <tr>\n                          <th>Cliente</th>\n                          <td>${t.name} ${t.surname}</td>\n                      </tr>\n  \n                      <tr>\n                          <th>Tel\xe9fono</th>\n                          <td>${t.phone}</td>\n                      </tr>\n                      <tr>\n                          <th>Cantidad de caba\xf1as</th>\n                          <td>${t.cab_quantity}</td>\n                      </tr>\n                      <tr>\n                          <th>Cantidad de huespedes</th>\n                          <td>${t.guest_quantity}</td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n  \n          <div class="alert alert-success">\n              <div class="table-responsive">\n                  <table class="table">\n                      <thead>\n                          <tr>\n                              <th>Fecha</th>\n                              <th>Precio</th>\n                          </tr>\n                      </thead>\n                      <tbody>${a}</tbody>\n                  </table>\n                  <table class="table">\n                    <tbody>\n                      <tr>\n                          <th>Total</th>\n                          <th>${this.currencyPipe.transform(t.price,"COP","symbol-narrow","3.0")}</th>\n                      </tr>\n                    </tbody>\n                  </table>\n              </div>\n          </div>`,this.alerts.showFullModal("Resumen",e,!0).then(t=>{t.isConfirmed&&this.alerts.showConfirmDialog("\xbfTodo listo?","Enviar\xe1s tu solicitud de reserva",()=>this.tryInsert())})}else console.log(e),this.alerts.showToast("error","No se puede efectuar la reserva por disponibilidad.")}):this.alerts.showToast("error","No has registrado correctamente la informaci\xf3n")}reCalculate(){var t,e,a,i;let r=new Date(null===(t=this.form.get("checkin"))||void 0===t?void 0:t.value);this.dates=[];for(var n=0;n<(null===(e=this.form.get("nights"))||void 0===e?void 0:e.value);n++){let t=new Date(null===(a=this.form.get("checkout"))||void 0===a?void 0:a.value);t.setDate(r.getDate()+n),this.dates.push({date:t,price:this.defaultPrice.price})}this.dates.forEach(t=>{this.prices.forEach(e=>{t.date>=new Date(e.start)&&t.date<=new Date(e.finish)&&(t.price=e.price)})});let o=0;this.dates.forEach(t=>{o+=Number(t.price)}),null===(i=this.form.get("price"))||void 0===i||i.setValue(o)}get getTotal(){var t;return null===(t=this.form.get("price"))||void 0===t?void 0:t.value}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(r.gz),d.Y36(r.F0),d.Y36(l.E),d.Y36(n.qu),d.Y36(c.m),d.Y36(u.g),d.Y36(i.H9),d.Y36(i.uU))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-make-reservation"]],decls:214,vars:16,consts:[["id","navbar",1,"shadow-sm"],[1,"sticky-top","navbar","navbar-expand-lg","navbar-light","bg-light"],["routerLink","/",1,"navbar-brand",2,"background","var(--light)","padding","5px"],["src","../assets/img/logo.png",1,"logo-img"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item","active"],["routerLink","/",1,"nav-link"],[1,"container",2,"padding-top","91px"],[1,"mb-2"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-12","mb-2"],[1,"card"],[1,"card-body"],[1,"btn-group"],[1,"btn","btn-secondary",3,"click"],["aria-hidden","true",1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-angle-right"],["type","date",1,"form-control",3,"value","change"],[1,"table-responsive"],[1,"table","table-bordered","text-center"],[4,"ngFor","ngForOf"],[1,"col-lg-5","block-sep"],[1,"card-header"],[1,"form-group","col"],["type","date","formControlName","checkin","required","",1,"form-control",3,"min","change"],["type","date","formControlName","checkout","required","",1,"form-control",3,"min","change"],["type","number","formControlName","nights",1,"form-control"],["type","number","formControlName","cab_quantity","required","","min","1","max","3","maxlength","1",1,"form-control",3,"change"],["type","number","formControlName","guest_quantity","required","","min","1",1,"form-control",3,"max"],[1,"alert","alert-info"],[1,"table","table-bordered"],["colspan","2",1,"text-center"],[4,"ngIf"],["id","personal-data",1,"col-lg-7"],[1,"form-group","col-lg-6"],["type","text","formControlName","name","placeholder","Nombres","required","",1,"form-control"],["type","text","formControlName","surname","placeholder","Apellidos","required","",1,"form-control"],["type","text","formControlName","phone","placeholder","Celular","required","",1,"form-control"],["type","email","formControlName","email","placeholder","Email",1,"form-control"],["type","text","name","total-input","id","total-input","hidden",""],[1,"alert","alert-success"],[1,"table"],[1,""],["src","../assets/img/bancolombia-tm.jpg",2,"height","50px"],["src","../assets/img/nequi-tm.jpg",2,"height","50px"],[1,"card-footer"],["type","submit",1,"btn","btn-primary","btn-block"],[1,"bg-dark","text-light"],[1,"col-lg-1"],[1,"col-lg-10"],[1,"icon-bar"],["id","mySidenav",1,"sidenav"],["href","https://api.whatsapp.com/send?phone=573204297099&fbclid=IwAR3xnQReQCo7YIMjxluyTABBt68V40ic95a5ETv5WhIt_VcmnAo5h3xkekc","id","whatsapp"],["width","20","src","../assets/img/icons/WA.svg"],["href","https://www.facebook.com/Caba%C3%B1as-Santa-Teresa-217047545900255/","id","facebook"],["width","20","src","../assets/img/icons/FB.svg"],["id","date-unavailable","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Cerrar",1,"close"],["aria-hidden","true"],["id","date-un-message",1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["id","success","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-body"],["href","https://api.whatsapp.com/send?phone=573204297099&fbclid=IwAR3xnQReQCo7YIMjxluyTABBt68V40ic95a5ETv5WhIt_VcmnAo5h3xkekc"],["id","abstract-qcabs"],["id","abstract-booking"],["id","total-abstract"],["type","button","href","/",1,"btn","btn-primary"],["id","failed","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],["id","failedMessage",1,"modal-body"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"nav",1),d.TgZ(2,"a",2),d._UZ(3,"img",3),d.qZA(),d.TgZ(4,"button",4),d._UZ(5,"span",5),d.qZA(),d.TgZ(6,"div",6),d.TgZ(7,"ul",7),d.TgZ(8,"li",8),d.TgZ(9,"a",9),d._uU(10,"Pagina principal"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"div",10),d.TgZ(12,"h1",11),d._uU(13,"Reservar"),d.qZA(),d._UZ(14,"br"),d.TgZ(15,"form",12),d.NdJ("ngSubmit",function(){return e.showAbstract()}),d.TgZ(16,"div",13),d.TgZ(17,"div",14),d.TgZ(18,"div",15),d.TgZ(19,"div",16),d.TgZ(20,"h3",11),d._uU(21,"Disponibilidad de caba\xf1as"),d.qZA(),d.TgZ(22,"div",17),d.TgZ(23,"a",18),d.NdJ("click",function(){return e.prevDay()}),d._UZ(24,"i",19),d.qZA(),d.TgZ(25,"a",20),d.NdJ("click",function(){return e.nextDay()}),d._UZ(26,"i",21),d.qZA(),d.TgZ(27,"a",20),d.NdJ("click",function(){return e.today()}),d._uU(28,"Hoy"),d.qZA(),d.TgZ(29,"input",22),d.NdJ("change",function(t){return e.pickDay(t)}),d.qZA(),d.qZA(),d._UZ(30,"hr"),d.TgZ(31,"div",23),d.TgZ(32,"table",24),d.TgZ(33,"tbody"),d.TgZ(34,"tr"),d.TgZ(35,"th"),d._uU(36,"D\xedas"),d.qZA(),d.YNc(37,Z,3,4,"td",25),d.qZA(),d.TgZ(38,"tr"),d.TgZ(39,"th"),d._uU(40,"Caba\xf1as disponibles"),d.qZA(),d.YNc(41,g,2,1,"td",25),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(42,"div",26),d.TgZ(43,"div",15),d.TgZ(44,"div",27),d.TgZ(45,"strong"),d._uU(46,"Reserva"),d.qZA(),d.qZA(),d.TgZ(47,"div",16),d.TgZ(48,"div",13),d.TgZ(49,"div",28),d.TgZ(50,"label"),d._uU(51,"Check in*"),d.qZA(),d.TgZ(52,"input",29),d.NdJ("change",function(){return e.reCalculateNights()}),d.qZA(),d.qZA(),d.TgZ(53,"div",28),d.TgZ(54,"label"),d._uU(55,"Check out*"),d.qZA(),d.TgZ(56,"input",30),d.NdJ("change",function(){return e.reCalculateNights()}),d.qZA(),d.qZA(),d.TgZ(57,"div",28),d.TgZ(58,"label"),d._uU(59,"Noches"),d.qZA(),d._UZ(60,"input",31),d.qZA(),d.TgZ(61,"div",28),d.TgZ(62,"label"),d._uU(63,"Caba\xf1as*"),d.qZA(),d.TgZ(64,"input",32),d.NdJ("change",function(){return e.setMaxGuests()}),d.qZA(),d.qZA(),d.TgZ(65,"div",28),d.TgZ(66,"label"),d._uU(67,"Hu\xe9spedes*"),d.qZA(),d._UZ(68,"input",33),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(69,"div",34),d.TgZ(70,"table",35),d.TgZ(71,"thead"),d.TgZ(72,"tr"),d.TgZ(73,"th"),d._uU(74,"Desde"),d.qZA(),d.TgZ(75,"th"),d._uU(76,"Hasta"),d.qZA(),d.TgZ(77,"th"),d._uU(78,"Precio por noche"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(79,"tbody"),d.YNc(80,h,10,14,"tr",25),d.qZA(),d.TgZ(81,"tbody"),d.TgZ(82,"tr"),d.TgZ(83,"td",36),d._uU(84,"En otras fechas"),d.qZA(),d.YNc(85,p,3,6,"td",37),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(86,"div",38),d.TgZ(87,"div",15),d.TgZ(88,"div",27),d.TgZ(89,"strong"),d._uU(90,"Introduce tus datos"),d.qZA(),d.qZA(),d.TgZ(91,"div",16),d.TgZ(92,"div",13),d.TgZ(93,"div",39),d.TgZ(94,"label"),d._uU(95,"Nombres*"),d.qZA(),d._UZ(96,"input",40),d.qZA(),d.TgZ(97,"div",39),d.TgZ(98,"label"),d._uU(99,"Apellidos*"),d.qZA(),d._UZ(100,"input",41),d.qZA(),d.qZA(),d.TgZ(101,"div",13),d.TgZ(102,"div",39),d.TgZ(103,"label"),d._uU(104,"Celular*"),d.qZA(),d._UZ(105,"input",42),d.qZA(),d.TgZ(106,"div",39),d.TgZ(107,"label"),d._uU(108,"Email"),d.qZA(),d._UZ(109,"input",43),d.qZA(),d._UZ(110,"input",44),d.qZA(),d.qZA(),d.TgZ(111,"div",16),d.TgZ(112,"div",45),d.TgZ(113,"table",46),d.TgZ(114,"tr"),d.TgZ(115,"th"),d._uU(116,"Cantidad de caba\xf1as"),d.qZA(),d._UZ(117,"td"),d.qZA(),d.qZA(),d.TgZ(118,"table",46),d.TgZ(119,"thead"),d.TgZ(120,"tr"),d.TgZ(121,"th"),d._uU(122,"Fecha"),d.qZA(),d.TgZ(123,"th"),d._uU(124,"Precio"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(125,"tbody"),d.YNc(126,q,7,10,"tr",25),d.qZA(),d.qZA(),d.TgZ(127,"strong"),d._uU(128,"Total: "),d.qZA(),d._uU(129),d.ALo(130,"currency"),d.qZA(),d.TgZ(131,"div",47),d._uU(132," Medios de pago: "),d._UZ(133,"img",48),d._UZ(134,"img",49),d.qZA(),d.qZA(),d.TgZ(135,"div",50),d.TgZ(136,"button",51),d._uU(137,"Reservar"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(138,"footer",52),d.TgZ(139,"div",13),d._UZ(140,"div",53),d.TgZ(141,"div",54),d.TgZ(142,"p"),d._uU(143,"Copyright \xa9 Caba\xf1as Santa Teresa"),d.qZA(),d.qZA(),d.TgZ(144,"div",53),d._uU(145,"FS"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(146,"div",55),d.TgZ(147,"div",56),d.TgZ(148,"a",57),d._UZ(149,"img",58),d.qZA(),d.TgZ(150,"a",59),d._UZ(151,"img",60),d.qZA(),d.qZA(),d.qZA(),d.TgZ(152,"div",61),d.TgZ(153,"div",62),d.TgZ(154,"div",63),d.TgZ(155,"div",64),d.TgZ(156,"h5",65),d._uU(157,"No se puede realizar tu reserva"),d.qZA(),d.TgZ(158,"button",66),d.TgZ(159,"span",67),d._uU(160,"\xd7"),d.qZA(),d.qZA(),d.qZA(),d._UZ(161,"div",68),d.TgZ(162,"div",69),d.TgZ(163,"button",70),d._uU(164,"Entendido"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(165,"div",71),d.TgZ(166,"div",62),d.TgZ(167,"div",63),d.TgZ(168,"div",64),d.TgZ(169,"h5",65),d._uU(170,"Registro completo"),d.qZA(),d.qZA(),d.TgZ(171,"div",72),d._uU(172," Tu reserva ya fue registrada. "),d._UZ(173,"br"),d._uU(174," Comunicate con el siguiente "),d.TgZ(175,"a",73),d._uU(176,"enlace"),d.qZA(),d._uU(177," o llama al "),d.TgZ(178,"strong"),d._uU(179,"320 4297099"),d.qZA(),d._UZ(180,"hr"),d.TgZ(181,"table",46),d.TgZ(182,"tr"),d.TgZ(183,"th"),d._uU(184,"Cantidad de caba\xf1as"),d.qZA(),d._UZ(185,"td",74),d.qZA(),d.qZA(),d.TgZ(186,"table",35),d.TgZ(187,"thead"),d.TgZ(188,"tr"),d.TgZ(189,"th"),d._uU(190,"Fecha"),d.qZA(),d.TgZ(191,"th"),d._uU(192,"Precio"),d.qZA(),d.qZA(),d.qZA(),d._UZ(193,"tbody",75),d.qZA(),d.TgZ(194,"strong"),d._uU(195,"Total: "),d.qZA(),d._uU(196," $"),d._UZ(197,"a",76),d._uU(198," COP "),d.qZA(),d.TgZ(199,"div",69),d.TgZ(200,"a",77),d._uU(201,"Entendido"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(202,"div",78),d.TgZ(203,"div",62),d.TgZ(204,"div",63),d.TgZ(205,"div",64),d.TgZ(206,"h5",65),d._uU(207,"Registro fallido"),d.qZA(),d.qZA(),d._UZ(208,"div",79),d.TgZ(209,"div",69),d.TgZ(210,"button",80),d._uU(211,"Cerrar"),d.qZA(),d.TgZ(212,"button",81),d._uU(213,"Entendido"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(15),d.Q6J("formGroup",e.form),d.xp6(14),d.Q6J("value",e.currentDate),d.xp6(8),d.Q6J("ngForOf",e.month),d.xp6(4),d.Q6J("ngForOf",e.month),d.xp6(11),d.Q6J("min",e.getCurrentDate()),d.xp6(4),d.Q6J("min",e.getCurrentDate(1)),d.xp6(12),d.Q6J("max",e.maxGuests),d.xp6(12),d.Q6J("ngForOf",e.prices),d.xp6(5),d.Q6J("ngIf",e.defaultPrice),d.xp6(41),d.Q6J("ngForOf",e.dates),d.xp6(3),d.hij(" ",d.gM2(130,11,e.getTotal,"COP","symbol-narrow","3.0")," "))},directives:[r.yS,n._Y,n.JL,n.sg,i.sg,n.Fj,n.JJ,n.u,n.Q7,n.wV,n.qQ,n.Fd,n.nD,i.O5],pipes:[i.H9,i.uU],styles:["#hide[_ngcontent-%COMP%], #unit-price[_ngcontent-%COMP%]{font:inherit;margin:0;padding:0}#unit-price[_ngcontent-%COMP%]{border:none;color:inherit;min-width:10px;background:#d1ecf1;cursor:auto}#hide[_ngcontent-%COMP%]{display:none;white-space:pre}.icon-bar[_ngcontent-%COMP%]{position:fixed;top:25%;transform:translateY(-50%)}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),t})();var v=a(2693);let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[l.E,u.g,i.uU,i.H9],imports:[[i.ez,m,v.JF,n.u5,n.UX]]}),t})()}}]);