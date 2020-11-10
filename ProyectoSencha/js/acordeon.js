/*
acordeon.js
Uso de la distribución tipo acordeón de ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
		title: 'Nihongo',
		width:  1350,
		height: 500, //si no dice la unidad, entonces son pixeles
		defaults: {
			// para todos los paneles del acordeón
			bodyStyle: 'padding:10px'
		},
		layout: {
			// definición para el acordeón
			type: 'accordion',
			titleCollapse: true,
			animate: true,
			activeOnTop: true
		},
		items: [{
				title: 'Kanji',
				html:'<iframe width="1250", height="500" src="http://localhost/RIAS/ProyectoSencha/dialogo.html"></iframe>',
				closable: true
			},{
				title: 'Material de apoyo audiovisual',
				html: '<iframe width="1250", height="500" src="https://www.erin.jpf.go.jp/jp/lesson/01/basic/"></iframe>',
				closable:true,
			},{
				title: 'Silabarios',
				html: '<p><form>Hola <input type="text" name=/"txtNom"></form></p>',
				closable:true
			},{
				title: 'Nanyoubi desu ka',
				html: '<iframe width="1250", height="500" src="http://localhost/RIAS/ProyectoSencha/PracTablaMult.html"></iframe>',
				closable: true
			},{
				title: 'Silabarios',
				html: '<p><form>Hola <input type="text" name=/"txtNom"></form></p>',
				closable: true
			}],
		renderTo: Ext.getBody()
	});
});
