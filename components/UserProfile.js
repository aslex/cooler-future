import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import  {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from "react-native-vector-icons/Feather";

const UserProfile = navigation => {
  const [user, setUser] = useState(navigation.user);

  const [lastName, setLastName] = useState(navigation.user.lastName);
  const [passportNum, setPassportNum] = useState(navigation.user.passportNum);

  const [streetAddress, setStreetAddress] = useState(
    navigation.user.streetAddress
  );
  const [postcode, setPostcode] = useState(navigation.user.postCode);
  const [country, setCountry] = useState(navigation.user.country);
  const [email, setEmail] = useState(navigation.user.email);
  const [newPassword, setNewPassword] = useState(null);
  const [message, setMessage] = useState("");

  const [edit, setEdit] = useState(false);

  const handleValidation = () => {
    //redirect to the 'know your customer' validation
    navigation.navigation.navigate("ValidationPage", {
      email: email,
      passportNum: passportNum,
      newPassword: newPassword
    });
  };
  const handleSubmit = () => {
    if (newPassword == null || handlePasswordCheck(newPassword)) {
      if (passportNum != user.passportNum || email != user.email){
        handleValidation();
      }else{
        setEdit(!edit);
       // sensitive info did not change, save new user details to Database
      }
    }

  };

  const handlePasswordCheck = text => {
    const check = new RegExp(/^(?=.*[A-Z])(?=.*\d).{8,}/);
    if (check.test(text)) {
        setMessage('');
        return true;
    } else {
      setMessage(
        "password must contain at least 1 digit, 1 uppercase letter, and be at least 8 characters long"
      );
      return false;
    }
  };

  return (
    <View style={styles.profile}>
      {!edit && (
        <View style={styles.profileDetails}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={{ uri: user.photo }}
          />

          <Text>First Name: {user.firstName}</Text>
          <Text>Last Name: {lastName}</Text>
          <Text>Passport Number: {passportNum}</Text>
          <Text>
            Address: {streetAddress}, {postcode} {country}
          </Text>
          <Text>email: {user.email}</Text>
          <Text>username: {user.username}</Text>
          <Text>password: *******</Text>
        </View>
      )}

      {edit && (
        <KeyboardAwareScrollView 
      contentContainerStyle={styles.profileDetails}
      >
          <ScrollView>
            <Image
              style={{ width: 200, height: 200, borderRadius: 100 }}
              source={{ uri: user.photo }}
            />

            <Text style={styles.scroll}>
              First Name: {navigation.user.firstName}
            </Text>

            <Text style={styles.scroll}>Last Name: </Text>
            <TextInput
              style={styles.input}
              placeholder={navigation.user.lastName}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />

            <Text style={styles.scroll}>Passport Number: </Text>
            <TextInput
              style={styles.input}
              placeholder={String(navigation.user.passportNum)}
              value={String(passportNum)}
              onChangeText={text => setPassportNum(text)}
            />

            <Text style={styles.scroll}>Street Address: </Text>
            <TextInput
              style={styles.input}
              placeholder={streetAddress}
              value={streetAddress}
              onChangeText={text => setStreetAddress(text)}
            />
            <Text style={styles.scroll}>Postcode: </Text>
            <TextInput
              style={styles.input}
              placeholder={String(postcode)}
              value={String(postcode)}
              onChangeText={text => setPostcode(text)}
            />
            <Text style={styles.scroll}> Country: </Text>
            <TextInput
              style={styles.input}
              placeholder={country}
              value={country}
              onChangeText={text => setCountry(text)}
            />

            <Text style={styles.scroll}>email: </Text>
            <TextInput
              style={styles.input}
              placeholder={email}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.scroll}>username: {user.username}</Text>
            <Text style={styles.scroll}>Set New Password:</Text>
            {(message && edit) ? <Text style={{ color: "red", flex:1 }}>{message}</Text> : <></>}
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="enter a new password"
              value={newPassword || ""}
              onChangeText={text => setNewPassword(text)}
            />

          </ScrollView>
        </KeyboardAwareScrollView>
      )}

      <Button
        color={"#40bd62"}

        title={edit ? "save changes" : "edit my details"}
        onPress={() => ( edit ? handleSubmit() : setEdit(!edit))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  scroll: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10
  },

  input: {
    width: "90%",
    marginBottom: 10
  },
  profile: {
    flex: 1,
    marginBottom: 40
  },
  profileDetails: {
    flex: 2,
    margin: 20,
    justifyContent: "space-around"
  }
});

export default UserProfile;
