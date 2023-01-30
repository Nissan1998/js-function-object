var shoppingCart={
    monitor: 2,
    webcam:1,
    keyboard:2,
    mouse: 1,
    cpu:1,
}
const keys =Object.keys(shoppingCart);
// console.log(keys);
const values = Object.values(shoppingCart);
// console.log(values);
// for(var i = 0; i<keys.length; i++){
//     console.log(keys[i]);
// }
for(var i =0; i <keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}
// for in loop
for( var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}