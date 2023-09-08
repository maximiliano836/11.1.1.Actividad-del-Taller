const captcha = document.getElementById("captcha");
const imagen = document.getElementById("imagen");
imagen.src = "c26ab1_a4d1e3dffdcb4c2cb23df968df76a840.gif";
var recarga = document.getElementById("recarga");
var input = document.getElementById("input");
var check = document.getElementById("check");
var statu = document.getElementById("status");

let caracteres = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  1,
  2,
  3,
  4,
  5,
  6,
];

function getcaptcha() {
  for (let index = 0; index < 6; index++) {
    let randomcaracteres =
      caracteres[Math.floor(Math.random() * caracteres.length)];
    captcha.innerHTML += `${randomcaracteres}`;
  }
}
getcaptcha();
RandomMichis();

function removeContent() {
  input.value = "";
  captcha.innerHTML = "";
  statu.style.display = "none";
  RandomMichis();
}

recarga.addEventListener("click", function () {
  removeContent();
  getcaptcha();
});

check.addEventListener("click", (e) => {
  e.preventDefault();
  statu.style.display = "block";

  let inputVAL = input.value.split(``).join(``);
  if (inputVAL == captcha.innerHTML) {
    imagen.innerHTML = "";
    statu.style.color = "blue";
    statu.innerHTML = "No eres un Gato :(";
    imagen.style.display = "block";
    imagen.innerHTML += `
        <img class="imagen" src="${imagen.src}">`;
  } else {
    statu.style.color = "red";
    statu.innerHTML = "Si eres un Gato :)";
    RandomMichis();
  }
});

function RandomMichis() {
  let response = fetch(`https://api.thecatapi.com/v1/images/search?limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const array = data;
      imagen.innerHTML = "";
      array.forEach((data) => {
        const imagenes = data.url;
        imagen.innerHTML += `
        <img class="imagen" src="${imagenes}">
    `;
      });
    });
}
