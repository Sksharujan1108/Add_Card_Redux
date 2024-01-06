import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screen/App/HomeScreen/Index';
import OrderScreen from '../../Screen/App/OrderScreen';
import { RootStackParamList } from '../../Module/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
  
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    
  );
}

export default AppStack;
