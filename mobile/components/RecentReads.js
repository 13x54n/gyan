import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RecentReadCard from "./RecentReadCard";

import RecentReadsData from '../mocks/RecentReads.json'

export default function RecentReads() {
  return (
    <View style={styles.recentReadsContainer}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 20 }}>
      💯 Continue Reading
      </Text>

      <ScrollView
        style={{ marginVertical: 10, paddingLeft: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {RecentReadsData.map((d, i) => (
          <TouchableOpacity key={i}>
            <RecentReadCard data={d}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  recentReadsContainer: {
    borderTopColor: "#0003",
    borderTopWidth: 1,
    paddingTop: 10
  },
});
