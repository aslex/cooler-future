import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const UserProfile = navigation => {
  console.log("NAV:", navigation);

  const handleEdit = () => {
    console.log("click");
  };

  return (
    <View style={styles.profile}>
      <Text style={styles.profileDetails}>
        <img
          alt="user photo"
          style={{ width: "50%", height: "auto", borderRadius: "50%" }}
          src={navigation.user.photo}
        />
        <p>First Name: {navigation.user.firstName}</p>
        <p>Last Name: {navigation.user.lastName}</p>
        <p>Passport Number: {navigation.user.passportNum}</p>
        <p>
          Address: {navigation.user.streetAddress}, {navigation.user.postCode}{" "}
          {navigation.user.country}
        </p>
        <p>email: {navigation.user.email}</p>
        <p>password: *****</p>
        <p>username: {navigation.user.username}</p>
      </Text>

      <Button
        color={"#40bd62"}
        title="edit my details"
        onPress={() => navigation.navigation.navigate("EditProfile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  profile: {
    flex: 1,
    width: "90%",
    margin: 20
  },
  profileDetails: {
    flex: 1,
    color: "#404040"
  }
});

export default UserProfile;
