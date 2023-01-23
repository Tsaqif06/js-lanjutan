// Lexical scope

// 1. TAMPIL NAMA

// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }
// const panggilNama = init();
// panggilNama('Tsaqif');
// panggilNama('Al');

//2. UCAP SALAM

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// const selamatPagi = ucapkanSalam('Pagi');
// const selamatSiang = ucapkanSalam('Siang');
// const selamatSore = ucapkanSalam('Sore');
// const selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Tsaqif');


// 3. Counter
const add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());