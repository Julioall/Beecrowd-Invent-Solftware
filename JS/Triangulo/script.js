
const values = lines[0].split(' ').map(parseFloat);

console.log(values)
const A = values[0];
const B = values[1];
const C = values[2];

if (A + B > C && A + C > B && B + C > A)
{
   const perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
else
{
   const area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}