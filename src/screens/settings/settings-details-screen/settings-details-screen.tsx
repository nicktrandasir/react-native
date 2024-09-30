import * as React from "react";
import {Button, Text, View} from "react-native";
import {NavigationType} from "../../../types/navigation.ts";

export function SettingsDetailsScreen({ navigation }: NavigationType) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Details Screen !</Text>
            <Button
                title="Go to Settings!"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}
