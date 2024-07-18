const ratingBtns = document.querySelectorAll(".ratings");
const submitBtn = document.querySelector(".submit")
const defaultPage = document.getElementById("defaultBox");
const thanyouPage = document.getElementById("thankyouBox");
const selected = document.getElementById("selected");

let ratingText = 0;

ratingBtns.forEach((rat) => {
    rat.addEventListener("click",() => {
        ratingBtns.forEach((r) => {
            r.classList.remove("active");
        });
        rat.classList.add("active");
    })
})

submitBtn.addEventListener("click",() => {
    ratingBtns.forEach((rat) => {
        if(rat.classList.contains("active")){
            ratingText = rat.innerText;
            console.log(ratingText);
        };
    })
    defaultPage.style.display = "none";
    thanyouPage.style.display = "flex";
    selected.innerText = `You selected ${ratingText} out of 5`;
})