import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserProfile from "./components/UserProfile";
import user from "./seeds/userInfo";

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // fetch user info from database
    setUserInfo(user);
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cooler Future</Text>
      </View>
      <View style={styles.container}>
        {/* to check if a user is logged in - the parent component should pass down a user session */}
        {/* props.user &&  <UserProfile /> */}
        <UserProfile user={userInfo} styles={styles} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "#40bd62",
    alignItems: "center",
    justifyContent: "center",
    height: "25%"
  },
  headerText: {
    color: "#ffffff",
    fontFamily: "Helvetica",
    fontWeight: "200",
    fontSize: 40
  },
  profile: {
    flex: 1,

    width: '80%',

  },
  profileDetails: {
    flex: 1,
    color: '#404040',
  },
  button: {
flex: 1,
justifyContent:'space-around'
  }
});
