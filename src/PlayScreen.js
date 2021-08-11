import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Image} from 'react-native'

const rock = require('./signs/rock1.png')
const scissors = require('./signs/scissors1.png')
const paper = require('./signs/paper1.png')

const Colors = ['#2ecc71', '#8e44ad', '#e74c3c'];

const randomImg = () => {
    const emojis = [rock, paper, scissors];
    const random = Math.floor(Math.random()*3);
    return emojis [random]
}

randomImg()

const PlayScreen = () => {
    const [counter, setCounter] = useState(3);
    
    useEffect(() => {
        if (counter < 1 ) return;
        const timer = setTimeout(() => {
            setCounter(prv => prv - 1)
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [counter])

    return (
        <View style={StyleSheet.compose(
            {backgroundColor: Colors[counter-1]}, styles.container)}>
            {counter < 1  ? (
                <>
                <Image style={styles.sign} source={randomImg()}/>
                <View style={styles.button}>
                <Button onPress={() => setCounter(3)}title="Play Again"/>
                </View>
            </>
            ) : (
                <Text style={styles.counter}>{counter}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    counter: {
        fontSize: 150,
        color: "white",
    },
    sign: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        position: 'absolute',
        bottom: 40,
    },
});

export default PlayScreen;
