var name = "responder"
var password = "password"

console.log("its working");

function getInfo() {
    var username = document.getElementById("username").value
    var inputPassword = document.getElementById("password").value
    if(username == name && inputPassword == password){
        console.log(username + " is logged in!!!")
        
            window.location.href = "/responder/page0";
    

    }else{
        console.log("login failed")
        document.getElementById("conditional").style.visibility="visible"
    }
}




getInfo()
