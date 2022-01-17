import React from "react"
import {Text,View,TouchableOpacity} from "react-native"

export default class TransScreen extends React.Component{
    render(){
        return(
            <View style = {{flex : 1}}>
               <Text style = {{fontSize : 20}}>
                   Transaction Screen
                </Text> 
            </View>
        );
    }
}
