// Soal 1

// let gp = 10000;
// let nm = "sikaryawan" ;

// let tunj = 20/100 * gp;
// let pjk = 15/100 * (gp + tunj);
// let gb = gp + tunj - pjk;

// console.log(gp)
// console.log(nm)
// console.log(tunj)
// console.log(pjk)
// console.log(gb)

// soal 2

// let detik;
// let jam;
// let menit;
// let total;

// total = jam * 3600 + menit * 60 + detik;
// console.log(total)

// soal 3

let jam;
let menit;
let detik;
let sisa;
let total = 5000;

jam = Math.floor(total/3600)
sisa = total % 3600
menit = Math.floor(sisa/60)
detik = sisa % 60

console.log(jam)
console.log(menit)
console.log(detik)
