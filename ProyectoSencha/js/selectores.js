/*
propio.js
Ejemplo de selectores con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
	Ext.onReady(function(){
		var parrafos = Ext.select("p",true); //obtiene el conjunto de elementos p y considera como objetos de sencha 
		parrafos.addClsOnOver("claseRojo"); //a los parrafos le aplica la claseRojo
		
		var inputs = Ext.select("input", true); //obtiene el conjunto de los inputs
		inputs.addClsOnFocus("claseBordesInputs");
		
		Ext.get("otro").addClsOnFocus("claseBordesOtro");
	});