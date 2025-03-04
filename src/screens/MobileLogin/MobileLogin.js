import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
import {sendOtpOnContact} from '../../Services';

const countryCode = [
  {label: '+91', value: '1'},
  {label: '+355', value: '2'},
  {label: '+213', value: '3'},
  {label: '+1684', value: '4'},
  {label: '+376', value: '5'},
  {label: '+244', value: '6'},
  {label: '+1264', value: '7'},
  {label: '+376', value: '8'},
];

const MobileLogin = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [confirmData, setConfirmData] = useState('');
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('+91');

  const sendOtp = async () => {
    try {
      const response = await sendOtpOnContact(mobileNo);
      console.log('response', response);
      if (response.message === 'otp sent successfully') {
        setConfirmData(response);
        Alert.alert('Otp is Sent Please Verify It...');
        navigation.navigate('OTPScreen');
      } else {
        Alert.alert('Please Check Your contact Number');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <View style={style.heading}>
          <Text style={style.headingText}>Verify Your Mobile Number</Text>
          <Text style={style.descLine}>
            We need to verify your number to secure your account.
          </Text>
        </View>
        <View style={style.imageContent}>
          <Image
            style={style.avatarImage}
            source={require('../../assets/otp-verification.webp')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: scale(10),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(30),
          }}>
          <View>
            <Dropdown
              style={style.dropdown}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={countryCode}
              search
              maxHeight={300}
              labelField="label"
              searchPlaceholder="Search..."
              selectedValue={selectedValue}
              onChange={item => {
                setSelectedValue(item.selectedValue);
              }}
            />
          </View>
          <View>
            <TextInput
              keyboardType={'number-pad'}
              placeholder="Enter Mobile No."
              style={style.input}
              onChangeText={value => setMobileNo(value)}
              maxLength={10}
            />
          </View>
        </View>
        <View style={style.button}>
          <TouchableOpacity style={style.btn} onPress={() => sendOtp()}>
            <Text style={style.btnText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default MobileLogin;

// import {View, Text, Button} from 'react-native';
// import React, {useState} from 'react';
// import {signInWithPhoneNumber} from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import OTPScreen from '../OTPScreen/OTPScreen';

// const MobileLogin = () => {
//   const [confirm, setConfirm] = useState(null);

//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   return (
//     <View>
//       {confirm ? (
//         <OTPScreen confirm={confirm} />
//       ) : (
//         <Button
//           title="Phone Number Sign In"
//           onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//         />
//       )}
//     </View>
//   );
// };

// export default MobileLogin;
