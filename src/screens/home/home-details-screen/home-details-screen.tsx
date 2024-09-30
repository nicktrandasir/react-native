import * as React from "react";
import {Button, Text, View} from "react-native";
import {NavigationType} from "../../../types/navigation.ts";


export function HomeDetailsScreen({ navigation }: NavigationType) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Details screen!</Text>
            <Button
                title="Go to Home!"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
