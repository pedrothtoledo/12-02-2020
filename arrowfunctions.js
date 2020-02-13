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
    //console.log("Bom dia, " + quem);
} 

const retornaBomDiaParaAlguem2 = quem => "Bom dia, " + quem;

const msg = retornaBomDiaParaAlguem2("Manoel");
//console.log(msg);


/**
 * *****************************************
 */


 function somar5(num1,num2){
     return num1 + num2;

 }
 const somar = somar5(10,20);
 //console.log(`soma : ${soma}`);


 const somar2 = (num1,num2)=>{ num1 + num2

 }
const array_numeros = [2,4,7,9,3,7,6]
 function somaelemtosArray(array_numeros){
     let soma = 0;
     for(i=0; i<=6; i++){ soma += array_numeros[i];

     }
     console.log(soma);

 }
 somaelemtosArray = (array_numeros);





//const somaelemtosArray =(array_numeros)=>{

//}
