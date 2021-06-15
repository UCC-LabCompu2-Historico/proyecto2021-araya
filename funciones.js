    /**
     * Validacion de input para que se ingrese una nota musical valida. Para notas MI y SI, deshabilita el checkbox de acorde sostenido ya que no existe.
     * @method Validar
     * @return alert
     */
    function Validar(){
        var nota= document.getElementById("notamusical").value;
        if ((nota!="DO") && (nota!="RE") && (nota!="MI") && (nota!="FA") && (nota!="SOL") && (nota!="LA") && (nota!="SI") && (nota!="C") && (nota!="D") && (nota!="E") && (nota!="F") && (nota!="G") && (nota!="A") && (nota!="B")){

           alert ("♪ Valor incorrecto. Ingrese una nota musical. ♪");
           location.reload();
        }
        if (nota=="MI" || nota=="E" || nota=="SI" || nota=="B"  ){
            document.getElementById("sostenido").disabled=true;
        }
        else{
            document.getElementById("sostenido").disabled=false;
        }
    }
    /** Dibuja el mastil de la guitarra con 6 cuerdas, 10 trastes y cejuela
    * @method DiubjarCanvas
    * @return ctx
    */
    function DibujarCanvas(){
        var canvas = document.getElementById("graf_guitarra");
        var ctx= canvas.getContext("2d");
        var Xmax= canvas.width;
        var Ymax= canvas.height;
        ctx.fillStyle= "#574329";
        ctx.fillRect(134, 0, 4, Ymax);
        ctx.fillRect(242, 0, 4, Ymax);
        ctx.fillRect(350, 0, 4, Ymax);
        ctx.fillRect(458, 0, 4, Ymax);
        ctx.fillRect(566, 0, 4, Ymax);
        ctx.fillRect(672, 0, 4, Ymax);
        ctx.fillRect(780, 0, 4, Ymax);
        ctx.fillRect(888, 0, 4, Ymax);
        ctx.fillRect(996, 0, 4, Ymax);
        ctx.fillRect(1104, 0, 4, Ymax);

        ctx.fillStyle="#b1956e";
        ctx.arc(296, Ymax/2, 7, 0, 2 * Math.PI);
        ctx.arc(512, Ymax/2, 7, 0, 2 * Math.PI);
        ctx.arc(726, Ymax/2, 7, 0, 2 * Math.PI);
        ctx.arc(942, Ymax/2, 7, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle= "#c6a000";
        ctx.fillRect(0, 26, Xmax, 2);
        ctx.fillRect(0, 56, Xmax, 2);
        ctx.fillRect(0, 86, Xmax, 2);
        ctx.fillRect(0, 116, Xmax, 3);
        ctx.fillRect(0, 146, Xmax, 3);
        ctx.fillRect(0, 176, Xmax, 4);
        ctx.fillStyle= "#241d1a";
        ctx.fillRect(0, 0, 26, Ymax);
    }
    /** Grafica las notas y reproduce el sonido de cada acorde en base a los datos ingresados
    * @method Graficar
    * @return ctx
    */
    function Graficar () {
        var canvas = document.getElementById("graf_guitarra");
        var ctx = canvas.getContext("2d");
        var nota = document.getElementById("notamusical").value;
        var opcion = document.getElementById("opciones").value;
        var sostenido = document.getElementById("sostenido");
        document.getElementById("notamusical").disabled=true;
        document.getElementById("opciones").disabled=true;
        document.getElementById("sostenido").disabled=true;

        var Xmax= canvas.width;
        var Ymax= canvas.height;
        var medio=54;
        ctx.fillStyle="#f1a519";

        if(nota==""){
            alert("Ingrese una nota musical ♪");
            location.reload();
        }

        if ((nota == "DO" || nota == "C")) {
            if (opcion == "ninguna") {
                if (sostenido.checked==false) {

                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                    new Audio("Sonidos/do.mp3").play();
                    document.getElementById("do").style.display='block';
                }
                else  {
                    new Audio("Sonidos/do sostenido.mp3").play();
                    document.getElementById("doS").style.display='block';
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            if (opcion == "menor") {
                if (sostenido.checked==false) {
                    document.getElementById("dom").style.display='block';
                    new Audio("Sonidos/dom.mp3").play();
                    ctx.beginPath();
                    ctx.arc(350-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(350-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(566-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                } else {
                    document.getElementById("doSm").style.display='block';
                    new Audio("Sonidos/doSm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(458-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(458-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
            if (opcion == "septima") {
                if (sostenido.checked==true) {
                    document.getElementById("dostS").style.display='block';
                    new Audio("Sonidos/dostS.mp3").play();
                    ctx.beginPath();
                    ctx.arc(458-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(458-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                } else {
                    document.getElementById("dost").style.display='block';
                    new Audio("Sonidos/dost.mp3").play();
                    ctx.beginPath();
                    ctx.arc(350-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(566-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }

        }

        if ((nota=="RE" || nota=="D")){
            if(opcion=="ninguna"){
                if(sostenido.checked==true){

                    new Audio("Sonidos/re sostenido.mp3").play();
                    document.getElementById("reS").style.display='block';
                    ctx.beginPath();
                    ctx.arc(672-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(888-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(888-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(888-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    new Audio("Sonidos/re.mp3").play();
                    document.getElementById("re").style.display='block';
                    ctx.beginPath();
                    ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            if(opcion=="menor"){
                if(sostenido.checked==true){
                    document.getElementById("reSm").style.display='block';
                    new Audio("Sonidos/reSm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(672-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(780-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(888-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(888-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
                else{
                    document.getElementById("rem").style.display='block';
                    new Audio("Sonidos/rem.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
            }
            if(opcion=="septima"){
                if(sostenido.checked==true){
                    document.getElementById("restS").style.display='block';
                    new Audio("Sonidos/restS.mp3").play();
                    ctx.beginPath();
                    ctx.arc(672-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(888-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(672-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(888-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
                else{
                    document.getElementById("rest").style.display='block';
                    new Audio("Sonidos/rest.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }

        }
        if ((nota=="MI" || nota=="E")){
            if(opcion=="ninguna"){
                document.getElementById("mi").style.display='block';
                new Audio("Sonidos/mi.mp3").play();
                ctx.beginPath();
                ctx.arc(134-medio, 86, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            if(opcion=="menor"){
                document.getElementById("mim").style.display='block';
                new Audio("Sonidos/mim.mp3").play();
                ctx.beginPath();
                ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            if(opcion=="septima"){
                document.getElementById("mist").style.display='block';
                new Audio("Sonidos/mist.mp3").play();
                ctx.beginPath();
                ctx.arc(134-medio, 86, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }

        }
        if ((nota=="FA" || nota=="F")){
            if(opcion=="ninguna"){
                if(sostenido.checked==true){
                    new Audio("Sonidos/fa sostenido.mp3").play();
                    document.getElementById("faS").style.display='block';
                    ctx.beginPath();
                    ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    new Audio("Sonidos/fa.mp3").play();
                    document.getElementById("fa").style.display='block';
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }

                }

            if(opcion=="menor"){
                if(sostenido.checked==true){
                    document.getElementById("faSm").style.display='block';
                    new Audio("Sonidos/faSm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
                else{
                    document.getElementById("fam").style.display='block';
                    new Audio("Sonidos/fam.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            if(opcion=="septima"){
                if(sostenido.checked==true){
                    document.getElementById("fastS").style.display='block';
                    new Audio("Sonidos/fastS.mp3").play();
                    ctx.beginPath();
                    ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
                else{
                    document.getElementById("fast").style.display='block';
                    new Audio("Sonidos/fast.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }

        }
        if ((nota=="SOL" || nota=="G")){
            if(opcion=="ninguna"){
                if(sostenido.checked==true){
                    new Audio("Sonidos/sol sostenido.mp3").play();
                    document.getElementById("solS").style.display='block';
                    ctx.beginPath();
                    ctx.arc(458-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
                else{
                    new Audio("Sonidos/sol.mp3").play();
                    document.getElementById("sol").style.display='block';
                    ctx.beginPath();
                    ctx.arc(350-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
            }
            if(opcion=="menor"){
                if(sostenido.checked==true){
                    document.getElementById("solSm").style.display='block';
                    new Audio("Sonidos/solSm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(458-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    document.getElementById("solm").style.display='block';
                    new Audio("Sonidos/solm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(350-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            if(opcion=="septima"){
                if(sostenido.checked==true){
                    document.getElementById("solstS").style.display='block';
                    new Audio("Sonidos/solstS.mp3").play();
                    ctx.beginPath();
                    ctx.arc(458-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(780-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(566-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(458-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(672-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    document.getElementById("solst").style.display='block';
                    new Audio("Sonidos/solst.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
            }

        }
        if ((nota=="LA" || nota=="A")){
            if(opcion=="ninguna"){
                if(sostenido.checked==true){
                    new Audio("Sonidos/la sostenido.mp3").play();
                    document.getElementById("laS").style.display='block';
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    new Audio("Sonidos/la.mp3").play();
                    document.getElementById("la").style.display='block';
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            if(opcion=="menor"){
                if(sostenido.checked==true){
                    document.getElementById("laSm").style.display='block';
                    new Audio("Sonidos/laSm.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    document.getElementById("lam").style.display='block';
                    new Audio("Sonidos/lam.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();

                }
            }
            if(opcion=="septima"){
                if(sostenido.checked==true){
                    document.getElementById("lastS").style.display='block';
                    new Audio("Sonidos/lastS.mp3").play();
                    ctx.beginPath();
                    ctx.arc(134-medio, 26, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 86, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 176, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(350-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(134-medio, 146, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
                else{
                    document.getElementById("last").style.display='block';
                    new Audio("Sonidos/last.mp3").play();
                    ctx.beginPath();
                    ctx.arc(242-medio, 56, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.arc(242-medio, 116, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }

        }
        if ((nota=="SI" || nota=="B")){
            if(opcion=="ninguna"){
                new Audio("Sonidos/si.mp3").play();
                document.getElementById("si").style.display='block';
                ctx.beginPath();
                ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(458-medio, 86, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 176, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(458-medio, 56, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(458-medio, 116, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            if(opcion=="menor"){
                document.getElementById("sim").style.display='block';
                new Audio("Sonidos/sim.mp3").play();
                ctx.beginPath();
                ctx.arc(242-medio, 26, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(458-medio, 86, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 176, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(350-medio, 56, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(458-medio, 116, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(242-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            if(opcion=="septima"){
                document.getElementById("sist").style.display='block';
                new Audio("Sonidos/sist.mp3").play();
                ctx.beginPath();
                ctx.arc(780-medio, 26, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(888-medio, 86, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(780-medio, 176, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(780-medio, 56, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(780-medio, 116, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(996-medio, 146, 12, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();

            }

        }

    }
    /**
     * Carga nuevamente la pagina para permitir ingresar datos nuevos
     * @method Reset
     */
    function Reset(){
        location.reload();
    }

