import {
  StyleSheet,
  Text,
  View,
  SectionList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import fetchFromApi, { fetchEvents } from "../../../api";
import styles from "./index.style";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    const events = await fetchEvents();
    this.setState({ events });
  };

  handleEventPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Event Details", { name: "Jane" });
  };

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container}>
        {
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
              <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
            )}
            renderItem={({ item: event }) => {
              return (
                <TouchableOpacity onPress={this.handleEventPress}>
                  <ImageBackground
                    style={styles.event}
                    source={{ uri: event.image_url }}
                    resizeMode="cover"
                    onMagicTap={this.handleEventMagicTap}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: 18,
                      }}
                    >
                      {event.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        }
      </View>
    );
  }
}

export default EventsList;
