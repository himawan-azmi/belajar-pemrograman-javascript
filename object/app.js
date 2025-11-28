const product = {
    name: 'Pisang',
    weight: 5,
    isSoldOut: false
};
console.log(product.name, product.weight);

console.log('----------------');

const person = {
    nama: 'Himawan',
    umur: 20,
    tahunLahir: 2025,
    isEmployed: true
};
console.log(person.nama);

console.log(person.nama,'lahir pada tahun',person.tahunLahir);

console.log('-------another version--------');

const text = person.nama + ' lahir pada tahun ' + person.tahunLahir;
console.log(text);

// Objek berisi key dan value 
// const object = { key: value, key: value};