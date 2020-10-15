function urlFormatCheck(input){
    const checkForHTTP = /^http:\/\/|^https:\/\//i;
    const checkForSpace = /\s/;

    if (checkForHTTP && !checkForSpace){
        return true;
    } else {
        return false;
    }

}

export { urlFormatCheck }