import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import * as React from "react";
import styles from "./index.style";
import GoogleMap from "../../shared/GoogleMap";
import EventBadge from "../../shared/EventBadge";
import Icon from "react-native-vector-icons/Octicons";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdateButtonPress = () => {
    const { navigation, route } = this.props;
    const { event } = route.params;
    navigation.navigate("Event Creator", { event });
  };

  render() {
    const {} = this.props;
    const { event } = this.props.route.params;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          nestedScrollEnabled={true}
          stickyHeaderIndices={0}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            style={styles.banner}
            source={{ uri: event.image_url }}
            resizeMode="cover"
          >
            <Text style={styles.banner_header}>{event.name}</Text>
            <Text style={styles.banner_span}>{event.description}</Text>
            <Text style={styles.banner_span}>
              {event.organizer.email} is the organizer
            </Text>
          </ImageBackground>
          <View style={styles.section}>
            <Text style={styles.header}>Details</Text>
            {event.date !== undefined && (
              <View style={styles.row}>
                <Icon
                  name="clock"
                  style={styles.row_icon}
                  size={25}
                  color={"#888"}
                />
                <Text style={styles.row_text}>
                  {new Date(event.date).toDateString()}
                </Text>
              </View>
            )}
            {event.location !== undefined && (
              <View style={styles.row}>
                <Icon
                  name="location"
                  style={styles.row_icon}
                  size={30}
                  color={"#888"}
                />
                <Text style={styles.row_text}>{event.location.place}</Text>
              </View>
            )}
            {event.location !== undefined && (
              <GoogleMap location={event.location} />
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Participants</Text>
            <View style={styles.participants}>
              {event.participants.map((participant) => (
                <View key={participant.user.id} style={styles.participant}>
                  <View style={styles.participant_user}>
                    <Text>{participant.user.email}</Text>
                  </View>
                  <EventBadge participant={participant} />
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Your Status</Text>
            {event.participants.find(
              (participant) => participant.user.id === "8"
            ) && (
              <EventBadge
                participant={event.participants.find(
                  (participant) => participant.user.id === "8"
                )}
              />
            )}
          </View>
          <View>
            <Button onPress={this.handleUpdateButtonPress} title="Update" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default EventDetails;
