let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let copyicon = document.getElementById("copyicon");


slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", ()=>{
    slidervalue.textContent = inputslider.value; 
});

genbtn.addEventListener("click", ()=>{
    passbox.value = generatepassword();
})

let lowerchars = "abcdefghijklmniopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";
let allnumbers = "01234556789";
let allsymbols = "@#$%^&*()_";


function generatepassword(){
    let genpassword = "";
    let allchars = "";

    allchars += lowercase.checked? lowerchars:"";
    allchars += uppercase.checked? upperchars:"";
    allchars += numbers.checked? allnumbers:"";
    allchars += symbols.checked? allsymbols:"";

    if(allchars.length == 0 || allchars == ""){
        return genpassword;
    }

    let i=1;
    while(i<=inputslider.value){
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
    return genpassword;
}


copyicon.addEventListener("click", ()=>{
    if(passbox.value != 0 || passbox.value >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password copied"

        setTimeout(()=>{
            copyicon.innerHTML = "content_copy"
            copyicon.title = "";
        },3000)
    }
});
