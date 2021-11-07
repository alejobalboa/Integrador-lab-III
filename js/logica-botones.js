"use strict"

/*LOGICA DE LOS BOTONES DEL FORMULARIO*/
/**************************************/

/*CARGA DEL SITIO*/
document.getElementById("resultado").style.display = "none";
document.getElementById("intro").style.display = "block";
document.getElementById("primera_parte").style.display = "none";
document.getElementById("segunda_parte").style.display = "none";
document.getElementById("tercera_parte").style.display = "none";
document.documentElement.style.setProperty("--mostrar", "none");
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

/*Si la respuesta es correcta devuelve 1 sino 0*/
function corregir_combo(identificador){
    var i;

    var valor = document.querySelector('input[name="' + identificador + '"]:checked');   

    if(valor.value == "c"){
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

    var correctas = 0;

    var resp3 = document.getElementById("preg3").value;
    var resp6 = document.getElementById("preg6").value;
    /* checkbox */
    var resp5_1 = document.getElementById("cbox1");
    var resp5_2 = document.getElementById("cbox2");
    var resp5_3 = document.getElementById("cbox3");
    var resp5_4 = document.getElementById("cbox4");
    var resp5_5 = document.getElementById("cbox5");

    var titu1 = document.getElementById("titulo_pregunta_1");
    if(corregir_combo("preg1") == 1){
        correctas += 1;   
        titu1.innerHTML +=  '<span class="icon-checkmark">';
        titu1.style.color = "green";
    }else{
        titu1.innerHTML +=  '<span class="icon-cross"></span>';   
        titu1.style.color = "red";
    }

    var titu2 = document.getElementById("titulo_pregunta_2");
    if(corregir_combo("preg2") == 1){
        correctas += 1;   
        titu2.innerHTML +=  '<span class="icon-checkmark">';
        titu2.style.color = "green";
    }else{
        titu2.innerHTML +=  '<span class="icon-cross"></span>';   
        titu2.style.color = "red";
    }
    
    var titu3 = document.getElementById("titulo_pregunta_3");
    if (resp3.toUpperCase() == "KURSK"){
        correctas += 1;
        titu3.innerHTML +=  '<span class="icon-checkmark">';
        titu3.style.color = "green";
    }else{
        titu3.innerHTML +=  '<span class="icon-cross"></span>';   
        titu3.style.color = "red";
    }

    var titu4 = document.getElementById("titulo_pregunta_4");
    if(corregir_combo("preg4") == 1){
        correctas += 1;   
        titu4.innerHTML +=  '<span class="icon-checkmark">';
        titu4.style.color = "green";
    }else{
        titu4.innerHTML +=  '<span class="icon-cross"></span>';   
        titu4.style.color = "red";
    }

    var titu5 = document.getElementById("titulo_pregunta_5");
    if (resp5_2.checked == true && resp5_3.checked == true && resp5_5.checked == true && resp5_1.checked == false && resp5_4.checked == false){
        correctas += 1;
        titu5.innerHTML +=  '<span class="icon-checkmark">';
        titu5.style.color = "green";
    }else{
        titu5.innerHTML +=  '<span class="icon-cross"></span>';   
        titu5.style.color = "red";
    }

    var titu6 = document.getElementById("titulo_pregunta_6");
    if (resp6.toString() == "1942"){
        correctas += 1;
        titu6.innerHTML +=  '<span class="icon-checkmark">';
        titu6.style.color = "green";
    }else{
        titu6.innerHTML +=  '<span class="icon-cross"></span>';   
        titu6.style.color = "red";
    }

    var titu7 = document.getElementById("titulo_pregunta_7");
    if(corregir_combo("preg7") == 1){
        correctas += 1;   
        titu7.innerHTML +=  '<span class="icon-checkmark">';
        titu7.style.color = "green";
    }else{
        titu7.innerHTML +=  '<span class="icon-cross"></span>';   
        titu7.style.color = "red";
    }

    return correctas;
}

function mostrar_respuestas(){
    document.documentElement.style.setProperty("--color-incorrecto", "red");
    document.documentElement.style.setProperty("--color-correcto", "green");
    document.documentElement.style.setProperty("--mostrar", "block")
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
        document.getElementById("resultado").innerHTML = "Usted contesto " + c + " de 7 preguntas correctamente";
        mostrar_respuestas();
    }else{
        alert("es necesario responder todas las preguntas")
    }
}    

/*CREAR FUNCION PARA DESHABILITAR EL FORMULARIO */




