import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import fetchFromApi, { listEvents } from "../../../api";
import styles from "./index.style";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    this.listEvents();
  }

  listEvents = async () => {
    const events = await listEvents();
    this.setState({ events: events || [] });
  };

  handleEventPress = (event) => {
    const { navigation } = this.props;
    navigation.navigate("Event Details", { event });
  };

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: "Your upcoming events",
              data: events.filter((event) => event.is_private),
            },
            {
              title: "Public events",
              data: events.filter((event) => !event.is_private),
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ ...styles.header, marginBottom: 10 }}>{title}</Text>
          )}
          renderItem={({ item: event }) => {
            return (
              <TouchableOpacity onPress={() => this.handleEventPress(event)}>
                <ImageBackground
                  style={styles.event}
                  imageStyle={{ borderRadius: 15 }}
                  source={{ uri: event.image_url }}
                  resizeMode="cover"
                  onMagicTap={this.handleEventMagicTap}
                >
                  <Text style={{ ...styles.header, color: "white" }}>
                    {event.name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default EventsList;
