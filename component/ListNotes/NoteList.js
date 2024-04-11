import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View, FlatList, Pressable } from 'react-native';

export default function NoteList(){

const[value, setValue] = useState('')
const[notes, setNotes] = useState([])


function handleDelete(getCurrentIndex){

    console.log("item pressed")

    let copyOfNotes = [...notes];

    copyOfNotes = copyOfNotes.filter((_,index)=> getCurrentIndex!== index)

    setNotes(copyOfNotes)

}

function handleText(getInput){

    setValue(getInput)
}

function handleNotes(){

    setNotes(currentNotes=> [...currentNotes, value])
}

    return(
        <View style= {{
             
            marginTop: 200,
            
        }}>

        <View >
            <TextInput onChangeText={handleText} placeholder='Enter the notes'/>
            <View>
            <Button  onPress={handleNotes} title='Click to add the notes here'/>
            </View>
            



            </View>
        <View style ={{paddingHorizontal: 1,
                  flex: 1}}>
        {/* <ScrollView>
            {
                notes.map((item,index)=> (
                    <View 
                    style= {
                        
                        {    borderWidth: 2,
                            borderColor: 'gray',
                            
                            padding: 5,
                            marginTop: 20,
                        }}
                        >
                    <Text key={`item${index}`} style= {
                        {
                        textAlign: 'center'
                        }
                    }>{item}</Text>
                    </View>
                ))
            }
            </ScrollView> */}
        
        <FlatList

        data={notes}
            renderItem={(itemData)=>
          <Pressable onPress={()=>handleDelete(itemData.index)}>
            <Text         
            
             style= {
                        
                        {    borderWidth: 2,
                            borderColor: 'gray',
                            
                            padding: 5,
                            marginTop: 20,
                        }}>
                        
                        {itemData.item}
                        </Text>

                        </Pressable>}


        />

        
        
        
        </View>  



        </View>
    )
}