
  function sum(a){
    let result = 0;
    a.map( a => result += a);
    return result;
  }
  function multiplies(a){
    let result = 1;
    a.map( a => result *= a);
    return result;
  }
  
  function reverse(a){
      let b = "";
      a.split("").map(a => b = a.concat(b));
      return b;
  }
  
  function filterLongWords(a, i){
    let result = a.filter( f => f.length > i);
    return result;
  }


  
  
  
  /* Test cases */
  console.log("Tests of Basic JavaScript");
  
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
  console.log("Expected output of multiplies(\"hello world\") is dlrow olleh  " +  myFunctionTest("dlrow olleh", reverse("hello world")));
  console.log("Expected output of multiplies(\"Komiljon Aliev\") is veilA nojlimoK  " +  myFunctionTest("veilA nojlimoK", reverse("Komiljon Aliev")));
  

  console.log("");
  console.log("7. Testing filterLongWords(a, i) function:");
  console.log("Expected output of filterLongWords([\'first\',\'second\',\'third\',\'fourth\']) is [\'first\',\'second\'] " +  arrayComparator(["second","fourth"], filterLongWords(["first","second","third","fourth"], 5)));
   