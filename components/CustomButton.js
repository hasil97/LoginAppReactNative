import { Text, TouchableOpacity } from "react-native";
import React from 'react';
import { customButtonStyles } from "../src/styles/styles";

export default function CustomButton({label, onPress}) {
    return (
    <TouchableOpacity onPress={onPress} style={customButtonStyles.buttonView}>
        <Text style={customButtonStyles.buttonText}>
          {label}
        </Text>
    </TouchableOpacity>
    )
}

