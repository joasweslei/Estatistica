/* ramom */
/* Elias */
/*VINICIUS PETISTA */
/*LINCOLN LULAO*/
/*IGOR*/
/*Jhonatan*/

function calcular(){	
	var numero = document.getElementById("numero").value;
	numero = numero * 3;
	alert("Atenção - Número: "+numero);
}

	var vetor = [];
var numeros = "";
var ini = "Números digitados:";
var vet = [];
var str = "Peso: ";


function adicionar(){
	var numero = document.getElementById("numero").value;
	var peso = document.getElementById("peso").value;
	if(numero!=""){
		document.getElementById("processar").disabled = true; 
		numeros=numeros+ini+" "+numero;
		vetor.push(numero);
		numeros=numeros+" "+str+peso;
		vet.push(peso);
		document.getElementById("numero").value=" ";
		document.getElementById("conteudo").innerHTML=numeros;
		document.getElementById("peso").value=" ";
		document.getElementById("conteudo").innerHTML=numeros;
	}
}


function pond(){
	var value = 0;
	var i = 0;
	var ponde = [];
	for(i = 0; i<vetor.length ; i++){
		value = vetor[i] * vet[i];
		ponde.push(value);
	}
	var soma = 0;
	for(i = 0 ; i < ponde.length ; i++){
		soma = soma + ponde[i];
	}
	soma = soma/ponde.length;
	var chat = "a Media Ponderada é ";
	chat = chat + soma;
	document.getElementById("conteudo").innerHTML=chat;
}



function calcularmedia(){	
	var media = vetor.reduce((total, valor) => total+valor/vetor.length, 0);
	alert("Média: "+media);
}

function calcularvariancia(){
	var media = vetor.reduce((total, valor) => total+valor/vetor.length, 0);
	var variancia = vetor.reduce((total, valor) => total + Math.pow(media - valor, 2)/vetor.length, 0);
	alert("Variância: "+variancia);
}

function calculardesvio(){
	var media = vetor.reduce((total, valor) => total+valor/vetor.length, 0);
	var variancia = vetor.reduce((total, valor) => total + Math.pow(media - valor, 2)/vetor.length, 0);
	var desvioPadrao = Math.sqrt(variancia);
	alert("Desvio Padrão: "+ desvioPadrao);
}

function zerar(){
	numeros = "Números digitados:";
	document.getElementById("conteudo").innerHTML="";
	document.getElementById("processar").disabled = false; 
	document.getElementById("numero").value = numero;
}

function covarianciaDePearson(vecA, vecB){
	return covariancia(vecA, vecB)/Math.sqrt(variancia(vecA),variancia(vecB));
} 

function somaVetor( vet ){
	var i;
	var soma = 0;
	for(i = 0; i < vet.length; i++){
		soma = soma + vet[i];
	}
	return soma;
}

function dobroVetor( vet ){
	var i;
	var dobro = 2;
	for(i = 0; i < vet.length; i++){
		dobro = dobro * vet[i];
	}
	return dobro;
}

function divisao(a, b) {
	return a / b;
  }