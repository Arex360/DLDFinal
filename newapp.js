//window.open("index.html");

var a = document.querySelector("#submit");
var user = document.querySelector("#UserNa");
var pass = document.querySelector("#UserPa");
var ab = "aa";
var isLogged = false;
var value = 2;
a.addEventListener("click",()=>{
    const username = user.value;
    const password = pass.value;
    
    if(username == "Owais" && password == "123"){
        alert("logged in");
        window.location.replace("page2.html");
    }
    else{
        alert("Wrong Password");
        window.location.reload(true);
    }
   
})