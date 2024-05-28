import fs from 'fs';

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    if (data) {
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, -1);

      fileLines.slice(1).forEach((line) => {
        const studentRecord = line.split(',');
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.reduce(
          (acc, propName, idx) => {
            acc[propName] = studentRecord[idx];
            return acc;
          },
          {},
        );

        studentGroups[field].push(studentEntries);
      });

      return resolve(studentGroups);
    }

    // Added return statement to handle case where data is undefined
    return reject(new Error('No data available'));
  });
});

export default readDatabase;
