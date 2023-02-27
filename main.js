function contar() {
  let inicio = document.getElementById("textI");
  let passo = document.getElementById("textp");
  let fim = document.getElementById("textf");
  let res = document.getElementById("res");

  if (inicio.value == 0 || passo.value == 0 || fim.value == 0) {
    alert("[error] Please check the fields");
  } else {
    res.innerHTML = "Contando:";
    let i = Number(inicio.value);
    let p = Number(passo.value);
    let f = Number(fim.value);

    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F449} `;
    }
  }
}
