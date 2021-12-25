import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import Kanban from "./components/Kanban";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <Kanban />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
