function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var count = 0
    if (waktu === 0) {
        return count
    } else if (waktu < 15) {
        return count+1 
    } else {
       return count = 1 + makanTerusRekursif(waktu-15)
    }
}  


// function makanTerusRekursif(waktu) {
//     // you can only write your code here!
//     var n = 0
//     var count = 0
//     for (var i = waktu; i >= 15; i++) {
//         if (waktu < 15 && waktu > 0) {
//             return count+1
//         } else if (waktu >= 15) {
//             waktu -= 15
//             count += 1
//         } else {
//             return count
//         }
//     }
//     return count
// }  

  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0