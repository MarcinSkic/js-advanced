

//--------------OPEN/CLOSED--------------------
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    getRange() {
        return super.getRange() + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange());
//------COMPOSITION------
const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})

const square = (length) => {
const proto = {
    length,
    type : 'Square',
    area : (args) => Math.pow(args.length, 2)
}
const basics = shapeInterface(proto)
const composite = Object.assign({}, basics)
return Object.assign(Object.create(composite), {length})
}

const s = square(5);

console.log('OBJ: ',s);
console.log('PROTO: ',Object.getPrototypeOf(s));