<?php 

class economia
{
	public $data;
	function __construct($fecha, $cantidad, $ministerio, $descripcion)
	{
		$this->fecha = $fecha;
		$this->cantidad = $cantidad;
		$this->ministerio = $ministerio;
		$this->descripcion = $descricion;
	}

	public function control(){
		
	}
}

 ?>