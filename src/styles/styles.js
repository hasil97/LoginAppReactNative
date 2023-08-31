const { StyleSheet } = require("react-native");

//all global/shared styles in a single variable named styles
//all custom styles in variables named classNameStyles i.e styles custom to Login screen will be in loginStyles

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      justifyContent: 'center',
    },
    loginView: {
      paddingHorizontal: 25
    },
    loginText: {
      fontFamily: 'Roboto-Medium', 
      fontSize: 28, 
      fontWeight: '500', 
      color: '#333', 
      marginBottom: 30, 
      marginTop: 30
    },
    loginWithText: {
      textAlign:'center', 
      color:'#666', 
      marginBottom:30
    },
    svgView: {
      flexDirection:'row', 
      justifyContent:'space-between', 
      marginBottom:30
    },
    svg: {
      borderColor:'#ddd',
      borderWidth:2,
      borderRadius:10,
      paddingHorizontal:30,
      paddingVertical: 10
    },
    registerTextView: {
      flexDirection:'row', 
      justifyContent:'center', 
      marginBottom:30
    },
    registerTextColor: {
      color:'#AD40AF', 
      fontWeight:'700'
    }
});

const inputFieldStyles = StyleSheet.create({
    fieldView: {
        flexDirection:'row', 
        borderBottomColor:'#ccc', 
        borderBottomWidth:1, 
        paddingBottom:8, 
        marginBottom: 25
    },
    fieldText: {
        flex: 1, 
        paddingVertical: 0
    },
    fieldTextButton: {
        color:'#AD40AF', 
        fontWeight:'700'
    }
});

const customButtonStyles = StyleSheet.create({
    buttonView: {
        backgroundColor:'#AD40AF', 
        padding:20, 
        borderRadius:10, 
        marginBottom:30
    },
    buttonText: {
        textAlign: 'center', 
        fontWeight: '700', 
        fontSize:16, 
        color: '#fff'
    }
});

const registerViewStyles = StyleSheet.create({
    loginError: {
      fontSize: 14,
      color: '#FF0000',
      marginBottom: 25,
      textAlign: 'center'
    },
    scrollView: {
        paddingHorizontal: 25
    },
    logoSG: {
        alignItems: 'center', 
        marginTop: 65, 
        marginBottom: 45
    },
    registerText: {
      fontFamily: 'Roboto-Medium', 
      fontSize: 28, 
      fontWeight: '500', 
      color: '#333', 
      marginBottom: 30
    },
    calenderField: {
        flexDirection: 'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:30
    },
    dobText: {
        color:'#666',
        marginLeft:5,
        marginTop:4,
        paddingVertical:0
    }
})

export { styles, inputFieldStyles, customButtonStyles, registerViewStyles };