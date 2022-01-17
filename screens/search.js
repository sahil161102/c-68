import React from "react"
import {Text,View,TouchableOpacity} from "react-native"

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {{flex : 1}}>
               <Text style = {{fontSize : 20}}>
                   Search Screen
                </Text> 
            </View>
        );
    }
}
