import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigator/StackNavigation';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import StoryView from './src/components/StoryView';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation />
      {/* <Header />
      <Stories /> */}
      {/* <StoryView /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
});
