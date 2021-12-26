import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import CustomKanban from "./components/CustomKanban";
import { StateContextProvider, useStateContext } from "./context/StateContext";

const windowHeight = Dimensions.get("window").height;

const RenderApp = () => {
  const { loading, error } = useStateContext();
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "#f00",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Ohh Snap!
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: "#2b386e",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Failed to load the app
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#2b386e",
            letterSpacing: 0.5,
            textAlign: "center",
            padding: 20,
          }}
        >
          App requires constant stable internet connection. Please try again
        </Text>
      </View>
    );
  }

  return <CustomKanban />;
};

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
            <RenderApp />
          </View>
        </ScrollView>
      </SafeAreaView>
    </StateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
