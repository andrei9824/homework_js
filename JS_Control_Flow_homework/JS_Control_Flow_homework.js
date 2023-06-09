// let cap_cilindrica = prompt("introduceti capacitatea cilindrica");

// while (isNaN(cap_cilindrica)) {
//     cap_cilindrica = prompt("Introduceti o capacitate cilindrica valida:");
// };
// impozit = cap_cilindrica * 22 / 200;
// impozit_final = Math.floor(impozit);
// console.log("Impozitul datorat statului este: " + impozit_final);
let impozit;
let impozit_final;
let Impozitul;
const auto_type = prompt("Care este tipul de auto pentru care vreti sa platiti impozit?(autoturism/motocicleta/camion");
const autoturism="autoturism";
const motocicleta="motocicleta";
const camion="camion";
if (auto_type === autoturism) {
    while (isNaN(autoturism)) {
        autoturism = prompt("Introduceti o capacitate cilindrica valida:");
    };
    impozit = autoturism * 22 / 200;
    impozit_final = Math.floor(impozit);
    console.log("Impozitul datorat statului este: " + impozit_final);

}
else if (auto_type === motocicleta) {
    while (isNaN(motocicleta)) {
        motocicleta = prompt("Introduceti o capacitate cilindrica valida:");
    };
    impozit = motocicleta * 8 / 200;
    impozit_final = Math.floor(impozit);
    console.log("Impozitul datorat statului este: " + impozit_final);
}
else if (auto_type === camion){
    while (isNaN(camion)) {
        camion = prompt("Introduceti o capacitate cilindrica valida:");
    };
    impozit = camion * 28 / 200;
    impozit_final = Math.floor(impozit);
    console.log("Impozitul datorat statului este: " + impozit_final);

}
else {
    console.log("Nu ati introdus un autovehicul valid");
}