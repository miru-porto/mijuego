import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import { styles } from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen />
    </SafeAreaView>
  );
};


export default App;