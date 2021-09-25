

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