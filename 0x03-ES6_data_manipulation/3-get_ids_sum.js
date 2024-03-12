export default function getStudentIdsSum(list) {
  return list.reduce(
    ((total, currentValue) => total + currentValue.id), 0,
  );
}
