import * as React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScrren from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import {Provider as AuthProvider} from './context/AuthContext';
import {navigationRef} from './src/nevigationRef';

// const forFade = ({ current }) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainTabNavigation = () => {
  return (
    <Tab.Navigator  >
      <Tab.Screen options={{headerShown: false}} name="TrackList" component={TrackListScreen} />
      <Tab.Screen options={{headerShown: false}} name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen options={{headerShown: false}} name="Account" component={AccountScrren} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name="ResolveAuth" component={ResolveAuthScreen} />
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUp"
            component={SignupScreen}
          />
          <Stack.Screen options={{ headerShown: false}} name="SignIn" component={SigninScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="TrackList" component={MainTabNavigation} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// export default App;

export default () => {
  return (
    <AuthProvider>
      <App
        // forwordRef={navigator => {
        //   setNavigator(navigator);
        // }}
      />
    </AuthProvider>
  );
};
