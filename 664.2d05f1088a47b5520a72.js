(self.webpackChunkcst_frontend=self.webpackChunkcst_frontend||[]).push([[664],{6664:(t,e,r)=>{"use strict";r.r(e),r.d(e,{PricesModule:()=>b});var i=r(1116),n=r(3319),s=r(1041),o=r(932),a=r(8619),c=r(2695),u=r(3229);const d=["finishInput"];function p(t,e){if(1&t&&(a.TgZ(0,"td"),a._uU(1),a.ALo(2,"date"),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Oqu(a.xi3(2,1,t.date,"dd/MM/yyyy"))}}function Z(t,e){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&t){const t=a.oxw().$implicit;a.xp6(1),a.Oqu(a.gM2(2,1,t.price,"COP","symbol-narrow","3.0"))}}function g(t,e){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(a.gM2(2,1,t.default.price,"COP","symbol-narrow","3.0"))}}function l(t,e){if(1&t&&(a.TgZ(0,"td"),a.YNc(1,Z,3,6,"span",26),a.YNc(2,g,3,6,"span",26),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Q6J("ngIf",t.price),a.xp6(1),a.Q6J("ngIf",!t.price)}}function h(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.ALo(3,"date"),a.qZA(),a.TgZ(4,"td"),a._uU(5),a.ALo(6,"date"),a.qZA(),a.TgZ(7,"td"),a._uU(8),a.ALo(9,"currency"),a.qZA(),a.TgZ(10,"td"),a.TgZ(11,"div",27),a.TgZ(12,"button",28),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().updatePrice(e)}),a._uU(13,"Editar"),a.qZA(),a.TgZ(14,"button",29),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().removeRange(e.id)}),a._uU(15,"X"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.xp6(2),a.Oqu(a.xi3(3,3,t.start,"dd/MM/yyyy")),a.xp6(3),a.Oqu(a.xi3(6,6,t.finish,"dd/MM/yyyy")),a.xp6(3),a.Oqu(a.gM2(9,9,t.price,"COP","symbol-narrow","3.0"))}}let f=(()=>{class t{constructor(t,e,r,i,n){this.alerts=t,this.pricesS=e,this.activated=r,this.router=i,this.fb=n,this.getCurrentDate=o.Ux,this.transformDate=o.Mu,this.form=this.fb.group({start:[null,s.kI.required],finish:[null,s.kI.required],price:[null,s.kI.required]}),(this.currentDate=this.activated.snapshot.params.DATE)||(this.currentDate=(0,o.Ux)()),this.default={},this.prices=[],localStorage.setItem("currentRoute","prices"),this.consulters=[{ob:this.pricesS.list(),cb:t=>{this.prices=t,this.default=this.prices.shift()}},{ob:this.pricesS.getWeek(this.currentDate),cb:t=>this.week=t}],this.alerts.showLoadingConsults(this.consulters.map(t=>t.ob),this.consulters.map(t=>t.cb))}ngOnInit(){}prevDay(){this.router.navigate(["/dashboard/prices",this.currentDate=(0,o.Mu)(this.currentDate,-1)]),this.updateWeek()}nextDay(){this.router.navigate(["/dashboard/prices",this.currentDate=(0,o.Mu)(this.currentDate,1)]),this.updateWeek()}pickDay(t){""!=t.target.value&&(this.router.navigate(["/dashboard/prices",this.currentDate=t.target.value]),this.updateWeek())}updateWeek(){this.consulters[1].ob=this.pricesS.getWeek(this.currentDate);let t=this.consulters[1];this.alerts.showLoadingConsult(t.ob,t.cb)}insertRange(){this.form.valid&&this.alerts.showLoadingUpdates(this.pricesS.insert(this.form.value),{icon:"success",title:"Se ha agregado un nuevo rango de precios"},this.consulters,()=>this.form.reset())}removeRange(t){this.alerts.showLoadingUpdates(this.pricesS.remove(Number(t)),{icon:"warning",title:"Se ha eliminado un rango de precios"},this.consulters)}updatePrice(t){this.alerts.showSingleInput("Editar precio","number",t.price,{min:"0",step:"5000"},e=>{this.alerts.showLoadingUpdates(this.pricesS.update({id:t.id,price:e}),{icon:"success",title:"Se ha actualizado un rango de precios"},this.consulters)})}onStartD(){var t;this.finishInputRef.nativeElement.min=null===(t=this.form.get("start"))||void 0===t?void 0:t.value}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.m),a.Y36(u.g),a.Y36(n.gz),a.Y36(n.F0),a.Y36(s.qu))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-prices"]],viewQuery:function(t,e){if(1&t&&a.Gf(d,5),2&t){let t;a.iGM(t=a.CRH())&&(e.finishInputRef=t.first)}},decls:80,vars:13,consts:[[1,"card"],[1,"card-body"],[1,"btn-group"],[1,"btn","btn-secondary",3,"click"],["aria-hidden","true",1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-angle-right"],["routerLink","/dashboard/prices",1,"btn","btn-primary"],["type","date",1,"form-control",3,"value","change"],[1,"table-responsive"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-sm-3"],["type","date","formControlName","start","required","","placeholder","Precio",1,"form-control",3,"min","change"],["type","date","formControlName","finish","required","","placeholder","Precio",1,"form-control",3,"min"],["finishInput",""],[1,"form-group","col-sm-4"],["type","number","formControlName","price","min","0","step","5000","required","","placeholder","Precio",1,"form-control"],[1,"form-group","col-sm-2"],[2,"color","transparent"],[1,"btn","btn-success","w-100"],[1,"table-bordered","table"],["colspan","2"],[1,"btn","btn-sm","btn-info","w-100",3,"click"],[4,"ngIf"],[1,"btn-group","w-100"],[1,"btn","btn-sm","btn-info",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"h2"),a._uU(1,"Precios"),a.qZA(),a._UZ(2,"hr"),a.TgZ(3,"div",0),a.TgZ(4,"div",1),a.TgZ(5,"div",2),a.TgZ(6,"a",3),a.NdJ("click",function(){return e.prevDay()}),a._UZ(7,"i",4),a.qZA(),a.TgZ(8,"a",5),a.NdJ("click",function(){return e.nextDay()}),a._UZ(9,"i",6),a.qZA(),a.TgZ(10,"a",7),a._uU(11,"Hoy"),a.qZA(),a.TgZ(12,"input",8),a.NdJ("change",function(t){return e.pickDay(t)}),a.qZA(),a.qZA(),a._UZ(13,"hr"),a.TgZ(14,"div",9),a.TgZ(15,"table",10),a.TgZ(16,"tbody"),a.TgZ(17,"tr"),a.TgZ(18,"th"),a._uU(19,"D\xedas"),a.qZA(),a.YNc(20,p,3,4,"td",11),a.qZA(),a.TgZ(21,"tr"),a.TgZ(22,"th"),a._uU(23,"Precio"),a.qZA(),a.YNc(24,l,3,2,"td",11),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(25,"hr"),a.TgZ(26,"div",0),a.TgZ(27,"div",1),a.TgZ(28,"h3"),a._uU(29,"Agregar rango"),a.qZA(),a._UZ(30,"hr"),a.TgZ(31,"form",12),a.NdJ("ngSubmit",function(){return e.insertRange()}),a.TgZ(32,"div",13),a.TgZ(33,"div",14),a.TgZ(34,"label"),a._uU(35,"Fecha inicio"),a.qZA(),a.TgZ(36,"input",15),a.NdJ("change",function(){return e.onStartD()}),a.qZA(),a.qZA(),a.TgZ(37,"div",14),a.TgZ(38,"label"),a._uU(39,"Fecha final"),a.qZA(),a._UZ(40,"input",16,17),a.qZA(),a.TgZ(42,"div",18),a.TgZ(43,"label"),a._uU(44,"Precio ($)"),a.qZA(),a._UZ(45,"input",19),a.qZA(),a.TgZ(46,"div",20),a.TgZ(47,"label",21),a._uU(48,"-"),a.qZA(),a._UZ(49,"br"),a.TgZ(50,"button",22),a._uU(51,"Agregar"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(52,"hr"),a.TgZ(53,"div",0),a.TgZ(54,"div",1),a.TgZ(55,"h3"),a._uU(56,"Rangos"),a.qZA(),a._UZ(57,"hr"),a.TgZ(58,"div",9),a.TgZ(59,"table",23),a.TgZ(60,"thead"),a.TgZ(61,"tr"),a.TgZ(62,"th"),a._uU(63,"Fecha inicio"),a.qZA(),a.TgZ(64,"th"),a._uU(65,"Fecha final"),a.qZA(),a.TgZ(66,"th"),a._uU(67,"Precio"),a.qZA(),a._UZ(68,"th"),a.qZA(),a.qZA(),a.TgZ(69,"tbody"),a.TgZ(70,"tr"),a.TgZ(71,"td",24),a._uU(72,"Predeterminado"),a.qZA(),a.TgZ(73,"td"),a._uU(74),a.ALo(75,"currency"),a.qZA(),a.TgZ(76,"td"),a.TgZ(77,"button",25),a.NdJ("click",function(){return e.updatePrice(e.default)}),a._uU(78,"Editar"),a.qZA(),a.qZA(),a.qZA(),a.YNc(79,h,16,14,"tr",11),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(12),a.Q6J("value",e.currentDate),a.xp6(8),a.Q6J("ngForOf",e.week),a.xp6(4),a.Q6J("ngForOf",e.week),a.xp6(7),a.Q6J("formGroup",e.form),a.xp6(5),a.Q6J("min",e.getCurrentDate()),a.xp6(4),a.Q6J("min",e.getCurrentDate()),a.xp6(34),a.Oqu(a.gM2(75,8,e.default.price,"COP","symbol-narrow","3.0")),a.xp6(5),a.Q6J("ngForOf",e.prices))},directives:[n.yS,i.sg,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.Q7,s.wV,s.qQ,i.O5],pipes:[i.H9,i.uU],styles:[""]}),t})();const m=[{path:"",component:f},{path:":DATE",component:f}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(m)],n.Bz]}),t})();var A=r(2693);let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[u.g],imports:[[i.ez,q,A.JF,s.u5,s.UX]]}),t})()}}]);