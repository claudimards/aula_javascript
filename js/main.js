/*
var nome = 'Claudimar';
var idade = 26;

alert('Me chamo ' + nome + ' e tenho ' + idade + ' anos');
console.log(nome);
*/

/*
var lista = ["maça", "uva", "laranja"];
lista.push("banana");
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
*/

/*
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade")
}
*/

/*
var count = 0;
while (count < 5){
    console.log( count +1 );
    count++;
}
*/

/*
var count;
for(count = 0; count < 5; count++){
    alert(count + 1);
}
*/

/*
var data = new Date();
alert(d);
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

function botao(){
    document.getElementById("mensagem").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://globallabs.academy/");
}