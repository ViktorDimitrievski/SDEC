var result = document.getElementById("result");
var number = "";
var firstNumber = "";
var operator = "";

function presmetka(frist,operator4e,second)
{
	//console.log(frist,operator4e,second);
	
	var rezultatot = 0;		
	switch (operator4e) {
		case "+":
		rezultatot = parseInt(frist) + parseInt(second);
		break;
		
		case "-":
		rezultatot = parseInt(frist) - parseInt(second);
		break;
		
		case "/":
		rezultatot = parseInt(frist) / parseInt(second);
		break;
		
		case "*":
		rezultatot = parseInt(frist) * parseInt(second);		
		break;
		
	}
return rezultatot;		
}
function printingInLabelVal (val) {
	console.log(val);
	
	switch (val) {
		
		case "+":
		operator = val;
		result.innerHTML = number + " + ";
		firstNumber = number;
		number = "";
		break;
		
		case "-":
		operator = val;
		result.innerHTML = number + " - ";
		firstNumber = number;
		number = "";
		break;
		
		case "/":
		operator = val;
		result.innerHTML = number + " / ";
		firstNumber = number;
		number = "";
		break;
		
		case "*":
		operator = val;
		result.innerHTML = number + " * ";
		firstNumber = number;
		number = "";
		break;
		
		case "=":
		var vratena = presmetka(firstNumber,operator,number);
		result.innerHTML = firstNumber + " " + operator + " " + number + " = " + Math.floor(vratena);
		number = Math.floor(vratena);
		firstNumber = "";
		break;
		
		case "c":
		result.innerHTML = "";
		number = "";
		firstNumber = "";
		operator ="";
		break;
		
		
		
		default:
		result.innerHTML += val; 
		
		number += val;
		
		console.log(number);
	}
	//result.innerHTML = result.innerHTML + val;
	//console.log(result);
	
}


elements = document.getElementsByTagName("button");

for (var index = 0; index< 16; index++) {

	elements[index].onclick = function(){
		printingInLabelVal(this.value);
		
	};
}