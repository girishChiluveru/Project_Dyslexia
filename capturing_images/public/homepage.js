const correctUsername = "admin";
const correctPassword = "password123";

// Sample report data for children
const reports = [];

document.getElementById('childrenBtn').onclick = () => {
    window.location.href = "quiz.html"; // Link to the quiz page
};

document.getElementById('adminBtn').onclick = () => {
    document.getElementById('adminLogin').style.display = 'block';
};

document.getElementById('loginBtn').onclick = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('adminMessage').innerText = "Login successful!";
        document.getElementById('reports').style.display = 'block'; // Show reports section
    } else {
        document.getElementById('adminMessage').innerText = "Incorrect username or password.";
        document.getElementById('reports').style.display = 'none'; // Ensure reports are hidden
    }
};

// Link the reports page to the button
document.getElementById('viewReportsBtn').onclick = () => {
    window.location.href = "report.html"; // Redirect to the reports page
};

// Function to save a child's report
function saveReport(childId, name, score) {
    reports.push({ id: childId, name: name, score: score });
    localStorage.setItem('reports', JSON.stringify(reports)); // Save to localStorage
}

// Expose the saveReport function to the global scope
window.saveReport = saveReport;