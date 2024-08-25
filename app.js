// Função para fazer a imagem sumir ao digitar
const textarea = document.querySelector(".digite__texto");
const img = document.querySelector(".resultados img");
const resultado = document.querySelector("#resultado");
const tituloResultado = document.querySelector("#titulo-resultado");
const subtituloResultado = document.querySelector("#subtitulo-resultado");

textarea.addEventListener("input", () => {
  img.style.display = "none";
  tituloResultado.textContent = "";
  subtituloResultado.textContent = "";
  resultado.value = "";
});

// Função de criptografia
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

// Função de copiar texto criptografado
function copiar() {
  const resultadoTexto = document.querySelector("#resultado");
  
  // Selecionar o texto no textarea
  resultadoTexto.select();
  resultadoTexto.setSelectionRange(0, 99999); // Para dispositivos móveis
  
  // Copiar o texto selecionado para a área de transferência
  document.execCommand("copy");
  
  // Mensagem de confirmação
  alert("Texto copiado para a área de transferência!");
}

// Adicionar o evento ao botão de copiar
const botaoCopiar = document.querySelector(".copiar");
botaoCopiar.addEventListener("click", copiar);


// Função de descriptografia (se precisar)
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

// Limpar o texto do resultado ao apagar o texto na caixa de entrada
textarea.addEventListener("input", () => {
  if (textarea.value === "") {
    resultado.value = "";
    img.style.display = "block";
    tituloResultado.textContent = "mensagem encontrada";
    subtituloResultado.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
  }
});
