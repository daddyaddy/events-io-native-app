import fetchFromApi, { fetchEvents } from "./src/api";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./src/components/views/Auth";
import EventCreator from "./src/components/views/EventCreator";
import EventDetails from "./src/components/views/EventDetails";
import EventsList from "./src/components/views/EventsList";

const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {} = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Events List">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Event Creator" component={EventCreator} />
          <Stack.Screen name="Event Details" component={EventDetails} />
          <Stack.Screen name="Events List" component={EventsList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
