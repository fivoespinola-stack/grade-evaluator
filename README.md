# Grade Evaluator

This project evaluates a learner's average score and determines whether they passed or failed.

## JavaScript Code

```javascript
const learnerName = "Peter Parker";
const score1 = 90;
const score2 = 85;
const score3 = 88;

function calculateAverage(a, b, c) {
  return ((a + b + c) / 3).toFixed(2);
}

function getResult(average) {
  if (average >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

const average = calculateAverage(score1, score2, score3);
const result = getResult(average);

console.log(learnerName + " has an average of " + average + " and " + result + ".");
```

## How it works

- `score1`, `score2`, and `score3` store the learner's scores.
- `calculateAverage(a, b, c)` computes the mean of the three scores and rounds it to two decimal places.
- `getResult(average)` checks whether the average is at least `75`.
  - If true, it returns `Passed`.
  - Otherwise, it returns `Failed`.
- The final message is printed to the console.

## Example Output

```bash
Peter Parker has an average of 87.67 and Passed.
```

## Run it

Open the project folder in a JavaScript runtime or execute the file with Node.js:

```bash
node js/grade.js
```
