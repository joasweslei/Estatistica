function calcular(){	
	var numero = document.getElementById("numero").value;
	numero = numero * 3;
	alert("Número: "+numero);
}

var vetor = [];
var numeros= "Números digitados:";

function adicionar(){
	var numero = document.getElementById("numero").value;
	if(numero!=""){
		document.getElementById("processar").disabled = true; 
		numeros=numeros+" "+numero;
		vetor.push(numero);
		document.getElementById("numero").value=" ";
		document.getElementById("conteudo").innerHTML=numeros;
	}
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
}