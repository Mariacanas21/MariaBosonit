

const bot = document.querySelector('#search');


//Nombres emoji
const botonEmj = document.querySelector('.emj');

botonEmj.addEventListener("click", function(){

    //Variables
        //Array donde metere los datos que he buscado
        let dat=[];
        

    //Uso de la API para obtener los datos de los personajes de Marvel
        //Primero llamamos a fetch con la dirección de nuestra API
        fetch('https://emojihub.herokuapp.com/api/all').then(res => res.json()).then(data =>{
            dat= [...data];
            console.log(dat);
        } );

    console.log(dat);

    function busqued(valorB,dat){

        var f = dat.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function showData(valorB){
        var dat = busqued(valorB.target.value,dat);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("show").innerHTML = na;
    }

   document.getElementById("search").addEventListener('keyup',showData);
   document.getElementById("search").addEventListener('change',showData);
   
    
});


//Pelicula
const botonPeli = document.querySelector('.pel')


botonPeli.addEventListener("click",function(){

    //Variables
        //Array donde metere los datos que he buscado
        let dat=[];
        

    //Uso de la API para obtener los datos de las pelis
    fetch('https://api.tvmaze.com/shows').then(res => res.json()).then(data =>{
        dat= [...data];
        console.log(dat);
    } );
    
    console.log(dat);
    function busqued(valorB,dat){

        var f = dat.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function showData(valorB){
        var dat = busqued(valorB.target.value,dat);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("show").innerHTML = na;
    }

   document.getElementById("search").addEventListener('keyup',showData);
   document.getElementById("search").addEventListener('change',showData);
   
});

//Pokemon
const botonPok = document.querySelector('.pok')


botonPok.addEventListener("click",function(){
  
    //Variables
        //Array donde metere los datos que he buscado
        let dat=[];
        

    //Uso de la API para obtener los datos de los pokemon
    fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(data =>{
        dat= [...data];
        console.log(dat);
    } );

    console.log(dat);

    function busqued(valorB,dat){
        
        var f = dat.filter(elem => (elem.name.toLowerCase().match(valorB.toLowerCase())));
        
        return f;
    }


    function showData(valorB){
        var dat = busqued(valorB.target.value,dat);

        //Me va a ir devolviendo los nombres que vayan coincidiendo con lo que estoy escribiendo por pantalla
        var na = "<ol>";
        na += dat.map(elem => {return  '<li>' + (elem.name.toUpperCase()) + '</li>'}).join(" ");
        na += "</ol>";
        document.getElementById("show").innerHTML = na;
    }

   document.getElementById("search").addEventListener('keyup',showData);
   document.getElementById("search").addEventListener('change',showData);
   
});
