/*
ventana.js
Uso control window de ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    Ext.create('Ext.Window', {
        title: 'Encabezado Ventana 1',
        width: "30em",
        height: "10em",
        x: 10,
        y: 10,
        plain: true,
        headerPosition: 'top',
        layout: 'fit',
		closable: false,
        items: {
            border: false
        }
    }).show();
    Ext.create('Ext.Window', {
        title: 'Encabezado Ventana 2',
		id: "ventana2",
        width: "30em",
        height: "10em",
        x: 480,
        y: 10,
        plain: false,
        headerPosition: 'top',
        layout: 'fit',
        items: {
            border: true
        },
		buttons: [    //para que vaya cambiando el encabezado de izquierda, derecha, arriba, abajo
		  { text: 'Abajo', 
			listeners: {
				click: function(){
						this.up('window').setHeaderPosition("bottom");
					}
			}
		  },{ text: 'Arriba', 
			listeners: {
				click: function(){
						this.up('window').setHeaderPosition("top");
					}
			}
		  },{ text: 'Izquierda', 
			listeners: {
				click: function(){
						this.up('window').setHeaderPosition("left");
					}
			}
		  },{ text: 'Derecha', 
			listeners: {
				click: function(){
						this.up('window').setHeaderPosition("right");
					}
			}
		  }
		]
    }).show();
	
    Ext.create('Ext.Window', {
        title: 'Encabezado Ventana 3',
        width: "30em",
        height: "10em",
        x: 10,
        y: 50,
        plain: true,
        headerPosition: 'top',
        layout: 'fit',
		closable: false,
		tools: [
			{ type:'close', 
			  callback: function(panel){
							panel.close();
				} 
			},
			{ type:'minimize', 
			  callback: function(panel){
							panel.collapse();
							panel.setWidth("10em");
				} 
			},
			{ type:'maximize', 
			  callback: function(panel){
							panel.expand(false);
							panel.setSize("30em","10em");
				}
			},
			{ type:'save', 
			  callback: function(panel){
							alert('Guardando...');
				} 
			}
		],
        items: {
            border: false
        }
    }).show();
});
