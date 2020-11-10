/*
contenedor.js
Ejemplo contenedores básicos con ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {
		Ext.create('Ext.panel.Panel', {
			renderTo: Ext.getBody(),
			width: '100em',
			height: '40em',
			title: 'Panel principal',
			layout: 'column',
			items: [
				{
					xtype: 'panel',
					title: 'SubPanel1',
					height: '20em',
					columnWidth: 0.5
				},
				{
					xtype: 'panel',
					title: 'SubPanel1',
					height: '20em',
					columnWidth: 0.5
				}
			]
		});
	}
});

