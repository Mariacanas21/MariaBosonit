


    let removeHTMLTags = (pal) =>{
       return(pal.replace(/<[^\>]*>/g,''));
    }

    const result = removeHTMLTags('<div><span>lorem</span> <strong> ipsum</strong></div>');
    document.write(result);

