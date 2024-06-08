import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function RecentReadCard({data}) {
  return (
    <ImageBackground
      source={{
        uri: data.imgUrl,
      }}
      blurRadius={15}
      borderRadius={10}
      style={styles.cardContainer}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: data.imgUrl,
        }}
        width={20}
      />
      <View style={{flex: 1}}>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>
          {data.bookName}
        </Text>
        <Text style={{ color: "#fff" }}>Read: {data.totalRead}%</Text>
      </View>
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={18} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 220,
    marginRight: 10
  },
  cardImage: {
    width: 40,
    height: 60,
    resizeMode: "cover",
  },
});
