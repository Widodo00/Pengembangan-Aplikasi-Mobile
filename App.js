import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/home/home';
import pesan from './src/pesanan/pesanan';
import batal from './src/batal/batal';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='home' component={home} />
        <Stack.Screen name='pesan' component={pesan} />
        <Stack.Screen name='batal' component={batal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;