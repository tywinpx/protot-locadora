alert("Atenção, Este projeto não armazena nenhum dado inserido, e também não gera nenhuma interação com os dados inseridos, o intuito é de apenas demonstrar visualmente um protótipo de site!")
function login() {
var field = document.getElementById("inputEmail").value;
var res;
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
  res = true
}else {
document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  res = false;
}
  //o código verifica se o email é autentico se perceber que há caracteres para fomarem o dominio após o @, se há um . após o dominio e mais caracteres após o ponto

 if (res == true){
   window.location.href = "inicio/home.html";
 } 
}
function cadastrar(){
  window.location.href = "cadastro/cad.html";
}
function recuperar(){
  window.location.href = "rec/rec.html";
}
//após efetuar o login o usuário é redirecionado para a lista de veículos