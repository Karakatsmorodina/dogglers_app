import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { useEffect } from "react";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("mainscreen");
    }, 4000);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            top: "45%",
            height: 125,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 42 }}>Dogglers</Text>
          <ActivityIndicator color={"#ff003c"} size={"large"} />
        </View>
      </View>
    </>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
