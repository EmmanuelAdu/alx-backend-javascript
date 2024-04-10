import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([uploadPhotoRes, createUserRes]) => {
      console.log(`${uploadPhotoRes.body} ${createUserRes.firstName} ${createUserRes.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
