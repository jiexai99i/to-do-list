import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todolist = ({todo}) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
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
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10

    }
})