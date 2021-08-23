(self.webpackChunkcst_frontend=self.webpackChunkcst_frontend||[]).push([[405],{8405:(e,t,i)=>{"use strict";i.r(t),i.d(t,{PlacesManageModule:()=>G});var s=i(1116),a=i(3319),n=i(2693),o=i(1041),r=i(878),c=i(8619),l=i(5506),d=i(2695);const p=function(e){return{width:e}};function u(e,t){if(1&e&&(c.TgZ(0,"div",20),c.TgZ(1,"span"),c._uU(2),c.qZA(),c.TgZ(3,"div",21),c.TgZ(4,"div",22),c._uU(5),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Oqu(e.progressInfo.fileName),c.xp6(2),c.Q6J("ngStyle",c.VKq(4,p,e.progressInfo.value+"%")),c.uIk("aria-valuenow",e.progressInfo.value),c.xp6(1),c.hij(" ",e.progressInfo.value,"% ")}}function g(e,t){if(1&e&&c._UZ(0,"img",23),2&e){const e=c.oxw();c.Q6J("src",e.preview,c.LSH)}}let Z=(()=>{class e{constructor(e,t,i,s,a){this.location=e,this.fb=t,this.router=i,this.placesS=s,this.alerts=a,this.form=this.fb.group({name:[null,o.kI.required],external_image:[null],distance:[null],yt_video:[null]})}ngOnInit(){}goBack(){this.location.back()}tryAddPlace(){if(console.log(this.form.value),this.form.valid){let e=this.form.value;e.yt_video=e.yt_video.replace("https://www.youtube.com/watch?v=","").split("&")[0],this.alerts.showLoadingUpdate(this.placesS.insert(e),{icon:"success",title:"Se ha agregado un nuevo sitio"},{ob:(0,r.of)(null),cb:(e,t)=>{this.uploadFile(t.id)}})}}selectFile(e){if(this.progressInfo={},this.fileInput||(this.fileInput=e.target),this.selectedFile=e.target.files[0],this.selectedFile){const e=new FileReader;e.onload=e=>this.preview=e.target.result,e.readAsDataURL(this.selectedFile)}}uploadFile(e){this.selectedFile&&(this.upload(this.selectedFile,e),this.fileInput.files=null,this.fileInput.value="")}upload(e,t){this.progressInfo={value:0,fileName:e.name},e&&this.placesS.updateImage(e,t).subscribe(e=>{e.type===n.dt.UploadProgress?this.progressInfo.value=Math.round(100*e.loaded/e.total):e instanceof n.Zn&&(this.progressInfo=void 0,this.preview=void 0,this.router.navigate(["/dashboard/website/places"]))},e=>{this.progressInfo.value=0})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.Ye),c.Y36(o.qu),c.Y36(a.F0),c.Y36(l.E),c.Y36(d.m))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-add-place"]],decls:37,vars:3,consts:[[1,"row"],[1,"col-1"],[1,"btn","btn-secondary","btn-sm",3,"click"],[1,"col-6"],[3,"formGroup","ngSubmit"],[1,"card"],[1,"card-body"],[1,"col-md-8"],["type","text","formControlName","name","placeholder","Nombre del sitio",1,"form-control"],[1,"col-md-4"],["type","text","formControlName","distance","placeholder","Distancia en kilometros",1,"form-control"],[1,"col-md-6"],["type","file","accept","image/jpeg",1,"form-control",3,"change"],["type","text","formControlName","external_image","placeholder","Enlace de im\xe1gen (Tiene prioridad)",1,"form-control"],[1,"col-md-12"],["type","text","formControlName","yt_video","placeholder","Enlace de YouTube",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","float-end"],["class","mb-2",4,"ngIf"],["height","80px",3,"src",4,"ngIf"],[1,"mb-2"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-info","progress-bar-striped",3,"ngStyle"],["height","80px",3,"src"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"button",2),c.NdJ("click",function(){return t.goBack()}),c._uU(3,"Volver"),c.qZA(),c.qZA(),c.TgZ(4,"h2",3),c._uU(5,"Agregar sitio de inter\xe9s"),c.qZA(),c.qZA(),c._UZ(6,"hr"),c.TgZ(7,"form",4),c.NdJ("ngSubmit",function(){return t.tryAddPlace()}),c.TgZ(8,"div",5),c.TgZ(9,"div",6),c.TgZ(10,"div",0),c.TgZ(11,"div",7),c.TgZ(12,"label"),c._uU(13,"Nombre"),c.qZA(),c._UZ(14,"input",8),c.qZA(),c.TgZ(15,"div",9),c.TgZ(16,"label"),c._uU(17,"Distancia"),c.qZA(),c._UZ(18,"input",10),c.qZA(),c.TgZ(19,"div",11),c.TgZ(20,"label"),c._uU(21,"Subir im\xe1gen"),c.qZA(),c.TgZ(22,"input",12),c.NdJ("change",function(e){return t.selectFile(e)}),c.qZA(),c.qZA(),c.TgZ(23,"div",11),c.TgZ(24,"label"),c._uU(25,"Enlace de im\xe1gen"),c.qZA(),c._UZ(26,"input",13),c.qZA(),c.TgZ(27,"div",14),c.TgZ(28,"label"),c._uU(29,"Enlace YouTube"),c.qZA(),c._UZ(30,"input",15),c.qZA(),c.qZA(),c.qZA(),c.TgZ(31,"div",16),c.TgZ(32,"button",17),c._uU(33,"Guardar"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.YNc(34,u,6,6,"div",18),c.TgZ(35,"div"),c.YNc(36,g,1,1,"img",19),c.qZA()),2&e&&(c.xp6(7),c.Q6J("formGroup",t.form),c.xp6(27),c.Q6J("ngIf",t.progressInfo),c.xp6(2),c.Q6J("ngIf",t.preview))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,s.O5,s.PC],styles:[""]}),e})();var h=i(529);const f=["distanceInput"],m=["imageFileInput"],v=["externalImageInput"],b=["videoInput"],q=["image"],A=["videoContainer"];function T(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",16),c.TgZ(1,"button",17),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).setEditing(!0)}),c._uU(2,"Editar"),c.qZA(),c.TgZ(3,"button",18),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).remove()}),c._uU(4,"Borrar"),c.qZA(),c.qZA()}}function I(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",16),c.TgZ(1,"button",17),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).setEditing(!1)}),c._uU(2,"Cerrar edici\xf3n"),c.qZA(),c.qZA()}}function w(e,t){if(1&e&&(c.TgZ(0,"td"),c._uU(1),c.qZA()),2&e){const e=c.oxw(2);c.xp6(1),c.Oqu(e.place.distance?e.place.distance:"No asignada")}}function x(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"td"),c.TgZ(1,"div",0),c.TgZ(2,"div",19),c._UZ(3,"input",20,21),c.qZA(),c.TgZ(5,"button",22),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).saveDistance()}),c._uU(6,"Guardar"),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw(2);c.xp6(3),c.Q6J("value",e.place.distance)}}const _=function(e){return{width:e}};function U(e,t){if(1&e&&(c.TgZ(0,"div",28),c.TgZ(1,"span"),c._uU(2),c.qZA(),c.TgZ(3,"div",29),c.TgZ(4,"div",30),c._uU(5),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw(3);c.xp6(2),c.Oqu(e.progressInfo.fileName),c.xp6(2),c.Q6J("ngStyle",c.VKq(4,_,e.progressInfo.value+"%")),c.uIk("aria-valuenow",e.progressInfo.value),c.xp6(1),c.hij(" ",e.progressInfo.value,"% ")}}function y(e,t){if(1&e&&c._UZ(0,"img",31),2&e){const e=c.oxw(3);c.Q6J("src",e.preview,c.LSH)}}function N(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"th"),c._uU(2,"Subir im\xe1gen"),c.qZA(),c.TgZ(3,"td"),c.TgZ(4,"div",0),c.TgZ(5,"div",19),c.TgZ(6,"input",23,24),c.NdJ("change",function(t){return c.CHM(e),c.oxw(2).selectFile(t)}),c.qZA(),c.qZA(),c.TgZ(8,"button",25),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).uploadFile()}),c._uU(9,"Guardar"),c.qZA(),c.YNc(10,U,6,6,"div",26),c.TgZ(11,"div"),c.YNc(12,y,1,1,"img",27),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw(2);c.xp6(8),c.Q6J("disabled",!e.progressInfo),c.xp6(2),c.Q6J("ngIf",e.progressInfo),c.xp6(2),c.Q6J("ngIf",e.preview)}}function J(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"th"),c._uU(2,"Enlace de im\xe1gen"),c.qZA(),c.TgZ(3,"td"),c.TgZ(4,"div",0),c.TgZ(5,"div",19),c._UZ(6,"input",32,33),c.qZA(),c.TgZ(8,"button",22),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).saveExternalImage()}),c._uU(9,"Guardar"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw(2);c.xp6(6),c.Q6J("value",e.place.external_image)}}function S(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"td"),c.TgZ(1,"div",0),c.TgZ(2,"div",19),c._UZ(3,"input",34,35),c.qZA(),c.TgZ(5,"button",22),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).saveVideo()}),c._uU(6,"Guardar"),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw(2);c.xp6(3),c.Q6J("value",e.place.yt_video?"https://www.youtube.com/watch?v="+e.place.yt_video:null)}}function E(e,t){if(1&e&&(c.TgZ(0,"a",37),c._uU(1),c.qZA()),2&e){const e=c.oxw(3);c.Q6J("href","https://www.youtube.com/watch?v="+e.place.yt_video,c.LSH),c.xp6(1),c.Oqu("https://www.youtube.com/watch?v="+e.place.yt_video)}}function F(e,t){1&e&&(c.TgZ(0,"span"),c._uU(1,"No asignado"),c.qZA())}function k(e,t){if(1&e&&(c.TgZ(0,"td"),c.YNc(1,E,2,2,"a",36),c.YNc(2,F,2,0,"span",11),c.qZA()),2&e){const e=c.oxw(2);c.xp6(1),c.Q6J("ngIf",e.place.yt_video),c.xp6(1),c.Q6J("ngIf",!e.place.yt_video)}}function Y(e,t){if(1&e&&(c.TgZ(0,"div",5),c.TgZ(1,"div",6),c.TgZ(2,"div",0),c.TgZ(3,"h4",3),c._uU(4),c.qZA(),c.TgZ(5,"div",3),c.YNc(6,T,5,0,"div",7),c.YNc(7,I,3,0,"div",7),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",8),c.TgZ(9,"div",9),c.TgZ(10,"table",10),c.TgZ(11,"tbody"),c.TgZ(12,"tr"),c.TgZ(13,"th"),c._uU(14,"Distancia (Km)"),c.qZA(),c.YNc(15,w,2,1,"td",11),c.YNc(16,x,7,1,"td",11),c.qZA(),c.YNc(17,N,13,3,"tr",11),c.YNc(18,J,10,1,"tr",11),c.TgZ(19,"tr"),c.TgZ(20,"th"),c._uU(21,"Video"),c.qZA(),c.YNc(22,S,7,1,"td",11),c.YNc(23,k,3,2,"td",11),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"hr"),c.TgZ(25,"div",12),c._UZ(26,"div",13),c.TgZ(27,"div",3),c._UZ(28,"img",14,15),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(4),c.Oqu(e.place.name),c.xp6(2),c.Q6J("ngIf",!e.isEditing),c.xp6(1),c.Q6J("ngIf",e.isEditing),c.xp6(8),c.Q6J("ngIf",!e.isEditing),c.xp6(1),c.Q6J("ngIf",e.isEditing),c.xp6(1),c.Q6J("ngIf",e.isEditing),c.xp6(1),c.Q6J("ngIf",e.isEditing),c.xp6(4),c.Q6J("ngIf",e.isEditing),c.xp6(1),c.Q6J("ngIf",!e.isEditing),c.xp6(5),c.Q6J("src",e.place.external_image?e.place.external_image:e.imagesURL+e.place.id+".jpg",c.LSH)}}let C=(()=>{class e{constructor(e,t,i,s,a){this.location=e,this.alerts=t,this.placesS=i,this.activated=s,this.router=a,this.imagesURL=h.N.assetsURL+"places/",this.isEditing=!1,this.videoPrinted=!1,this.alerts.showLoadingConsult(this.placesS.getById(Number(this.activated.snapshot.params.ID)),e=>this.place=e)}ngOnInit(){}get getURL(){return this.videoContainer&&!this.videoPrinted&&(this.videoContainer.nativeElement.innerHTML=`<iframe style="width: 100%;height:100%;"\n      src="https://www.youtube.com/embed/${this.place.yt_video}"\n      frameborder="0"\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen></iframe>`,this.videoPrinted=!0),""}setEditing(e){this.isEditing=e}goBack(){this.location.back()}remove(){this.alerts.showConfirmDialog("\xbfEst\xe1s seguro?","Eliminar\xe1s este sitio",()=>{this.placesS.remove(this.place.id).subscribe(e=>this.router.navigate(["/dashboard/website/places"]))})}saveDistance(){const e=this.distanceInput.nativeElement.value;""==e?this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,distance:"-1",name:this.place.name}),{icon:"warning",title:"Haz puesto la distancia en No asignada"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e}):this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,distance:e,name:this.place.name}),{icon:"success",title:"Haz asignado una distancia a este sitio"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e})}saveExternalImage(){const e=this.externalImageInput.nativeElement.value;""==e?this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,external_image:"-1",name:this.place.name}),{icon:"warning",title:"Haz puesto la im\xe1gen externa en No asignada"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e}):this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,external_image:e,name:this.place.name}),{icon:"success",title:"Haz asignado una im\xe1gen externa a este sitio"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e})}saveVideo(){const e=this.videoInput.nativeElement.value;""==e?this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,yt_video:"-1",name:this.place.name}),{icon:"warning",title:"Haz puesto el video en No asignada"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e}):this.alerts.showLoadingUpdate(this.placesS.update({id:this.place.id,yt_video:e.replace("https://www.youtube.com/watch?v=","").split("&")[0],name:this.place.name}),{icon:"success",title:"Haz asignado un video a este sitio"},{ob:this.placesS.getById(Number(this.activated.snapshot.params.ID)),cb:e=>this.place=e})}selectFile(e){if(this.progressInfo={},this.fileInput||(this.fileInput=e.target),this.selectedFile=e.target.files[0],this.selectedFile){const e=new FileReader;e.onload=e=>this.preview=e.target.result,e.readAsDataURL(this.selectedFile)}}uploadFile(){this.selectedFile&&(this.upload(this.selectedFile),this.fileInput.files=null,this.fileInput.value="")}upload(e){this.progressInfo={value:0,fileName:e.name},e&&this.placesS.updateImage(e,this.place.id).subscribe(e=>{e.type===n.dt.UploadProgress?this.progressInfo.value=Math.round(100*e.loaded/e.total):e instanceof n.Zn&&(this.progressInfo=void 0,this.preview=void 0,this.image.nativeElement.src=this.image.nativeElement.src+"?"+(new Date).getTime())},e=>{this.progressInfo.value=0})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.Ye),c.Y36(d.m),c.Y36(l.E),c.Y36(a.gz),c.Y36(a.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-place-details"]],viewQuery:function(e,t){if(1&e&&(c.Gf(f,5),c.Gf(m,5),c.Gf(v,5),c.Gf(b,5),c.Gf(q,5),c.Gf(A,5)),2&e){let e;c.iGM(e=c.CRH())&&(t.distanceInput=e.first),c.iGM(e=c.CRH())&&(t.imageFileInput=e.first),c.iGM(e=c.CRH())&&(t.externalImageInput=e.first),c.iGM(e=c.CRH())&&(t.videoInput=e.first),c.iGM(e=c.CRH())&&(t.image=e.first),c.iGM(e=c.CRH())&&(t.videoContainer=e.first)}},decls:8,vars:1,consts:[[1,"row"],[1,"col-md-1"],[1,"btn","btn-secondary","btn-sm",3,"click"],[1,"col-md-6"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header"],["class","btn-group float-end",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[4,"ngIf"],[1,"row","text-center"],[1,"col-md-3"],[1,"w-100",3,"src"],["image",""],[1,"btn-group","float-end"],["type","button",1,"btn","btn-sm","btn-secondary",3,"click"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"col-md-10"],["type","number","placeholder","Distancia en kilometros",1,"form-control",3,"value"],["distanceInput",""],[1,"btn","btn-success","col-md-2",3,"click"],["type","file","accept","image/jpeg",1,"form-control",3,"change"],["imageFileInput",""],[1,"btn","btn-success","col-md-2",3,"disabled","click"],["class","mb-2",4,"ngIf"],["height","80px",3,"src",4,"ngIf"],[1,"mb-2"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-info","progress-bar-striped",3,"ngStyle"],["height","80px",3,"src"],["type","text","placeholder","Tiene prioridad con la imagen subida",1,"form-control",3,"value"],["externalImageInput",""],["type","text","placeholder","Enl\xe1ce de video de YouTube",1,"form-control",3,"value"],["videoInput",""],["target","__blank",3,"href",4,"ngIf"],["target","__blank",3,"href"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"button",2),c.NdJ("click",function(){return t.goBack()}),c._uU(3,"Volver"),c.qZA(),c.qZA(),c.TgZ(4,"h2",3),c._uU(5,"Detalles de sitio de inter\xe9s"),c.qZA(),c.qZA(),c._UZ(6,"hr"),c.YNc(7,Y,30,10,"div",4)),2&e&&(c.xp6(7),c.Q6J("ngIf",t.place))},directives:[s.O5,s.PC],styles:[""]}),e})();const Q=function(e){return[e,"details"]};function L(e,t){if(1&e&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._UZ(4,"img",10),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c.TgZ(10,"a",11),c._uU(11,"Editar"),c.qZA(),c.qZA(),c.qZA()),2&e){const e=t.$implicit,i=c.oxw();c.xp6(2),c.Oqu(e.name),c.xp6(2),c.Q6J("src",e.external_image?e.external_image:i.imagesURL+e.id+".jpg",c.LSH),c.xp6(2),c.Oqu(e.distance?e.distance:"No"),c.xp6(2),c.Oqu(e.yt_video?"Si":"No"),c.xp6(2),c.Q6J("routerLink",c.VKq(5,Q,e.id))}}const H=[{path:"",component:(()=>{class e{constructor(e,t){this.placesS=e,this.alerts=t,this.imagesURL=h.N.assetsURL+"places/",localStorage.setItem("currentRoute","website/places"),this.places=[],this.alerts.showLoadingConsult(this.placesS.list(),e=>this.places=e)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.E),c.Y36(d.m))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-places-manage"]],decls:23,vars:1,consts:[[1,"row"],[1,"col-md-10","mb-2"],["routerLink","add",1,"btn","btn-success","col-md-2"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-bordered"],[2,"width","150px"],[2,"width","5%"],[4,"ngFor","ngForOf"],[1,"w-100",3,"src"],[1,"btn","btn-secondary","w-100",3,"routerLink"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Sitios de inter\xe9s"),c.qZA(),c.TgZ(3,"a",2),c._uU(4,"Agregar sitio"),c.qZA(),c.qZA(),c._UZ(5,"hr"),c.TgZ(6,"div",3),c.TgZ(7,"div",4),c.TgZ(8,"div",5),c.TgZ(9,"table",6),c.TgZ(10,"thead"),c.TgZ(11,"tr"),c.TgZ(12,"th"),c._uU(13,"Sitio"),c.qZA(),c.TgZ(14,"th",7),c._uU(15,"Im\xe1gen"),c.qZA(),c.TgZ(16,"th"),c._uU(17,"Distancia"),c.qZA(),c.TgZ(18,"th"),c._uU(19,"Video"),c.qZA(),c._UZ(20,"th",8),c.qZA(),c.qZA(),c.TgZ(21,"tbody"),c.YNc(22,L,12,7,"tr",9),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(22),c.Q6J("ngForOf",t.places))},directives:[a.yS,s.sg],styles:[""]}),e})()},{path:":ID/details",component:C},{path:"add",component:Z}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(H)],a.Bz]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[l.E],imports:[[s.ez,D,n.JF,o.u5,o.UX]]}),e})()}}]);