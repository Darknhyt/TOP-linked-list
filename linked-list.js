import { Node } from './node.js'
export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(item) {
        const newNode = new Node(item)
        if (this.head == null) {
            this.head = newNode
        } else {
            if (this.tail == null) {
                this.tail = newNode
                this.head.addNext(this.tail)
            } else {
                this.tail.addNext(newNode)
                this.tail = newNode
            }
        }
        this.size++
    }
    prepend(item) {
        const newNode = new Node(item)
        if (this.head == null) {
            this.head = newNode
        } else {
            newNode.addNext(this.head)
            this.head = newNode
        }
        this.size++
    }
    at(index) {
        if (0 <= index && index <= this.size) {
            let cont = 0
            let actual = this.head
            while (cont < index) {
                actual = actual.getNext()
                cont++
            }
            return actual
        } else {
            return undefined
        }
    }
    pop() {
        const newTail = this.at(this.size - 2)
        this.tail = newTail
        newTail.addNext(null)
        this.size--
    }
    contains(input) {
        let cont = 0
        let actual = this.head
        while (cont < this.size) {
            if (input == actual.value) {
                return true
            } else {
                actual = actual.getNext()
                cont++
            }
        }
        return false
    }
    find(input) {
        let cont = 0
        let actual = this.head
        while (cont < this.size) {
            if (input == actual.value) {
                return cont
            } else {
                actual = actual.getNext()
                cont++
            }
        }
        return null
    }
    toString(){
        let cont = 0
        let actual = this.head
        let res = ""
        while (cont < this.size) {
            res += `(${actual.value}) -> `
                actual = actual.getNext()
                cont++
            
        }
        res += "null"
        return res
    }
}