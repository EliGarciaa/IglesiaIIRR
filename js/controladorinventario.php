<?php
	
	include 'modeloinventario.php';
	if(isset($_GET["date"])){
		$sistem = new Sistem ();
		$inventario = $sistem->date();		
		echo $inventario;
	}		

	if(isset($_POST["dato"])){
		$view = new Mostrar ();
		$save = $view->dato();
		echo $save;
	}

	if(isset($_GET["getRecursos"])){
		$most = new Recargar ();
		$guardar = $most->getRecursos();
		echo $guardar;	
	}










?>