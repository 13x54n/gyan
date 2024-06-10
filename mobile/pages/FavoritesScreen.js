import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import RecentReads from "../components/RecentReads";
import BookCard from "../components/BookCard";

import UserReadingLists from "../mocks/YourLists.json";

export default function FavoritesScreen() {
  const [activeListView, setLeastActiveView] = useState("list");

  const handleActiveListView = () => {
    setLeastActiveView((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favorites</Text>
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
          <AntDesign
            name="search1"
            size={19}
            color="black"
            style={{ marginRight: 7 }}
          />
          <TextInput
            style={{ fontSize: 14, flex: 1 }}
            placeholder="Search for amazing reads..."
          />
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingHorizontal: 20,
          }}
        >
          {UserReadingLists.map((d, i) => (
            <BookCard data={d} key={i} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
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
    backgroundColor: "#0001",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 10,
  },
});
