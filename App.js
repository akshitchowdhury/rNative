import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Calc from './component/Calculator/Calc';
import NoteList from './component/ListNotes/NoteList';
import ApiCall from './component/ApiCalls/ApiCall';
import ApiCall2 from './component/ApiCalls/ApiCall2';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Calc/> */}
{/*       
      <NoteList/> */}
      <ApiCall2/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  input: {
    flexDirection: 'row'
  },
  box: {
    flexDirection: 'row',
    padding: 7,
    margin: 25,
    borderColor: 'gold'

  }
});


// import { StyleSheet, Text, View } from 'react-native';

// export default function App(){
//   return( 

//     <View style = {styles.nestedContainer}>
//       <Text>DEvA</Text>
//       <Text>Ashura</Text>
//       <View style = {styles.container}>
//       <Text style = {{color: 'white', fontSize: 30}}>DevAshura</Text>
//     </View>
    
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
    
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 400,
//     width: 200,
//     borderRadius: 40
//   },

//   nestedContainer: {

//     flex: 2,
//     backgroundColor: 'gray',
    
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });


