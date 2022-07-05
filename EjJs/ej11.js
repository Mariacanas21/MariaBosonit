



   const splitArrayIntoChunks = (arr,tam) => { 
        let newArray = [];
        for(let i=0; i < arr.length; i+=tam){
            newArray.push((arr.slice(i,i+tam))); 
        }
        return newArray;
    }

    const result = splitArrayIntoChunks([1,2,3,4,5,6,7],3);
    console.log(result);
    

