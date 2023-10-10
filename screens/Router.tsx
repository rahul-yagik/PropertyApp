import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../hook';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

const Router = () => {
  const isUserLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLoggedIn ? (
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'User Input',
              headerStyle: {
                borderBottomColor: '#006AC2',
                borderBottomWidth: 4,
                height: 60,
              },
              headerTitleStyle: {
                color: '#006AC2',
                fontFamily: 'YoungSerif-Regular',
                fontSize: 24,
                paddingVertical: 12,
              },
              headerTitleAlign: 'center',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
