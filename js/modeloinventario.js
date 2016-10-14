function GuardarDatos (selec){
	
	this.selec = selec;
	
}
GuardarDatos.prototype.save = function (){
	var _this = this;

	var date = {};
		date.selec = this.selec;
		 
	
	var sen = JSON.stringify (date);
	$.ajax({
		url: "js/controladorinventario.php",
		type: "GET",
		data: {'date' : sen},
		success : function (data){
			 var mostrar = $.parseJSON(data);
				showministerios(mostrar);				
			
		}	 	
	})

}

function mandarDatos(nombre,cant,precio,idGrupo){
		this.nombre = nombre;
		this.cant = cant;
		this.precio = precio;
		this.idGrupo = idGrupo;	
}

mandarDatos.prototype.mostrar = function (){
	var _this =  this;

	var dato = {};
		dato.nombre = this.nombre;
		dato.cant = this.cant;
		dato.precio = this.precio;
		dato.idGrupo = this.idGrupo;

	var enviar = JSON.stringify (dato);
	
	$.ajax({
		url: "js/controladorinventario.php",
		type: "POST",
		data: {'dato' : enviar},
		success : function (data){
				
			var recibido  = $.parseJSON(data);
				exitoAlmostrar(recibido)
		}
	})		
}
function nuevo(){

}

nuevo.prototype.getRecursos = function (){
	$.ajax({
		url: "js/controladorinventario.php",
		type: "GET",
		data:{'getRecursos' : true},
		success : function (data){
			//alert(data);
			var showMostrar  = $.parseJSON(data);
			most(showMostrar)
		}
	})
}