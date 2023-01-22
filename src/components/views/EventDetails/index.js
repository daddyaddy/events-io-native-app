import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

const styles = StyleSheet.create({
  container: {},
});

class EventDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EventDetails Screen</Text>
      </View>
    );
  }
}

export default EventDetails;
