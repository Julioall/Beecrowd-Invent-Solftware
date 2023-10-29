values = [10.0, 20.1, 5.1]
const values = lines[0].split(' ').map(Number);
const a = parseFloat(values[0]);
const b = parseFloat(values[1]);
const c = parseFloat(values[2]);

// delta = b²-4*a*c
const delta = Math.pow(b, 2) - 4 * a * c;


if (delta < 0)
{
    console.log("Impossivel calcular");
}

else
{
    const R1 = (-b + Math.sqrt(delta)) / (2 * a).toExponential(2);
    const R2 = (-b - Math.sqrt(delta)) / (2 * a).toFixed(2);

    
    

    if (R1 && R2)
    {
        console.log(`R1 = ${R1.toFixed(5)}`);
        console.log(`R2 = ${R2.toFixed(5)}`);
    }
    else
    {
        console.log("Impossivel calcular");
    }
}