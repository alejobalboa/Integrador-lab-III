/*LOGICA DE LOS BOTONES DEL FORMULARIO*/
/**************************************/

/*CARGA DEL SITIO*/
document.getElementById("intro").style.display = "flex";
document.getElementById("primera_parte").style.display = "none";
document.getElementById("segunda_parte").style.display = "none";
/*document.getElementById("tercera_parte").style.display = "none";*/

/*INICIO DEL CUESTIONARIO*/
document.getElementById("empezar_cue").onclick = function (){
        document.getElementById("intro").style.display = "none";
        document.getElementById("primera_parte").style.display = "flex";
    }

/*PRIMERA PAGINA*/
document.getElementById("anterior_2").onclick = function (){
        document.getElementById("intro").style.display = "flex";
        document.getElementById("primera_parte").style.display = "none";
    }

document.getElementById("siguiente_2").onclick = function (){
        document.getElementById("primera_parte").style.display = "none";
        document.getElementById("segunda_parte").style.display = "flex";
    }

/*SEGUNDA PAGINA*/
document.getElementById("anterior_3").onclick = function (){
        document.getElementById("primera_parte").style.display = "flex";
        document.getElementById("segunda_parte").style.display = "none";
    }

document.getElementById("siguiente_3").onclick = function (){
        document.getElementById("segunda_parte").style.display = "none";
        document.getElementById("tercera_parte").style.display = "flex";
    }
