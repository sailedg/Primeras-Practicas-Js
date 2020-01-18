var numeros = 100;

for(i = 1; i <= numeros; i++)
{
	if(esDivisible(i, 3))
	{
		document.write("loco");
	}
	if(esDivisible(i, 5))
	{
		document.write("Bien");
	}
	if(!esDivisible(i, 3) && !esDivisible(i, 5))
	{
		document.write(i);
	}
	document.write("<br>");
}
function pedro()
{
	
}
function esDivisible(num, divisor)
{
	if(num % divisor == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}