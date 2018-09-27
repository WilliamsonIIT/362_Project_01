function checkform()
{

	var fname = document.forms["BetaForm"]["first_name"].value;
	var lname = document.forms["BetaForm"]["last_name"].value;
	var phone = document.forms["BetaForm"]["phone"].value;
	var email = document.forms["BetaForm"]["email"].value;

	if (fname == "")
	{
		
		alert('Please enter your First Name');
		return false;
	}
	else if (lname == "")
	{
		alert('Please enter your Last Name');
		return false;
	}
	else if (phone == "")
	{
		alert('Please enter your Phone Number');
		return false;
	}
	else if (email == "")
	{
		alert('Please enter your Email');
		return false;
	}
	

	return true;
}