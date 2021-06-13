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
function Graficar () {
    var canvas = document.getElementById("graf_guitarra");
    var ctx = canvas.getContext("2d");
    var nota = document.getElementById("notamusical").value;
    var opcion = document.getElementById("opciones").value;
    var sostenido = document.getElementById("sostenido");

    if ((nota == "DO" || nota == "C")) {
        if (opcion == "ninguna") {
            if (sostenido.checked==false) {
                new Audio("Sonidos/do.mp3").play();
                document.getElementById("do").style.display='block';
            }
            else  {
                new Audio("Sonidos/do sostenido.mp3").play();
                document.getElementById("doS").style.display='block';
            }
        }
        if (opcion == "menor") {
            if (sostenido.checked==false) {
                document.getElementById("dom").style.display='block';
                new Audio("Sonidos/doSm.mp3").play();
            } else {
                document.getElementById("doSm").style.display='block';
                new Audio("Sonidos/dom.mp3").play();
            }
        }
        if (opcion == "septima") {
            if (sostenido.checked==true) {
                document.getElementById("dostS").style.display='block';
            } else {
                document.getElementById("dost").style.display='block';
            }
        }

    }

    if ((nota=="RE" || nota=="D")){
        if(opcion=="ninguna"){
            if(sostenido.checked==true){

                new Audio("Sonidos/re sostenido.mp3").play();
                document.getElementById("reS").style.display='block';
            }
            else{
                new Audio("Sonidos/re.mp3").play();
                document.getElementById("re").style.display='block';
            }
        }
        if(opcion=="menor"){
            if(sostenido.checked==true){
                document.getElementById("reSm").style.display='block';
                new Audio("Sonidos/reSm.mp3").play();
            }
            else{
                document.getElementById("rem").style.display='block';
                new Audio("Sonidos/rem.mp3").play();
            }
        }
        if(opcion=="septima"){
            if(sostenido.checked==true){
                document.getElementById("restS").style.display='block';
            }
            else{
                document.getElementById("rest").style.display='block';
            }
        }

    }
    if ((nota=="MI" || nota=="E")){
        if(opcion=="ninguna"){
            document.getElementById("mi").style.display='block';
            new Audio("Sonidos/mi.mp3").play();
        }
        if(opcion=="menor"){
            document.getElementById("mim").style.display='block';
            new Audio("Sonidos/mim.mp3").play();
        }
        if(opcion=="septima"){
            document.getElementById("mist").style.display='block';
        }

    }
    if ((nota=="FA" || nota=="F")){
        if(opcion=="ninguna"){
            if(sostenido.checked==true){
                new Audio("Sonidos/fa sostenido.mp3").play();
                document.getElementById("faS").style.display='block';
            }
            else{
                new Audio("Sonidos/fa.mp3").play();
                document.getElementById("fa").style.display='block';
            }

            }

        if(opcion=="menor"){
            if(sostenido.checked==true){
                document.getElementById("faSm").style.display='block';
                new Audio("Sonidos/faSm.mp3").play();
            }
            else{
                document.getElementById("fam").style.display='block';
                new Audio("Sonidos/fam.mp3").play();
            }
        }
        if(opcion=="septima"){
            if(sostenido.checked==true){
                document.getElementById("fastS").style.display='block';
            }
            else{
                document.getElementById("fast").style.display='block';
            }
        }

    }
    if ((nota=="SOL" || nota=="G")){
        if(opcion=="ninguna"){
            if(sostenido.checked==true){
                new Audio("Sonidos/sol sostenido.mp3").play();
                document.getElementById("solS").style.display='block';

            }
            else{
                new Audio("Sonidos/sol.mp3").play();
                document.getElementById("sol").style.display='block';
            }
        }
        if(opcion=="menor"){
            if(sostenido.checked==true){
                document.getElementById("solSm").style.display='block';
                new Audio("Sonidos/solSm.mp3").play();
            }
            else{
                document.getElementById("solm").style.display='block';
                new Audio("Sonidos/solm.mp3").play();
            }
        }
        if(opcion=="septima"){
            if(sostenido.checked==true){
                document.getElementById("solstS").style.display='block';
            }
            else{
                document.getElementById("solst").style.display='block';
            }
        }

    }
    if ((nota=="LA" || nota=="A")){
        if(opcion=="ninguna"){
            if(sostenido.checked==true){
                new Audio("Sonidos/la sostenido.mp3").play();
                document.getElementById("laS").style.display='block';
            }
            else{
                new Audio("Sonidos/la.mp3").play();
                document.getElementById("la").style.display='block';
            }
        }
        if(opcion=="menor"){
            if(sostenido.checked==true){
                document.getElementById("laSm").style.display='block';
                new Audio("Sonidos/laSm.mp3").play();
            }
            else{
                document.getElementById("lam").style.display='block';
                new Audio("Sonidos/lam.mp3").play();
            }
        }
        if(opcion=="septima"){
            if(sostenido.checked==true){
                document.getElementById("lastS").style.display='block';
            }
            else{
                document.getElementById("last").style.display='block';
            }
        }

    }
    if ((nota=="SI" || nota=="B")){
        if(opcion=="ninguna"){
            new Audio("Sonidos/si.mp3").play();
            document.getElementById("si").style.display='block';
        }
        if(opcion=="menor"){
            document.getElementById("sim").style.display='block';
            new Audio("Sonidos/sim.mp3").play();
        }
        if(opcion=="septima"){
            document.getElementById("sist").style.display='block';

        }

    }

}