var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ddds = {
    "61":["Brasilia" ],
    "71":["Salvador" ],
    "11":["Sao Paulo" ],
    "21":["Rio de Janeiro" ],
    "32":["Juiz de Fora" ],
    "19":["Campinas" ],
    "27":["Vitoria" ],
    "31":["Belo Horizonte"]

};




let ddd_discado = String(lines[0]);
if (ddds[ddd_discado])
{   const ddd = ddds[ddd_discado][0]
    console.log(ddd);
}
else
{
    console.log("DDD nao cadastrado");
}
