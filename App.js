import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import UserListScreen from "./src/presentation/screens/UserListScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <UserListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
