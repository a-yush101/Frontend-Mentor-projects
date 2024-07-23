const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dissMsg");
const thankPage = document.querySelector(".thankYouBox");
const inputPage = document.querySelector(".container");
const errorMsg = document.querySelector(".errorMsg");
const emaiId = document.getElementById("emailId");


submitBtn.addEventListener("click",(event) => {
    event.preventDefault();
    if(!validateEmail())
    {
        emailInput.classList.replace("emailInput","errorInput");
        errorMsg.style.visibility = "visible";
    }
    else{
        emailInput.classList.replace("errorInput","emailInput");
        errorMsg.style.visibility = "hidden";
        thankPage.style.display = "flex";
        inputPage.style.display = "none";
        emaiId.innerText = emailInput.value;
    }
})
    
dismissBtn.onclick = () => {
    thankPage.style.display = "none";
    inputPage.style.display = "flex"
}

function validateEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        return true;
    } else {
        return false;
    }
}
