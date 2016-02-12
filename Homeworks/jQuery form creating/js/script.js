$(document).ready(function(){
	
	$("body").append("<form class='forma'></form>");

	$("form").append("<label id='user'>User: </label>");
	$("#user").append("<input type='text'></input>");

	$("form").append("<br> <label id='password'>Password: </label>");
	$("#password").append("<input type='password' id='passwordVal'></input>");

	$("form").append("<br> <label id='confirmPassword'>Confirm password: </label>");
	$("#confirmPassword").append("<input type='password' id='passwordConfirmVal'></input>");

	$("form").append("<br> <label id='email'>E-mail: </label>");
	$("#email").append("<input type='email' id='emailValue'></input>")

	$("form").append("<br> <button class='submit' type='button'>Submit</button>");

	$(".submit").click(function(){
		onClickFunction();
	});

})  ;


function onClickFunction(){
	var passwordValue = $("#passwordVal").val();
	var passwordConfirmValue = $("#passwordConfirmVal").val();
	var regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[!,@,#,$,%,^,&,*,(,),_,-,=,+,-,/,|,\,',",;,:,.,>,<,,,/]).{8,})\S$/gmi;
	var PasswordMatch = regex.test(passwordValue);
	if(passwordValue === passwordConfirmValue)
		if(PasswordMatch)
			alert("Pominuva regex");
	else
		console.log(false);


	var emailRegex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/gmi;
	var emailValue = $("#emailValue").val();
	var EmailMatch = emailRegex.test(emailValue);
	if(EmailMatch)
		alert("Email pominuva");
	
	}