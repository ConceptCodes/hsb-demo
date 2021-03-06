/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import tw from 'twrnc';

import NotFoundScreen from '../screens/NotFoundScreen';
import BetModal from '../screens/BetModal';
import FeedScreen from '../screens/Feed';
import GroupsScreen from '../screens/Groups';
import SearchScreen from '../screens/Search';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';


import { RootStackParamList, RootTabParamList, AuthStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {/* {(user != null) ? <RootNavigator /> : <AuthNavigator />} */}
      <RootNavigator />
    </NavigationContainer>
  );
}


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
      <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <RootStack.Screen name="BetModal" options={{ presentation: 'modal'  }} component={BetModal} />
    </RootStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Auth" component={LoginScreen} options={{ headerShown: false, title: 'Login'}} />
      <AuthStack.Screen name="Auth" component={RegisterScreen} options={{ headerShown: false, title: 'Register'}} />
    </AuthStack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { 
          marginLeft: 40, 
          marginRight: 40, 
          marginBottom: 20,
          zIndex: 20,
          borderRadius: 50, 
          backgroundColor: '#1C2833'
        },
      }}
      initialRouteName="Feed">
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false, tabBarIcon: () => <TabBarIcon name="globe"  /> }}
      />
      <BottomTab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{ headerShown: false, tabBarIcon: () => <TabBarIcon name="comment" /> }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false, tabBarIcon: () => <TabBarIcon name="search" /> }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarIcon: () => <TabBarIcon name="user" /> }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
}) {
  return <FontAwesome size={30} style={tw`text-white`} {...props} />;
}
