const pnrVal = document.querySelector(".pnr_num");
const apiKey = "18be337404msh6d459bbea77a779p1e1108jsn9f6500cf3a65";
const num = document.querySelector("#num");
const time = document.querySelector("#time");
const pnr = document.querySelector("#pnr");
const booking = document.querySelector("#booking");
const sd = document.querySelector("#sd");
const classType = document.querySelector("#classType");
const status = document.querySelector("#status");
const btn = document.querySelector(".btn");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "18be337404msh6d459bbea77a779p1e1108jsn9f6500cf3a65",
    "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
  },
};

async function pnrstatus(pin) {
  const res = await fetch(
    `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pin}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // pnr.innerHTML =
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  pnrstatus(pnrVal.value);
});
