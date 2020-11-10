/*
contenedorPanel.js
Ejemplo para manejo de paneles en Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {  //pinta el panel en este caso
		Ext.create('Ext.panel.Panel', {
			renderTo: Ext.getBody(),
			width: '100em',
			height: '40em',
			title: 'Panel principal',
			layout: 'column',
			items: [   //hijos o elementos del panel
				{
					xtype: 'panel',
					title: 'SubPanel1',
					height: '20em',
					columnWidth: 0.3
				},
				{
					xtype: 'panel',
					title: 'SubPanel2',
					height: '20em',
					columnWidth: 0.3
				}
			]
		});
	}
});

