var imagenes = [];

imagenes["Pedro"] = "cerdo.png";
imagenes["Lechera"] = "vaca.png";
imagenes["Gallo fino"] = "pollo.png";

class Pakiman
{
	constructor(n, v, a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;

		this.imagen.src = imagenes[this.nombre];
		console.log(this.nombre);

	}
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{
	document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
	}
}


var coleccion = [];

coleccion.push(new Pakiman("Pedro", 120, 40));
coleccion.push(new Pakiman("Lechera", 100, 30));
coleccion.push(new Pakiman("Gallo fino", 80, 50));


for(var pieza of coleccion)
{
	pieza.mostrar();
}

	