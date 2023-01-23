import { Text, View } from "react-native";
import * as React from "react";
import styles from "./index.style";

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

export default EventBadge;
