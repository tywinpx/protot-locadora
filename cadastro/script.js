function validarEmail() {
var field = document.getElementById("inputEmail").value;
var resEmail;
usuario = field.substring(0, field.indexOf("@"));
dominio = field.substring(field.indexOf("@")+ 1, field.length);

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
document.getElementById("msgemail").innerHTML="<font color='green'>E-mail Válido</font>";
  return true
}
else{
document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  return false;
}
}
function validarCPF(){
  var soma;
  var resto;
  var resCPF;
  var cpf = document.getElementById("inputCPF").value;
  soma = 0;
  if (cpf == "00000000000"){resCPF = false;}
  for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11-i);
  resto = (soma * 10) % 11;
  
  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) {resCPF = false;}
  
  soma = 0;
  for (i = 1; i <= 10; i++)soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11
  
  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))){resCPF = false;          
} else {resCPF = true;}
  
  if (resCPF == false){
document.getElementById("msgcpf").innerHTML="<font color='red'>CPF Inválido</font>";
    return false;
  } else if (resCPF == true){
document.getElementById("msgcpf").innerHTML="<font color='green'>CPF Válido</font>";
    return true;
  }
}
//O codigo de validacao do cpf é baseado no utilizado pelo site da receita federal
//Para validar o CPF é necessário a

function confSenha(){
  var senha1 = document.getElementById("senha1").value
  var senha2 = document.getElementById("senha2").value
  
 if (senha1 != "" && senha2 != "" && senha1 === senha2) {  document.getElementById("msgSenha").innerHTML="<font color='green'>Senhas correspondem</font>";
    return true;
  } else {
document.getElementById("msgSenha").innerHTML="<font color='red'>Senhas não correspondem</font>";
    return false;
  }
}

function calcIdade(){
  var data = document.getElementById("data").value
  var idade = Math.floor(moment(new Date()).diff(moment(data),'years',true));
return (idade)
}
//O calculo da idade é feito através do pacote em código aberto moment.js 

function cadastro() {
  var resEmail = (validarEmail())
  var resCPF = (validarCPF())
  var resSenha = (confSenha())
  var nome = document.getElementById("nome").value
  var resIdade = (calcIdade());
  if (resEmail == true && resCPF == true && resSenha == true && nome != "" && resIdade >= 21) {
    window.location.href = "inicio/home.html";
  } else if (resIdade < 21) {
    alert("você precisa ter pelo menos 21 anos para realizar o cadastro!")
  } else {
    alert("Por favor, preencha corretamente todos os campos")
  }
  
}
function cancelar(){
  window.location.href = "javascript:history.back()"
}