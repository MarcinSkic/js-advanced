//-------SCOPE and CLOSURE--------
let name ="Tom";

function SayTom(){
    let name = "Not Tom"
    return function (){
        console.log(name);
    }
}

let func = SayTom();

func();

name = "Tom";

func();

//----------CONTEXT----------
var testButton = document.querySelector('button');
testButton.addEventListener('click',function(){
    console.log("Default context in this scenario: ");
    console.log(this);
    setTimeout(function(){
        console.log("Context in timeout: ");
        console.log(this);
    },1000);
    setTimeout(()=>{
        console.log("Context in timeout with arrow function as handler: ");
        console.log(this);
    },2000);
    let that = this;
    setTimeout(function(){
        console.log("Context using trick with 'that': ");
        console.log(that);
    },3000)
});

//------------------

this.context = "If you read this, that means you have invalid context"

let obj = {
    context: "Valid context",
    method: function(){
        return this.context;
    }
}

let notBinded = obj.method;
let binded = obj.method.bind(obj);

console.log(notBinded());
console.log(binded());

