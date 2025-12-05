// Arrow function dapat digunakan untuk mempersingkat penulisan fungsi tanpa menggunakan keyword return
// Berfungsi sebagai alternatif penulisan function

function sayHi() {
    console.log('Hi');
};
// Arrow Function
const sayHi2 = () => { 
    console.log('Hi'); 
};

function sayBye(name) {
    console.log('Bye '+ name);
};
// Arrow Function dengan parameter
const sayBye2 = (name) => { 
    console.log('Bye, '+ name);
};

function add(x,y) {
    return x + y;
};

const add2 = (x,y) => {
    return x + y;
};

// Jika parameter hanya ada 1, tanda () untuk membungkus parameter dapat dihapus
// Tanda arrow dapat digunakan untuk menggantikan return statement dan menghilangkan tanda {}
const identity = (nama, umur) => nama+' adalah umur '+umur;

const getIdentity = identity('Himawan', 20);
console.log(getIdentity);