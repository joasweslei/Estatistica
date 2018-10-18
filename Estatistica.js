function calcular(){	
	var numero = document.getElementById("numero").value;
	numero = numero * 3;
	//alert("Número: "+numero);
	document.getElementById("numero").value = numero;
}

function covarianciaDePearson(vecA, vecB){
	return covariancia(vecA, vecB)/Math.sqrt(variancia(vecA),variancia(vecB));
}