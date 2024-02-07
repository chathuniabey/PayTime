const attendanceForm = document.getElementById("attendance-form");

attendanceForm.addEventListener("submit", submitAttendance);

function submitAttendance(event) {
    event.preventDefault();

    const employeeName = document.getElementById("employee-name").value;
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const breakTime = parseInt(document.getElementById("break-time").value, 10);

    const workTime = calculateWorkTime(startTime, endTime, breakTime);
    const overtime = calculateOvertime(workTime);

    // You can now send workTime and overtime to the server or perform any desired action with them.

    // Clear the form fields
    attendanceForm.reset();
}

function calculateWorkTime(start, end, breakTime) {
    const startDateTime = new Date(`2000-01-01T${start}:00`);
    const endDateTime = new Date(`2000-01-01T${end}:00`);
    const totalMilliseconds = endDateTime - startDateTime - breakTime * 60000;
    const hours = totalMilliseconds / (1000 * 60 * 60);
    return hours.toFixed(2);
}

function calculateOvertime(workTime) {
    const maxWorkHours = 8; // Assuming 8 hours is the standard workday
    const workTimeFloat = parseFloat(workTime);
    if (workTimeFloat > maxWorkHours) {
        return (workTimeFloat - maxWorkHours).toFixed(2);
    }
    return "0.00";
}