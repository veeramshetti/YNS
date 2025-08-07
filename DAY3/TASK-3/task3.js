let nameObj = {
    name: "sravya"
}

let PrintName = {
    name: "sruthi",
    sayHi: function () {
        console.log(this.name);
    }
}

Object.prototype.MyBind = function (bindObj) {

    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();