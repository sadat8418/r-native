//rnfs
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards3() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      
      
      <View style={[styles.card, styles.cardElevated]}>
      {/* source={require('./my-icon.png')}       source={{uri: 'app_icon'}}   */}
      <Image source={{ uri: 'https://images.pexels.com/photos/6617495/pexels-photo-6617495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      }}
       style={styles.cardImage}
       />

<View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Gulshan</Text>
            <Text style={styles.cardLabel}>Pink City, Dhaka</Text>
            <Text style={styles.cardDescription}>The Gulshan is a palace in the city of Dhaka,Bangladesh. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>



    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 560,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
        
    },
    cardImage: {
        height: 380,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
},
cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4  // niche space
},
cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
},
cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1
},
cardFooter: {
    color: '#000000'
}

})