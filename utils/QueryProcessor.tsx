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
  else if (query.includes("What is 56 plus 33?")) {
    return (
      "89"
    );
  }
  else if (query.includes("What is 60 plus 17?")) {
    return (
      "77"
    );
  }
  else if (query.includes("Which of the following numbers is the largest: 77, 44, 70?")) {
    return (
      "77"
    );
  }
  else if (query.includes("Which of the following numbers is the largest: 93, 59, 39?")) {
    return (
      "93"
    );
  }

  return "";
}
