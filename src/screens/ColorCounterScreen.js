import React, { useReducer } from "react";
import {StyleSheet, View} from "react-native"
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const reducer = (state, action) =>{
   switch(action.colorToChange){
    case 'red': 
        if(state.red + action.amount > 255 || state.red + action.amount <0){
            return state
        }else{
            return {...state, red: state.red + action.amount};
        }
    case 'green': 
    if(state.green + action.amount > 255 || state.green + action.amount <0){
        return state
    }else{
        return {...state, green: state.green + action.amount};
    }
    case 'blue': 
    if(state.blue + action.amount > 255 || state.blue + action.amount <0){
        return state
    }else{
        return {...state, blue: state.blue + action.amount};
    }
    default:
        return state;
   }
}

const ColorCounterScreen = ({color}) => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state
    return(
       <View>
           <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT * -1 })}
            color="Red"
           />
            <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT * -1 })}
            color="Green"
           />
            <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT * -1 })}
            color="Blue"
           />
           <View 
           style={{
            width: 100,
            height: 100,
            backgroundColor: `rgb(${red},${green},${blue})`
           }} 
           />
       </View>
    )
}

export default ColorCounterScreen

const styles = StyleSheet.create({
   
})