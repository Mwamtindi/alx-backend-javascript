import signUpUser from './4-user-promise'; // import from 4-user-promise.js
import uploadPhoto from './5-photo-reject'; // import from 5-photo-reject.js

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  })));
}
