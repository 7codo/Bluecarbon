const authorCapitalise = (authorName) => {
    if (authorName){
        let names = authorName.split('_');
        let capitaliseName = ''
        for(let i = 0; names.length > i; i++){
            capitaliseName =  names[0].charAt(0).toUpperCase() + names[1].slice(1) + ' ' + names[1].charAt(0).toUpperCase() + names[0].slice(1)
        }
        return capitaliseName;
    } else {
        return ''
    }
}

export {authorCapitalise}