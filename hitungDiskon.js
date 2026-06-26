function hargaSetelahDiskon(harga, diskon = 0) {
    if (harga <= 0) return 0;
    return harga - (diskon/100) * harga;
}

const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;

let diskon;
let pembayaran;
let total;
let setelahDiskon;

console.log("Harga Nasi Goreng = Rp.", nasiGoreng);
console.log("Harga Mie Goreng = Rp.", mieGoreng);
console.log("Harga Capcay = Rp.", capcay);

total = nasiGoreng + mieGoreng + capcay;
diskon = 10;
setelahDiskon = hargaSetelahDiskon(total,diskon)
pembayaran = 100000;

console.log("Harga total = Rp.", total);
console.log("Diskon = Rp. " + diskon + "%" );
console.log("Harga setelah diskon = Rp.", setelahDiskon);
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", pembayaran - setelahDiskon);