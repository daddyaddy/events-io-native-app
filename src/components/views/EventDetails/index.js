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
import MapView from "react-native-maps";

const EventBadge = (props) => {
  const { participant } = props;

  const badgeType =
    !participant.was_accepted && !participant.was_rejected
      ? "unknown"
      : participant.was_accepted
      ? "accepted"
      : "rejected";

  return (
    <View style={{ ...styles.badge, ...styles[badgeType] }}>
      <Text style={styles.status}>{badgeType}</Text>
    </View>
  );
};

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
      <View>
        <ScrollView style={styles.container}>
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
            <Text>{event.date}</Text>
            {event.location && <Text>{event.location.place}</Text>}
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Participants</Text>
            <View style={styles.participants}>
              {event.participants.map((participant) => (
                <View key={participant} style={styles.participant}>
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
