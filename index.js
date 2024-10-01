function greet() {
    console.log("Hello, World!");
}

sayHello();
function sayHello() {
    console.log("Hello!");
}

const greetExpression = function() {
    console.log("Hello, World! (from function expression)");
};

const anonymousFunction = function() {
    console.log("This is an anonymous function.");
};

const sayHi = function(name) {
    console.log("Hi, " + name);
};

(function() {
    console.log("This runs immediately!");
})();

function testScope() {
    let x = 10;
    console.log("Inside function, x =", x);
}
testScope();

function outerFunction() {
    let outerVar = "I'm from outer!";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();

function closureExample() {
    let closureVar = "I'm from closure!";
    return function innerClosure() {
        console.log(closureVar);
    };
}
const innerFunc = closureExample();
innerFunc();

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());
console.log(saturdayFun("hike"));

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork());
console.log(mondayWork("work from home"));

