

    const arrNumber1 = [1,2,3];
    const arrNumber2 = [1,2,3,4,5];
    const arrNumber3 = [1,4,7,2];

    var newArray = [];

    newArray = arrNumber1.filter(element => 
        arrNumber2.includes(element) && 
        arrNumber3.includes(element));

   

    document.write(newArray);


