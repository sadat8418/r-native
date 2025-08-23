import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Scroll view
export default function FlatCards2() {
  return (
    <View>
      <Text style={styles.headingText}>Scroll-FlatCards</Text>
    <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card, styles.cardElevated]}>
        <Text> Tap / Push </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Drag</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> me </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> to </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> scroll </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> & some </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> more </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text> fun </Text>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({  headingText: {
    fontSize :24,   // in web font.size
    fontWeight: 'bold',
    paddingHorizontal: 8

},
container:{},
card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    
},
cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 7,
    shadowOffset: {
        width :1,
        height:1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4, 
    shadowRadius:2
}


})