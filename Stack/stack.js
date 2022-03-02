var Stack= function(){
  this.count=0
     this.storage={}
    
    // Adds value into end of the stack
     this.push = function(value){
         this.storage[this.count]= value
         this.count++
     }

    // removes and return the value at the end of the stack
     this.pop=function(){
         if(this.count===0){
            return undefined
         }
         this.count--
         var result=this.storage[this.count]
         delete this.storage[this.count]
         return result
     }

    // check size if the stack
     this.size = function(){
         return this.count
     }

    // returns the value at the end of the stack
     this.peek=function(){
         return this.storage[this.count-1]
     }

 }

 var myStack = new Stack()
 myStack.push(1)
 myStack.push(2)
 console.log(myStack.peek())
 console.log(myStack.pop())
 console.log(myStack.peek())
 myStack.push("freecode")
 console.log(myStack.size())
 console.log(myStack.peek())
 console.log(myStack.pop())
 console.log(myStack.peek())
