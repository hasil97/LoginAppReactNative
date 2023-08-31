import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from "react-native";
import React from "react";
import SGcolor from '../assets/svg/SGcolor.svg'
import { useRoute } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import Webview from 'react-native-webview'

const Home = ({navigation}) => {
    const route = useRoute();
    const name = route.params?.name;

    handleLogOut = () => {
        navigation.navigate('Login')
    }
    return( 
        <SafeAreaView style={{flex: 1,
            backgroundColor:'#fff' }}>
            <ScrollView style={{padding:10}}> 
                <View style={styles.firstrow}>
                    <Text 
                    style={{ fontSize: 18, color: '#000', fontFamily: 'RobotoMono-Regular', marginTop:15}}>
                        Hello {name}
                    </Text>                   
                    <ImageBackground source={require('../assets/images/useranimojibeard.png')} style={styles.propic} imageStyle={{borderRadius: 25}}/> 
                </View>
                {/* <View style={{marginTop: 125}}>
                    <Text 
                    style={{ fontSize: 26, color: '#000', fontFamily: 'RobotoMono-Regular', marginTop:15}}>
                        Welcome to Skywalk Global's Homepage
                    </Text>
                </View> */}
                
                <View style={{ marginTop: 700}}>
                <CustomButton 
                label={'Logout'}
                onPress={handleLogOut}
                /> 
                </View> 
            </ScrollView>
            <View style={{width: '100%', height: '80%', marginBottom: 10}}>
                    <Webview source={{uri: 'https://skywalkglobal.net/'}}
                    onLoad={console.log('Page is loaded')}/>
                </View>
                <View style={{alignItems: 'center'}}>
                <CustomButton 
                label={'Logout'}
                onPress={handleLogOut}
                /> 
                </View> 
        </SafeAreaView>
        
    )
}

const styles= StyleSheet.create({
    home: {
        flex: 1,
         justifyContent: 'center', 
         alignItems: 'center'
        },
    propic: {
        width:45,
        height: 45,
        backgroundColor: '#ffff00',
        borderRadius: 20
    },
    safeview: {
        flex: 1,
        backgroundColor:'#fff',        
    },
    firstrow: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:20
    }
})

export default Home;