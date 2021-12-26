import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import CustomKanban from "./components/CustomKanban";
import { StateContextProvider } from "./context/StateContext";

export default function App() {
  return (
    <StateContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle="dark-content"
        />

        <ScrollView>
          <View style={styles.container}>
            <CustomKanban />
          </View>
        </ScrollView>
      </SafeAreaView>
    </StateContextProvider>
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
