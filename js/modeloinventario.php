<?php
 	

class num1 
{
	public $date = array();	
	function __construct()
	{
	}

	public function guardarDatos(){

	}
}

/*****************************************
*     Mostrar datos en el select         *
******************************************/
class Sistem
{
	function __construct()
	{

	}
	public function date(){
		
		$ch = curl_init("http://192.168.1.3/ReyDereyes/API/Grupos/todos");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
		$responde = curl_exec($ch);
		$info = curl_getinfo($ch);
		if ($info["http_code"] == 200){
			return $responde;
		}
		else 
			return false;  
	}
}


/********************************
*            Guardar Datos      *
********************************/
class Mostrar
{
	
	function __construct()
	{
		
	}
	public function dato(){
		$dataSend = array('nuevosRecursos' => $_POST["dato"]);
	$string = http_build_query($dataSend);

	$ch = curl_init("http://192.168.1.3//ReyDereyes/API/Recursos/");
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER ,true);

	$responde = curl_exec($ch);
	curl_close($ch);
	echo $responde; 
	}

}

/********************************
*   Mostrar datos al recargar   *
*********************************/
class Recargar
{
	
	function __construct()
	{
		# code...
	}
	public function getRecursos(){
		$ch = curl_init("http://192.168.1.3/ReyDereyes/API/Recursos/todos");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
		$responde = curl_exec($ch);
		$info = curl_getinfo($ch);
		if ($info["http_code"] == 200){
			return $responde;
		}
		else 
			return false;  
	} 
}


?>