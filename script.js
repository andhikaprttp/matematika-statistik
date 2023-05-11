// mencari anak yang nilai nya lebih dari 60
const nilai = [40, 50, 60, 70, 80, 90, 100];
const siswa = [3, 5, 11, 15, 3, 1, 2];
let jumlahSiswa = 0;
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] > 60) {
    jumlahSiswa += siswa[i];
  }
}

console.log(
  `Jumlah siswa yang mendapatkan nilai lebih dari 60 adalah: ${jumlahSiswa}`
);
