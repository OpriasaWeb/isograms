// CodeWars: Isograms (7 kyu challenge)
// Description: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  var toLCase = str.toLowerCase();
  
  var isograms = {};

  for(let i = 0; i < str.length; i++){
    // console.log(str[i]);
    
    var stringIso = toLCase[i];
    
    if(isograms[stringIso]){
      // return false;
      console.log("false");
    } else{
      isograms[stringIso] = 1;
    }

  }
  
  // return true;
  console.log("true");

}

isIsogram('Dermatoglyphics');

// ----- Best practices ----- //

// function isIsogram(str){
//   var i, j;
//   str = str.toLowerCase();
//   for(i = 0; i < str.length; ++i)
//     for(j = i + 1; j < str.length; ++j)
//       if(str[i] === str[j])
//         return false;
//   return true;
// }

// function isIsogram(str) {
//   str = str.toLowerCase();

//   for (first = 0; first < str.length - 1; first++) {
//     for (second = first + 1; second < str.length; second++) {
//       if (str[first] === str[second]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }
// ----- Best practices ----- //