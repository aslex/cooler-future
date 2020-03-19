import React from "react";
import { View, Text, Button } from "react-native";

const UserProfile = props => {
  const handleEdit = () => {
    console.log("click");
  };
  return (
    <View style={props.styles.profile}>
      <Text style={props.styles.profileDetails}>
        <h4>Your Profile</h4>
        <img
          alt="user photo"
          style={{ width: "50%", height: "auto", borderRadius: "50%" }}
          src={props.user.photo}
        />
        <p>First Name: {props.user.firstName}</p>
        <p>Last Name: {props.user.lastName}</p>
        <p>Passport Number: {props.user.passportNum}</p>
        <p>
          Address: {props.user.streetAddress}, {props.user.postCode}{" "}
          {props.user.country}
        </p>
        <p>email: {props.user.email}</p>
        <p>password: *****</p>
        <p>username: {props.user.username}</p>
      </Text>
      <View style={props.styles.button}>
        <Button
          color={"#40bd62"}
          title="edit my details"
          onPress={handleEdit}
        />
      </View>
    </View>
  );
};

export default UserProfile;
