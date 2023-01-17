import React, { useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Stack,
} from "native-base";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/screens/Home";
import TabNavigation from "./src/navigation/TabNavigation";


export default function App() {
  useEffect(() => {
    Font.loadAsync({
      Comfortaa: require("./src/fonts/Comfortaa/static/Comfortaa-Regular.ttf"),
      Inter : require("./src/fonts/Inter/static/Inter-Regular.ttf"),
      DMSans : require("./src/fonts/DM_Sans/DMSans-Regular.ttf")
      
    });
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <TabNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
