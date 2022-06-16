import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert } from 'react-native';


export const ToDo = ({ onSubmit }) =>{
    const [value, setValue] = useState('');

    const handleGood = () => {
        if (value.trim()){
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Не порешали дела!')
        }
    }
    return(
        <View style = {styles.block}>
            <TextInput 
                style = {styles.input}
                onChangeText = {setValue}
                value = {value}
                placeholder = 'Дела деловые'>
            </TextInput>
            <Button title='Add' onPress={handleGood}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
        
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomColor: '#3949ab',
        borderBottomWidth: 2
    }
})