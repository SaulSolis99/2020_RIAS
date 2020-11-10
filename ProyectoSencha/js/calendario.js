/*
calendario.js
Uso del control de fechas (calendario) de ExtJS
Se presenta de acuerdo al archivo locale-region.js que se encuentra en jslib;
si se quiere cambiar la región a tiempo de ejecución, se tiene que cargar (load)
el archivo correspondiente y regenerar los elementos
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    Ext.create('Ext.picker.Date', {  
		renderTo: Ext.getBody(),
		itemId: 'cal1',
		maxDate: new Date(2019,12,12), //Año, mes - 1, día  fecha maxima
		minDate: new Date(2016,0,1),  //fecha minima tiene arreglos internos de javascript
		handler: function(picker, date) {  //manejador cuando seleccionan un valor
			alert(date);
		}
	});
	Ext.create('Ext.Button', {  //se crea un boton 
		renderTo: Ext.getBody(),
		itemId: 'btnMostrar',   //el itemId 
		text: 'Mostrar/Ocultar',
		handler: function(picker, date) {
			var cal = Ext.ComponentQuery.query('#cal1')[0];
			if (cal != null)
				if (cal.isVisible())
					cal.hide();
				else
					cal.show();
		}
	});
});
