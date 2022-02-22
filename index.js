
// var letters=[]  //this is our stack
// var word="racecard"
// var rword=""


// //put letter of word into stack
// for(var i=0;i<word.length;i++){
//     letters.push(word[i])
// }

// //pop of the stack in a reverse order
// for(var i=0;i<word.length;i++){

//     rword += letters.pop();
// }

// if(rword==word){
//     console.log(word+" is a palindrom")
// }else{
//     console.log(word+" is not a palindrom")

// }



//<-----------------------------------create a stack-----------------------------------------------------> 

// var Stack= function(){
//     this.count=0
//     this.storage={}
    
    //Adds value into end of the stack
    // this.push = function(value){
    //     this.storage[this.count]= value
    //     this.count++
    // }

    //removes and return the value at the end of the stack
    // this.pop=function(){
    //     if(this.count===0){
    //         return undefined
    //     }
    //     this.count--
    //     var result=this.storage[this.count]
    //     delete this.storage[this.count]
    //     return result
    // }

    //check size if the stack
    // this.size = function(){
    //     return this.count
    // }

    //returns the value at the end of the stack
//     this.peek=function(){
//         return this.storage[this.count-1]
//     }

// }

// var myStack = new Stack()
// myStack.push(1)
// myStack.push(2)
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())
// myStack.push("freecode")
// console.log(myStack.size())
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())


//<-----------------------------------Sets-----------------------------------------------------> 
function mySet(){
    //the var collection will hold the set
    var collection [];
    //this method will check for the presence of an element and return true and false
    this.has=function(element){
        return (collection.indexof(element)!== -1)
    }

    //this method will return all the values in the set
    this.values= function(){
        return collection;
    }

    //this method will add element to the set
    this.add=function(){
        if(!this.has(element)){
            collection.push(element)
            return true
        }
        return false
    }

    //this method will remove element from a set
    this.remove =function(){
        if(this.has(element)){
            index=collection.indexof(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    //this method will return the size of the collection
    this.size=function(){
        return collection.length
    }

    //this method will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new mySet()
        var firstSet = this.values()
        var secondSet= otherSet.values() 
        firstSet.forEach(function(e) {
            unionSet.add(e)
        });
        secondSet.forEach(function(e) {
            unionSet.add(e)
        });

        return unionSet

    }

    



}