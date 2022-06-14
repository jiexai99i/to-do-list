import React from 'react';
import { Button } from 'react-native';


export const ToDo = () =>{
    const handleGood = () => {
        alert('privet')
    }
    return(
        <Button title='Privet' onPress={handleGood}/>
    )
}