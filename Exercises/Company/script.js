/*var viktor = {
	firstName: "Vitkor",
	lastName: "Dimitirevski",
	age: 21,
	
	getDisplayText:function(){
	
	return this.firstName +  " " + this.lastName + " " + this.age;
	}
	
};

var result = document.getElementById("result");

result.innerHTML = viktor.getDisplayText();*/

/*

function Studnet(firstName,lastName,age){
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,
	this.getDisplayText = function(){
	
	return this.firstName +  " " + this.lastName + " " + this.age;
	}
	
}

var dimtir = newStundet("Dimitar","Panovski" ,18);
var roste = newStundet("Vitkor", "Dimitareas",17);
var topas = newStundet("Toso","Malertot",43);

var students = [dimitar,riste,dare];
//students.push(new Student("Filip","Smilo",13);*/


function Company (name,location,taxNumber,director,employe){
	this.name = name;
	this.location = location;
	this.taxNumber = taxNumber;
	this.director = director;
	this.employe = employe;
	
	this.printCompanyInfo = function(){
		console.log(this.employe);
		return  "Company name:  <b>" + this.name + "</b>  <i>" + this.taxNumber + "</i> " + this.location.getLocation()  + "Director: "+ this.director.personInfo()
		+ " <br>Company employees: " + this.employe + "<br>";
	}
	
}
function Location (name,number,area){
		this.name = name;
		this.number = number;
		this.area = area;
		
		this.getLocation = function(){
			return "<br> Address: <u>" + this.name + " no:" + this.number + "  " + this.area + "</u><br>";
		}
}

function Person (firstName,lastName,age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	
	this.personInfo = function(){
		return  "<b>" + this.firstName + " " + this.lastName + " " + this.age + "god.</b><br>";
	}
	
	this.toString = this.personInfo;
}

//function registerEmployee(firstName, lastName, age, company){
//	var tempEmplyee = new Person(firstName, lastName, age);
	//company.employe.push(tempEmplyee);
	
//}


var emplois = [];
emplois.push(new Person("Verka","Lusterka",32));
emplois.push(new Person("Ratka","Matka",45));

var sevLocation = new Location("Mihajlo Manevski",4,"KiselaVoda");
var ednLocation = new Location("Mihajlo Manevski",4,"KiselaVoda");
var telLocation = new Location("Mihajlo Manevski",4,"KiselaVoda");
var briLocation = new Location("Mihajlo Manevski",4,"KiselaVoda");
var junLocation = new Location("Mihajlo Manevski",4,"KiselaVoda");

var dirSeavus = new Person("Rampo","Lefkata",33);
var dirEndava = new Person("Riste","Lefkata",43);
var dirTelekom = new Person("Petre","Lefkata",33);
var dirBritish = new Person("Piko","Lefkata",76);
var dirJunajted = new Person("Haus","Lefkata",65);




var seavus = new Company("Seavus",sevLocation , 1231231,dirSeavus,emplois);
var endava = new Company("Endava", ednLocation, 3242234,dirEndava,emplois);
var telekom = new Company("Telekom",telLocation, 1231231,dirTelekom);
var british = new Company("British",briLocation, 3242234,dirBritish);
var junajted = new Company("Junajted",junLocation, 42342234,dirJunajted);

var arrayOfComapny = [seavus,endava,junajted,british,telekom];

//registerEmployee("Vladimir", "Totocevski", 29, seavus);
//registerEmployee("Dzordz", "Dzekson", 22, seavus);
console.log(seavus);

var resultDisplay  = document.getElementById("result");

for(var index =0; index < 5; index++){
	resultDisplay.innerHTML += arrayOfComapny[index].printCompanyInfo() + "<br>";
}
