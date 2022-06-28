



        let returnFalsyValues = (obj,ty) =>{
           return Object.keys(obj).filter(element => (!ty(obj[element],element))).reduce((objeto,key) => (objeto[key] = obj[key],objeto),{});
        }

       console.log(returnFalsyValues({a:1, b : '2', c:3},x=>typeof x === 'string'));


