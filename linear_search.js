const friends = ['Spiderman' , 'Ironman' , 'Superman' , 'Batman' , 'Antman' , 'Goatman'];
const numbers = [54, 75, 48, 78, 33, 46, 95];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element == 'Goatman'){
        return i;
    }
}

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element == 78){
        return i;
    }
}