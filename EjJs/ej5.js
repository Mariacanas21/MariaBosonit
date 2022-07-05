

   
     const arrCities2 = [
        {city:'Logroño', country: 'Spain', capital: false},
        {city: 'Bordeaux', country: 'France', capital:false},
        {city:'Madrid', country: 'Spain', capital: true},
        {city:'Florence', country: 'Italy', capital: true},
        {city:'Oslo', country: 'Norway', capital: true},
        {city:'Jaen', country: 'Spain', capital: false},
    ]


   const newArray = arrCities2.filter(cities => !cities.capital).map(function (cities){
       if(cities.country === 'Spain') return { city: cities.city, isSpain: true};
       });

    
    console.log(newArray);

 
