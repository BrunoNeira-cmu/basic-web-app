// function that passes a query in the form of What is x plus y?
// and returns the sum of x and y
function sumQuery(query: string): string {
  const x = parseInt(query.split(" ")[2]);
  const y = parseInt(query.split(" ")[4]);
  return (x + y).toString();
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
      sumQuery(query)
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

  return "";
}
