import { Text, View, Button } from "react-native";
import * as React from "react";
import styles from "./index.style";
import FormPart from "../../shared/FormPart";
import Icon from "react-native-vector-icons/MaterialIcons";
import { logIn } from "../../../api";
import { AsyncStorage } from "react-native";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: undefined,
    };
  }

  handleLoginButtonPress = async () => {
    const { navigation } = this.props;
    const { username, password } = this.state;
    const token = await logIn(username, password);
    if (!token) return;
    navigation.navigate("Events List", {});
  };

  render() {
    const {} = this.props;
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              justifyContent: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>events.</Text>
            <Text
              style={{ fontSize: 50, fontWeight: "bold", color: "#ff4742" }}
            >
              io
            </Text>
          </View>
          <FormPart
            label={"Username"}
            isRequired={true}
            inputProps={{
              value: username,
              onChangeText: (username) => {
                this.setState({ username });
              },
            }}
          />
          <FormPart
            label={"Password"}
            isRequired={true}
            inputProps={{
              value: password,
              secureTextEntry: true,
              onChangeText: (password) => {
                this.setState({ password });
              },
            }}
          />
          <View style={{ padding: 13 }}>
            <Button
              style={styles.button}
              onPress={this.handleLoginButtonPress}
              title={"Login"}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Auth;
