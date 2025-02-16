import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screen/auth/Login'
import Signup from '../screen/auth/Signup'
import Dashboard from '../screen/dashboard/Dashboard'
import StoryView from '../components/StoryView'
import BottomNavigation from './BottomNavigation'


const StackNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Home' component={Dashboard} />
                <Stack.Screen name='StoryView' component={StoryView} />
                <Stack.Screen name='Dashboard' component={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})