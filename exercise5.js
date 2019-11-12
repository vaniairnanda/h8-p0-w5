// function kaliTerusRekursif(angka) {
//     // you can only write your code here!
//     // versi loop biasa
//     var result = 1
//     var numString = angka.toString()
//     var kataAkhir = ''
//     for (var i = 0; i <numString.length; i++) {
//         result *= Number(numString[i])
//         kataAkhir = result.toString()
//     } if (kataAkhir.length === 1) {
//         return result
//     } else {
//         for (var j = 0; j < kataAkhir.length; j++) {
//             result *= Number(kataAkhir[j])
//             kataAkhir = result.toString()
//         } if (kataAkhir.length === 1) {
//             return result
//         }

//   }
// }  

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    // versi rekursif
    var result = 1
    var numString = angka.toString()
    for (var i = 0; i < numString.length; i++) {
        result *= Number(numString[i])
    } if (result.toString().length === 1) {
        return result
    } else {
        return kaliTerusRekursif(result)
    }

}  


  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6