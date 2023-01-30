function bringSingera(money){
    var singeraPrice =10;
    var totalSingera = money / singeraPrice;
    return totalSingera;
}
var singeras = bringSingera(200);
console.log('Amar singara holo', singeras);
function assignmentS(assignment1, assignment2, assignment3){
    const average = assignment1 + assignment2 + assignment3 ;
    const totalPoint = average / 3 ;
    return totalPoint;
}
var myCGPA = assignmentS(55, 58, 60);
console.log('MyScore', myCGPA.toFixed(2));