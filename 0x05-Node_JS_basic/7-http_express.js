const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentRecord[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    });

    const totalStudents = Object.values(studentGroups).reduce(
      (acc, group) => acc + group.length,
      0,
    );
    const report = [
      `Number of students: ${totalStudents}`,
      ...Object.entries(studentGroups).map(
        ([field, group]) => `Number of students in ${field}: ${group.length}. List: ${group
          .map((student) => student.firstname)
          .join(', ')}`,
      ),
    ].join('\n');

    resolve(report);
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(DB_FILE)
    .then((report) => {
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((err) => {
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
