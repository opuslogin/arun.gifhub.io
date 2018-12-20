var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var password = document.getElementById("password").value;

	if (password == "asdasd"){
		window.location = "https://opusschoolofmusic.business.site/"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("Incorrect Password");
		
	}
}