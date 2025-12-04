// Fungsi sebaiknya kata kerja
// Fungsi memiliki parameter dan ditulis di dalam ()

// Function dengan 2 parameter string dan number
function sayHappyBirthday(name, age) {
    console.log('Selamat ulang tahun '+name+' yang ke '+age);
};

sayHappyBirthday('Himawan', 24);

// Function tanpa parameter
function name() {
    console.log('Himawan');
};

name();

// Function dengan percabangan if-elseif
function isNumber(number) {
    if (number === 0) {
        console.log('Netral');
    } else if (number >= 0) {
        console.log('Positif');
    }else{
        console.log('Negatif');
    }
};

isNumber(1);

// Function dengan operasi aritmatika
function sum(x,y) {
    const z = x+y;
    console.log(x+' ditambah '+y+' sama dengan '+z);
}

sum(10,2);