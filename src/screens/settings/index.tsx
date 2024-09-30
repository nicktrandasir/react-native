import {SettingsScreen} from "./settings-screen";
import {SettingsDetailsScreen} from "./settings-details-screen";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
            <SettingsStack.Screen name="Details" component={SettingsDetailsScreen}/>
        </SettingsStack.Navigator>
    );
}
