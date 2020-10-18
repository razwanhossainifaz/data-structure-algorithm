
// Last In First Out = LIFO

class Stack {
    constructor() {
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack ();
guest.add("Razwan")
guest.add("Hossain")
guest.add("Ifaz")
guest.add("Is a good boy")
console.log(guest.stack);

const speaker = guest.remove()
console.log(speaker);
console.log(guest.stack);