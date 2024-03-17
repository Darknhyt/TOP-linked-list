export class Node{
    constructor(value = null, next = null){
        this.value = value
        this.next = next
    }
    getNext() {
        return this.next
    }
    addNext(input){
        this.next = input
    }
}