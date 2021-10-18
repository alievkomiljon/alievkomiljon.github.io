const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   
   let sum = 0;
   let getNumber = function(){ readline.question('Enter a number:', number => {
       if(number === 'stop'){
           console.log('sum:' + sum);
           readline.close();
       }
       else{
           if(parseInt(number)){
               sum += parseInt(number); 
           }
        getNumber();
       }
   })};
   getNumber();
   