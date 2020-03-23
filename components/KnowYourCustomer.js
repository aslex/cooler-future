import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const KnowYourCustomer = () => {

    return (
        <NavigationContainer independent={true} options={{
            headerLeft: () => {
                
            }
        }}>
        <View style={{alignItems: 'center', marginTop: 40}}>
            <Text>entering the Know Your Customer user flow</Text>
        </View>
        </NavigationContainer>
    )
}

export default KnowYourCustomer
