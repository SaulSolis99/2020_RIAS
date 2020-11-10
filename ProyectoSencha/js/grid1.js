/*
grid1.js
Uso de tabla con información fija con ExtJS
*/

Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	//Definir datos
	//El espacio de nombres "data" implica que ahí se mantiene información de la aplicación 
	//La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
	Ext.create('Ext.data.Store', {   
    storeId: 'datosStore', //identificador del almacenamiento para usar posteriormente
    fields:[ 'id', 'nombre', 'ape'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { id: '1', nombre: 'Peter', ape: 'Parker' },
        { id: '2', nombre: 'Clark', ape: 'Kent' },
        { id: '3', nombre: 'Bruce', ape: 'Wayne' },
        { id: '4', nombre: 'Tony', ape: 'Stark' },
        { id: '5', nombre: 'Donald', ape: 'Duck' }
		]
	});
	
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Usuarios',
		//headerPosition: 'top', //probar con y sin atributo
		store: Ext.data.StoreManager.lookup('datosStore'), // Al administrador de almacen busque relación con almacenamiento
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'ID', 
				dataIndex: 'id', //nombre del "campo" del "registro"
				sortable: false, //permite o no que se reordene la información
				hideable: false}, //permite o no que se oculte la columna
			{ text: 'Nombre', 
				dataIndex: 'nombre', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Apellido', 
				dataIndex: 'ape',
				menuDisabled:true
			}
		],
		
		height: 200,
		width: 400,
		renderTo: Ext.getBody() //se pega al body
	});
});
