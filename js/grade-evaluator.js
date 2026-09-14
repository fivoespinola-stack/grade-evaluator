// Grade Evaluator

class GradeEvaluator {
  constructor(score) {
    this.score = score;
  }

  // Convert numeric score to letter grade
  getGrade() {
    if (this.score < 0 || this.score > 100) {
      return "Invalid score.";
    } else if (this.score >= 90) {
      return "A";
    } else if (this.score >= 80) {
      return "B";
    } else if (this.score >= 70) {
      return "C";
    } else if (this.score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  // Provide feedback based on grade
  getFeedback() {
    const grade = this.getGrade();
    switch (grade) {
      case "A": return "Excellent work! Keep it up.";
      case "B": return "Good job, you’re doing well.";
      case "C": return "Fair effort, but room for improvement.";
      case "D": return "Needs more focus and practice.";
      case "F": return "Unsatisfactory, consider reviewing the material.";
      default: return "Please enter a valid score between 0 and 100.";
    }
  }
}

// Example usage:
const student1 = new GradeEvaluator(95);
console.log("Score:", student1.score);       // 95
console.log("Grade:", student1.getGrade());  // A
console.log("Feedback:", student1.getFeedback()); // Excellent work! Keep it up.

const student2 = new GradeEvaluator(72);
console.log("Score:", student2.score);       // 72
console.log("Grade:", student2.getGrade());  // C
console.log("Feedback:", student2.getFeedback()); // Fair effort, but room for improvement.

const student3 = new GradeEvaluator(101);
console.log("Score:", student3.score);       // 101
console.log("Grade:", student3.getGrade());  // Invalid score.
console.log("Feedback:", student3.getFeedback()); // Please enter a valid score between 0 and 100.
