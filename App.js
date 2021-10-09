/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sum from './App/Views/Sum';
import Subtraction from './App/Views/Subtraction';
import Multiplication from './App/Views/Multiplication';
import Division from './App/Views/Division';
import Factorial from './App/Views/Factorial';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Suma') {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === 'Resta') {
              iconName = focused ? 'remove' : 'remove-outline';
            } else if (route.name === 'Multiplicación') {
              iconName = focused ? 'close' : 'close-outline';
            } else if (route.name === 'División') {
              iconName = focused ? 'reorder-two' : 'reorder-two-outline';
            } else if (route.name === 'Factorial') {
              iconName = focused ? 'alert' : 'alert-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Suma" component={Sum} />
        <Tab.Screen name="Resta" component={Subtraction} />
        <Tab.Screen name="Multiplicación" component={Multiplication} />
        <Tab.Screen name="División" component={Division} />
        <Tab.Screen name="Factorial" component={Factorial} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
