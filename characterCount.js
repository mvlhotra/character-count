var countLetters = function(phrase){
    
    phrase = phrase.replace(/ /g,"");
    var letterObject = {};
    for(var i = 0; i < phrase.length; i++){
        if (Object.keys(letterObject).includes(phrase[i])){
            letterObject[phrase[i]] += 1;
        } else{
            letterObject[phrase[i]] = 1;
        }
    }
    return letterObject;
};

console.log(countLetters("lighthouse in the house"));