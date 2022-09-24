//-------------FACTORY FUNCTIONS--------------

name = "Hamilton";

const proto = {
    value: 1,
    hello: function(){
        return `Hello my name is ${this.name}`;
    }
};

const greeter = (name) => Object.assign(Object.create(proto),{name});

const george = greeter("George");
const mark = greeter("Mark");
console.log(george.value);

console.log(george.hello());

//----INHERITANCE----

function carFactory(brand, type){
    function getCar(){
        return `${type} of ${brand}`;
    }

    return {getCar};
}

let car1 = carFactory("Mercedes","SUV");

console.log(car1.getCar());

function raceCarFactory(brand, type, speed){
    const {getCar} = carFactory(brand,type);

    const maxSpeed = () => `Max speed for ${getCar()} is ${speed} km/h`;
    
    return {getCar, maxSpeed};
}

//OR

/*function raceCarFactory(brand, type, speed) {
    const prototype = carFactory(brand,type);

    const maxSpeed = () => `Max speed for ${prototype.getCar()} is ${speed} km/h`;

    return Object.assign(
        {},
        prototype,
        {maxSpeed}
    )
}*/

let car2 = raceCarFactory('McLaren', 'Formula 1', 300);

console.log(car2.getCar());
console.log(car2.maxSpeed());

//-----------COMPOSITION-----------------

const driver = (state) => ({
    drive: () => console.log(`${state.brand} is driving!`)
})

const tester = (testVariable) => ({
    test: () => console.log(testVariable)
});

const carsFactory = (brand) => {
    let state = {
        brand
    }

    let testVariable = "I've been found!";

    return Object.assign(
        {},
        driver(state),
        tester(testVariable)
    )
}

carsFactory('Mercedes').drive();
carsFactory("Somecoar").test();



//------------MODULE PATTERN--------------

let stringUtilites = (function () {
    function capitaliseFirstLetter(string){
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    return {capitaliseFirstLetter};
})();

console.log(stringUtilites.capitaliseFirstLetter("mama ma kota"));

