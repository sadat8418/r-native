// rnfe react antive funtional Expor component

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import FlatCards2 from './components/FlatCards2'
import FlatCards3 from './components/FlatCards3'
import FlatCards4 from './components/FlatCards4'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
         <ScrollView>
         <Text>AppPro</Text>
            <FlatCards/>
            <FlatCards2/>
            <FlatCards3/>
          <FlatCards4/>
         <ContactList/>
         </ScrollView>
     
    </SafeAreaView>
  )
}

export default App