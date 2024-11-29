const submitbtn = document.getElementById("submitbtn");
const nameerror = document.getElementById("nameerror");
const emailerror = document.getElementById("emailerror");
const passerror = document.getElementById("passerror");

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(validname() && validemail()  && validpassword()){
        alert("Form Submitted Successfully");
    }
});


function validname(){
    let name = document.getElementById("name").value;

    if(name.length == 0){
        nameerror.innerHTML = "Name is required";
        nameerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = "Write full Name";
        nameerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    nameerror.innerHTML = "";
    nameerror.previousElementSibling.classList.add("fa-check");
    return true;
}

function validemail(){
    let email = document.getElementById("email").value;

    if(email.length == 0){
        emailerror.innerHTML = "Email is required";
        emailerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailerror.innerHTML = "Enter Valid Email";
        emailerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    emailerror.innerHTML = "";
    emailerror.previousElementSibling.classList.add("fa-check");
    return true;
}

function validpassword(){
    let password = document.getElementById("password").value;

    if(password.length == 0){
        passerror.innerHTML = "Password is required;"
        passerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passerror.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passerror.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    passerror.innerHTML = "";
    passerror.previousElementSibling.classList.add("fa-check");
    return true;
}

