// function that takes a query in the form of
// What is 47 plus 36 plus 10?
// and returns the sum of the numbers
function sumQueryMultiple(query: string): string {
  const numbers = query.split(" ").slice(2);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum.toString();
}

// function that takes a query in the form of
// What is 76 minus 99 minus 123?
// and returns the difference of the numbers
function differenceQuery(query: string): string {
  const numbers = query.split(" ").slice(2);
  let difference = parseInt(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    difference -= parseInt(numbers[i]);
  }
  return difference.toString();
}


// function that takes a query in the form of
// What is 49 to the power of 29?
// and returns the result of the number to the power of the exponent
function powerQuery(query: string): string {
  const x = parseInt(query.split(" ")[2]);
  const y = parseInt((query.split(" ")[5]).replace('?', ''));
  return (Math.pow(x, y)).toString();
}

// function that takes a query in the form of
// "Which of the following numbers is the largest: 96, 42, 50?"
// and returns the largest number
function largestNumber(query: string): string {
  const numbers = query.split(":")[1].split(",");
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > largest) {
      largest = parseInt(numbers[i]);
    }
  }
  return largest.toString();
}

// function that takes a query in the form of 
// What is 9 multiplied by 95?
// What is 35 multiplied by 18?
// and returns the product of the two numbers
function productQuery(query: string): string {
  const x = parseInt(query.split(" ")[2]);
  const y = parseInt((query.split(" ")[5]).replace('?', ''));  
  return (x * y).toString();
}

// function that takes a query in the form of
// Which of the following numbers is both a square and a cube: 3403, 1000, 3718, 4056, 4058, 961, 1?
// and returns the number that is both a square and a cube
function squareAndCubeQuery(query: string): string {
  const numbers = query.split(":")[1].split(",");
  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i]);
    if (Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0) {
      return number.toString();
    }
  }
  return "None";
}

// function that takes in a query in the form of
// Which of the following numbers are primes: 89, 37, 16, 62, 47?
// and returns the prime numbers
function primeQuery(query: string): string {
  const numbers = query.split(":")[1].split(",");
  let primes = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i]);
    let isPrime = true;
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(number);
    }
  }
  return primes.join(", ");
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "I cant tell, but you can look up your name in the CMU student directory "
    );
  }
  else if (query.toLowerCase().includes("name?")) {
    return (
      "bn"
    );
  }
  else if (query.includes("plus")) {
    return (
      sumQueryMultiple(query)
    );
  }
  else if (query.includes("minus")) {
    return (
      differenceQuery(query)
    );
  }
  else if (query.includes("following numbers is the largest")) {
    return (
      largestNumber(query)
    );
  }
  else if (query.includes("multiplied")) {
    return (
      productQuery(query)
    );
  }
  else if (query.includes("both a square and a cube")) {
    return (
      squareAndCubeQuery(query)
    );
  }
  else if (query.includes("prime")) {
    return (
      primeQuery(query)
    );
  }
  else if (query.includes("power")) {
    return (
      powerQuery(query)
    );
  }

  return "";
}
