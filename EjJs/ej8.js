

<script>

    let fromBytesToFormattedSizeUnits = (bytes,dig) =>{
        var tam = ['B','KB','MB','GB','TB','PB','EB','ZB','YB'];
        var i = Math.floor(Math.log(bytes)/Math.log(1024));
        return (bytes / Math.pow(1024,i).toPrecision(dig)) + ' ' + tam[i];
    }


    const result = fromBytesToFormattedSizeUnits(987654321);
    console.log(result);
</script>