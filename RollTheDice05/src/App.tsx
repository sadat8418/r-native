/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
  
// } from 'react-native/Libraries/NewAppScreen';

//PropsWithChildren 
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

//whenever Dice rolls, want to pass on images .. na likhleo hoy.. 
type DiceProps = PropsWithChildren<{
     imageUrl: ImageSourcePropType
   }>;

//sob Url na, only DiceProps er image Url nibe ...
const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
 // use <imageSourcePropType> to be specific in useState
 const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

 const rollDiceOnTap = () => {

   let randomNumber = Math.floor(Math.random() * 6) + 1;

   switch (randomNumber) {
     case 1:
       setDiceImage(DiceOne)
       break;
     case 2:
       setDiceImage(DiceTwo)
       break;
     case 3:
       setDiceImage(DiceThree)
       break;
     case 4:
       setDiceImage(DiceFour)
       break;
     case 5:
       setDiceImage(DiceFive)
       break;
     case 6:
       setDiceImage(DiceSix)
       break;
   
     default:
       setDiceImage(DiceOne)
       break;
   }

   ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
          <Dice imageUrl={diceImage} />
          
          <Pressable
          onPress={rollDiceOnTap}
          >
            <Text
            style={styles.rollDiceBtnText}
            >
            Roll the dice
            </Text>
          </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
