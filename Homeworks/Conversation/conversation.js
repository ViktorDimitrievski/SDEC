var number = 0;
var result = document.getElementById('displayResult');
function getValue (){
	number = document.getElementById('numberFromInput').value; //Geting value from input field and storin in varible called number
	
	//console.log(number);
	//var result = document.getElementById('displayResult');
	//result.innerHTML = "Input number = " + number;
	var par = parseInt(number);
	if(number <= 0)
	{
		result.innerHTML = "Invalid input";
	}
	else {
	toWords(number);
	}
}




function toWords(number) {
   
  var numbersInArray = ["",
						"One",
						"Two",
						"Three",
						"Four",
						"Five",
						"Six",
						"Seven",
						"Eight",
						"Nine",
						"Ten",
						"Eleven",
						"Twelve",
						"Thirteen",
						"Fourteen",
						"Fifteen",
						"Sixteen",
						"Seventeen",
						"Eighteen",
						"Nineteen",
						"Twenty"
]
var testbroj = 4;
	for(var index = 0;  index <= 20; index++)
	{
		if(testbroj === index)
		{
			//var  printingOnDisplay = numbersInArray[index];
			result.innerHTML = numbersInArray[index];//printingOnDisplay;
		}
	}
  
  
  /*/ switch(number)
   {
	   case 1:
	   result.innerHTML = "One";
	   
   }
   
   */
   
   /*
   
   if(CheckingNumber > 99)
   {
	   result.innerHTML = "hundred";
   }
   if(CheckingNumber > 999)
   {
	    result.innerHTML = "thousand";
   }
   if(CheckingNumber > 99999)
   {
	   result.innerHTML = "hundred";
   }
   if(CheckingNumber >  999999)
   {
	   result.innerHTML = "million";
   }
   if(CheckingNumber >  999999999)
   {
	   result.innerHTML = "billion";
   }
    if(CheckingNumber >  999999999999)
   {
	   result.innerHTML = "trillion";
   }
   
*/
   
   return result;
}