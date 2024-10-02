import signUpUser from './4-user-promise'; // import from 4-user-promise.js
import uploadPhoto from './5-photo-reject'; // import from 5-photo-reject.js

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  try {
    const user = await signUpUser(firstName, lastName);
    promises.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (error) {
    promises.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
}
