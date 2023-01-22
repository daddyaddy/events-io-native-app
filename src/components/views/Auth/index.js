import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

const styles = StyleSheet.create({
  container: {},
});

class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

export default Auth;
