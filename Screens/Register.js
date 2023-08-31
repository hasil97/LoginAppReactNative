/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SGcolor from '../assets/svg/SGcolor.svg';
import GoogleSVG from '../assets/svg/google.svg';
import FacebookSVG from '../assets/svg/facebook.svg';
import TwitterSVG from '../assets/svg/twitter.svg';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import DatePicker from 'react-native-date-picker';
import { styles, registerViewStyles } from '../src/styles/styles';
import  axios  from 'axios'; 
//alignItems basically centers whichever text or image is inside the view on which this style is used
// import bcrypt from 'bcryptjs';

const Register = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  const [inputValues, setInputValues] = useState({
    // id: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: ''
  })

  const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value)
  }

  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
  }

  const postUrl = 'https://cosmosdbpost.azurewebsites.net/api/checkemailandpost?code=ucdvjSjOq9V2Y8PsvsyHOehpMh6rhkpSLd5Y7hHc3FNfAzFuluA-mQ==';
  const getUrl = 'https://cosmosdbpost.azurewebsites.net/api/reactnativeget?code=ucdvjSjOq9V2Y8PsvsyHOehpMh6rhkpSLd5Y7hHc3FNfAzFuluA-mQ==';
  const [error, setError] = useState('');

  const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
  }

  const handleInputChange = (field, text) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: text,
    }));
  };

  const isValidForm = () => {
    if(!isValidObjField(inputValues)){
      return updateError('Require all fields!', setError)
    }

    if(!inputValues.name.trim() || inputValues.name.length < 3){
      return updateError('Invalid Name', setError)
    }

    if(!isValidEmail(inputValues.email)){
      return updateError('Invalid email!', setError)
    }

    if(!inputValues.password.trim() || inputValues.password.length < 8) {
      return updateError('password is less than 8 characters', setError)
    }

    if(inputValues.password !== inputValues.confirmPassword) {
      return updateError(`Passwords don't match`, setError)
    }

    return true
  }

  const submitForm = (data) => {
    if(isValidForm()){
      console.log(data);
      
      postData(data);
    }
    else{
      console.log('failed', inputValues);
    }
  }

  const postData = async (data) => {
    try {
      const response = await axios.post(postUrl, data);
      if(response.data == 'Email exists'){
        return updateError(`Email already exists`, setError)
      }
      else{        
        navigation.navigate('Login');
      }
      console.log('Response', response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(getUrl);
      console.log('Response:', response.data);
      // Do something with the response
  } catch (error) {
      console.error('Error:', error);
      // Handle error
  }
  }

  const handleSaveData = async () => {

    const data = {
        "email": inputValues.email,
        "data": {          
        "password": inputValues.password,
        "dob": inputValues.dob,        
        "name": inputValues.name
        }
    }
    console.log('input data', inputValues);
    console.log('saved data', data);
    // getData();
    
    submitForm(data);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <ScrollView showsVerticalScrollIndicator={false} style={registerViewStyles.scrollView}>
            <View style={registerViewStyles.logoSG}>
                <SGcolor height={200} width={200} />
            </View>

            <Text style={registerViewStyles.registerText}>
                Register
            </Text>

            <View style={styles.svgView}>
                <TouchableOpacity
                    onPress={ () => {}}
                    style = {styles.svg}>                
                    <GoogleSVG height={24} width={24} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={ () => {}}
                  style = {styles.svg}>
                    <FacebookSVG height={24} width={24} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={ () => {}}
                  style = {styles.svg}>
                    <TwitterSVG height={24} width={24} />
                </TouchableOpacity>
            </View>
            <Text style={styles.loginWithText}> 
                Or, register with email ...
            </Text>

            {error ? <Text style = {registerViewStyles.loginError}>{error}</Text>: null}
            <InputField 
              label={'Full Name'} 
              icon={
                  <Ionicons 
                    name='person-outline'  
                    size={20} 
                    color='#666' 
                    style={{marginRight: 5}} 
                  />
              }
              handleInputChange={(text) => handleInputChange("name", text)}
            />

            <InputField 
              label={'Email ID'}
              icon={
                <MaterialIcons 
                  name='alternate-email' 
                  size={20} 
                  color='#666' 
                  style={{marginRight: 5}} 
                />
              }
              keyboardType="email-address"
              handleInputChange={(text) => handleInputChange("email", text)}
              autoCapitalize='none'
            />

            <InputField
              label={'Password'}
              icon={
                <Ionicons 
                  name='lock-closed-outline' 
                  size={20} 
                  color='#666' 
                  style={{marginRight: 5}} 
                />
              }
              inputType='password'
              handleInputChange={(text) => handleInputChange("password", text)}
              autoCapitalize='none'
            />
            
            <InputField
              label={'Confirm Password'}
              icon={
                <Ionicons 
                  name='lock-closed-outline' 
                  size={20} 
                  color='#666' 
                  style={{marginRight: 5}} 
                />
              }
              inputType='password'
              handleInputChange={(text) => handleInputChange("confirmPassword", text)}
              autoCapitalize='none'
            />

            <View style={registerViewStyles.calenderField}>
                <Ionicons 
                  name='calendar-outline' 
                  size={20} 
                  color='#666' 
                  style={{marginRight: 5}} 
                />

                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={registerViewStyles.dobText}>
                        {dobLabel}
                    </Text>
                </TouchableOpacity>
            </View>

            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                maximumDate={new Date()}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setDobLabel(date.toDateString())
                inputValues.dob = date.toDateString()
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
            
            <CustomButton 
                label={'Register'}
                onPress={handleSaveData}
            />            
            
            <View style={styles.registerTextView}>
                <Text>Already Registered? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerTextColor}> Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};
// {/* <Loginbutton></Loginbutton> */}
export default Register;
