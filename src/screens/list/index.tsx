import * as React from "react";
import {ListScreen} from "./list-screen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const ListStack = createNativeStackNavigator();

export function ListStackScreen() {
    return (
        <ListStack.Navigator>
            <ListStack.Screen name="List" component={ListScreen}/>
        </ListStack.Navigator>
    );
}
