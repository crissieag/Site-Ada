document.getElementById("botãoEnviar").addEventListener("click", validaFormulario) 

function validaFormulario(){
    if(document.getElementById("nomeUsuario").value !="" && document.getElementById("nomeUsuario").value !="" && document.getElementById("telefoneUsuario").value !=""){
    alert("Prontinho! Você receberá as novidades por e-mail")
   }else{
    alert("Preencha os campos nome, e-mail e telefone!")
  }
}

