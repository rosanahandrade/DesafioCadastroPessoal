

function enviar(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var celular = document.getElementById("cel").value;
    var fixo = document.getElementById("tel").value;
    var rua = document.getElementById("rua").value;
    var num = document.getElementById("num").value;

    if (nome ==""){
        alert("Campo NOME obrigatório");
       return false;
    }

    if (sobrenome == ""){
        alert("Campo SOBRENOME obrigatório");  
        return false;  
    }

    if (celular == ""){
        alert ("Campo CELULAR obrigatório");
        return false;
    }

    if (fixo == ""){
        alert ("Campo TEL FIXO obrigatório");
        return false;
    }

    if (rua == ""){
        alert ("Campo RUA obrigatório");
        return false;
    }

    if(num == ""){
        alert("Campo NÚMERO obrigatório");
        return false;
    } 
    
    else{

        alert ("Formulário Enviado");
    }

  
}



function mascara_cpf(){
  

    let cpf = document.getElementById("cpf");

    if (cpf.value.length == 3 || cpf.value.length == 7){

        cpf.value += "."

    } else if (cpf.value.length == 11) {

        cpf.value += "-"


    }

}

function mascara_rg(){
  

    let rg = document.getElementById("rg");

    if (rg.value.length == 2 || rg.value.length == 6 ){

        rg.value += "."

    } else if (rg.value.length == 10) {

        rg.value += "-"


    }

}


function mascara_tel(){

    let telefone = document.getElementById("tel");

    

    if (telefone.value.length == 1 ){

        telefone.value = "(" + telefone.value;

    } if (telefone.value.length == 3 ){

        telefone.value += ")"
    } else if (telefone.value.length == 8) {

        telefone.value += "-"

    }



}

function mascara_cel(){


    let celular = document.getElementById("cel");

    

    if (celular.value.length == "1"){

        celular.value = "(" + celular.value;

    } if (celular.value.length == "3"){

        celular.value += ")"
    } else if (celular.value.length == 9) {

        celular.value += "-"

    }



}


function mascara_cep(){

    let cep = document.getElementById("cep");

    if ( cep.value.length == 5 ){

       cep.value += "-"



    }


}