var countLetters = function(phrase){

    phrase = phrase.replace(/ /g,"");
    var letterObject = {};
    for(var i = 0; i < phrase.length; i++){
        if (Object.keys(letterObject).includes(phrase[i])){
            letterObject[phrase[i]].push(i);
        } else{
            letterObject[phrase[i]] = [i];
        }
    }
    return letterObject;
};

console.log(countLetters("lighthouse in the house"));