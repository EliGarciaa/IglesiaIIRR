 var areglo = [];

function mostrar(){
	var selec = document.getElementById("select1").value;


	var Datos = new GuardarDatos (selec);	

	Datos.save();

	$(":text").each(function(){
		$($(this)).val(''); 
	});

}

function showministerios(ministerios){
for(var i in ministerios){
	$("#select1").append("<option value="+ministerios[i]["idGrupo"]+">"+ministerios[i]['grupoNombre']+"</option>");
}	 	
}

function SaveDate(){
	var name = document.getElementById("inp1").value;
	var cant = document.getElementById("inp2").value;
	var precio = document.getElementById("inp3").value;
	var idGrupo = document.getElementById("select1").value;

	var guardar = new mandarDatos(name,cant,precio,idGrupo);
	guardar.mostrar();

}

function exitoAlmostrar(recibido){
	for(var i in recibido){
	$("#table1").append("<tr><th>"+recibido[i]['recursoNombre']+"</th><th>"+recibido[i]['recursoCantidad']+"</th><th>"+recibido[i]['recursoPrecioEstimado']+"</th><th>"+recibido[i]['ministerioNombre']+"</th></tr>");
	}
	$(":text").each(function(){
		$($(this)).val(''); 
	});

}

function Borrar(){
	$(":text").each(function(){
		$($(this)).val("");		
	})
}

function showreloaded(){
	
	var recargar = new nuevo ();

	recargar.getRecursos();
}

function most(showMostrar){
	for(var i in showMostrar){
		$("#table1").append("<tr><th>"+showMostrar[i]['recursoNombre']+"</th><th>"+showMostrar[i]['recursoCantidad']+"</th><th>"+showMostrar[i]['recursoPrecioEstimado']+"</th><th>"+showMostrar[i]['ministerioNombre']+"</th><th><button type='button'  onclick='BorrarDato(this.id)' id="+i+"  class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button></th></tr>");
		}	
}	

function BorrarDato(i){  
	 alert(i);
}