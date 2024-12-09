document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const email = document.getElementById('email').value;

    const tableBody = document.getElementById('employee-table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${position}</td>
        <td>${email}</td>
    `;

    tableBody.appendChild(newRow);

    // Reset form
    document.gdocument.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const positionInput = document.getElementById('position');
    const emailInput = document.getElementById('email');

    const name = nameInput.value.trim();
    const position = positionInput.value.trim();
    const email = emailInput.value.trim();

    if (name && position && email) {
        const tableBody = document.getElementById('employee-table-body');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${position}</td>
            <td>${email}</td>
        `;

        tableBody.appendChild(newRow);

        // Reset form
        document.getElementById('employee-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});etElementById('employee-form').reset();
});