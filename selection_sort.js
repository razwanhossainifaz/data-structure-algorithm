const numbers = [12 , 54 , 17 , 56 , 78 , 2 , 3 , -4 , 9];

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+ 1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j;
            }
        }
        const temp = array[i]
        array[i] = array[min]
        array[min] = temp;
    }
    return array
}

const sorted = selectionSort(numbers)
console.log(sorted);