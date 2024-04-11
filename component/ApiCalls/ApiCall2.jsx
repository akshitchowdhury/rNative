import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View, FlatList, Pressable } from 'react-native';

export default function ApiCall2(){

    const[apiData, setApiData] = useState([])




    useEffect(

        async function getApiData(){

            let incomingData = await fetch('https://dummyjson.com/users?limit=7&select=firstName,age,lastName')

            let finalIncomingData  = await incomingData.json()

            if(finalIncomingData){
                setApiData(
                    finalIncomingData.users.map(userItem=> `${userItem.firstName} ${userItem.lastName} age: ${userItem.age}`)
                )
            }

            getApiData()

        }


    ,[])



    return(

        <View>

            <View>
                <Text>Api will be shown below</Text>
            </View>

            <View style={{borderWidth: 2, borderColor: 'pink'}}>

            </View>

            <View>
                <FlatList 
                    data={apiData}
                    renderItem={(itemData)=> 
                    <Text style={{padding: 15,
                    borderWidth: 3,
                    borderColor: 'purple',
                    borderRadius: 100,
                    textAlign: 'center',
                    marginTop: 10}}>
                        {itemData.item}
                    </Text>}
                />
            </View>

        </View>
    )
}