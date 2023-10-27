var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a = lines[0];//acho que não precisa passar para const b = lines[1]);
const b = lines[1];
const c = lines[2];
const d = lines[3];
const diferenca = `DIFERENCA = ${(a * b - c * d)}`;
console.log(diferenca);