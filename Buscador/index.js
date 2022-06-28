

const bot = document.querySelector('#busqueda');


//Nombres emoji
const botonEmj = document.querySelector('.emj');

botonEmj.addEventListener("click", function(){

    //Variables
        //Array donde metere los datos que he buscado
        let datos=[];
        

    //Uso de la API para obtener los datos de los personajes de Marvel
        //Primero llamamos a fetch con la dirección de nuestra API
        fetch('https://emojihub.herokuapp.com/api/all').then(res => res.json()).then(data => datos = [...datos,data]);

    console.log(datos);

    function busqued(valorB,datos){

        var f = datos.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function mostrarDatos(valorB){
        var dat = busqued(valorB.target.value,datos);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("muestra").innerHTML = na;
    }

   document.getElementById("busqueda").addEventListener('keyup',mostrarDatos);
   document.getElementById("busqueda").addEventListener('change',mostrarDatos);
   
    
});


//Pelicula
const botonPeli = document.querySelector('.pel')


botonPeli.addEventListener("click",function(){

    //Variables
        //Array donde metere los datos que he buscado
        let datos=[];
        

    //Uso de la API para obtener los datos de las pelis
    fetch('https://api.tvmaze.com/shows').then(res => res.json()).then(data =>{
        datos= [...data];
        console.log(datos);
    } );
    
    console.log(datos);
    function busqued(valorB,datos){

        var f = datos.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function mostrarDatos(valorB){
        var dat = busqued(valorB.target.value,datos);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("muestra").innerHTML = na;
    }

   document.getElementById("busqueda").addEventListener('keyup',mostrarDatos);
   document.getElementById("busqueda").addEventListener('change',mostrarDatos);
   
});

//Pokemon
const botonPok = document.querySelector('.pok')


botonPok.addEventListener("click",function(){
  
    //Variables
        //Array donde metere los datos que he buscado
        let datos=[];
        

    //Uso de la API para obtener los datos de los pokemon
    fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(data => datos.push(...data.results));

    console.log(datos);

    function busqued(valorB,datos){
        
        var f = datos.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function mostrarDatos(valorB){
        var dat = busqued(valorB.target.value,datos);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("muestra").innerHTML = na;
    }

   document.getElementById("busqueda").addEventListener('keyup',mostrarDatos);
   document.getElementById("busqueda").addEventListener('change',mostrarDatos);
   
});
