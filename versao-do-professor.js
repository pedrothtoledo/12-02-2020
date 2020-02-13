// helloWorld = function() {
//     return "Hello World";
// }

// const msg = helloWorld();
// console.log(msg);

// helloWorld = () =>  "Hello World";

// const msg = helloWorld();
// console.log(msg);

// function retornaBomDia() {
//     console.log("Bom Dia");
// }

const retornaBomDia = () => { 
    //console.log("Bom dia");
}

const retornaBomDia2 = () => "Bom dia 2";

retornaBomDia();
const bd = retornaBomDia2();
//console.log(bd);

/**
 * *****************************************
 */

// function retornaBomDiaParaAlguem(quem) {
//     console.log("Bom dia, " + quem);
// }

// retornaBomDiaParaAlguem("Dutra");

const retornaBomDiaParaAlguem = quem => {
    console.log("Bom dia, " + quem);
} 

const retornaBomDiaParaAlguem2 = quem => "Bom dia, " + quem;

const msg = retornaBomDiaParaAlguem2("Manoel");
//console.log(msg);

/**
 * Soma de dois números e retorna a soma
 */

function somar(num1, num2) {
    return num1 + num2;
}

const soma = somar(10, 20);
//console.log(`Soma: ${soma}`);

const somar2 = (num1, num2) => num1 + num2
const soma2 = somar2(11, 22);
//console.log(soma2);

/**
 * Soma dos elementos de um array
 */

const array_numeros = [2, 4, 7, 9, 3, 7, 6, 9];

function somaElementosArray(array_numeros) {
    let soma = 0;
    // for(i=0; i< array_numeros.length; i++) {
    //     soma += array_numeros[i];
    // }

    for(numero of array_numeros) {
        soma += numero;
    }

    // array_numeros.forEach(numero => {
    //     soma += numero;
    // });

    //console.log(soma);
}

somaElementosArray(array_numeros);
//console.log(soma);


const somaElementosArray2 = (array_numeros) => {
    let soma = 0;
    for(numero of array_numeros) {
        soma += numero;
    }
    console.log(soma);
}

somaElementosArray2(array_numeros);