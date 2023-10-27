// Fudamentos do JavaScripts
//Variaveis e Tipos De Dados

/*
Var:
Em JavaScript, o escopo é dado por funções, e não por blocos.
A palavra “var” garante a variável dentro do escopo onde ela 
foi declarada, ou seja, pode ser acessada de qualquer ponto 
dentro do código.
*/

var minhaString = "Texto";
var meuNumero = 12;
var meuFloat = 12.55;
var meuBoolean = true;

console.log(minhaString);
console.log(meuNumero);
console.log(meuFloat);
console.log(meuBoolean);

//Verificar o tipo de dado
console.log(typeof minhaString)

//OUTROS TIPOS

var meuObjeto = {};
var meuArray = [];
var meuNull = null; //Geralmente usado para criara variaveis sem atribuinir nenhum valor
var meuUndefined = undefined;

// LET e CONST
/*Let:
A palavra - chave “let” é usada para declarar as variáveis com escopo de bloco.
Ou seja, quando é declarada dentro de qualquer bloco, seja ele uma função,
uma condicional ou um loop, ela ficará acessível apenas dentro do bloco do qual foi declarada.*/


/*
Const:
A palavra-chave “const” indica uma variável que possui o valor fixo, uma constante.
Não significa que é imutável, mas sim, que a constante não poderá ser alterada. 
A constante pode ser declarada tanto ao escopo global, quando em uma função, 
funcionando de maneira parecida com o “let”, com a diferença que o “const” terá um valor constante.
*/



//OPERADORES ARITMÉTICOS, DE COMPARAÇÃO E LÓGICOS

//Aritméticos
const num1 = 1;
const num2 = 2;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

//Comparação
const a = 1;
const b = 2;
const c = "1"
console.log(a>b);//Maior
console.log(a<b);//Menor
console.log(a>=b);//Maior igual
console.log(a<=b);//Menor igual
console.log(a==b);//Igual
console.log(a!=b);//Diferente
console.log(a===c);//Verificar igualdade de valor e tipos
console.log(a!==c);//Verificar a direrença entre valor e tipos

//Lógicos
// and = &&
// or = ||
console.log(1 == 1 && 1 == 2);//Verificar se as duas codições são verdadeiras
console.log(2 == 2 || 2 == 3);//Verificar se uma das condições é verdadeira


//Conversão de tipos
const numero = 1234;
const numero_convertido_para_texto = String(numero);
console.log(numero_convertido_para_texto);

//ESTRUTURAS CODICIONAIS
const idade = 16;
if (idade < 13) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 18) {
    console.log("Adolecente");
} else{
    console.log("Adulto");
};

// SWITCH
const fruta = "Banana";
switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!")
        break;
    case "Uva":
        console.log("Banana é a fruta!")
        break;
    case "Laranja":
        console.log("Banana é a fruta!")
        break;
    default:
        console.log("Se nenhuma for execultada!")
}

//ESTRUTURAS DE REPETIÇÂO
//contador, condição de limite, incremento
for(let i = 0; i < 5; i+=1){
    console.log("Loop: "+i)

}