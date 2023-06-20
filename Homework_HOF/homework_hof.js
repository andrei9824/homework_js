const array1 = [1, 3, 4, 5, 6, 12, 52];

const array = [2, 4, 6, 8, 10];

const allEven = array.every((element) => {
    return element % 2 === 0;
});

if (allEven) {
    console.log("Toate elementele sunt numere pare.");
} else {
    console.log("Există cel puțin un element care nu este număr par.");
}

const allNotEven = array1.every((element) => {
    return element % 2 === 0;
});

if (allNotEven) {
    console.log("Toate elementele sunt numere pare.");
} else {
    console.log("Există cel puțin un element care nu este număr par.");
}





array1.forEach(element => console.log(element));






const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log("Suma elementelor este" +" "+sumWithInitial);