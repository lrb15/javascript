function hargaSetelahDiskon(harga, diskon = 0) {
    if (harga <= 0) return 0;
    return harga - (diskon/100) * harga;
}

//  if dalam if
// function diskonSpesial(total) {
//     if (total >= 250000) {
//         if (total >= 500000) {
//             if (total >= 800000) {
//                 return 15;
//             }
//             return 10;
//         }
//         return 5;
//     }
//     return 0;
// }


// if else
function diskonSpesial(total) {
    if (total >= 800000) {
        return 15;
    } else if (total >= 500000) {
        return 10;
    } else if (total >= 250000) {
        return 5;
    } else {
        return 0;   
    }
}

function hitungKembalian(total, bayar) {
    let kembalian = bayar  - total;
    if (kembalian < 0) {
        return "Kurang Rp." + (total - bayar);
    }
    return "Rp. " + kembalian
}

const headset = 225000;
const mouse = 150000;
const keyboard = 350000;

let total;
let diskon;
let pembayaran;
let setelahDiskon;

console.log("=====  Rincian Pembelian =====");
console.log("Headset = Rp.", headset);
console.log("Mouse = Rp.", mouse);
console.log("Keyboard = Rp.", keyboard);
console.log("");
total = 1*headset + 1*mouse + 1*keyboard;
diskon = diskonSpesial(total);
setelahDiskon = hargaSetelahDiskon(total, diskon);
pembayaran = 800000;

console.log("Total Belanja = Rp.", total);
console.log("Diskon = Rp. " + diskon + "%");
console.log("Total Setelah Diskon = Rp.", setelahDiskon);
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian =", hitungKembalian(setelahDiskon, pembayaran));
