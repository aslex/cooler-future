import React from "react";
import { View, Button, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const Home = ({navigation}) => {

  return (
      <View style={{flex:1, justifyContent:'flex-end', marginBottom: 40}}>
 

    <Button
     color={"#40bd62"}

      title="View my Profile"
      onPress={() => navigation.navigate("Profile" )}
    />
    </View>
  );
};

export default Home;
