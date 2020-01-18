var cuadrito = document.getElementById("area");
var papel = cuadrito.getContext("2d");
document.addEventListener("keydown", dibujarTeclado);

var limpiar = document.getElementById("limpiar");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var x, y, color;
var presionado = false, deltaX, deltaY;
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


/*--------------------------------------------------------------*/
var color = "#000000";
var tamano = 3;
var pintura = false;

function pintar(e){
	x = e.offsetX;
	y = e.offsetY;
	deltaX = e.movementX;
	deltaY = e.movementY;
	if(pintura){
		dibujarLinea(color, x - deltaX, y - deltaY, x, y, papel);
	}
}

function activar(){
	pintura = true;
	dibujarLinea(color, x-1, y-1, x+1, y+1, papel);
}
function desactivar(){
	pintura = false;
}
function borrador(){
	//document.getElementById("area").style.cursor = "url('imagen/borradorcursor.png'), default";
	color = "#FFFFFF";
	document.getElementById("colores").setAttribute("disabled", "");
}
	
function lapiz(){
	
	color = document.getElementById("colores").value;
	document.getElementById("colores").removeAttribute("disabled");
}
function scolor(){
	color = document.getElementById("colores").value;
	
}


slider.oninput = function() {
	output.innerHTML = this.value;
	tamano = slider.value; 
}



function guardari(){

	let filename = prompt("Guardar como png","");

	if (filename == null){//si el usiario dio cancelar
		return false;
	}
	else if (filename == ""){//si el usuario le dio click y no puso nombre al archivo
		this.download = "sin titulo";
		this.href = cuadrito.toDataURL("image/png");//usa la imagen del canvas
	}
	else{//si el usuario le dio aceptar y puso un nombre al archivo
		this.download = filename;
		this.href = cuadrito.toDataURL("image/png");
		this.href.value=document.getElementById("area").toDataURL('image/png');
	}
	
}


papel.fillStyle = "white";
papel.fillRect(0, 0, cuadrito.width, cuadrito.height);


function dibujarLinea(color, xini, yini, xfin, yfin, lienzo)
{

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = tamano;
lienzo.moveTo(xini, yini);
lienzo.lineTo(xfin, yfin);
lienzo.stroke();
lienzo.closePath();

}


function dibujarTeclado(evento)
{	
	
	var colorcito  = "blue";
	var movimiento = 10;

	switch(evento.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
			console.log("arriba");
		break;
		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;
		case teclas.RIGHT:
			dibujarLinea(colorcito, x, y, x  + movimiento, y, papel);
			x = x + movimiento;
		break;
		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x  - movimiento, y, papel);
			x = x - movimiento;
		break;
		default:
		console.log("otra tecla mamii");
	}
}



limpiar.addEventListener("click",function(){
	cuadrito.width=cuadrito.width;
},false);