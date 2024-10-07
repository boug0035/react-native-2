import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import UserItem from "../components/UserItem";
import FloatingActionButton from "../components/FloatingActionButton";
import { fetchUsers } from "../../domain/useCases/fetchUsers";

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadUsers = useCallback(async () => {
    try {
      const newUsers = await fetchUsers();
      setUsers(newUsers);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadUsers();
    setRefreshing(false);
  }, [loadUsers]);

  const handleAddUser = useCallback(async () => {
    try {
      const newUser = await fetchUsers(1);
      setUsers((prevUsers) => [...newUser, ...prevUsers]);
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      <FloatingActionButton onPress={handleAddUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default UserListScreen;
