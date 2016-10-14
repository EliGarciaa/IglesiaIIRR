// PARA INGRESAR AL SISTEMA //
function entrar(){
	var dato1 = document.getElementById("usuario").value;
	var dato2 = document.getElementById("contraseña").value;

	if (dato1 == "Iglesia" && dato2 == "Rey123") {
		location.href = "menu.html";
	} else if (dato1 == "" && dato2 == "") {
		alert("Ingresar Datos");
	} else {
		alert("Error, verificar datos");
	}

	document.getElementById("usuario").value = "";
	document.getElementById("contraseña").value = "";
}



// **************************************************************************************************

// UNA NUEVA FUNCION DEL METODO GETMINISTRES //
/*function getMinistres(){
		sistema = new sistem();
	sistema.getMinistres();
}

// UNA NUEVA FUNCION PARA MOSTRAR DATOS //
// una nueva funcion showGroups recive un parametro groups....
function showGroups(groups){
	//alert(groups);
	for (var i in groups){
		$("#ministerio").append("<option value="+groups[i]["idGrupo"]+">"+groups[i]["grupoNombre"]+"</option>");
	}
}*/



// ************************************************************************************************************************************************

// PARA ENVIAR DATOS AL WEB SERVER //
function save() {
	var fecha = document.getElementById("fecha").value;
	var hora = document.getElementById("hora").value;
	var lugar = document.getElementById("lugar").value;
	var ministerio = document.getElementById("ministerio").value;
	var cantidad = document.getElementById("cantidad").value;
	var descripcion = document.getElementById("descripcion").value;
	
	var grupoDatos = new datos(fecha, hora, lugar, ministerio, cantidad, descripcion);
	grupoDatos.getEnviar();

	document.getElementById("fecha").value = "";
	document.getElementById("hora").value = "";
	document.getElementById("lugar").value = "";
	document.getElementById("cantidad").value = "";
	document.getElementById("descripcion").value = "";
}


// ***********************************************************************************************************

// PARA MOSTRAR DATOS EN LA TABLA //
/*function showIngresos(convert){
	for (var i in convert) {
		$("#table1").append("<tr><td>"+convert[i][]+"</td></tr>")
	};
}



//Para mostrar datos en la tabla de ingresos
function showMostrar(conver){
	for (var i in conver) {
		$("#table1").append("<tr><td>"+conver[i][]+"<><>")
	};
}*/