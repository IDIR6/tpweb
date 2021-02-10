function showCity() {
let nomVilleSelectionnee = document.getElementById("menu").value;
	
 if (nomVilleSelectionnee == "Villé") 
 {document.getElementById("vil").style.display = "";
document.getElementById("par").style.display = "none";
document.getElementById("stras").style.display = "none";
 }
else if (nomVilleSelectionnee == "Strasbourg") 
 {document.getElementById("stras").style.display = "";
document.getElementById("par").style.display = "none";
document.getElementById("vil").style.display = "none"; }

else
 {document.getElementById("par").style.display = "";
document.getElementById("stras").style.display = "none";
document.getElementById("vil").style.display = "none"; }
	
}	
