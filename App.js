import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserProfile from "./components/UserProfile";
import EditProfile from './components/EditProfile';
import user from "./seeds/userInfo";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // fetch user info
    setUserInfo(user);
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cooler Future</Text>
      </View>
      {/* <View style={styles.container}> */}
      
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={Home}
          options={userInfo && { title: `Welcome, ${userInfo.firstName}` }}
          
        />
        {/* to check if a user is logged in - the parent component should pass down a user session */}
        {/* props.user &&  <UserProfile /> */}
        <Stack.Screen name="Profile" >{props => <UserProfile {...props} user={userInfo} styles={styles.profile}/>}</Stack.Screen>

        <Stack.Screen name="EditProfile" >{props => <EditProfile {...props} user={userInfo} styles={styles.profile}/>}</Stack.Screen>
       
        </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
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

  button: {
flex: 1,
justifyContent:'space-around'
  }
});
