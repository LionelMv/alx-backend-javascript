import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const dataPath = process.argv.length > 2 ? process.argv[2] : '';
      const studentGroups = await readDatabase(dataPath);

      const responseParts = ['This is the list of our students'];

      const sortedGroups = Object.entries(studentGroups).sort(([a], [b]) => a.localeCompare(b));
      for (const [field, group] of sortedGroups) {
        const studentsList = group
          .map((student) => student.firstname)
          .join(', ');
        responseParts.push(
          `Number of students in ${field}: ${group.length}. List: ${studentsList}`,
        );
      }

      response.status(200).send(responseParts.join('\n'));
    } catch (err) {
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const dataPath = process.argv.length > 2 ? process.argv[2] : '';
      const { major } = request.params;

      if (!VALID_MAJORS.includes(major)) {
        response.status(400).send('Major parameter must be CS or SWE');
        return;
      }

      const studentGroups = await readDatabase(dataPath);
      const group = studentGroups[major] || [];
      const studentsList = group.map((student) => student.firstname).join(', ');

      response.status(200).send(`List: ${studentsList}`);
    } catch (err) {
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
