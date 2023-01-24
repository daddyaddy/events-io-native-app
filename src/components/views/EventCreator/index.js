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
import DatePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";
import FormPart from "../../shared/FormPart";

const initialState = {
  event: {
    id: undefined,
    name: "",
    description: "",
    date: "2023-01-01T11:30:00.555Z",
    image_url: "",
    is_private: true,
    is_published: true,
    location: {
      place: "Lublin",
      longitude: 51.246452,
      latitude: 22.568445,
    },
  },
  isDatePickerOpen: false,
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
    if (!this.props.route?.params?.event)
      return this.setState({ ...initialState });
    const { event } = this.props.route.params;

    this.setState({
      event: { ...this.state.event, ...event },
    });
  };

  handleTextInputChange = (stateKey) => (value) => {
    this.setState({ event: { ...this.state.event, [stateKey]: value } });
  };

  handleCreateButtonPress = () => {
    const { event } = this.state;
    const { id } = event;
    id ? this.updateEvent(id, { ...event }) : this.createEvent({ ...event });
  };

  handleCancelButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Events List", {});
  };

  createEvent = async (payload) => {
    const { navigation } = this.props;
    const event = await createEvent(payload);
    3;
    if (!event) return;
    navigation.navigate("Event Details", { event });
  };

  updateEvent = async (event_id, payload) => {
    const { navigation } = this.props;
    const { event: oldEvent } = this.props.route.params;
    const newEvent = await updateEvent(event_id, payload);
    if (!newEvent) return;
    navigation.navigate("Event Details", {
      event: { ...oldEvent, ...newEvent },
    });
  };

  render() {
    const { event, isDatePickerOpen } = this.state;
    const { name, description, image_url, id } = event;
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <FormPart
            label={"Name"}
            isRequired={true}
            icon={
              <Icon name="drive-file-rename-outline" size={30} color={"#888"} />
            }
            inputProps={{
              value: name,
              onChangeText: this.handleTextInputChange("name"),
            }}
          />
          <FormPart
            label={"Description"}
            isRequired={true}
            icon={<Icon name="description" size={30} color={"#888"} />}
            inputProps={{
              value: description,
              multiline: true,
              numberOfLines: 3,
              onChangeText: this.handleTextInputChange("description"),
            }}
          />
          <FormPart
            label={"Location"}
            isRequired={true}
            icon={<Icon name="location-pin" size={30} color={"#888"} />}
            ownInput={
              <GooglePlacesAutocomplete
                query={{
                  key: process.env.GOOGLE_API_KEY,
                  language: "en",
                }}
                value={event.location}
                placeholder={"Location"}
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
            }
          />
          <FormPart
            label={"Image url"}
            isRequired={true}
            icon={<Icon name="image" size={30} color={"#888"} />}
            inputProps={{
              value: image_url,
              onChangeText: this.handleTextInputChange("image_url"),
            }}
          />

          <FormPart
            label={"Date"}
            isRequired={true}
            icon={<Icon name="date-range" size={30} color={"#888"} />}
            ownInput={
              <>
                <TouchableOpacity
                  style={styles.input}
                  onPressIn={(event) => {
                    this.setState({ isDatePickerOpen: true });
                  }}
                >
                  <Text>{new Date(event.date).toDateString()}</Text>
                </TouchableOpacity>
                {isDatePickerOpen && (
                  <DatePicker
                    value={event.date ? new Date(event.date) : new Date()}
                    style={{ flex: 1 }}
                    onChange={(event) => {
                      const { timestamp } = event.nativeEvent;
                      const date = new Date(timestamp).toISOString();
                      this.setState({
                        isDatePickerOpen: false,
                        event: { ...this.state.event, date },
                      });
                    }}
                  />
                )}
              </>
            }
          />
          <View style={{ ...styles.form_part, ...styles.buttons }}>
            <TouchableOpacity onPress={this.handleCancelButtonPress}>
              <Text>Cancel</Text>
            </TouchableOpacity>

            <Button
              style={styles.button}
              onPress={this.handleCreateButtonPress}
              color={"#07d01d"}
              title={id ? "Update Event" : "Create Event"}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default EventCreator;
