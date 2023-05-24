let initialValues = [1, 2, 3, true, "Cornel", undefined, null];
let otherValues = [1, "Mircea", true];

initialValues.push(otherValues);

console.log(initialValues);

suma = initialValues[0] + initialValues[1] + initialValues[2] + initialValues[7][0];

console.log(suma);

initialValues[0] = initialValues[0] + 2;
initialValues[1] = initialValues[1] + 2;
initialValues[2] = initialValues[2] + 2;
initialValues[7][0] = initialValues[7][0] + 2;

console.log(initialValues);


let str = "happy codding";

val1 = initialValues[4] + " " + str;
console.log(val1);
val2 = initialValues[7][1] + " " + str;
console.log(val2);


reverse1=!initialValues[3];
reverse2=!initialValues[7][2];
console.log(reverse1);
console.log(reverse2);








