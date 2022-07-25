function Book(title,author,pagesAmount,isRead) {
    this.title = title;
    this.author = author;
    this.pagesAmount = pagesAmount;
    this.isRead = isRead;

    this.info = function(){
        let readInfo = "";
        if(isRead){
            readInfo = "already read";
        } else {
            readInfo = "not read yet"
        }

        return `${this.title} by ${this.author}, ${this.pagesAmount}, ${readInfo}`;
    }
}

let book1 = new Book("Darkest Minds", "Alexandra Bracken", 350, true);

console.log(book1.info());
console.log(Object.create(Book.constructor));

//1 true 2 null 3 undefined

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen);

console.log(bed.glasses);

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach=[food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

let obj = {
    name: "Haha",
    method: function(){
        return this.name;
    }
}

let func = obj.method;

console.log(func())

class Planet {
    constructor(name){
        this.name = name;
    }
}


const venus = new Planet("Venus");

const earth = venus;

console.log(earth.name);

earth.name = "Earth";

console.log(venus.name);

let aminal = {
    dog: function(dog){
        this.name = dog;
    },

    Cat: function(){
        this.name = "cat";
    }
}

function TestConstructors(data){
    this.data = data;
    this.constractor = function(data){
        this.data = data;
    }
}

let dog = new aminal.dog("dog");
console.log(dog);

let testObj = new TestConstructors("1212");
let testObj2 = new testObj.constractor("2323");
console.log(testObj);
console.log(testObj2);
console.log(testObj);