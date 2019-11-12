function changeVocals (str) {
    //code di sini
    var karakter = '';
    var hasil = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A') {
        karakter = (str[i].charCodeAt()) + 1;
        hasil += String.fromCharCode(karakter);
      } else {
        hasil += str[i]
      }
    }
    return hasil
  }
  
  function reverseWord (str) {
    //code di sini
    var reversed = ''
    for (var i = str.length-1; i >= 0; i--) {
      reversed += str[i]
    }
    return reversed
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var modified = ''
    for (var j = 0; j < str.length; j++) {
      if (str[j] === str[j].toUpperCase()) {
        modified += str[j].toLowerCase()
       } else {
         modified += str[j].toUpperCase()
       }
    }
    return modified
  }
  
  function removeSpaces (str) {
    //code di sini
    var removed = ''
    for (var x = 0; x < str.length; x++) {
      if (str[x] !== " ") {
        removed += str[x]
      }
    }
    return removed
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
      var changeVoc = changeVocals(name)
      var reverse = reverseWord(changeVoc)
      var setUp = setLowerUpperCase(reverse)
      var remove = removeSpaces(setUp)
      return remove
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'