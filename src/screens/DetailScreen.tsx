import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Button, Text, View } from 'react-native'

export const DetailScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Detail Screen</Text>
            <Button 
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
                />
        </View>
    )
}
