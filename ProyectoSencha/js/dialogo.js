/*
dialogo.js
Uso control window de ExtJS; en este ejemplo funciona como diálogo
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    var ventana;
	var nueva = function(btn) { //el parámetro es el objeto que invoca a la función
		if (!ventana) {
			ventana = new Ext.Window({
				animateTarget : btn.el, //Elemento (nodo HTML) del botón, tiene un efecto visual
				html : '<input type="button" value="Indicaciones" onclick="alert(Hola hola);"/>',
				closeAction : 'hide',
				height : 500,
				width : 500,
				modal: true,
				constrain : true //si se limita a su contenedor o no
			});
		}
		ventana.show(); //En este caso, sólo se crea una vez y se oculta/muestra
	};
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Indicaciones',
		style : 'margin: 100px',
		handler : nueva
	});
});
