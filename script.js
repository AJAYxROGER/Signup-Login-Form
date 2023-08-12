const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");

signupBtn.onclick = function(){
    tittle.innerHTML = "Sign Up"
    nameField.style.display = "block"
}
signupBtn.onclick = function(){
    tittle.innerHTML = "Login"
    nameField.style.display = "none"
}
