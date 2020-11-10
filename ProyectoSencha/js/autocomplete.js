/*
autocomplete.js
Uso del control de autocompletar de ExtJS; 
incluye un mínimo manejo de almacenamiento(store)
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.namespace('Ext.datos');
Ext.datos.meses = [   //arreglo de 2 dimensiones
			  [1,"Enero"],[2,"Febrero"],[3,"Marzo"],[4,"Abril"], //se crea llave valor
			  [5,"Mayo"],[6,"Junio"],[7,"Julio"],[8,"Agosto"],
			  [9,"Septiembre"],[10,"Octubre"],[11,"Noviembre"],[12,"Diciembre"]
			];
Ext.onReady(function(){
	var store = Ext.create('Ext.data.ArrayStore', {  //se crea el espacio de almacenamiento en cache
                    fields: ["cve","nombreMes"],
                    data : Ext.datos.meses
                });
	//Es posible también almacenar el componente en una variable, aunque en este
	//momento no es necesario
    Ext.create('Ext.form.field.ComboBox', { //lista
                    renderTo: Ext.getBody(),
                    store: store,  //se alimenta de la variable store de la linea 16
                    displayField:'nombreMes',
                    queryMode: 'local',
                    emptyText: 'Elige un mes ...',
                    hideTrigger:false //para ocultar flecha del combo
                });

});
