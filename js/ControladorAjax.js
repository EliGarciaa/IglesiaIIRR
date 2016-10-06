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

function showMinistres(getMinistris){
	for (var i in getMinistris)
		alert("Si esta Recibiendo");
}