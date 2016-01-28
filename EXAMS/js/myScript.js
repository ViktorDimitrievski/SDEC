var deleteCounter = 0;
var clearDisplay = 0;
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
	//readButtonCreating.id = "read";
	readButtonCreating.className = "button read";
	cellFour.appendChild(readButtonCreating);
	
	var updateButtonCreating = document.createElement("button");
	var updateText = document.createTextNode("Update");
	updateButtonCreating.appendChild(updateText);
	//updateButtonCreating.id = "update";
	updateButtonCreating.className = "button update";
	cellFour.appendChild(updateButtonCreating);
	
	var deleteButtonCreating = document.createElement("button");
	var deleteText = document.createTextNode("Delete");
	deleteButtonCreating.appendChild(deleteText);
	deleteButtonCreating.className = "button delete";
	deleteButtonCreating.id = "btn_"+deleteCounter++;
	deleteButtonCreating.type = "button";
	var delDataAtt = document.createAttribute("data-value");
	delDataAtt.value = deleteCounter++;
	deleteButtonCreating.setAttributeNode(delDataAtt);
	cellFour.appendChild(deleteButtonCreating);
	// !!!!!   END Creating buttons and inserting in table row
	
	
	var deleteButtons = document.getElementsByClassName("button delete");
	var delBtnCount = deleteButtons.length;

	for(var i=0; i < delBtnCount; i++){
		deleteButtons[i].onclick = function(){
			deleteCurnetRow(this);
		};
	}
	
	var readButtons = document.getElementsByClassName("button read");
	var readBtnCount = readButtons.length;
	
	for(var i = 0; i < readBtnCount; i++){
		readButtons[i].onclick = function(){
			readDetails(this);
		};
	}
	
	var updateButtons = document.getElementsByClassName("button update");
	var updateBtnCount = updateButtons.length;
	
	for(var i = 0; i < updateBtnCount; i++){
		updateButtons[i].onclick = function(){
			this.innerText = "Save";
			this.className = "button save";
			updateRow(this);
			saveRow(this);
		}
	}
	
}

function readDetails(r){
	 var tdVrednost = r.parentNode.parentElement;
	 var tdChild = tdVrednost.childNodes[0];
	 
	 var readDisplay = document.getElementById("details");
	 if(clearDisplay === 1){
		readDisplay.innerHTML = "";
		clearDisplay = 0;
	 }
	 for(var i = 0; i < 3; i++){
		var tdChild = tdVrednost.childNodes[i]; 
		if( i === 0)
			readDisplay.innerHTML += "Name: " + tdChild.outerText + '<br>';
		if(i === 1)
			readDisplay.innerHTML += "E-mail: " + tdChild.outerText + '<br>';
		if( i === 2)
			readDisplay.innerHTML += "Mobile number: " + tdChild.outerText;
		
		clearDisplay = 1;
	 }
	 
	 
	 
}


function updateRow(r){
	var rowForUpdate = r.parentNode.parentElement;
	
	for(var i = 0; i < 3; i++){
		var updateCurnetTD = rowForUpdate.childNodes[i];
		var inputValue = updateCurnetTD.innerText;
		updateCurnetTD.innerHTML = '<input type="text" value="' + inputValue +'" >';
	}
	
}

// With this function we delete curnet row which button is clicked and button have parent and is td and td has parenet whis is tr and tr has rowIndex
function deleteCurnetRow(r) {
    var i = r.parentNode.parentNode;
    document.getElementById("tableForInput").deleteRow(i.rowIndex);
	 //console.log(i);
}