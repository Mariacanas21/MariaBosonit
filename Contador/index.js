

//Me falta poner que el valor del contador se actualize cada cierto tiempo,
    //ya que solo se me actualiza el valor cada vez que pulso el boton


var num = 0;

const botsuma = document.querySelector('#up');
var ini = document.getElementById('inicio').value;


//Función que me realiza las operaciones del contador

var contad=(bot)=>{
    

    if(bot.value=="start"){
        num=ini;
    }
    else if(bot.value=="pause"){
        clearInterval(num);
    }
    else if(bot.value=="reset"){
        num=0;
    }
    else {
        setInterval(operacion(bot.value),100);
    }

    document.getElementById("numerocont").innerHTML = num;
    
}

const operacion=(op)=>{

    var stp = document.getElementById('step').value;

    if(op=="up"){
        num = parseInt(stp) + parseInt(num);
    }
    else{
        num = parseInt(num) - parseInt(stp);
    } 

}