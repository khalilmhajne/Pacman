
const Users={}

Users["k"]="k"



function LoginFormShow()
{

    $(".welcomePage").css("display","none")
    $("#Login").css("display","block");
    $("#Register").css("display","none");

   
}

function showRegisterForm(){

    $(".welcomePage").css("display","none")
    $("#Login").css("display","none");
    $("#Register").css("display","block");


}
function ShowWelcomePage()
{

    $(".welcomePage").css("display","block")
    $("#Login").css("display","none");
    $("#Register").css("display","none");


}

function ShowSettings()
{
  $(".welcomePage").css("display","none")
    $("#Login").css("display","none");
    $("#Register").css("display","none");
    $(".settings").css("display","block")


}



function signIn()
{
let userName=$("#LoginUsername").val()
let passWord = $("#LoginPassword").val()

if(userName in Users){    
  if(Users[userName].localeCompare(passWord) === 0){

    alert("Logged In Welcome!")
    ShowSettings();

  }
  else 
  {
    alert("Wrong Password");
    return 
  }
}
else
{
  alert("User Name Doesn't Exists");
  return 
}


}


