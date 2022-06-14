

var textoB = document.getElementById('bot');
var textoBoton = document.getElementById('au');

//Funcion para cambiar el texto que se nos muestra en el boton
function cambiarText(){

    if(textoB.innerHTML == 'Enseñar'){
        textoB.innerHTML = 'Esconder';
        mostrar();
    }
    else{
        textoB.innerHTML = 'Enseñar';
        quitar();
    }
}

//Al pulsar el botón, dependiendo de la opción que tengamos con ese botón se nos aumentará o disminuirá el tamaño de la imágen
//Solo se nos dará la opción de modificar el tamaño en el caso de que el otro botón tenga seleccionado la opción de que se nos muestre la
    //imágen por pantalla
function cambiarImg(){
    if(textoB.innerHTML=="Esconder"){
       
        if(textoBoton.innerHTML == "Aumentar"){
            textoBoton.innerHTML = "Disminuir";
            document.getElementById('pal').style.width = '120%';
            document.getElementById('pal').style.height = '120%';
        }
        else{
            textoBoton.innerHTML = "Aumentar";
            document.getElementById('pal').style.width = '50%';
            document.getElementById('pal').style.width = '50%';
        }
       
    }
}

//Funcion para mostrar el contenido de la imagen y de los botones que nos dan la opcion de aumentar/disminuir el tamaño de la imagen

function mostrar(){
    document.getElementById('pal').style.display='block';
    document.getElementById('au').style.display='block';
}


//Función para quitar el contenido que aparecia y el boton que da la opcion de aumentar/disminuir el tamaño de la imagen
function quitar(){
    document.getElementById('pal').style.display='none';
    document.getElementById('au').style.display='none';
}


