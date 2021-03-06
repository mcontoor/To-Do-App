import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View
            style={styles.inputContainer}>
            <TextInput placeholder="Course Goal"
                style={styles.textInput} onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80 %'
    },
});

export default GoalInput;