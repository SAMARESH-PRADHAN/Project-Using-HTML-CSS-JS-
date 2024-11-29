const qrtext = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generatebtn = document.getElementById("generatebtn");
const downloadbtn = document.getElementById("downloadbtn");
const qrcontainer = document.querySelector(".qr-body");

let size = sizes.value;
generatebtn.addEventListener("click", (e) =>{
    e.preventDefault();
    isemptyinput();
});

sizes.addEventListener("change", (e) =>{
    size = e.target.value;
    isemptyinput();
});

downloadbtn.addEventListener("click", ()=>{
    let img = document.querySelector(".qr-body img");

    if(img !== null){
        let imgatrr = img.getAttribute("src");
        downloadbtn.setAttribute("href", imgatrr);
    }
    else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isemptyinput(){
    if(qrtext.value.length > 0){
        generateqrcode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
}

function generateqrcode(){
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
        text:qrtext.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}