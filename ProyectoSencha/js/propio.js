/*
propio.js
Ejemplo de mensaje a pantalla con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {
		Ext.Msg.alert(
			'Saludo',
			'Hola mundo!!!!!'
		);
	}
});

