import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View, FlatList, Pressable } from 'react-native';

export default function ApiCall(){

const[apis, setApis] = useState([])



useEffect(

    async function getApiData(){

        let apiResponse = await fetch('https://dummyjson.com/products/search?q=phone')
   
        let finalApiData = await apiResponse.json();

        if(finalApiData){
            setApis(
                finalApiData.products.map(productItem=> productItem.title)
            )
        }
        
    getApiData();
    },

    [])
    
    console.log(apis)

    return(
        <View>
            <View>
                <Text>List of API data shown below</Text>
            </View>

            <View style={{borderWidth: 2}}>
                
            </View>
            <View>
            <FlatList
                data={apis}
                renderItem={(itemData)=>
                <Text
                >
                    {itemData.item}
                </Text>}
            />
            </View>
        </View>
    )
}