import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { setNavigator } from './src/navigationRef';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='TrackListFlow' component={TrackListFlow} />
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

function TrackListFlow() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            //presentation: 'loginFlow',
            headerStyle: { backgroundColor: 'papayawhip' },
          }}
        >
          <Stack.Screen name='ResolveAuth' component={ResolveAuthScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
          <Stack.Screen name='Signin' component={SigninScreen} />
          <Stack.Screen name='MainFlow' component={MainFlow} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
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

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
