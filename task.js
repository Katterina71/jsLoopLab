 
 //Part 1


 for ( let  num = 1; num <=100; num ++ ) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz"); 

    } else if (num % 5 === 0) {
        console.log("Buzz");
    }  else 
    console.log(num);
 
 }
 
 // Part Time


console.log('Part 2');

for ( let n = 50; n < 60; n++) {
    let isPrime = true;
    for (let j = 2; j < n; j++) {
        if ( n % j === 0) {
            isPrime = false;
        };
    } 
    if (isPrime === true) {
    console.log(n);
    break; }
    
}


  // Part 3 Feeling Loopy

console.log('Part 3 Feeling Loopy');

const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26,";
let cell = "";
let rowTable = "";

for (let i=0; i <CSV.length; i++) {

   if (CSV[i] !== ",") {
      cell = cell + CSV[i];
   } 

    if (CSV[i] === ",") {
        rowTable = rowTable + cell + " ";
        cell= "";
      
    }

    if (CSV[i] === "\n") {
      rowTable = rowTable + cell;
      console.log(rowTable);
      rowTable="";
      cell= ""; 
    }

  if (i === CSV.length-1 ) {
    rowTable = rowTable + cell;
     console.log(rowTable);
  }  

}

