/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SGcolor from '../assets/svg/SGcolor.svg';
import GoogleSVG from '../assets/svg/google.svg';
import FacebookSVG from '../assets/svg/facebook.svg';
import TwitterSVG from '../assets/svg/twitter.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { styles } from '../src/styles/styles';
import axios from 'axios';
import { registerViewStyles } from '../src/styles/styles';
// import 
//alignItems basically centers whichever text or image is inside the view on which this style is used

const Login = ({navigation}) => {
  const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value)
  }

  const postUrl = 'https://cosmosdbpost.azurewebsites.net/api/checkpwandlogin?code=ucdvjSjOq9V2Y8PsvsyHOehpMh6rhkpSLd5Y7hHc3FNfAzFuluA-mQ==';

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })
  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    // stateUpdater('');
  }
  const [error, setError] = useState('');

  const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
  }

  const isValidForm = () => {
    if(!isValidObjField(inputValues)){
      return updateError('Require all fields!', setError)
    }

    if(!isValidEmail(inputValues.email)){
      return updateError('Invalid email!', setError)
    }

    if(!inputValues.password.trim() || inputValues.password.length < 8) {
      return updateError('password is less than 8 characters', setError)
    }

    return true
  }

  const handleInputChange = (field, text) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: text,
    }));
  };

  const handleLogin = async () => {
    const data = {
      "email": inputValues.email,
      "data": {
        "email": inputValues.email,
        "password": inputValues.password
      }
    }
    if(isValidForm()){
      try{
        console.log(data);
        const response = await axios.post(postUrl, data);
        console.log(response.data);
        if(response.data.validation == 'Valid credentials'){
          navigation.navigate('Home', { name: response.data.name });
          console.log('successfully logged in')
        }
        else{
          console.log('incorrect creds')
          return updateError('Incorrect credentials', setError);
        }
      }
      catch(error){
        console.log(error);
      }
    }
    else{
      console.log('failed', data);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}> 
      <View style={styles.loginView}>
        <View style={{alignItems: 'center'}}> 
          <SGcolor 
            height={200} 
            width={200} 
          />
        </View>

        <Text style={styles.loginText}>
          Login
        </Text>

        {error ? <Text style={registerViewStyles.loginError}>{error}</Text>: null}

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons name='alternate-email' 
              size={20} 
              color='#666' 
              style={{marginRight: 5}} 
            />
          }
          keyboardType={'email-address'}
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
          fieldButtonLabel={'Forgot?'}
          handleInputChange={(text) => handleInputChange("password", text)}
          autoCapitalize='none'
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={'Login'}
          onPress={handleLogin}
          // onPress={() => {}}
        />

        <Text style={styles.loginWithText}> 
          Or, login with ...
        </Text>

        <View style={styles.svgView}>
          <TouchableOpacity
            onPress={ () => {}}
            style = {styles.svg}>
            <GoogleSVG 
              height={24} 
              width={24} 
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ () => {}}
            style = {styles.svg}>
            <FacebookSVG 
              height={24} 
              width={24} 
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ () => {}}
            style = {styles.svg}>
            <TwitterSVG 
              height={24} 
              width={24} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.registerTextView}>
          <Text>
            New to the app?  </Text>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerTextColor}> 
                 Register
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;