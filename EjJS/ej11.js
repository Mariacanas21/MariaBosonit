



    let splitArrayIntoChunks = (arr,tam) =>{ 
        var newArray = [];
        for(let i=0; i < arr.length; i+=tam){
            newArray.push((arr.slice(i,i+tam)) + '<br>'); 
        }
        return newArray;
    }

    const result = splitArrayIntoChunks([1,2,3,4,5,6,7],3);
    document.write(result);

