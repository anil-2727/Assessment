// import React from "react";
// import {Text} from "native-base";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();



// const TabNavigation =()=>{
//     return(
//         <NavigationContainer>
//         <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: "white",
//             // borderTopLeftRadius: aw(20),
//             // borderTopRightRadius: aw(20),
//             // height: Platform.OS === "ios" ? ah(90) : ah(70),
//             position: "absolute",
//             bottom: 0,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           options={{
//             tabBarActiveTintColor: "#673ab7",
//             tabBarIcon: ({ focused, color, size }) => (
//               <Center
//                 rounded={"full"}
//                 padding={1}
//                 // bg={focused ? Colors.primary : "transparent"}
//               >
//                 {/* <NavMapIcon top={ah(2.5)} fill={focused ? "white" : "#673ab7"} /> */}
//                 <Text>hii</Text>
//               </Center>
//             ),
//           }}
//           navigationOptions={{
//             showIcon: true,
//             tabBarVisible: false,
//           }}
//         //   component={HomeNavigator}
//         />
//         <Tab.Screen
//           name="Properties"
//           options={{
//             tabBarActiveTintColor: "#673ab7",
//             tabBarIcon: ({ focused, color, size }) => (
//               <Center
//                 rounded={"full"}
//                 padding={2}
//                 // bg={focused ? Colors.primary : "transparent"}
//               >
//                 {/* <NavListIcon fill={focused ? "white" : "#673ab7"} /> */}
//               </Center>
//             ),
//           }}
//           navigationOptions={{
//             showIcon: true,
//             tabBarVisible: false,
//           }}
//         //   component={PropertyNavigator}
//         />
//         <Tab.Screen
//           name="Pipelines"
//           options={{
//             tabBarActiveTintColor: "#673ab7",
//             tabBarIcon: ({ focused, color, size }) => (
//               <Center
//                 rounded={"full"}
//                 padding={2}
//                 // bg={focused ? Colors.primary : "transparent"}
//               >
//                 {/* <NavPipelineIcon fill={focused ? "white" : "#673ab7"} /> */}
//               </Center>
//             ),
//           }}
//           navigationOptions={{
//             showIcon: true,
//             tabBarVisible: false,
//           }}
//         //   component={PipelinesNavigator}
//         />
//         <Tab.Screen
//           name="CampaignNavigator"
//           options={{
//             tabBarActiveTintColor: "#673ab7",
//             tabBarIcon: ({ focused, color, size }) => (
//               <Center
//                 rounded={"full"}
//                 padding={2}
//                 // bg={focused ? Colors.primary : "transparent"}
//               >
//                 {/* <NavCampaignIcon fill={focused ? "white" : "#673ab7"} /> */}
//               </Center>
//             ),
//           }}
//           navigationOptions={{
//             showIcon: true,
//             tabBarVisible: false,
//           }}
//         //   component={CampaignNavigator}
//         />
      
//         <Tab.Screen
//           name="AccountNavigator"
//           options={{
//             tabBarActiveTintColor: "#673ab7",
//             tabBarIcon: ({ focused, color, size }) => (
//               <Center
//                 rounded={"full"}
//                 padding={2}
//                 // bg={focused ? Colors.primary : "transparent"}
//               >
//                 {/* <NavAccountIcon fill={focused ? "white" : "#673ab7"} /> */}
//               </Center>
//             ),
//           }}
//           navigationOptions={{
//             showIcon: true,
//             tabBarVisible: false,
//           }}
//         //   component={AccountNavigator}
//         />
//       </Tab.Navigator>
//       </NavigationContainer>
//     )
// }

// export default TabNavigation;



import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import HomeIcon from '../components/svg/Home';
import Orders from '../components/svg/Orders';
import Swap from '../components/svg/Swap';
import Portfolio from '../components/svg/Portfolio';
import Wallet from '../components/svg/Wallet';



function PortfolioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function SwapScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }

function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function WalletScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }




const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0E1327",
          borderColor:"transparent",
          borderWidth:"0.0001"
        //   borderTopLeftRadius: aw(20),
        //   borderTopRightRadius: aw(20),
        //   height: Platform.OS === "ios" ? ah(90) : ah(70),
        //   position: "absolute",
        //   bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <HomeIcon/>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <Orders/>
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarLabel: 'Swap',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="account" color={color} size={size} />
            <Swap/>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="account" color={color} size={size} />
            <Portfolio/>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="account" color={color} size={size} />
            <Wallet/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default TabNavigation;