/*
otros.js
Uso controles como barra deslizante y conjunto de pestañas de ExtJS
*/

Ext.require([
    'Ext.plugin.Viewport'
]);
	Ext.onReady(function(){
		Ext.create('Ext.slider.Single', {
		//width: 200, //quitar si va vertical
		height: 200, //colocar si va vertical
		value: 50,
		increment: 10,
		minValue: 0,
		maxValue: 100,
		vertical: true, //falso por omisión
		renderTo: Ext.getBody(),
		listeners: {
			changecomplete: function(objeto, nuevoValor){
				Ext.get('valor').setHtml(nuevoValor);
			}
		}
	});
	
	Ext.create('Ext.tab.Panel', {
		activeTab: 0,
		width: 1000,
		height: 1000,
		tabPosition: 'top',
		bodyPadding: 10,
		items: [{
				title: 'Panel 1',
				html: '<p>Contenido del primer panel</p>',
				closable: true
			},{
				title: 'Panel 2',
				html: '<p>lala<div id="ito" style="border:solid">Nada</div></p>'
			},{
				title: 'Panel 3',
				html: '<p><form>Hola <input type="text" name="txtNom"/></form></p>'
			}],
		renderTo: Ext.getBody()
	});
});
