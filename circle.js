// exports.area = function(r){
//     console.log("I am a circle");

//     return Math.PI * r * r ;
// }


// exports.circumference = function(r){
//     console.log("I am a circle");

//     return 2*Math.PI * r ;
// }


// Instead of two tym export please add one class 


class Circle{
    area(r){
        return Math.PI * r * r ;
    }
    circumference(r){
        return 2*Math.PI * r ;
    }
}

module.exports = Circle;