

//Variable que se va a ir incrementando o decrementando según el botón pulsado
let num = 0;

//Intervalo de tiempo
let interval;

//Variable que será el valor que se incrementará o decrementará al número
let stp;

//Valor que me muestra por pantalla
let salida = document.getElementById("numerocont");


//Función que realiza la operación de sumar o restar según el botón que tengamos pulsado
const contad=(bot)=>{
    interval = setInterval(() =>{
        stp = parseInt(document.getElementById('step').value);

        if(bot.value === "up") {
            num = parseInt(num) + (stp);
            setSalida();
        }
        else if(bot.value === "down"){
            num = parseInt(num) - stp;
            setSalida();
        }
    },1000);
   
}

//Para enviar el valor a escribir por pantalla
const setSalida = () =>{
    salida.innerHTML = num;
}

//Inicializa el valor del contador
const start = () =>{
    num = document.getElementById('inicio').value;

    setSalida();
}

//Reinicia el valor del contador
const reset = () =>{
    num = 0;

    setSalida();
}

//Pausa el intervalo de incremento o decremento del valor del contador
const pause = () => {
    clearInterval(interval);
}