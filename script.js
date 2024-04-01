function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className= "";
    opciones[1].className= "";
    opciones[2].className= "";
    opciones[3].className= "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
};

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className="responsive";
    }else{
        x.className ="";
    }
};

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 50){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bootstrap").classList.add("barra-progreso3");
        document.getElementById("gitHup").classList.add("barra-progreso4");
        document.getElementById("canva").classList.add("barra-progreso5");
        document.getElementById("ps").classList.add("barra-progreso6");
    }
}


