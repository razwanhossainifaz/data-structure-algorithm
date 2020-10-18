class Dictionary{
    constructor(){
        this.dictionary = {};
    }
    add(key , value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key]
    }
}

const phoneBook = new Dictionary();
phoneBook.add("Razwan Hossain Ifaz" , "01882784048");
phoneBook.add("Nazmul Hossain Sifat" , "01831166117");
phoneBook.add("Touhidul Islam Sazid" , "01717000702");
console.log(phoneBook.dictionary);

const sifat = phoneBook.get("Nazmul Hossain Sifat");
console.log(sifat);