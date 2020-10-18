// First In First Out = FIFO

class Queue {
    constructor(){
        this.queue = []
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const students = new Queue();
students.enqueue("Razwan");
students.enqueue("Ashique");
students.enqueue("Dewan");
students.enqueue("Prem");
console.log(students.queue);

const winner = students.dequeue();
console.log(winner);
console.log(students.queue);
