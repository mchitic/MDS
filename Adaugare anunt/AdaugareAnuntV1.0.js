window.onload=function(){
	
	var titluAnunt = document.getElementById("Titlu");
	var wordCounterTitlu = document.getElementById("wordCounterTitlu");
	
	var descriereAnunt = document.getElementById("Descriere");
	var wordCounterDescriere = document.getElementById("wordCounterDescriere");
	
	titluAnunt.addEventListener("keyup",function(){
		var caractere = titluAnunt.value.split('');
		wordCounterTitlu.innerText = 70 - caractere.length;
	});	
	
	descriereAnunt.addEventListener("keyup",function(){
		var caractere = descriereAnunt.value.split('');
		wordCounterDescriere.innerText = 4096 - caractere.length;
	});	
	
}