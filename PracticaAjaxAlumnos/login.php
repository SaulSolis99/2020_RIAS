<?php
/*************************************************************/
/* Archivo:  login.php
 * Objetivo: acceso controlado al ejemplo de manejo de base de datos
 * Autor:    BAOZ
 *************************************************************/
include_once("modelo/Usuario.php");
include_once("modelo/Alumno.php");
session_start();
$sErr="";
$sCve="";
$sNom="";
$sPwd="";	
$oUsu = new Usuario();
$oAlu = new Alumno();
$sRetJSON="";
	/*Verificar que hayan llegado los datos*/
	if (isset($_POST["txtCve"]) && !empty($_POST["txtCve"]) &&
		isset($_POST["txtPwd"]) && !empty($_POST["txtPwd"])){
		$sCve = $_POST["txtCve"];
		$sPwd = $_POST["txtPwd"];
		$oUsu->setClave($sCve);
		$admin= $oUsu->getClave($sCve);
		$oUsu->setPwd($sPwd);
		try{
			if ( $oUsu->buscarCvePwd()){
				$sNom = $oUsu->getNombre();
				$_SESSION["usu"] = $oUsu;
				//Verificar si, además, es Alumno
				$oAlu->setClave($oUsu->getClave());
				if ($admin == "admin"){
					$_SESSION["tipo"] = "Administrador";
				}
				else{
					$_SESSION["tipo"] = "Alumno";
				}
			}
			else{
				$sErr = "Usuario desconocido";
			}
		}catch(Exception $e){
			//Enviar el error específico a la bitácora de php (dentro de php\logs\php_error_log
			error_log($e->getFile()." ".$e->getLine()." ".$e->getMessage(),0);
			$sErr = "Error en base de datos, comunicarse con el administrador";
		}
	}
	else
		$sErr = "Faltan datos";
	
	//Tiene que armar la cadena JSON
	if ($sErr == ""){
		$sRetJSON='{"sSit":"Ok", 
					"sNom":"'.$sNom.'",
					"sTipo":"'.$_SESSION["tipo"].'"}';
	}else{
		$sRetJSON='{"sSit":"Error", 
					"sNom":"'.$sErr.'",
					"sTipo":"-1"}';
	}
	header('Content-type: application/json');
	echo $sRetJSON;
?>