import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 250,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 15,
    borderRadius: 15,
    padding: 25,
  },
  banner_header: {
    color: "white",
    fontWeight: "500",
    fontSize: 30,
    textShadowColor: "#222",
    textShadowRadius: 2,
    marginBottom: 3,
  },
  banner_span: {
    color: "white",
    fontWeight: "500",
    textShadowColor: "#222",
    textShadowRadius: 2,
    marginBottom: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  row_icon: {
    marginRight: 10,
  },
  row_text: {},
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 23,
    fontWeight: "600",
    margin: 5,
  },
  participants: {
    flexDirection: "column",
  },
  participant: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
  },
  participant_user: {},
  badge: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "blue",
  },
  accepted: {
    backgroundColor: "green",
  },
  rejected: {
    backgroundColor: "red",
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
