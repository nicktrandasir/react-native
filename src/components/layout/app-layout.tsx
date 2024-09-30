import React, {FC} from 'react';
import {SettingsStackScreen} from "../../screens/settings";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStackScreen} from "../../screens/home";
import {NavigationContainer} from "@react-navigation/native";
import {ListStackScreen} from "../../screens/list";
import {OptionsStackScreen} from "../../screens/options";

const Tab = createBottomTabNavigator();

export const AppLayout: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home p" component={HomeStackScreen} />
                <Tab.Screen name="List" component={ListStackScreen}/>
                <Tab.Screen name="Options" component={OptionsStackScreen}/>
                <Tab.Screen name="Settings" component={SettingsStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
