<?php
/*************************************************************/
/* Usuario.php
 * Objetivo: clase que encapsula el manejo de la entidad Usuario
 * Autor: BAOZ
 *************************************************************/
error_reporting(E_ALL);
include_once("AccesoDatos.php");
include_once("Usuario.php");

class Materia {
/*En este caso los atributos son protegidos (en lugar de privados)
  para utilizarlos en la herencia nCveMateria	sNombreMateria	nCreditos	nHT	nHP*/
protected $nCveMateria="";
protected $sNombreMateria="";
protected $nCreditos="";
   function setNumClave($nClave){
       $this->nCveMateria = $nClave;
   }
   
   
   function getNumClave(){
       return $this->nCveMateria;
   }
   
   function setNombreMateria($psNombreMateria){
       $this->sNombreMateria = $psNombreMateria;
   }
   
   function getNombreMateria(){
       return $this->sNombreMateria;
   }
   
   function setNumCreditos($psApePat){
       $this->nCreditos = $psApePat;
   }
   function getNumCreditos(){
       return $this->nCreditos;
   }
  
/*Busca todos los usuarios, regresa nulos si no hay información o un arreglo de usuarios*/
	function buscarTodos($sCla){
	$oAccesoDatos=new AccesoDatos();
	$sQuery="";
	$arrRS=null;
	$arrMaterias = null;
	$arrLinea=null;
	$j=0;
	$oMat=null;
		if ($oAccesoDatos->conectar()){
		 	$sQuery = "SELECT nCveMateria, sNombreMateria, nCreditos FROM  alumno JOIN carrera USING (nCveCarrera) JOIN reticula USING (nCveCarrera) JOIN materia USING (nCveMateria) WHERE sCveUsuario = $sCla ";
			$arrRS = $oAccesoDatos->ejecutarConsulta($sQuery);
			$oAccesoDatos->desconectar();
			if ($arrRS){
				foreach($arrRS as $arrLinea){
					$oMat = new Materia();
					$oMat->setNumClave($arrLinea[0]);
					$oMat->setNombreMateria($arrLinea[1]);
					$oMat->setNumCreditos($arrLinea[2]);
            		$arrMaterias[$j] = $oMat;
					$j+=1;
                }
			}
        }
		return $arrMaterias;
	}
 }
 ?>