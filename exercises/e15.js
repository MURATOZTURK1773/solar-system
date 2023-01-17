import { data } from "../data/data";

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  // Your code goes here...
  const arr1 = data.planets.filter(elm => elm.hasOwnProperty("moonsCount") == 0).map(elm => elm.name);
  return arr1;
  // if (data.planets.filter(elm => elm.hasOwnProperty("moonsCount")) == 0) {}
  // return data.planets.map(elm => elm.name);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
