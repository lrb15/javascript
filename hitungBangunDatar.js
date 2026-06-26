function luasPersegi(sisi) {
    return sisi ** 2;
}
function kelilingPersegi(sisi) {
    return sisi * 4;
}
function luasPersegiPanjang(panjang,lebar) {
    return panjang * lebar;
}
function kelilingPersegiPanjang(panjang,lebar) {
    return 2* (panjang + lebar);
}

function luasSegitigaSamaSisi(alas,tinggi) {
    return (alas * tinggi) / 2;
}
function kelilingSegitigaSamaSisi(sisi) {
    return sisi * 3;
}

function luasLingkaran(jariJari) {
    return (22/7 * (jariJari ** 2)).toFixed(2);
}
function kelilingLingkaran(jariJari) {
    return (22/7  * jariJari * 2).toFixed(2);
}

console.log("Luas Persegi Dengan Sisi 8 Adalah", luasPersegi(8));
console.log("Luas Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah", luasPersegiPanjang(9,3));
console.log("Luas Persegi Panjang Dengan Jari - Jari 6 Adalah", luasLingkaran(6));
console.log("Luas Segitiga Dengan Alas 6 dan Tinggi 4 Adalah", luasSegitigaSamaSisi(6,4));

console.log("");

console.log("Keliling Persegi Dengan Sisi 8 Adalah", kelilingPersegi(8));
console.log("Keliling Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah", kelilingPersegiPanjang(9,3));
console.log("Keliling Persegi Panjang Dengan Jari - Jari 6 Adalah", kelilingLingkaran(6));
console.log("Keliling Segitiga Panjang Sisi 6 Adalah", kelilingSegitigaSamaSisi(6));