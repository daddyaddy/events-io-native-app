import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

const styles = StyleSheet.create({
  container: {},
});

class EventCreator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EventCreator Scsreen</Text>
      </View>
    );
  }
}

export default EventCreator;
