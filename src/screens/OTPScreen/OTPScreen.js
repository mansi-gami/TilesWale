import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const OTPScreen = () => {
  const [otpInput, setOtpInput] = useState('');

  const submitOtp = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const navigation = useNavigation();
  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={30} />
        </TouchableOpacity>
        <View style={style.heading}>
          <Text style={style.headingText}>OTP verification</Text>
          <Text style={style.descLine}>
            We've sent a 6-digit OTP to xxxxxxxxxx via SMS
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
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: scale(30),
          }}>
          <TextInput
            keyboardType={'number-pad'}
            placeholder="Enter OTP"
            style={style.input}
            onChangeText={value => setOtpInput(value)}
          />
        </View>
        <View style={style.button}>
          <TouchableOpacity style={style.btn} onPress={() => submitOtp()}>
            <Text style={style.btnText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OTPScreen;

// import {View, TextInput} from 'react-native';
// import React, {useState} from 'react';
// import {Button} from 'react-native-paper';

// const OTPScreen = props => {
//   const [code, setCode] = useState('');

//   async function confirmCode(confirm) {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   return (
//     <>
//       <TextInput
//         style={{borderWidth: 1, marginBottom: 20}}
//         value={code}
//         onChangeText={text => setCode(text)}
//       />
//       <Button title="Confirm Code" onPress={() => confirmCode(props.confirm)} />
//     </>
//   );
// };

// export default OTPScreen;
