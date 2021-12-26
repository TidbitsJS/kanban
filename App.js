import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import Kanban from "./components/Kanban";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <ScrollView>
        <View style={styles.container}>
          <Kanban />
        </View>
      </ScrollView>
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
