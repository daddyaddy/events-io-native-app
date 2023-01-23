import {
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import styles from "./index.style";
import { createEvent, updateEvent } from "../../../api";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const initialState = {
  event_id: undefined,
  name: "",
  description: "",
  date: "2023-01-01T11:30:00.555Z",
  image_url: "",
  is_private: true,
  is_published: true,
};

class EventCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    this.fillFormIfPossible();
  }

  componentDidUpdate(oldProps) {
    const { props } = this;
    if (oldProps.route?.params?.event?.id !== props.route?.params?.event?.id)
      this.fillFormIfPossible();
  }

  fillFormIfPossible = () => {
    if (!this.props.route?.params.event)
      return this.setState({ ...initialState });
    const { event } = this.props?.route?.params;

    this.setState({
      event_id: event.id,
      name: event.name,
      description: event.description,
      date: event.date,
      image_url: event.image_url,
      is_published: event.is_published,
      is_private: event.is_private,
    });
  };

  handleTextInputChange = (stateKey) => (value) => {
    this.setState({ [stateKey]: value });
  };

  handleCreateButtonPress = () => {
    const {
      event_id,
      name,
      description,
      date,
      image_url,
      is_published,
      is_private,
    } = this.state;
    event_id
      ? this.updateEvent(event_id, {
          name,
          description,
          date,
          image_url,
          is_published,
          is_private,
        })
      : this.createEvent({
          name,
          description,
          date,
          image_url,
          is_published,
          is_private,
        });
  };

  handleCancelButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Events List", {});
  };

  createEvent = (payload) => {
    const { navigation } = this.props;
    const event = createEvent(payload);
    if (!event) return;
    navigation.navigate("Event Details", { event });
  };

  updateEvent = (event_id, payload) => {
    const { navigation } = this.props;
    const event = updateEvent(event_id, payload);
    if (!event) return;
    navigation.navigate("Event Details", { event });
  };

  render() {
    const { name, description, image_url, event_id } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form_part}>
          <Text>Name*</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={this.handleTextInputChange("name")}
          />
        </View>
        <View style={styles.form_part}>
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            multiline={true}
            numberOfLines={3}
            onChangeText={this.handleTextInputChange("description")}
          />
        </View>
        <View style={{ ...styles.form_part, marginBottom: 60 }}>
          <Text>Location*</Text>
          <GooglePlacesAutocomplete
            query={{
              key: "AIzaSyDJcXi6PLTNX0imqYJ1rBi0GfP1PGR4xw4",
              language: "en",
            }}
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
            fetchDetails={true}
            onFail={(err) => {
              console.log("@", err);
            }}
            onPress={(placeData, detail) => {
              const { lng, lat } = detail.geometry.location;
            }}
            styles={{
              textInput: styles.input,
              predefinedPlacesDescription: {
                color: "#1faadb",
              },
            }}
          />
        </View>
        <View style={styles.form_part}>
          <Text>Image url</Text>
          <TextInput
            style={styles.input}
            value={image_url}
            onChangeText={this.handleTextInputChange("image_url")}
          />
        </View>
        <View style={styles.form_part}>
          <Text>Date*</Text>
          <TextInput style={styles.input} value={""} />
        </View>

        <View style={{ ...styles.form_part, ...styles.buttons }}>
          <TouchableOpacity onPress={this.handleCancelButtonPress}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <Button
            onPress={this.handleCreateButtonPress}
            title={event_id ? "Update" : "Create"}
          />
        </View>
      </View>
    );
  }
}

export default EventCreator;
