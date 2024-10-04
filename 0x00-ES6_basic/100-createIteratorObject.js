export default function createIteratorObject(report) {
  // Combine all employees into a single array
  const allEmployees = [];

  // Loop through each department in the report object
  for (const department of Object.values(report.allEmployees)) {
    // Spread the employees into the allEmployees array
    allEmployees.push(...department);
  }

  // Return an iterator for the array of all employees
  return allEmployees[Symbol.iterator]();
}
