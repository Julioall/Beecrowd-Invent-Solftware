var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const nomeVendedor = lines[0];
const salarioFixo = parseFloat(lines[1]);
const totalVendasMes = parseFloat(lines[2]);
const comissao = (totalVendasMes / 100) * 15;
const total_salario = comissao + salarioFixo
console.log(`TOTAL = R$ ${total_salario.toFixed(2)}`);