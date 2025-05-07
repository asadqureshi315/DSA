// --- Day 2: Red-Nosed Reports ---

// Fortunately, the first location The Historians want to search isn't a long walk from the Chief Historian's office.

// While the Red-Nosed Reindeer nuclear fusion/fission plant appears to contain no sign of the Chief Historian, the engineers there run up to you as soon as they see you. Apparently, they still talk about the time Rudolph was saved through molecular synthesis from a single electron.

// They're quick to add that - since you're already here - they'd really appreciate your help analyzing some unusual data from the Red-Nosed reactor. You turn to check if The Historians are waiting for you, but they seem to have already divided into groups that are currently searching every corner of the facility. You offer to help with the unusual data.

// The unusual data (your puzzle input) consists of many reports, one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:

// 7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9
// This example data contains six reports each containing five levels.

// The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.
// In the example above, the reports can be found safe or unsafe by checking those rules:

// 7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
// 1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
// 9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
// 1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
// 8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
// 1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
// So, in this example, 2 reports are safe.

// Analyze the unusual data from the engineers. How many reports are safe?

const fs = require("fs");

const MAX_COLUMNS = 10; // Maximum columns per row

// Read file synchronously
let data = fs.readFileSync("puzzleInput.txt", "utf8");

let cores = data
  .trim()
  .split("\n") // Split lines
  .map((line) => {
    let numbers = line
      .trim()
      .split(/\s+/) // Split by whitespace
      .map(Number); // Convert to numbers

    // Fill the row with 0s if it's less than MAX_COLUMNS
    while (numbers.length < MAX_COLUMNS) {
      numbers.push(0);
    }

    return numbers.slice(0, MAX_COLUMNS); // Ensure max columns
  });

// cores = [
//   [7, 6, 4, 2, 1],
//   [1, 2, 7, 8, 9],
//   [9, 7, 6, 2, 1],
//   [1, 3, 2, 4, 5],
//   [8, 6, 4, 4, 1],
//   [1, 3, 6, 7, 9],
// ];
let safe = cores.length;
console.log(safe);
function calcReactivity(matrix) {
  let safe = matrix.length; // Start with all rows as "safe"

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let increasing = true;
    let decreasing = true;

    for (let j = 0; j < row.length - 1; j++) {
      let diff = row[j + 1] - row[j];

      // Condition 1: Difference must be between 1 and 3
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        console.log(`Row ${i} failed condition 1:`, row);
        safe -= 1;
        break; // No need to check further if one condition fails
      }

      // Condition 2: Check if the row is consistently increasing or decreasing
      if (diff > 0) decreasing = false; // If one value is bigger, it's not decreasing
      if (diff < 0) increasing = false; // If one value is smaller, it's not increasing
    }

    // If the row is neither fully increasing nor fully decreasing, it's invalid
    if (!increasing && !decreasing) {
      console.log(
        `Row ${i} failed condition 2 (not fully increasing or decreasing):`,
        row
      );
      safe -= 1;
    }
  }

  console.log(`Safe rows: ${safe}`);
}
calcReactivity(cores);
