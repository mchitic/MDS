window.onload=function(){
	
	var titluCategorie = document.getElementById("Titlu");
	var wordCounterTitlu = document.getElementById("wordCounterTitlu");
	
	var descriereCategorie = document.getElementById("Descriere");
	var wordCounterDescriere = document.getElementById("wordCounterDescriere");
	
	titluAnunt.addEventListener("keyup",function(){
		var caractere = titluCategorie.value.split('');
		wordCounterTitlu.innerText = 70 - caractere.length;
	});	
	
	descriereAnunt.addEventListener("keyup",function(){
		var caractere = descriereCategorie.value.split('');
		wordCounterDescriere.innerText = 4096 - caractere.length;
	});	
	
}