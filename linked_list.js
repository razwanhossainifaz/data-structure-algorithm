class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const manobBondhon = new LinkedList(head);
manobBondhon.add(27);
manobBondhon.add(54);
manobBondhon.add(81);
console.log(JSON.stringify(manobBondhon));