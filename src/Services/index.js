import auth from '@react-native-firebase/auth';

export const sendOtpOnContact = async phoneNumber => {
  console.log('phoneNumber', phoneNumber);

  return new Promise((resolve, reject) => {
    auth()
      .signInWithPhoneNumber('+91' + phoneNumber)
      .then(confirmation => {
        resolve({
          message: 'otp sent successfully',
          confirm: confirmation,
        });
      })
      .catch(e => {
        console.log('e', e);

        reject({
          message: 'error while sending otp',
        });
      });
  });
};
