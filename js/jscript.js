function vehiculos() {

  var color;
  var placa;
  var tipo;
  var fabricacion;
  var cilindraje;
  var hp;
  this.getColor = function (){
    return this.color;
  };
  this.setColor = function(c){
    this.color = c;
  };
  this.getPlaca = function (){
    return this.placa;
  };
  this.setPlaca = function(p){
    this.placa = p;
  };
  this.getTipo = function (){
    return this.tipo;
  };
  this.setTipo = function(t){
    this.tipo = t;
  };
  this.getFabricacion = function (){
    return this.fabricacion;
  };
  this.setFabricacion = function(f){
    this.fabricacion = f;
  };
  this.getCilindraje = function (){
    return this.cilindraje;
  };
  this.setCilindraje =function(cil){
    this.cilindraje = cil;
  };
  this.getHP = function (){
    return this.hp;
  };
  this.setHP =function(hp){
    this.hp = hp;

  };


}
function imprimirTexto(contenido){
  var tabla = document.getElementById("lista");
  tabla.insertAdjecentHtml('beforeend',contenido);
  v++;

}
function mostrarLista(){
  var texto = "";
  texto += "<table border='1'><tr><th>Nro</th><th>Color</th><th>Placa</th><th>Tipo</th></tr>";

  for (let i = 0; i < listaVehiculos.length; i++) {
	   texto += "<tr>";
  	 texto += `<td> ${i+1} </td>`;
	   texto += `<td> ${listaVehiculos[i].getColor()} </td>`;
	   texto += `<td> ${listaVehiculos[i].getPlaca()} </td>`;
	   texto += `<td> ${listaVehiculos[i].getTipo()}</td>`;
     texto += `<td> </td>`;
	   texto += "</tr>";
    }
  texto += "</table>";
  document.getElementById("boton").value = "Actualizar Lista";
  document.getElementById("lista").innerHTML=texto;

}
function limpiar(){
  document.getElementById("color").value = '';
  document.getElementById('placa').value = '';
  document.getElementById('tipo').value = '';
  document.getElementById('fab').value = '';
  document.getElementById('cil').value = '';
  document.getElementById('hp').value = '';
}
function getvehiculo(){
  var auto = new vehiculos();
  auto.setColor(document.getElementById("color").value);
  auto.setPlaca(document.getElementById("placa").value);
  auto.setTipo(document.getElementById("tipo").value);
  auto.setFabricacion(document.getElementById("fab").value);
  auto.setCilindraje(document.getElementById("cil").value);
  auto.setHP(document.getElementById("hp").value);
  listaVehiculos.push(auto);
  limpiar();

}
var v=3;
var listaVehiculos=[];
