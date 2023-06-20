
// Prima parte a temei
const numere = [5, 10, 15, 20, 25];

let suma = 0;
for (let i = 0; i < numere.length; i++) {
  suma += numere[i];
}


const media = suma / numere.length;


console.log("Array-ul de numere: " + numere);
console.log("Media aritmetică: " + media);



// A doua parte





let valori = [5, true, 10, "abc", 15, false, 20, "xyz", 25];


let suma1 = 0;
for (let i = 0; i < valori.length; i++) {
  if (typeof valori[i] === "number") {
    suma1 += valori[i];
  }
}


console.log("Array-ul de valori: " + valori);
console.log("Suma numerelor: " + suma1);




//Primele 20 de nr a le lui Fibonacci



function fibonacci(n) {
    let fib = [0, 1]; 
  
    
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  
  let primele20NumereFibonacci = fibonacci(20);
  console.log("Primele 20 de numere din șirul lui Fibonacci: " + primele20NumereFibonacci);
  




