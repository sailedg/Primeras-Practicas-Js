var vp = document.getElementById("miVilla");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);//Detectar cuando una tecla deja de ser presionada

var maxVacas = 10;//Cantidad máxima de maxVacas
var minVacas = 1;//Cantidad mínima de vacas

var distancia = 5;
var posXFijaCer, posYFijaCer;//Posicion fija del cerdo cuando ya se ha cargado y ha aparecido por primera vez

//POSICIONES FIJAS DE LAS VACAS CREADAS, GUARDADAS EN UNA MATRIZ
var posFijaVacas = [[2],[maxVacas]];//definición de variables para X y Y

var x, y, color;
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo ={
	url: "tile.png",
	cargaOK: false
}
var vaca = {
	url: "vaca.png",
	cargaOK: false
}
var cerdo = {
	url: "cerdo.png",
	derecha: "cerdoR.png",
	cargaOK: false
}


//Se crea una instancia de la clase imagen, es como crear una etiqueta img en html.
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

cerdo.img = new Image();
cerdo.img.src = cerdo.derecha;
cerdo.img.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

//FUNCIONES PARA CARGAR LAS IMÁGENES AL SERVIDOR ANTES DE COLOCARLAS EN NUESTRO PAPEL
function cargarFondo()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() *(maxi - min + 1)) + min;
	return resultado;
}



function dibujar()
{
	
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(cerdo.cargaOK)
	{
		var x = aleatorio(0, 7);
		var y = aleatorio(0, 7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(cerdo.imagen, x, y);
		posXFijaCer = x;
		posYFijaCer = y;
		
	}

	if(vaca.cargaOK)
	{
		for (var v = 0; v < maxVacas; v++) {
		var x = aleatorio(0, 7);
		var y = aleatorio(0, 7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(vaca.imagen, x, y);
		posFijaVacas[0][v] = x;
		posFijaVacas[1][v] = y;
		}	
	}
	
}


document.addEventListener("keydown", moverCerdo);


function moverCerdo(evento)
{	
	
	var movimiento = 10;

	switch(evento.keyCode)
	{
		case teclas.UP:
			if (fondo.cargaOK) 
			{
				papel.drawImage(fondo.imagen, 0, 0);
			}
			if (vaca.cargaOK) 
			{
				for(var i=0; i<maxVacas; i++){
		         papel.drawImage(vaca.imagen, posFijaVacas[0][i], posFijaVacas[1][i]);
		        }
			}
			if (cerdo.cargaOK)
			{
				if(posYFijaCer != 0) {
		        papel.drawImage(cerdo.imagen, posXFijaCer, posYFijaCer-distancia);
		        posXFijaCer = posXFijaCer;
		        posYFijaCer = posYFijaCer-distancia;
			    }
			    papel.drawImage(cerdo.imagen, posXFijaCer, posYFijaCer);
			}
		break;
		case teclas.DOWN:
			if(fondo.cargaOK) 
			{
		      papel.drawImage(fondo.imagen, 0, 0);
		    }
		    if(vaca.cargaOK) 
		    {
		      for(var i=0; i<maxVacas; i++){
		        papel.drawImage(vaca.imagen, posFijaVacas[0][i], posFijaVacas[1][i]);
		      }
		    }
		    if(cerdo.cargaOK) 
		    {
		      if(posYFijaCer != 420) {
		        papel.drawImage(cerdo.imagen, posXFijaCer, posYFijaCer+distancia);
		        posXFijaCer = posXFijaCer;
		        posYFijaCer = posYFijaCer+distancia;
		      }
		      papel.drawImage(cerdo.imagen, posXFijaCer, posYFijaCer);
		    }
		break;
		case teclas.RIGHT:
			if(fondo.cargaOK) 
			{
		      papel.drawImage(fondo.imagen, 0, 0);
		    }
		    if(vaca.cargaOK) 
		    {
		      for(var i=0; i<maxVacas; i++){
		        papel.drawImage(vaca.imagen, posFijaVacas[0][i], posFijaVacas[1][i]);
		      }
		    }
		    if(cerdo.cargaOK) 
		    {
		      if(posXFijaCer != 420) {
		        papel.drawImage(cerdo.img, posXFijaCer+distancia, posYFijaCer);
		        posXFijaCer = posXFijaCer+distancia;
		        posYFijaCer = posYFijaCer;
		      }
		      papel.drawImage(cerdo.img, posXFijaCer, posYFijaCer);
		    }
		break;
		case teclas.LEFT:
			if(fondo.cargaOK) 
			{
		      papel.drawImage(fondo.imagen, 0, 0);
		    }
		    if(vaca.cargaOK) 
		    {
		      for(var i=0; i<maxVacas; i++){
		        papel.drawImage(vaca.imagen, posFijaVacas[0][i], posFijaVacas[1][i]);
		      }
		    }
		    if(cerdo.cargaOK) 
		    {
		      if(posXFijaCer != 0) {
		        papel.drawImage(cerdo.imagen, posXFijaCer-distancia, posYFijaCer);
		        posXFijaCer = posXFijaCer-distancia;
		        posYFijaCer = posYFijaCer;
		      }
		      papel.drawImage(cerdo.imagen, posXFijaCer, posYFijaCer);
		    }
		break;
		default:
		console.log("otra tecla mamii");
		
	}
}
