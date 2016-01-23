var deleteCounter = 0;
document.getElementById("save").onclick = function() { 
	var name;
	var phone;
	var email;
	name = document.getElementById("personName").value;
	phone = document.getElementById("personPhone").value;
	email = document.getElementById("personEmail").value;
	submitInTable(name,email,phone);
	//e.preventDefault(); treba gore vo function da se stavi e
}


function submitInTable(getName,getEmail,getMobile){
	var counterCells = 0;
	var table = document.getElementById("tableForInput");
	var row = table.insertRow();
	var cellOne = row.insertCell(counterCells);
	var cellTwo = row.insertCell(++counterCells);
	var cellThree = row.insertCell(++counterCells);
	var cellFour = row.insertCell(++counterCells);
	cellOne.innerHTML += getName;
	cellTwo.innerHTML += getEmail;
	cellThree.innerHTML += getMobile;
	//cellFour.innerHTML +=  ovde na ova ne sobirame elemenite tuku gi apenduvame eden na drug element
	
	// Creating buttons and inserting in table row
	var readButtonCreating = document.createElement("button");
	var readText = document.createTextNode("Read");
	readButtonCreating.appendChild(readText);
	readButtonCreating.id = "read";
	readButtonCreating.className = "button";
	cellFour.appendChild(readButtonCreating);
	
	var updateButtonCreating = document.createElement("button");
	var updateText = document.createTextNode("Update");
	updateButtonCreating.appendChild(updateText);
	updateButtonCreating.id = "update";
	updateButtonCreating.className = "button";
	cellFour.appendChild(updateButtonCreating);
	
	var deleteButtonCreating = document.createElement("button");
	var deleteText = document.createTextNode("Delete");
	deleteButtonCreating.appendChild(deleteText);
	deleteButtonCreating.className = "button";
	deleteButtonCreating.id = "delete";
	var delDataAtt = document.createAttribute("data-value");
	delDataAtt.value = deleteCounter++;
	deleteButtonCreating.setAttributeNode(delDataAtt);
	cellFour.appendChild(deleteButtonCreating);
	// !!!!!   END Creating buttons and inserting in table row
}

//function readDetails(){
	
//}

document.getElementById("delete").onclick = function() {
	var clicked = document.getElementById("delete");
	var valueOfClicked = clicked.getAttribute('data-value');
	
	deleteCurnetRow(valueOfClicked);
}; 

function deleteCurnetRow(r) {
    var i = r.parentNode.rowIndex;
    document.getElementById("tableForInput").deleteRow(i);
}