const submitbtn = document.getElementById("submitbtn");
const nameerror = document.getElementById("nameerror");
const emailerror = document.getElementById("emailerror");
const passerror = document.getElementById("passerror");

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(validname() && validemail() && validpassword()){
        alert("submitted sucessfull");
    }

})

function validname(){
    let name = document.getElementById("name");

    if(name.length == 0){
        nameerror.innerHTML = "Please enter the name";
        nameerror.parentElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = "Write the full name";
        nameerror.parentElementSibling.classList.add("fa-xmark");
        return false;
    }
    nameerror.innerHTML = "";
    nameerror.parentElementSibling.classList.add("fa-check");
    return false;
}

function validemail(){
    let email = document.getElementById("email");

    if(email.length == 0){
        nameerror.innerHTML = "Please enter the email";
        nameerror.parentElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!email.length(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        nameerror.innerHTML = "Enter the valid email"
        nameerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    nameerror.innerHTML = "";
    nameerror.previousElementSibling.classList.add("fa-check");
    return false;
}

function validpassword(){
    let password = document.getElementById("password");

    if(password.length == 0){
        nameerror.innerHTML = "Please enter the password";
        nameerror.parentElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!password.length(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        nameerror.innerHTML = "Enter the valid password"
        nameerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    nameerror.innerHTML = "";
    nameerror.previousElementSibling.classList.add("fa-check");
    return false;
}

