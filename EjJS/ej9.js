

<script>

    let toLowercaseKeys = (obj) =>{
        var newResult = [];
        var result = Object.keys(obj).map(element => {
            var key = element.toLowerCase();
            var value = obj[element].toLowerCase();
            newResult.push(key + '-> ' + value + '<br>');
        });
        return newResult;
    }

    const myObj = {NamE: 'CharLes', ADDress: 'Home Street'};
    const myObjLowerCase = toLowercaseKeys(myObj);
    document.write(myObjLowerCase);

</script>