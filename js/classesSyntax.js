//------------------CONTEXT------------------
console.log("CONTEXT TESTER SECTION")

class ContextTester {
    constructor(context){
        this.context = context;
    }

    notProtectedContext(){
        try {
            return this.context;
        } catch (error) {
            console.log("When invalid: " + error);
        }
        
    }

    protectedContext = () => {
        return this.context;
    }
}

let contextTester = new ContextTester("Valid context");

contextMethod1 = contextTester.protectedContext;
contextMethod2 = contextTester.notProtectedContext;

console.log(contextTester.protectedContext());
console.log(contextMethod1());

console.log(contextTester.notProtectedContext());
console.log(contextMethod2());

//-------------GENERATOR METHODS----------------

class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
    // Method
    *getSides() {
      for (const side of this.sides) {
        yield side;
      }
    }
  }
  
  const pentagon = new Polygon(1,2,3,4,5);
(() => {
    for(const side of pentagon.getSides()){
      console.log(side);
    }
  })();
  let testGenerator = pentagon.getSides()
  console.log(testGenerator.next());
  console.log([...testGenerator]); // [1,2,3,4,5]