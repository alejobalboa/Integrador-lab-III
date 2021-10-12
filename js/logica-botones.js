"use strict"

/*LOGICA DE LOS BOTONES DEL FORMULARIO*/
/**************************************/

/*CARGA DEL SITIO*/
document.getElementById("intro").style.display = "block";
document.getElementById("primera_parte").style.display = "none";
document.getElementById("segunda_parte").style.display = "none";
document.getElementById("tercera_parte").style.display = "none";
/*document.getElementById("tercera_parte").style.display = "none";*/

/*INICIO DEL CUESTIONARIO*/
document.getElementById("empezar_cue").onclick = function (){
        document.getElementById("intro").style.display = "none";
        document.getElementById("primera_parte").style.display = "block";
    }

/*PRIMERA PAGINA*/
document.getElementById("anterior_2").onclick = function (){
        document.getElementById("intro").style.display = "block";
        document.getElementById("primera_parte").style.display = "none";
    }

document.getElementById("siguiente_2").onclick = function (){
        document.getElementById("primera_parte").style.display = "none";
        document.getElementById("segunda_parte").style.display = "block";
    }

/*SEGUNDA PAGINA*/
document.getElementById("anterior_3").onclick = function (){
        document.getElementById("primera_parte").style.display = "block";
        document.getElementById("segunda_parte").style.display = "none";
    }

document.getElementById("siguiente_3").onclick = function (){
        document.getElementById("segunda_parte").style.display = "none";
        document.getElementById("tercera_parte").style.display = "block";
    }

/*TERCERA PAGINA*/
document.getElementById("anterior_4").onclick = function (){
    document.getElementById("segunda_parte").style.display = "block";
    document.getElementById("tercera_parte").style.display = "none";
}


function validar_checkbox(identificador){
    var i;

    var valor = document.querySelector('input[name="' + identificador + '"]:checked');   

    if(valor != null){
        return 1;
    }

    return 0;
}

function validar_respuestas() {
    var resp3 = document.getElementById("preg3").value;
    var resp6 = document.getElementById("preg6").value;
    
    if (!(validar_checkbox("preg1")) || !(validar_checkbox("preg2")) || resp3 == "" || !(validar_checkbox("preg4")) || !(validar_checkbox("preg5")) || resp6 == "" || !(validar_checkbox("preg7"))){
        console.log("ERROR");
        return false;
    }
    return true;
}

document.getElementById("finalizar").onclick = function (){
    if (validar_respuestas()){
        document.getElementById("primer_titulo").style.display = "none";
        document.getElementById("anterior_2").style.display = "none";
        document.getElementById("siguiente_2").style.display = "none";
        document.getElementById("primera_parte").style.display = "block";
        document.getElementById("segundo_titulo").style.display = "none";
        document.getElementById("anterior_3").style.display = "none";
        document.getElementById("siguiente_3").style.display = "none";
        document.getElementById("segunda_parte").style.display = "block";
        document.getElementById("anterior_4").style.display = "none";
        document.getElementById("finalizar").style.display = "none";
        document.getElementById("tercera_parte").style.display = "block";
        document.getElementById("tercer_titulo").style.display = "none";
    }else{
        alert("es necesario responder todas las preguntas")
    }
}    


/*FUNCIONES*/
/*
function val_resp1(){
    var i;
    var preg1 = document.getElementById("preg_1");

    console.log("paso");

    for (i=0; preg1.p1.length; i++){
        console.log("paso");
        if (preg1.p1.checked)
            return 1;
    }

    return 0;
}

function validar_respuestas() {
    
    if (val_resp1 = 0){
        alert("ERROR");
    }

    return true;
}*/