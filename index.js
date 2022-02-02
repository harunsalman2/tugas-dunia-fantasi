//variabel yang diperintahkan//
var nama = 'Ihsan'
var tinggi = 166 
var umur = 18 
var uang = 30000 

//adanya sebuah variabel perintahkan yang diinginkan//
if (uang <= 50000&&tinggi <= 166){
}
if (tinggi==='166') {//false
if (umur < 20) {

//cek untuk menentukan hasil yang diperintahkan//
    console.log(nama + "Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!");
} else {
    console.log (nama + "Tinggi kamu kurang selisih tinggi cm dan kamu kurang uang sebanyak selisih uang untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!");
}
} else if (uang <= 50000&&tinggi <= 166) {
if(umur < 20) {
    console.log(nama +'Tinggi kamu kurang selisih tinggi cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!');
} else {
    console.log (nama + 'Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir');
} 
}else {
    console.log('TOLOng tentukan dulu umur dan uang nya');
}
