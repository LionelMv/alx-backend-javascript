export default function createIteratorObject(report) {
  const employees = [];
  for (const empList of Object.values(report.allEmployees)) {
    for (const emp of empList) {
      employees.push(emp);
    }
  }
  return employees;
}
