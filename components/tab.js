import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SearchScreen from "../screens/search";
import TransScreen from "../screens/transaction";

const Tab = createBottomTabNavigator()

export default class Tabs extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Transaction"  component = {TransScreen}/>
                    <Tab.Screen name = "Search"  component = {SearchScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}