import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import RecentReads from "../components/RecentReads";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity>
          <Image
            style={styles.headerAvatar}
            source={{
              uri: "https://avatars.githubusercontent.com/u/167803076?s=400&u=d6bda585d921dbe185b3697b6e59369cc3320a97&v=4",
            }}
            width={38}
            height={38}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={{ fontSize: 14, flex: 1 }}
          placeholder="✨ Search for amazing reads..."
        />
        <AntDesign name="search1" size={19} color="black" />
      </View>

      <RecentReads/>

      <Text>🏗️ Your Lists</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  headerAvatar: {
    borderRadius: "100%",
  },
  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#e8e8e8",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 10,
  },
});
