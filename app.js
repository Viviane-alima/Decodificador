const textarea = document.querySelector(".digite__texto");
const img = document.querySelector(".resultados img");
const resultado = document.querySelector("#resultado");
const tituloResultado = document.querySelector("#titulo-resultado");
const subtituloResultado = document.querySelector("#subtitulo-resultado");

textarea.addEventListener("input", () => {
  img.style.display = "none"; 
  tituloResultado.textContent = ""; 
  subtituloResultado.textContent = "";
  resultado.value = textarea.value;
});


document.querySelector('.digite__texto').addEventListener('input', function(event) {
  const texto = event.target.value;
  const regex = /^[a-z\s]*$/;
  if (!regex.test(texto)) {
      event.target.value = texto.replace(/[^a-z\s]/g, '');
  }
});

function criptografar() {
  let texto = textarea.value;
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  resultado.value = textoCriptografado;
}

function copiar() {
  var textoCopiado = document.getElementById("resultado").value;
  navigator.clipboard.writeText(textoCopiado).then(function() {
      alert("Texto copiado para a área de transferência!");
  }).catch(function(error) {
      alert("Erro ao copiar texto: " + error);
  });
}


function descriptografar() {
  let textoCriptografado = textarea.value;
  let textoDescriptografado = textoCriptografado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  resultado.value = textoDescriptografado;
}

textarea.addEventListener("input", () => {
  if (textarea.value === "") {
    resultado.value = "";
    img.style.display = "block";
    tituloResultado.textContent = "Nenhuma mensagem  encontrada";
    subtituloResultado.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
  }
});
