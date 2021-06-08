const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = batteryBatches.reduce(function(sum, batts){
//     return batts + sum
// });

const totalBatteries = batteryBatches.reduce(
    (accumulator, element) => accumulator + element
     
);

const snacks = ["pizza", "stuffed mushrooms", "tacos", "hot pockets"];

const feast = snacks.reduce(
    (accumulator, snack) => accumulator + " * " + snack
);

feast
//not understanding this, working on it...ok taking the array batteryBatches, and calling the array method .reduce on it which takes
//a callback function, in this case the word function (which is a function delcaration )
//that takes 4 possible arguments, in this case we provide two- the accumulator (what we are adding up- can be called anything we want)
//and the current value