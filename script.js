/*
//Atividade 11
let numero = prompt ("Digite um número");
function verificarSinal (numero) {
    if (numero == 0){
        console.log ("zero");
    }else if (numero > 0 ) {
        console.log (numero + " é positivo");
    } else{
        console.log (numero + " é negativo")
    }
}
verificarSinal(numero)

//Atividade 12
let celsius = prompt ("Digite uma temperatura em gruas celsius");
function converterTemperatura (celsius) {
    console.log(((celsius*1.8)+32) + "°F")
}
converterTemperatura(celsius)

//Atividade 13
let somatorio = 0;
let x = 1;
while (x <= 100) {
    somatorio = somatorio + x;
    x = x + 1;
}
console.log("A soma dos números de 1 até 100 é de: " + somatorio)

//Atividade 14
let palavra = prompt ("Escreva uma palavra:");
function substituirPalavra (palavra) {
    if (palavra==="vermelho") {
        console.log ("Azul")
    }else {
        console.log ("Vemelho")
    }
}
substituirPalavra (palavra)

//Atividade 15 
let tamanho = prompt ("Escreva uma frase:");
function verificarTamanho (tamanho){
    for (let i=0; i<tamanho.length; i++){
        if (tamanho.length > 10){
            console.log ("Essa frase tem mais de 10 caracteres");
        }else{
            console.log ("Essa frase tem menos de 10 caracteres");
    
        }
    }
};
verificarTamanho (tamanho)
*/
//Atividade 16
let x = 1;
hile (x <= 5) {
    let fruta = prompt ("Escreva uma fruta:");
    x = x + 1;
    if (x==3) {
        console.log(fruta)
    }
}