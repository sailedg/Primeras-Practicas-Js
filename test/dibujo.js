var cuadro = document.getElementById('area');
var papel = cuadro.getContext("2d");
var colorado = document.getElementById('colorin').value;
var movimiento = 5;
var control = false;
var xi,yi,xf,yf;
var pe,pa;

	cuadro.addEventListener("mouseup", noclick)
	cuadro.addEventListener("mousedown", click);
	cuadro.addEventListener("mousemove", dibujando);

dibujar("black", 0, 0, 0, 300, papel);
dibujar("black", 0, 0, 300, 0, papel);
dibujar("black", 300, 0, 300, 300, papel);
dibujar("black", 0, 300, 300, 300, papel);

function click(a) {
	control = true;
	xi = a.offsetX;
	yi = a.offsetY;
	dibujar(colorado, xi-1, yi-1, xi+1, yi+1, papel);
}

function noclick(No) {
	control = false;
}

function dibujando(dib) {
	if (control == true) {
	xi = dib.offsetX;
	yi = dib.offsetY;
	pe = dib.movementX;
	pa = dib.movementY;
	dibujar(colorado, xi-pe, yi-pa, xi, yi, papel);
	}
}

function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}