//1. object literal
// let mahasiswa1 = {
//     nama: 'Tsaqif',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Al',
//     energi: 8,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
// }

//2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
//     return mahasiswa;
// }

// const tsaqif = Mahasiswa('Tsaqif', 10);
// const al = Mahasiswa('Al', 8);

// 3. constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
//     }
// }

// const tsaqif = new Mahasiswa('Tsaqif', 10);