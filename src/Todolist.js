import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todolist = ({todo, onRemove}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress = {onRemove.bind(null, todo.id)}>
            <View style = {styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo:{
        flexDirection: 'row',
        ailignItems: 'center',
        padding: 14,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10

    }
})