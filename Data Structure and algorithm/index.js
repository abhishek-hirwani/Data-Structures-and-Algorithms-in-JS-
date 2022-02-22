
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
// function mySet(){
//     //the var collection will hold the set
//     var collection =[]
//     //this method will check for the presence of an element and return true and false
//     this.has=function(element){
//         return (collection.indexOf(element)!==-1)
//     }

//     //this method will return all the values in the set
//     this.values= function(){
//         return collection;
//     }

//     //this method will add element to the set
//     this.add=function(element){
//         if(!this.has(element)){
//             collection.push(element)
//             return true
//         }
//         return false
//     }

//     //this method will remove element from a set
//     this.remove =function(element){
//         if(this.has(element)){
//             index=collection.indexof(element)
//             collection.splice(index,1)
//             return true
//         }
//         return false
//     }

//     //this method will return the size of the collection
//     this.size=function(){
//         return collection.length
//     }

//     //this method will return the union of two sets
//     this.union = function(otherSet){
//         var unionSet = new mySet()
//         var firstSet = this.values()
//         var secondSet= otherSet.values() 
//         firstSet.forEach(function(e) {
//             unionSet.add(e)
//         });
//         secondSet.forEach(function(e) {
//             unionSet.add(e)
//         });

//         return unionSet

//     }

//     //this method will return the intersection of two sets as a new set
//     this.intersection = function(otherSet){
//         let intersectionSet = new mySet()
//         let firstSet = this.values()
//         firstSet.forEach(function(e){
//             if(otherSet.has(e)){
//                 intersectionSet.add(e)
//             }
//         })
//         return intersectionSet
//     }

// // this method will return the difference of two sets as a new set
//    this.difference= function(otherSet){
//        var differentSet = new mySet()
//        var firstSet = this.values()
//        firstSet.forEach(function(e){
//             if(!otherSet.has(e)){
//                 differentSet.add(e)
//             }
//        })
//        return differentSet
//    }  

//    //this method will test if the set is a subset of a different set
//    this.subset=function(otherSet){
//     var firstSet = this.values()
//     return firstSet.every(function(value){
//         return otherSet.has(value)
//     })
//    }
// }
// var setA= new mySet()
// var setB= new mySet()
// setA.add("a")
// setB.add("b")
// setB.add("c")
// setB.add("a")
// setB.add("d")
// console.log(setA.subset(setB))
// console.log(setA.intersection(setB).values())
// console.log(setB.difference(setA).values())

// var setC= new Set()
// var setD= new Set()
// setC.add("a")
// setD.add("b")
// setD.add("c")
// setD.add("a")
// setD.add("d")
// console.log(setD.values())
// setD.delete("a")
// console.log(setD.has("a"))
// console.log(setD.add("e"))


//<-----------------------------------Queue-----------------------------------------------------> 
// function Queue(){
//     collection=[]
//     this.print = function(){
//         console.log(collection)
//     }

//     this.enqueue = function(element){
//         collection.push(element)
//     }

//     this.dequeue = function(){
//         return collection.shift()
//     }

//     this.front = function(){
//         return collection[0]
//     }

//     this.size = function(){
//         return collection.length
//     }

//     this.isEmpty = function(){
//         return (collection.length===0)
//     }
// }

// var q = new Queue()
// q.enqueue("1")
// q.enqueue("2")
// q.enqueue("3")
// q.print()
// q.dequeue()
// console.log(q.front())
// q.print()

// function priorityQueue(){
//     var collection=[]

//     this.printCollection = function(){
//         (console.log(collection));
//     }

//     this.enqueue = function(element){
//         if(this.isEmpty()){
//             collection.push(element)
//         }else{
//             var added = false
//             for(var i=0; i<collection.length;i++){
//                 if(element[1] <collection[i][1]){//checking the priorities
//                     collection.splice(i,0,element)
//                     added=true
//                     break
//                 }
//             }

//             if(!added){
//                 collection.push(element)
//             }
//         }
//     }

//     this.dequeue = function(){
//         var value = collection.shift()
//         return value[0]
//     }

//     this.front = function(){
//         return collection[0]
//     }
//     this.size = function(){
//         return collection.length
//     }
//     this.isEmpty = function(){
//         return (collection.length === 0)
//     }
// }

// var pq= new priorityQueue()
// pq.enqueue(['shek',2])
// pq.enqueue(["hirwani",3])
// pq.enqueue(["abhi",1])
// pq.printCollection()



//<-----------------------------------Binary Search tree-----------------------------------------------------> 


// class Node{
//     constructor(data, left=null, right = null){
//         this.data= data
//         this.left = left
//         this.right = right
//     }
// }
//  class BST{
//      constructor (){
//         this.root= null;
//         }
//         add(data){
//             const node = this.root
//             if(node===null){
//                 this.root= new Node(data);
//                 return
//             }else{
//                 const searchTree= function(node){
//                     if(data < node.data){
//                         if(node.left===null){
//                             node.left= new Node(data)
//                             return            
//                         }else if(node.left!=null){
//                             return searchTree(node.left)
//                         }
//                     }else if(data>node.data){
//                         if(node.right===null){
//                             node.right=new Node(data)
//                             return
//                         }else if(node.right!=null){
//                             return searchTree(node.right)
//                         }
//                     }else{
//                         return null
//                     }
//                 }
//                 return searchTree(node)
//             }
//         }

//         findMin(){
//             let current = this.root
//             while(current.left!=null){
//                 current=current.left
//             }
//             return current.data
//         }

//         findMax(){
//             let current= this.root
//             while(current.right!==null){
//                 current= current.right
//             }
//             return current.data
//         }

//         find(data){
//             let current=this.root
//             while(current.data!==data){
//                 if(data<current.data){
//                     current=current.left;
//                 }else{
//                     current=current.right
//                 }
//                 if(current===null){
//                     return null
//                 }
//             }
//             return null
//         }

//         isPreset(data){
//             let current= this.root
//             while(current){
//                 if(data=== current.data){
//                     return true
//                 }
//                 if(data<current.data){
//                     current=current.left
//                 }else{
//                     current=current.right
//                 }
//             }

//             return false
//         }

//         remove(data){
//             const removNode= function(node,data){
//                 if(node==null)
//                 {
//                     return null
//                 }
                
//                 if(data == node.data){
//                     //node has no chilldren
//                     if(node.left==null &&node.right==null){
//                         return null
//                     }
//                     //node has no left child
//                 if(node.left==null){
//                     return node.right
//                 }

//                 //node has no right child
//                 if(node.right==null){
//                     return node.left
//                 }
//                 //node has two child
//                 var tempNode=node.right
//                 while(tempNode.left!==null){
//                     tempNode = tempNode.left
//                 }

//                 node.data = tempNode.data
//                 node.right=removNode(node.right,tempNode.data)
//                 return node
//                 }else if(data<node.data){
//                     node.left=removNode(node.left,data)
//                     return node
//                 }else{
//                     node.right=removNode(node.right,data)
//                     return node
//                 }
//              }
//              this.root=removNode(this.root,data)
//         }
//  }

//  const bst = new BST()
//  bst.add(4)
//  bst.add(2)
//  bst.add(6)
//  bst.add(1)
//  bst.add(3)
//  bst.add(5)
//  bst.add(7)
//  bst.remove(4)
//  console.log(bst.findMin())
//  console.log(bst.findMax())
//  console.log(bst.findMax())
//  console.log(bst.isPreset(4))


 //<-----------------------------------Binary Search tree-----------------------------------------------------> 

