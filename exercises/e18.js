import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let findDiscoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);

  let yearCount = {};
  findDiscoveryYears.forEach(i => {
    if (yearCount[i]) {
      yearCount[i]++;
    } else {
      yearCount[i] = 1;
    }
  });

  let mostCommonYear;
  let highestCount = 0;
  for(let i in yearCount) {
    if (yearCount[i] > highestCount) {
      mostCommonYear = i;
      highestCount = yearCount[i];
    }
  }
  return Number(mostCommonYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
