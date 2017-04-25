function convertirCelcius(c){
	var nombre;
		nombre = document.getElementById("celsius").value * 9 / 5 + 32;
		document.getElementById("farenheit"),value=Math.round(nombre);
		nombre = document.getElemntById("farenheit").value -32 * 5 / 9; 
		document.getElementById("celsius").value=Math.round(nombre);
}