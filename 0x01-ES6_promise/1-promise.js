/*
 * Returns a promise by passing an object with 2 attributes if true.
 * Rejects the promise with an error object if false.
*/

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
