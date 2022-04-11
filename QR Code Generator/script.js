const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // return if no input
    generateBtn.innerText = "Generating...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`; //use api to retrieve value

    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active"); //remove active class and close wrapper
    }
})

