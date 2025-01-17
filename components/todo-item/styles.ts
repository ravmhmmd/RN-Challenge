import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  textContent: {
    flex: 1,
    color: "black",
    fontSize: 16,
    marginStart: 8,
    position: "relative",
    zIndex: 2,
  },
  separator: {
    height: 1,
    backgroundColor: "darkgrey",
    marginStart: 32,
    marginTop: 4,
    alignSelf: "stretch",
    position: "relative",
    zIndex: 1,
  },
});

export default styles;
