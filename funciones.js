/**
 * Validacion de input para que se ingrese una nota musical valida.
 * @method LeerNota
 * @return alert
 */
function LeerNotayMostrar(){
    var nota= document.getElementById("notamusical").value;
    if ((nota!="DO") && (nota!="RE") && (nota!="MI") && (nota!="FA") && (nota!="SOL") && (nota!="LA") && (nota!="SI") && (nota!="C") && (nota!="D") && (nota!="E") && (nota!="F") && (nota!="G") && (nota!="A") && (nota!="B")){

       alert ("♪ Valor incorrecto. Ingrese una nota musical. ♪");
    }
    if (nota=="MI" || nota=="E" || nota=="SI" || nota=="B"  ){
        document.getElementById("sostenido").disabled=true;
    }
    else{
        document.getElementById("sostenido").disabled=false;
    }
}

function DibujarCanvas(){
    var canvas = document.getElementById("graf_guitarra");
    var ctx= canvas.getContext("2d");
    var Xmax= canvas.width;
    var Ymax= canvas.height;
    ctx.fillStyle= "#574329";
    ctx.fillRect(30, 0, 3, Ymax);
    ctx.fillRect(60, 0, 3, Ymax);
    ctx.fillRect(90, 0, 3, Ymax);
    ctx.fillRect(120, 0, 3, Ymax);
    ctx.fillRect(150, 0, 3, Ymax);
    ctx.fillRect(180, 0, 3, Ymax);
    ctx.fillRect(210, 0, 3, Ymax);
    ctx.fillRect(240, 0, 3, Ymax);
    ctx.fillRect(270, 0, 3, Ymax);

    ctx.fillStyle="#b1956e";
    ctx.arc(75, Ymax/2, 2, 0, 2 * Math.PI);
    ctx.arc(135, Ymax/2, 2, 0, 2 * Math.PI);
    ctx.arc(195, Ymax/2, 2, 0, 2 * Math.PI);
    ctx.arc(255, Ymax/2, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle= "#c6a000";
    ctx.fillRect(0, 11, Xmax, 2);
    ctx.fillRect(0, 36, Xmax, 2);
    ctx.fillRect(0, 61, Xmax, 2);
    ctx.fillRect(0, 86, Xmax, 3);
    ctx.fillRect(0, 111, Xmax, 3);
    ctx.fillRect(0, 136, Xmax, 4);
    ctx.fillStyle= "#241d1a";
    ctx.fillRect(0, 0, 6, Ymax);
}
function Graficar (){
    var canvas = document.getElementById("graf_guitarra");
    var ctx= canvas.getContext("2d");
    var nota= document.getElementById("notamusical").value;
    var opcion= document.getElementById("opciones").value;
    var sostenido= document.getElementById("opciones").value;
    if ((nota=="DO" || nota=="C")){
        if(opcion=="ninguna"){
            if(sostenido){
                new Audio("Sonidos/do sostenido.mp3").play();
            }
            else{

            }
        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="RE" || nota=="D")){
        if(opcion=="ninguna"){
            if(sostenido){

                new Audio("Sonidos/re sostenido.mp3").play();
            }
            else{

            }
        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="MI" || nota=="E")){
        if(opcion=="ninguna"){

        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="FA" || nota=="F")){
        if(opcion=="ninguna"){
            if(sostenido){
                new Audio("Sonidos/fa sostenido.mp3").play();
            }
            else{

            }
        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="SOL" || nota=="G")){
        if(opcion=="ninguna"){
            if(sostenido){
                new Audio("Sonidos/sol sostenido.mp3").play();
            }
            else{

            }
        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="LA" || nota=="A")){
        if(opcion=="ninguna"){
            if(sostenido){
                new Audio("Sonidos/la sostenido.mp3").play();
            }
            else{

            }
        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }
    if ((nota=="SI" || nota=="B")){
        if(opcion=="ninguna"){

        }
        if(opcion=="menor"){
            if(sostenido){

            }
            else{

            }
        }
        if(opcion=="septima"){
            if(sostenido){

            }
            else{

            }
        }

    }

}