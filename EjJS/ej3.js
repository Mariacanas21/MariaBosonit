
        
   const arrCities = [
       {city:'Logroño', country:'Spain', capital:false},
       {city:'Paris', country:'France', capital:true},
       {city:'Madrid', country:'Spain', capital:true},
       {city:'Rome', country:'Italy', capital:true},
       {city:'Oslo', country:'Norway', capital:true},
       {city:'Jaen', country:'Spain', capital:false},
   ]

  
  arrCities.filter(element => {
       if (element.capital && element.country === 'Spain'){
           const indi = arrCities.indexOf(element);
           arrCities.splice(indi,1);
       }
   });

   
   arrCities.forEach(element => {
       document.write(` Ciudad: ${element.city}  Pais: ${element.country}  <br>`);
   });


