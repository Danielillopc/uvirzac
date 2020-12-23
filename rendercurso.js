function agregar_titulo_html(){
    document.getElementById('titulo').innerHTML=curso.nombre;
    document.getElementById('tituloh1').innerHTML=curso.nombre;
    /*let imagen=document.createElement("img");
    imagen.src=curso.imagen;
    imagen.style="width:100%";
    document.getElementById('imagencurso').appendChild(imagen);
    console.log(temas.length);*/
}
function agregar_temas(){
    const ul=document.getElementById("slide_out");
    var tema = ""; 
    tema='<li><div class="user-view" style="border-bottom: 1px solid black; box-shadow: -1px 5px 3px grey;"> <div class="background" id="imagencurso"><img src="'+curso.imagen+'" style="width: 100%;"></div><a href="#"><img class="circle pulse" src="'+curso.fotoprofesor+'" style="border: 1px solid white; box-shadow: 1px 1px 10px black;"></a><span class="white-text name" style="text-shadow: 2px 2px 5px black;">Dr. Daniel Rodriguez Ramos</span><span class="white-text email" style="text-shadow: 2px 2px 5px black;">danielr@uaz.edu.mx</span></div></li>'
    ul.innerHTML=tema;

    for (let i=0;i<=temas.length-1;i++){
        console.log(temas[i]);
       
        tema+='<li><a href="#tema'+(i+1)+'" class="blue-text">'+temas[i]+'</a></li>' 

    }
    ul.innerHTML=tema;

}

function agregar_modulos(){
 var modulo=document.getElementById("modulos");
 var tema="";
 for (let i=0;i<=temas.length-1;i++){
        tema+='<a name="tema'+(i+1)+'"></a> <div class="container "></div>      <div class="row">          <div class="  col s12 m12 l12">            <div class="card card-panel hoverable ">                <span class="card-title center blue-text"><h4>'+temas[i]+'</h4></span>              <div class="card-content  ">                  <span> '+encabezado[i]+'</span>      <br>                 <br>             <div class="center video-container">                          <iframe  src="'+linkvideo[i]+'"  frameborder="0" allow="autoplay; fullscreen"   allowfullscreen></iframe>                      </div>              </div>            <div class="card-action center ">            <a href="#top" class="btn light-blue darken-4 ">Regresar al Inicio</a>              </div>            </div>          </div>      </div> '
 }
 modulo.innerHTML=tema;
}

function renderizar(){
    agregar_titulo_html();
    agregar_temas();
    agregar_modulos();
}

