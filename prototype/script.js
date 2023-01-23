//1. Object prototype

// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
//     // return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!. energi kamu ${this.energi}`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!. energi kamu ${this.energi}`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat main!. energi kamu ${this.energi}`;
// }

// let tsaqif = new Mahasiswa('Tsaqif', 10);



// 2. Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!. energi kamu ${this.energi}`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main!. energi kamu ${this.energi}`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat main!. energi kamu ${this.energi}`;
    }
}

let tsaqif = new Mahasiswa('Tsaqif', 10);