// Fizz Buzz Algorithm
// What this function will do is it will log out to the console every number from one to NUM 
// So if we pass the number 20 into our Fizz Buzz function, we should see the numbers one through 20 logged out in our console 
// THE CATCH: For each number, if the number is divisible by three, we want to log out the word Fiz instead of that number 
// If the number is divisible by five, we want to log out the word Buzz instead of that number 
// And if the number is divisible by both three and five, we want to log out the word fizz buzz instead 


// Modulus Operator gives you the remainder of a number after that number has been divided by another number 
// consolelog(7 % 3) 1
// consolelog(100 % 30) 10 (evenly divisible) 
 



function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        // if( i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        // Every number divisible by 3 and 5, is also divisible by 15, so 
        if ( i % 15 === 0) console.log('FizzBuzz');
        else if(i % 3 === 0) console.log('Fizz');
        else if(i % 5 === 0) console.log('Buzz');
        else console.log(i);        
    }
}

fizzBuzz(30);
