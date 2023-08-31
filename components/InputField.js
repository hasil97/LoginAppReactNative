import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { inputFieldStyles } from '../src/styles/styles';

export default function InputField({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, userInput, handleInputChange, autoCapitalize}) {


    return (
        <View style={inputFieldStyles.fieldView}>
          {icon}
          {
            inputType == 'password' ?
              (
                <TextInput
                value={userInput}
                placeholder={label}
                style={inputFieldStyles.fieldText}
                secureTextEntry={true}
                onChangeText={handleInputChange}
                autoCapitalize={autoCapitalize}
                />
              ) :
              (
                <TextInput
                placeholder= {label}
                value={userInput}
                keyboardType={keyboardType}
                style={inputFieldStyles.fieldText}
                onChangeText={handleInputChange}
                autoCapitalize={autoCapitalize} />
              )
            }
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={inputFieldStyles.fieldTextButton}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}