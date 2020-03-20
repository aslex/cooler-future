import React from "react";
import { View, Button } from "react-native";


const Home = ({navigation}) => {

  return (
      <View style={{flex:1, justifyContent:'flex-end'}}>
    <Button
     color={"#40bd62"}
      title="View my Profile"
      onPress={() => navigation.navigate("Profile" )}
    />
    </View>
  );
};

export default Home;
