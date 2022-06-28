

   
    const arrCities2 = [
        {city:'Logroño', country: 'Spain', capital: false},
        {city: 'Bordeaux', country: 'France', capital:false},
        {city:'Madrid', country: 'Spain', capital: true},
        {city:'Florence', country: 'Italy', capital: true},
        {city:'Oslo', country: 'Norway', capital: true},
        {city:'Jaen', country: 'Spain', capital: false},
    ]


    //Primero me filtra el array para saber si la ciudad no es capital y despues me recorre el nuevo array para que se me impriman los valores
        //con los nuevos parametros
   const newArray = arrCities2.filter(elemt => {
        if(!elemt.capital){
            return elemt;
        }
    }).map( el => {
        var es = (el.country == 'Spain');
        return{
               city: el.city,
               isSpain: es
        }});

    //Imprime los valores por consola
    console.log(newArray);

    //Imprime los valores en la página
    newArray.forEach(elemt  => {  
        document.write(`City: ${elemt.city} isSpain: ${elemt.isSpain} <br>`)
    });


 