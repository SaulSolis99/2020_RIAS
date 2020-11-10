/*
containerlayout.js
Manejo de contenedores y distribuciones (layout) con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {
		var hijo1 = {   //creo un nodo del dom
				frame: true,
				height: '10em',
				html: 'Texto hijo 1',
				title: 'T&iacute;tulo hijo 1',
				collapsible: true,
				collapsed: false
			};
		var hijo2 = {
				frame: true,
				//height: '10em',
				width: '50em',
				html: 'Texto hijo 2',
				title: 'T&iacute;tulo hijo 2',
				collapsible: true,
				collapsed: true
			};
		Ext.create('Ext.Panel', {  //creo el panel 
			renderTo: Ext.getBody(),  // acomoda en el body
			width: '100em',
			height: '200em',
			title: 'Panel principal',
			autoscroll: true,
			items: [     //adjunto los hijos
				hijo1, hijo2, hijo2, hijo2, hijo1, hijo2
			]
		});
	}
});

