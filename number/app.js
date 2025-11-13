const a = 10;
const b = 5;

// Tambah
const c = a + b;
console.log(c);

// Kurang
const d = a - b;
console.log(d);

// Kali
const e = a * b;
console.log(e);

// Bagi
const f = a / b;
console.log(f);

// Modulo
const g = a % b;
console.log(g);

/* Challenge
    Apel = 5.000
    Pisang = 10.000

    Customer membeli 3 Apel dan 2 Pisang.
    Diskon 10.000
*/
const apel = 5000;
const pisang = 10000;
const diskon = 10000;
const harga = ((apel * 3) + (pisang * 2)) - diskon;
console.log(harga);

// Floating point
const priceApple = 5000;
const priceBanana = 10000;
const totalApple = 3;
const totalBanana = 2;
// Diskon 10 %
const discount = 0.1;

const originalPrice = priceApple * totalApple + priceBanana * totalBanana;
const price = originalPrice - originalPrice * discount;
console.log(price);

const x = 35000;
const y = 0.1;
const z = x * (1-y);
console.log(z);