
var letters=[]  //this is our stack
var word="racecard"
var rword=""


//put letter of word into stack
for(var i=0;i<word.length;i++){
    letters.push(word[i])
}

//pop of the stack in a reverse order
for(var i=0;i<word.length;i++){

    rword += letters.pop();
}

if(rword==word){
    console.log(word+" is a palindrom")
}else{
    console.log(word+" is not a palindrom")

}