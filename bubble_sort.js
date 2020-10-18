const numbers = [23, 54, 56, 12, 8, 45 , 13];

function bubbleSortAscending(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array;
}

function bubbleSortDecending(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]){
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array;
}

const sortedAscending = bubbleSortAscending(numbers)
console.log(sortedAscending);

const sortedDecending = bubbleSortDecending(numbers)
console.log(sortedDecending);