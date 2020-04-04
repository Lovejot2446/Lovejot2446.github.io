
function formValidation()
{
var uid = document.forms["registration"]["userid"].value;
var passid = document.forms["registration"]["passid"].value;
var uname = document.forms["registration"]["username"].value;
var uadd = document.forms["registration"]["address"].value;
var ucountry = document.forms["registration"]["country"].value;
var uzip = document.forms["registration"]["zip"].value;
var uemail = document.forms["registration"]["email"].value;
var umsex = document.forms["registration"]["sex"].value;
 var utext=document.forms["registration"]["desc"].value;
 
 
 document.write("</br></br>Userid: "+uid);
 document.write("</br></br>Password: "+passid);
 document.write("</br></br>Username: "+uname);
 document.write("</br></br>Address: "+uadd);
 document.write("</br></br>Country: "+ucountry);
 document.write("</br></br>Zip Code: "+uzip);
 document.write("</br></br>Sex: "+umsex);
document.write("</br></br>About: " +utext);
}