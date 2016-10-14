<?php
// nueva clase llamada sistem
/*class sistem
{
	// una funcion constructtiva
	function __construct()
	{
	}
// un funcion publica
	public function getMinistres(){
		$conexion = new mysqli("192.168.1.2", "root", "Jesus8", "ReyDereyes",);
		$query = "SELECT * from Reportes";
		$conexion->query($query);
		$conexion->close();
	}
}*/



// **************************************************************************************************

// PARA ENVIAR DATOS POR EL WEB SERVER //
// Creamos una nueva clase
/**
* class datos
*/
class datos
{
	// propiedades de la clase datos
	public $fecha;
	public $hora;
	public $lugar;
	public $ministerio;
	public $cantidad;
	public $descripcion;
	function __construct($fecha, $hora, $lugar, $ministerio, $cantidad, $descripcion)
	{
		$this->fecha = $fecha;
		$this->hora = $hora;
		$this->lugar = $lugar;
		// lo declaramos entero
		$this->ministerio = (int)$ministerio;
		$this->cantidad = (int)$cantidad;
		$this->descripcion = $descripcion;
	}

	// cramos un nuevo metodo de la clase datos
	public function getEnviar(){
		$conexion = new mysqli("192.168.1.2", "root", "Jesus8", "ReydereyesToto");
		if ($conexion->connect_errno) {
    		echo "Fallo al conectar a MySQL: (" . $conexion->connect_errno . ") " . $conexion->connect_error;
		}
		$query = "INSERT into Reportes(reporteFechaReunion, reporteHoraReunión, reporteLugarReunion, IdGrupo, reporteOfrenda, Descripcion) values('$this->fecha', '$this->hora', '$this->lugar' $this->ministerio, $this->cantidad, '$this->descripcion')";
		$conexion->query($query);
		$conexion->close();
	}
}

?>