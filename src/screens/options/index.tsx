import * as React from "react";
import {OptionsScreen} from "./options-screen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const OptionsStack = createNativeStackNavigator();

export function OptionsStackScreen() {
    return (
        <OptionsStack.Navigator>
            <OptionsStack.Screen name="Options" component={OptionsScreen}/>
        </OptionsStack.Navigator>
    );
}
