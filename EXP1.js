function calculateResult() {

    let n = parseInt(document.getElementById("subjects").value);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of subjects!");
        return;
    }

    let total = 0;

    // Loop to take marks
    for (let i = 0; i < n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + (i + 1)));

        if (isNaN(marks)) {
            alert("Invalid input! Please enter numbers only.");
            i--; // repeat same subject
            continue;
        }

        total += marks;
    }

    let average = total / n;

    // Grade using conditions
    let grade;
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Pass / Fail
    let resultStatus = (average >= 40) ? "Pass" : "Fail";

    // Display output
    document.getElementById("result").innerHTML =
        "<b>Total Marks:</b> " + total + "<br>" +
        "<b>Average Marks:</b> " + average.toFixed(2) + "<br>" +
        "<b>Grade:</b> " + grade + "<br>" +
        "<b>Result:</b> " + resultStatus;
}