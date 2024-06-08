import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function BookCard({data}) {
  return (
    <TouchableOpacity style={{ marginBottom: 13 }}>
      <Image
        source={{
          uri: data.coverImageUrl
        }}
        style={{
          width: windowWidth * 0.28,
          height: windowHeight * 0.2,
          objectFit: "cover",
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
