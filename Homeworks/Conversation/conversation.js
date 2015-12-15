var number = 0; //name of varible for storing number from input field
var result = document.getElementById('displayResult');

function getValue (){
	number = document.getElementById('numberFromInput').value; //Geting value from input field and storin in varible number
	
	//console.log(number);
	//var result = document.getElementById('displayResult');
	//result.innerHTML = "Input number = " + number;
	var par = parseInt(number); //geting parsed value from input field stored in varible number
	number = par; // set number value in integer format
	console.log(number);
	if(number <= 0)
	{
		result.innerHTML = "Invalid input";
	}
	else {
	toWords(number);
	}
}




function toWords(number) {

	
	if(number <=19 ){
		result.innerHTML = number;
		return toNinety(number);
		
	}else if(number < 100){
		var tenDigits = parseInt(number / 10);
		toTens(tenDigits);
		number = parseInt(number % 10);
		toNinety(number);
	}else if(number  < 1000)
	
	
	
	
	function toNinety (num) {
		var num1to20InArray = ["zero",
						"one",
						"two",
						"three",
						"four",
						"five",
						"six",
						"seven",
						"eight",
						"nine",
						"ten",
						"eleven",
						"twelve",
						"thirteen",
						"fourteen",
						"fifteen",
						"sixteen",
						"seventeen",
						"eighteen",
						"nineteen",
		]
		for(var i= 0; i < 20; i++){
			if(num === i){
				result.innerHTML += num1to20InArray[i];
				
			}
		}
	}
	
	function toTens(num){
		var numTens = ["",
				"twenty",
				"thirty",
				"forty", 
				"fifty", 
				"sixty",
				"seventy",
				"eighty", 
				"ninety"
		]
		result.innerHTML += numTens[num-1];
	}
}



