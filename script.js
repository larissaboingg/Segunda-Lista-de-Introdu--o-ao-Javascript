
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
function substituirPalavra (text) {
    console.log(text.replace(/azul/g,"vermelho"))
}
let texto = prompt ("Escreva uma palavra:");
substituirPalavra (texto)

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

//Atividade 16
 let x = 0;
     while (x <= 4) {
     let fruta = prompt ("Escreva uma fruta:");
     x = x + 1;
     if (x==3) {
         console.log(fruta)
     }
 }

//Atividade 17
let sauda = "Bem-vindo(a) ";
let nome = prompt ("Escreva seu nome:");
function saudacao (sauda,nome){
    console.log(sauda + nome);
}
saudacao(sauda,nome)


//Atividade 18
let nota = prompt ("Digite sua nota:");
function verificarAprovacao (nota) {
    if (nota>=6) {
        console.log ("Aprovado")
    } else {
        console.log ("Reprovado")
    }
}
verificarAprovacao(nota)

//Atividade 19
let numer = 1 ;
while (numer<=30){
    numer++;
    if (numer % 2 == 0){
        console.log (numer);
    }
}

//Atividade 20 
let palavra = prompt ("Digite uma palavra:")
function contarVogais (palavra) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (let letra of palavra){
        if(vogais.includes(letra)){
            contador++;
        }
    }
}
console.log(contador);
contarVogais (palavra)

//Atividade 21
let array = [2, 5, 9, 6, 3];
console.log(array[0] + array[1] + array[2] + array[3] + array[4])


// atividade 22
let n = prompt("Digite um número:")
function dobrarNumeros(n){
    console.log(parseInt(n) + parseInt(n))
}
dobrarNumeros(n)


//Atividade 22
let nume = prompt ("Digite um numero:");
function dobrarNumeros (nume) {
    console.log ("O dobro desse numero é: "+ nume*nume)
}
dobrarNumeros (nume)


//Atividade 23
let num = 2 ;
while (num<=20){
    num++;
    if (num % 2 == 0){
        console.log (num);
    }
}


//Atividade 24
let maiuscula = prompt("Digite a palavra:")
function capitalizar(maiuscula){
    console.log(maiuscula.charAt(0).toUpperCase() + maiuscula.slice(1));
}
capitalizar(maiuscula)


// atividade 25
let ano = prompt("Digite um ano:")
function anoBissexto(ano){
    if (ano % 4 === 0){
        console.log("É um ano bissexto")
    }else {
        console.log("Não é um ano bissexto")
    }
}
anoBissexto(ano)
