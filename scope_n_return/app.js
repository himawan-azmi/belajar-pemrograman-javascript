// Scope dibagi menjadi 2 yaitu Global Scope dan Block Scope
// Perbedaannya berada pada akses variabelnya

const firstName = 'Himawan';
const lastName = 'Azmi';

function getFullName(firstName, lastName) { 
    const fullName = firstName+' '+lastName; // contoh block scope berada di dalam {} dan hanya bisa diakses di dalam {}
}

getFullName(firstName, lastName);
// console.log(fullName);
// Global scope adalah apa yang di luar {}
// Variabel di dalam scope bisa mengakses variabel di luar scope dan sebaliknya variabel di luar scope -
// tidak bisa mengakses variabel yang ada di dalam scope

// Return statement bisa digunakan untuk mengembalikan data dari function sebagai solusi akses block scope dari luar.
function getString() {
    return 'XYZ';
};
const a = getString();
console.log(a);
// Apapun yang ditulis pada baris setelah return tidak akan dieksekusi dan disebut sebagai unreachable code
function getNumber() {
    return 1245

    const x = 12345;
};
const b = getNumber();
console.log(b);

// Tanpa membuat variabel di dalam fungsi dan langsung dengan return
function multiply(x, y) {
    return x * y;
};
const result = multiply(3,5);
console.log(result);

