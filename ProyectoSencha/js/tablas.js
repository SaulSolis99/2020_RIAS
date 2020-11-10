/*
propio.js
Ejemplo de tablas a tiempo de ejecución con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
	
	function creaTabla(){
	var btn=Ext.get("btnAgrega");
	var btnConsulta=Ext.get("btnConsultar");
	var txtCve = Ext.get("txtCve");
	var txtNom = Ext.get("txtNom");
	var oTbl = Ext.get(document.createElement("table"));  //se crea la tabla
	var linea = new Ext.Element(document.createElement("tr"));
	var celda1 = new Ext.Element(document.createElement("td"));
	var celda2 = new Ext.Element(document.createElement("td"));
	
		for(i=0; i<3; i++){
			celda1.setHtml(i+1);
			switch(i){
				case 0: celda2.setHtml('Peter Parker');
						break
				case 1: celda2.setHtml('Clark Kent');
						break
				case 2: celda2.setHtml('Tony Stark');
						break
			}
			linea.appendChild(celda1) //se agrega hijo por linea
			linea.appendChild(celda2);
			oTbl.appendChild(linea);
			
			linea = new Ext.Element(document.createElement("tr"));
			celda1 = new Ext.Element(document.createElement("td"));
			celda2 = new Ext.Element(document.createElement("td"));
		}
		oTbl.set({border: 1, id: 'tbl'});  //se asigna atributos a la tabla
		Ext.get("initab").appendChild(oTbl.dom);
		//si los botones son diferentes de nulos, se muestran
		if (btn!=null && btnConsulta!=null && txtCve!=null && txtNom!=null){
			btn.show();
			btnConsulta.show();
			txtCve.show();
			txtNom.show();
		}
	}
	
	function agrega(cve, nom){
	var campo1, campo2;     
		campo1 = new Ext.Element(document.createElement("input"));  //se crea los input
		campo1.set({type:"text", value:cve.value});   //asigno el valor que viene de html
		campo2 = new Ext.Element(document.createElement("input"));
		campo2.set({type:"text", value:nom.value});
		
		linea = new Ext.Element(document.createElement("tr"));
		celda1 = new Ext.Element(document.createElement("td"));
		celda1.appendChild(campo1);
		celda2 = new Ext.Element(document.createElement("td"));
		celda2.appendChild(campo2);
		linea.appendChild(celda1)
		linea.appendChild(celda2);
		Ext.get("tbl").appendChild(linea);
	}
	
	function consulta(){  
	  //recorre la tabla sus nodos y sus hijos  each para recorrer 
		Ext.each(Ext.get("tbl").dom.childNodes, function(tr) {
            Ext.each(tr.childNodes, function(td){
				alert(td.innerHTML);
			});
        });
	}