var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
var colorcito = "#AAF";
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
var limpiar = document.getElementById("limpiar");
boton.addEventListener("click", dibujoPorClick);




function dibujarLinea(color, xini, yini, xfin, yfin)
{

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xini, yini);
lienzo.lineTo(xfin, yfin);
lienzo.stroke();
lienzo.closePath();

}

function dibujoPorClick()
{

	var lineas = parseInt(texto.value);;
	var xi, xf, yi, yf;
	var espacio = ancho / lineas;
	var colorUno = document.getElementById("elige1").value;
	var colorDos = document.getElementById("elige2").value;
	for(l=0; l < lineas; l++)
	{
		xi = espacio * l;
		yf = espacio * (l + 1);
		yi = espacio * l;
		xf = espacio * (l + 1);
		xi_r = 300 - (espacio * l);
		dibujarLinea(colorUno, xi, 0, 300, yf);
		dibujarLinea(colorUno, 0, yi, xf, 300);

		dibujarLinea(colorDos, xi_r, 0, 0, yf);
		dibujarLinea(colorDos, 300, yi, xi_r, 300);
		
		console.log("lineas " + l);
	}

dibujarLinea(colorcito, 1,0,0,300);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 1,0,299,1);
dibujarLinea(colorcito, 299,1,299,299);
}


limpiar.addEventListener("click",function(){
	d.width=d.width;
},false);