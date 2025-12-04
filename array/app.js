const avengers = [
    'Iron Man',
    'Black Widow',
    'Hulk'
];

console.log(avengers);
console.log(avengers.length);
//Bentuk lain pemanggilan variabel
const text = 'Ada '+avengers.length+' anggota Avengers';
console.log(text);

// Array berisi elemen yang ada di dalam []
// Pemanggilan fungsi length adalah agar isinya dinamis

const usernames = [
    'yandy',
    'dimas',
    'mita'
];

const teks = 'Ada total '+usernames.length+' username.';
console.log(teks);

// Fungsi includes untuk memastikan/memeriksa adanya elemen tertentu dengan mengembalikan nilai boolean

const newUsername = 'yandy';
const isTaken = usernames.includes(newUsername);

if (isTaken) {
    console.log('Username sudah digunakan');
} else {
    console.log('Username tersedia');
}

// Penggunaan bracket notation [] untuk memanggil/akses elemen tertentu
// Indeks array pada javascript menggunakan zero-based (indeks dimulai dari 0)

const favFoods = [
    'Gado-Gado',
    'Lotek',
    'Soto'
];

const makanan = 'Makanan favoritku yang ke-satu adalah '+favFoods[0];
console.log(makanan);
