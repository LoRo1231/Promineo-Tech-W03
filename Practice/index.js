let fullName = "Mary" + " " + "Brown"; 
let gradesArray = [100, 79, 80, 90, 100];
const isPassing = (currentValue) => currentValue >= 70;

gradesArray.push(55);

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
    // why do we add [i] to the gradesArray?
console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
    //what (is >=70)! supposed to do? It's just part of the string?
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}


function loopUntilX(x){
    let counter = number
    do {
        return counter;
    } while (counter < x);
}

loopUntilX(5);
