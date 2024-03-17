import { LinkedList } from "./linked-list.js";
const list = new LinkedList()
//1. Adding to list
list.append("Danny")
list.append("Vanesa")
list.append("Norman")
console.log(list.toString());
//2. Adding to first position
list.prepend("Victor")
list.prepend("Fernando")
list.prepend("Anghelo")
console.log(list.toString());
//3. Getting the size
console.log("Size: "+ list.size);
//4. Getting the Head
console.log("Head: "+ JSON.stringify(list.head));
//5. Getting the tail
console.log("Tail: "+ JSON.stringify(list.tail));
//6. Returning a node
console.log("At position 3: "+ JSON.stringify(list.at(3)));
console.log("At position 5: "+ JSON.stringify(list.at(5)));
//7. Removing the last element
list.pop()
list.pop()
console.log(list.toString());
//8. Checking that an element exists
console.log("List contains Victor: "+ list.contains("Victor")); //true
console.log("List contains Vanesa: "+ list.contains("Vanesa")); //false
//9. Returning the index of an element
console.log("Index of Victor: "+ list.find("Victor")); 
console.log("Index of Vanesa: "+ list.find("Vanesa")); 
//10. Printing the list
console.log(list.toString());
//Extra: Inserting a new Node
console.log("Inserting 'Willy' in 2");
list.insertAt("Willy", 2)
console.log(list.toString());
//Extra: Removing a Node
console.log("Removing 3");
list.removeAt(3);
console.log(list.toString());