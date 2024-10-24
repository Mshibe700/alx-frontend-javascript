import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const processedResults = results.map((item) => {
      if (item.status === 'rejected') {
        console.error(`Error: ${item.reason}`);
      }
      return {
        status: item.status,
        value: item.value || item.reason, // Handles both success and failure
      };
    });
    return processedResults;
  });
}
