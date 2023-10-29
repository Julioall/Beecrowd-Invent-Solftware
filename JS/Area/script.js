/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

Exemplos de Entrada	
3.0 4.0 5.2

Exemplos de Saída
TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ').map(Number);

const A = parseFloat(values[0]);
const B = parseFloat(values[1]);
const C = parseFloat(values[2]);

const pi = 3.14159;
const TRIANGULO = (A * C / 2);
const CIRCULO = (pi * (Math.pow(C, 2)));
const TRAPEZIO = ((A + B) / 2 * C);
const QUADRADO = (Math.pow(B, 2));
const RETANGULO = (A * B);

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);