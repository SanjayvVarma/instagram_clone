import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/auth/Login';
import Signup from './src/screen/auth/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
