import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Stories from '../../components/Stories'

const Dashboard = () => {
    return (
        <View>
            <Header />
            <Stories />
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})