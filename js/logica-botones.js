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

/*FUNCIONES*/
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

function contar_correctas(){

    var correctas;

    /*LA FUNCION ESTA SOLO DEBE DEVOLVER CUANTAS PREGUNTAS CORRECTAS CONTESTO EL USUARIO, BUSCAR UNA PROPIEDAD EN LOS TEXTBOX PARA NO QUEMAR LA RESPUESTA ACÁ EN EL JS OP QUEMARLA
    Y A LA BIJA*/ 
    return correctas;


}



document.getElementById("finalizar").onclick = function (){
    /*VALIDACION FORMULARIO*/
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
        document.getElementById("resultado").style.display = "block";

        /*ACA ABAJO DEBERIA INDICARLE AL USUARIO CUANTAS RESPUESTAS CONTESTO CORRECTAMENTE*/
        var c = contar_correctas()
        document.getElementById("resultado").innerHTML = "usted contesto " + c + " de 7 preguntas correctamente"; /*TENGO QUE DARLE UN FORMATO AL HTML Y PONERLO EN UNN BOX DE SER POSIBLE*/
        }else{
        alert("es necesario responder todas las preguntas")
    }
}    




