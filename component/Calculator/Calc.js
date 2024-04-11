import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const Calc = () => {

const[inputA, setInputA] = useState('');
const[inputB, setInputB] = useState('');
const[result, setResult] = useState(0);
const[resultm, setMResult] = useState(0);





function handleResult(){

    res1 = parseInt(inputA);
    res2 = parseInt(inputB);

    setResult(res1+res2)

}

function handleResultMinus(){

    let resm1 = parseInt(inputA)
    let resm2 = parseInt(inputB)

    setMResult(resm1-resm2)
}

  return (
<View>

<View>
    <TextInput onChangeText={text=> setInputA(text)} placeholder='Enter number 1'></TextInput>
</View>
<View>
    <TextInput onChangeText={text=> setInputB(text)} placeholder='Enter number 2'></TextInput>
</View>

<View style= {{flexDirection: 'column',
marginTop: 50}}>
    <Text>YOUR result is: {result} </Text>
    <Button onPress={handleResult}  title='Click to add(+)'/>
    
</View>

<View style= {{flexDirection: 'column',
marginTop: 100}}>
    <Text>YOUR result is: {resultm} </Text>
    <Button onPress={handleResultMinus} title='Click to Minus(-)'/>
    
</View>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
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


export default Calc
