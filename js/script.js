const ADVICE_URL = "https://api.adviceslip.com/advice";
const adviceH1 = document.querySelector(".advice-text");
const adviceNumSpan = document.querySelector(".adive-num");
const submitBtn = document.querySelector(".dice-bg");

async function getAdviceInfo() {
  const response = await fetch(ADVICE_URL);

  const {
    slip: { id: adviceId, advice },
  } = await response.json();

  adviceH1.textContent = `"${advice}"`;
  adviceNumSpan.textContent = `#${adviceId}`;
}
window.addEventListener("load", getAdviceInfo);

submitBtn.addEventListener("click", getAdviceInfo);
