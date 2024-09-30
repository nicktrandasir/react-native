import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";

export const colorScheme: { [key: string]: string } = {
    activeTabBarIconColor: '#f4511e',
    defaultTabBarIconColor: '#ffcc5c',
    headerBg: '#f4511e',
    headerLabelColor: '#fff',
    tabBarBg: '#96ceb4',
}

export const headerColorScheme: BottomTabNavigationOptions = {
    headerStyle: { backgroundColor: colorScheme.headerBg },
    headerTintColor: colorScheme.headerLabelColor,
    headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
};

export const tabBarColorScheme: BottomTabNavigationOptions = {
    tabBarInactiveTintColor: colorScheme.defaultTabBarIconColor,
    tabBarActiveTintColor: colorScheme.activeTabBarIconColor,
    tabBarStyle: {
        position: 'absolute',
        borderTopColor: 'rgba(0, 0, 0, .2)',
        backgroundColor: colorScheme.tabBarBg,
    },
};
