import React from "react";

import {View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

//styles  --> StyleSheet
//useColorScheme   dark mode, ract hook, from Apperance module (exposes users preference), 

//typescript   :JSX.Element should always return JSX element , tai less buggy code likhi 

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
return(
    <View style = {styles.container}>
        <Text style = {isDarkMode? styles.whiteText : styles.darkText}> Hello </Text>
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',        //flex-start //flex-end --> right side a niye jay item
        justifyContent : 'center' // justifyContent top to bottom
    }, 
    whiteText: {
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    }
})
export default AppPro