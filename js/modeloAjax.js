function economia (fecha1, cantidad1, ministerio1, descripcion1) {
	this.fecha = fecha1;
	this.cantidad = cantidad1;
	this.ministerio = ministerio1;
	this.descripcion = descripcion1;
}

economia.prototype.control = function(){
	
	var datos = {};
		datos.fecha1 = this.fecha;
		datos.cantidad1 = this.cantidad;
		datos.ministerio1 = this.ministerio;
		datos.descripcion1 = this.descripcion;
	var datosJson = $.JSONstringify(datos);

	var _this = this;

	$.ajax({
		url: "controladorAjax.php",
		type: "GET",
		data: {"datos" : datosJson},
		success : function(data){
			alert("Hola Mundo");
		}
	})
}


economia.prototype.getMinistris = function(){
	
	$.ajax({
		url: "controladorAjax.php",
		type: "GET",
		data: {"getMinistris" : true},
		success : function(data){
		var ministros = $.parseJSON(data);
			alert("Si Esta Funcionando");
			//showMinistres(ministros);
		}
	})
}
