
var dinero = 210; 
var papeles, div;

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}
}

var entregado = [];

entregado.push(new Billete(50, 3));
entregado.push(new Billete(20, 2));
entregado.push(new Billete(10, 2));


for(var b of entregado)
{
		if(dinero > 0)
		{
		div = Math.floor(dinero/b.valor);
		
		if(div > b.cantidad)
		{
			papeles = b.cantidad;
						
		}
		else
		{
			papeles = div;
					
		}

		entregado.push(new Billete(b.valor, papeles));
		CantSend = b.valor * papeles;

		dinero = dinero - CantSend;
		
		document.write(CantSend +"$ en billetes de " + b.valor + "<br />" );
		
		}	
}
document.write("<br /> Cantidad de dinero disponible: " + dinero);