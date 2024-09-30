import * as React from "react";
import {HomeScreen} from "./home-screen";
import {HomeDetailsScreen} from "./home-details-screen";
import {createStackNavigator} from "@react-navigation/stack";

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Details" component={HomeDetailsScreen}/>
        </HomeStack.Navigator>
    );
}
