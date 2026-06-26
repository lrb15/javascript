function hargaSetelahDiskon(harga, diskon = 0) {
    if (harga <= 0) {
        return 0
    }
    return harga - (diskon/100) * harga;
}

const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;
let discount;
let pembayaran;
let total;

console.log("Harga Nasi Goreng = Rp.", nasiGoreng);
console.log("Harga Mie Goreng = Rp.", mieGoreng);
console.log("Harga Capcay = Rp.", capcay);

total = nasiGoreng + mieGoreng + capcay;
discount = 10;
pembayaran = 100000;

console.log("Harga total = Rp.", total);
console.log("Diskon = Rp. " + discount + "%" );
console.log("Harga setelah diskon = Rp.", hargaSetelahDiskon(total,discount));
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", pembayaran - total);