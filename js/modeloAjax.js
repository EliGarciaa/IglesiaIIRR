// Para llamar datos del Web Server
function sistem(){
	
}

// PARA LLAMAR DATOS DE MINISTERIOS //
// Metodo getMinistres de clase sistem
/*sistem.prototype.getMinistres = function(){
	// peticion ajax para que viajen los datos
	var _this = this;

	$.ajax({
		url : 'controladorAjax.php',
		type : 'GET',
		data : {"getMinistres": true},
		success : function(data){
			//alert(data);
			// convertir objetos de JavaScript a JSON
		var groups = $.parseJSON(data);
			//creamos una nueva funcion que recibira los parametros
			// parametro groups de la funcion
		showGroups(groups);
		//alert(data);
		}
	})
}*/



// ***********************************************************************************

// CREAMOS UNA NUEVA CLASE DATOS //
// ára enviar datos...........
function datos(fecha, hora, lugar, ministerio, cantidad, descripcion){
	this.fecha = fecha;
	this.hora = hora;
	this.lugar = lugar;
	this.ministerio = ministerio;
	this.cantidad = cantidad;
	this.descripcion = descripcion;
}

// PARA GUARDAR DATOS EN LA BASE DE DATOS //
// un nuevo metodo getEnviar de la clase datos
datos.prototype.getEnviar = function(){
	var _this = this;
	// creamos un objeto que contendra todos los parametros
	var ingresos = {}; 

		ingresos.fecha = this.fecha;
		ingresos.hora = this.hora;
		ingresos.lugar = this.lugar;
		ingresos.ministerio = this.ministerio;
		ingresos.cantidad = this.cantidad;
		ingresos.descripcion = this.descripcion;

	var ingresosJson = JSON.stringify(ingresos);
	
	$.ajax ({
		url : 'controladorAjax.php',
		type : 'GET',
		data : {'ingresos' : ingresosJson},
		success : function(data){
			alert(data);
		}
	})
	// para testear/textear
	//alert(ingresos);*/
}



//Para mostrar datos en la tabla de ingresos
/*datos.prototype.Mostrar2 = function(){
	var _this = this;
	$.ajax({
		url : 'controladorAjax.php',
		type : 'GET',
		data : {"Mostrar2":true},
			success : function(data){
				var conver = $.parseJSON(data);
				showMostrar(conver);
			}
	})
}*/