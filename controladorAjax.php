<?php 

	include 'modeloAjax.php';

// PARA PODER LLAMAR LOS DATOS DE MINISTERIOS
	/*if (isset($_GET["getMinistres"])) {
		$sistema = new sistem();
		$ministres = $sistema->getMinistres();
		echo $ministres;
	}*/

//*******************************************************

// PARA ENVIAR DATOS AL WEB SERVER
	if (isset($_GET["ingresos"])){
		$ingresoss = json_decode($_GET["ingresos"],true);
		$ingress = new datos($ingresoss["fecha"], $ingresoss["hora"], $ingresoss["lugar"], $ingresoss["ministerio"], $ingresoss["cantidad"], $ingresoss["descripcion"]);	
		$ingress->getEnviar();
			echo "Guardado Exitosamente";
	}

 ?>