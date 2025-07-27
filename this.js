var firstName = "John";
let cap = {
    firstName: "Jane",
    sayHi: function() {
        console.log("5", this.firstName);
        const isAmInner = function() {
            console.log("7", this.firstName);
    }
        isAmInner(); //function call
    }
}
cap.sayHi(); // method call 