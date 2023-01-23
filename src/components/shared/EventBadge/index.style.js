import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badge: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "blue",
  },
  accepted: {
    backgroundColor: "#07d01d",
  },
  rejected: {
    backgroundColor: "#ff6567",
  },
  unknown: {
    backgroundColor: "gray",
  },

  status: {
    color: "#eee",
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

export default styles;
