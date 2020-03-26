/* function interest(principal,rate = 3.5,year=5){
  return principal*rate / 100*year;
}

console.log(interest(10000)); */

function interest(principal, rate = 3.5, year) {
    return principal * rate / 100 * year;
}

console.log(interest(10000, undefined, 5));