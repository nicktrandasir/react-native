import * as React from "react";
import {Button, Text, View} from "react-native";
import {NavigationType} from "../../../types/navigation.ts";

export function SettingsScreen({navigation}: NavigationType) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
