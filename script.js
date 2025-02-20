function generateInputs() {
    let numSubjects = document.getElementById("numSubjects").value;
    let container = document.getElementById("subjectsContainer");
    container.innerHTML = "";  // Clear previous inputs

    for (let i = 0; i < numSubjects; i++) {
        container.innerHTML += `
            <label>Subject ${i + 1}: </label>
            <input type="number" placeholder="Credit Hours" id="credit${i}" min="1" required>
            <input type="number" placeholder="Grade Points (0-10)" id="grade${i}" min="0" max="10" step="0.1" required><br><br>
        `;
    }
}

function calculateGPA() {
    let numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0, totalCredits = 0;

    for (let i = 0; i < numSubjects; i++) {
        let credit = parseFloat(document.getElementById(`credit${i}`).value);
        let grade = parseFloat(document.getElementById(`grade${i}`).value);

        if (isNaN(credit) || isNaN(grade) || grade < 0 || grade > 10) {
            alert("Please enter valid grades (0-10) and credit hours.");
            return;
        }

        totalGradePoints += credit * grade;
        totalCredits += credit;
    }

    let gpa = totalGradePoints / totalCredits;
    document.getElementById("gpaResult").innerHTML = `GPA: <strong>${gpa.toFixed(2)}</strong>`;
}

function calculateCGPA() {
    let gpaList = document.getElementById("prevGPA").value.split(",");
    let totalGPA = 0, numSemesters = gpaList.length;

    for (let i = 0; i < numSemesters; i++) {
        let gpa = parseFloat(gpaList[i]);

        if (isNaN(gpa) || gpa < 0 || gpa > 10) {
            alert("Enter valid GPA values between 0-10.");
            return;
        }

        totalGPA += gpa;
    }

    let cgpa = totalGPA / numSemesters;
    let percentage = cgpa * 9.5;
    document.getElementById("cgpaResult").innerHTML = `CGPA: <strong>${cgpa.toFixed(2)}</strong> <br> Equivalent Percentage: <strong>${percentage.toFixed(2)}%</strong>`;
}
