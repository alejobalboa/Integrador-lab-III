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

document.getElementById("finalizar").onclick = function (){
    if (validacion() = 1){
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
