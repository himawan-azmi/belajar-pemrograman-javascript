const color = 'hijau';

if (color === 'merah') {
    console.log('Berhenti');
} else {
    console.log('GO!');
}

console.log('=====================');

const trafficLights = 'merah';

if (trafficLights === 'merah') {
    console.log('Berhenti');
}else if (trafficLights === 'kuning') {
    console.log('Berhenti kalau bisa');
}else if (trafficLights === 'hijau') {
    console.log('GO!');
}else {
    console.log('Warna tidak valid');
}

console.log('-----------------------------');

const number = '100';

if (number < 10) {
    console.log('Satuan');
} else if (number < 100) {
    console.log('Puluhan');
} else if (number < 1000) {
    console.log('Ratusan');
} else {
    console.log(number);
}

// Proses eksekusi kode fungsi statement ifelse dalam javascript adalah berurutan sesuai baris (eksekusi sinkron).