// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  const header2 = document.createElement('th');
  header2.textContent = 'Location';
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  students.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = student.firstName;
    const cell2 = document.createElement('td');
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);

