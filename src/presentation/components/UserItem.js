import React from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";

const CustomAvatar = ({ size, name, src }) => {
  if (src) {
    return (
      <Image
        source={{ uri: src }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    );
  }

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: size / 3 }}>{initials}</Text>
    </View>
  );
};

const UserItem = ({ user }) => {
  const isIOS = Platform.OS === "ios";

  return (
    <View
      style={[
        styles.container,
        isIOS ? styles.iosContainer : styles.androidContainer,
      ]}
    >
      {!isIOS && (
        <CustomAvatar
          size={50}
          name={`${user.firstName} ${user.lastName}`}
          src={user.avatar}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.firstName}>{user.firstName}</Text>
        <Text style={styles.lastName}>{user.lastName}</Text>
      </View>
      {isIOS && (
        <CustomAvatar
          size={50}
          name={`${user.firstName} ${user.lastName}`}
          src={user.avatar}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  iosContainer: {
    justifyContent: "space-between",
  },
  androidContainer: {
    justifyContent: "flex-start",
  },
  textContainer: {
    marginHorizontal: 10,
  },
  firstName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: 14,
  },
});

export default UserItem;
