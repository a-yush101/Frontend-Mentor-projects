const randomizeBtn = document.querySelector(".randomize");
const adviceNo = document.querySelector(".adviceNo")
const adviceText = document.querySelector(".adviceText")

async function randomize() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        adviceNo.innerText = `ADVICE #${data.slip.id}`;
        adviceText.innerText = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

randomizeBtn.onclick = randomize;
