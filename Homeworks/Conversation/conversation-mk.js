var number = 0; //name of varible for storing number from input field
var result = document.getElementById('displayResult');
var stringArray = '';
stringArrayMK = '';
function getValue (){
	number = document.getElementById('numberFromInput').value; //Geting value from input field and storin in varible number
	
	//console.log(number);
	//var result = document.getElementById('displayResult');
	//result.innerHTML = "Input number = " + number;
	var par = parseInt(number); //geting parsed value from input field stored in varible number
	number = par; // set number value in integer format
	//console.log(number);
	if(number <= 0)
	{
		result.innerHTML = "Invalid input";
	}
	else {
	stringArray = '';
	stringArrayMK = '';
	toWords(number);
	}
}
function toWords(number) {
	
	if(number < 20){
		do19(number);
	}
	
	
	function do19 (num) {
		var nizaOd1Do19 = ["","еден","два","три","четири","пет","шест","седум","осум","девет","десет","единаесет","дванаесет","тринаесет","четиринаесет","петнаесет","шеснаесет","седумнаесет","осумнаесет","деветнаесет"];
		stringArrayMK += nizaOd1Do19[num];
	}
	var nizaDesetki = ["дваесет","триесет","четириесет","педесет","шеесет","седумдесет","осумдесет","деведесет"];
	var nizaStotki = ["сто","двеста","триста","четиристотини","петстотни","шестотини","седумстотини","осумстотини","деведстотини"];
	
	String.prototype.capitalize = function() { // prototip function which make first letter Uppercase
		
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	stringArrayMK = stringArrayMK.capitalize();
	result.innerHTML = stringArrayMK;//printing on screen
	
	if
	
	
	return stringArrayMK;
}

