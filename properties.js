var shoppingCart ={
    monitor:'Benq',
    webCam: 'A4TECH',
    keyBoard: 1,
    mouse:2,
    cpu: 'Lenvo'
}
// console.log(shoppingCart);
var propertiesKey = Object.keys(shoppingCart);
// console.log(propertiesKey);
var mouseValue = shoppingCart['mouse'];
console.log(mouseValue);
shoppingCart.keyBoard = 5;
console.log(shoppingCart);
