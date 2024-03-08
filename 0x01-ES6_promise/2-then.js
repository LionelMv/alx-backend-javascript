/*
 * If the promise resolves, return:
    - status: 200
    - body: success
 * If it rejects, return an empty Error object
 * For every resolution, log 'Got a response from the API'
*/

/* eslint-disable no-console */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
