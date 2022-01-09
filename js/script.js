document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != "") {
      alert("Prontinho! Você receberá as novidades por e-mail!")
  }else{
      alert("Por favor, preecha os campos de nome, e-mail e telefone")
  }
}
  
