// hoisting adalah kyk naikkan bendera, naikkan pengenalan variabel atau function ke atas yang awalnya di bawah

const nama = 'Tsaqif'
const username = 'a.tsaqif_al'

function cetakURL(username) {
    return `http://instagram.com/${username}`;
}

console.log(cetakURL(username));