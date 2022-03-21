const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".forum input"),
generateBtn = wrapper.querySelector(".forum button"),
qrImage = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;

    // console.log(qrValue);
    if(!qrValue) 
       return;   //if the input is empty then return from here

    generateBtn.innerText = "Generating QR Code.........";
    //  getting a qr  code of user intered value using qr server
    // api and passing the app return img src to qrImg
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImage.addEventListener("load", () => {// once qr code is loded 
        wrapper.classList.add("active");
        generateBtn.innerText = "Generator Qr";
    })
});


// remove the active class From the wrapper  if the input field is empty
qrInput.addEventListener("keyup", () => {
    if(!qrInput.Value)
    {
        wrapper.classList.remove("active");
    }
})
