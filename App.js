import fetchFromApi from "./src/api";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./src/components/views/Auth";
import EventCreator from "./src/components/views/EventCreator";
import EventDetails from "./src/components/views/EventDetails";
import EventsList from "./src/components/views/EventsList";

const Stack = createNativeStackNavigator();

fetchFromApi();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Event Creator" component={EventCreator} />
        <Stack.Screen name="Event Details" component={EventDetails} />
        <Stack.Screen name="Events List" component={EventsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
