

//Me falta poner que el valor del contador se actualize cada cierto tiempo,
    //ya que solo se me actualiza el valor cada vez que pulso el boton


var num = 0;

const botsuma = document.querySelector('#up');
var ini = document.getElementById('inicio').value;
var stp = document.getElementById('step').value;

//Función que me realiza las operaciones del contador

var contad=(bot)=>{
    

    if(bot.value==="start"){
        num=ini;
    }
    else if(bot.value==="pause"){
        clearInterval(num);
    }
    else if(bot.value==="reset"){
        num=0;
    }
    else if (bot.value==="up"){
        console.log(num);
        setInterval(operacionS(bot.value),100);
        console.log(num);
    }
    else{
        setInterval();
    }

    document.getElementById("numerocont").innerHTML = num;
    
}

var operacionS=(op)=>{

    

    if(op==="up"){
        num = parseInt(stp) + parseInt(num);
    }
    else{
        num = parseInt(num) - parseInt(stp);
    } 

}