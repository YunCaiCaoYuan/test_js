function Fun(){
    var getName = function(){
        console.log(1);
    }
    return this;
}
Fun.getName = function(){
    console.log(2);
}
Fun.prototype.getName = function(){
    console.log(3);
}
var getName = function(){
    console.log(4);
}
function getName(){
    console.log(5);
}

// Fun().getName(); //4
getName(); //4
new Fun().getName();//3
new new Fun().getName();//3