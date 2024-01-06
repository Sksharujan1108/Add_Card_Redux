import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Src/Screen/App/HomeScreen/Index';
import { Provider } from 'react-redux';
import store from './Src/Features/Store';
import AppStack from './Src/Navigation/Stack/AppStack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
         <AppStack />
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
