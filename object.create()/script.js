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

//2. function 
const method = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} Selamat Makan, Energi kamu ${this.energi}`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} Selamat Bermain, Energi kamu ${this.energi}`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama} Selamat Tidur, Energi kamu ${this.energi}`);

    }
};
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(method);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

const tsaqif = Mahasiswa('Tsaqif', 10);
const al = Mahasiswa('Al', 8);

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