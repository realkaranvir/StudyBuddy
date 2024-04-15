import { React, useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGear, faListUl, faBook } from '@fortawesome/free-solid-svg-icons';

import Home from './screens/Home.js';
import Settings from './screens/Settings.js';
import Assignments from './screens/Assignments.js';
import Study from './screens/Study.js';
import styles from './styles.js';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTitleStyle: {
          color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#222',
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },

      }}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
          name="Study"
          component={Study}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faBook} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Assignments"
          component={Assignments}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faListUl} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faGear} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;