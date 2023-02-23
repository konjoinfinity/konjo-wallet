/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { EvilIcons, FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SetupScreen from '../screens/SetupScreen';


export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ title: 'Scan' }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Setup"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
        <BottomTab.Screen
        name="Setup"
        component={SetupScreen}
        options={({ navigation }) => ({
          title: 'Wallet Setup',
          tabBarIcon: ({ color }) => <EIcon name="wallet" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: 'Wallet',
          tabBarIcon: ({ color }) => <FIcon name="qrcode" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        initialParams={{ from: 'bc1qgyujae80frg0n508gwts08j0m69edfuhrhefep' }}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <FA5Icon name="donate" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon({name, color}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} name={name} color={color}  />;
}
function FA5Icon({name, color}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} name={name} color={color}  />;
}
function FIcon({name, color}) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} name={name} color={color} />;
}
function EIcon({name, color}) {
  return <Entypo size={30} style={{ marginBottom: -3 }} name={name} color={color} />;
}
