
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  function arrayComparator(expected, found) {
      if (expected.every(
          function(value, index){
            return value === found[index]
          }
        )
      ){
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }
  
  function isVowel(a){
      if(a.length !== 1) return false;
  
      return ['a', 'e', 'i', 'o', 'u'].indexOf(a.toLowerCase()) !== -1
  }
  
  function sum(a){
    let result = 0;
    for(let i=0; i< a.length; i++){
        result += a[i];
    }
    return result;
  }
  function multiplies(a){
    let result = 1;
    for(let i=0; i< a.length; i++){
        result *= a[i];
    }
    return result;
  }
  
  function reverse(a){
      let b = "";
      for(let i = 1; i<= a.length; i++){
          b += a[a.length -i]
      }
      return b;
  }
  function findLongestWord(a){
      let b = 0;
      for(let i = 0; i< a.length; i++){
          if(b < a[i].length){
              b = a[i].length;
          }
      }
      return b;
  }
  
  function filterLongWords(a, i){
    let result = [];
    let cur = 0;
    for(let j = 0; j < a.length; j++){
      if(a[j].length > i){
        result[cur] = a[j];
        cur++;
      }
    }
  
    return result;
  }

//   Modified JSFiddle code
    const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    })
    const c = a.filter(function(elem, i, array){
        return elem === 3;});
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });

  
  
  
  /* Test cases */
  console.log("Tests of Basic JavaScript");
  console.log("");
  console.log("1. Testing max(a,b) function:");
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  console.log("");
  console.log("2. Testing maxOfThree(a,b) function:");
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 12, -5)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(112, maxOfThree(112, 112, 0)));
  
  console.log("");
  console.log("3. Testing isVowel(a) function:");
  console.log("Expected output of isVowel('a') is true  " +  myFunctionTest(true, isVowel("a")));
  console.log("Expected output of isVowel('E') is true  " +  myFunctionTest(true, isVowel("E")));
  console.log("Expected output of isVowel('3') is false  " +  myFunctionTest(false, isVowel("3")));
  
  console.log("");
  console.log("4_A. Testing sum(a) function:");
  console.log("Expected output of sum([1,2,3,4]) is 10  " +  myFunctionTest(10, sum([1,2,3,4])));
  console.log("Expected output of sum([11,22,33,44]) is 110  " +  myFunctionTest(110, sum([11,22,33,44])));
  
  console.log("");
  console.log("4_B. Testing multiplies(a) function:");
  console.log("Expected output of multiplies([1,2,3,4]) is 24  " +  myFunctionTest(24, multiplies([1,2,3,4])));
  console.log("Expected output of multiplies([11,2,33]) is 726  " +  myFunctionTest(726, multiplies([11,2,33])));
  
  console.log("");
  console.log("5. Testing reverse(a) function:");
  console.log("Expected output of multiplies(\"hello world\") is olleh  " +  myFunctionTest("dlrow olleh", reverse("hello world")));
  console.log("Expected output of multiplies(\"Komiljon Aliev\") is veilA nojlimoK  " +  myFunctionTest("veilA nojlimoK", reverse("Komiljon Aliev")));
  
  console.log("");
  console.log("6. Testing findLongestWord(a) function:");
  console.log("Expected output of findLongestWord([\"first\",\"second\"]) is 6 " +  myFunctionTest(6, findLongestWord(["first","second"])));
  console.log("Expected output of findLongestWord([\"long\",\"longer\",\"longest\"]) is 7 " +  myFunctionTest(7, findLongestWord(["long","longer","longest"])));
  
  console.log("");
  console.log("7. Testing filterLongWords(a, i) function:");
  console.log("Expected output of filterLongWords([\"first\",\"second\",\"third\",\"fourth\"]) is [\"first\",\"second\"] " +  arrayComparator(["second","fourth"], filterLongWords(["first","second","third","fourth"], 5)));
  
  console.log("");
  console.log("8. Testing modified map/filter/reduce functions of JSFiddle:");
  console.log("Note: modified JSFiddle can be found here: https://jsfiddle.net/Komiljon_Aliyev/5rz9pdjo/2/");
  console.log("Expected output of mapping [1,3,5,3,3] array is [10,30,50,30,30] " +  arrayComparator([10,30,50,30,30], b));
  console.log("Expected output of filtering [1,3,5,3,3] array is [3,3,3] " +  arrayComparator([3,3,3], c));
  console.log("Expected output of reducing [1,3,5,3,3] array is 135 " +  myFunctionTest(135, d));

  console.log("");
  console.log("9. I put all functionas and tests inside of one JS file");
   