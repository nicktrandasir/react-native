import React, {FC} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "../../screens/home";
import {List} from "../../screens/list";
import {Options} from "../../screens/options";
import {Settings} from "../../screens/settings";
import Icon from 'react-native-vector-icons/Ionicons';
import {IconProps} from "react-native-vector-icons/Icon";
import {colorScheme, headerColorScheme, tabBarColorScheme} from "../../assets/color-scheme.ts";

const Tab = createBottomTabNavigator();

const tabBarIcon = (
    name: IconProps['name'],
    size: number,
    focused: boolean
) => (
    <Icon
        name={name}
        color={focused ? colorScheme.activeTabBarIconColor : colorScheme.defaultTabBarIconColor}
        size={size}
    />
);

const screens = [
    { name: "Home", component: Home, iconName: "home" },
    { name: "List", component: List, iconName: "list" },
    { name: "Options", component: Options, iconName: "options" },
    { name: "Settings", component: Settings, iconName: "settings" },
];

export const AppLayout: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabBarColorScheme}>
                {screens.map(({ name, component, iconName }) => (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={{
                            tabBarIcon: ({ focused, size }) => tabBarIcon(iconName, size, focused),
                            ...headerColorScheme,
                        }}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
};
