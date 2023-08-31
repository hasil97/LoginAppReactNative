/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}    
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
      }}>
      <Text style={{fontSize: 20, color: '#000', fontFamily: 'Pixel2'}}>
        Login
      </Text>
      <MaterialIcons name="arrow-forward-ios" size={22} color="#000" />
    </TouchableOpacity>
  );
};

export default LoginButton;