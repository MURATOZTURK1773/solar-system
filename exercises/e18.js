import { data } from "../data/data";
import { maxBy } from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let findDiscoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);

  let yearCount = findDiscoveryYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  let mostCommonYear = maxBy(Object.entries(yearCount), ([year, count]) => count)
  return Number(mostCommonYear[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function