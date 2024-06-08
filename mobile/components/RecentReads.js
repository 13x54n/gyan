import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import RecentReadCard from "./RecentReadCard";
import RecentReadsData from "../mocks/RecentReads.json";
import { AntDesign } from "@expo/vector-icons";

export default function RecentReads() {
  return (
    <View style={styles.recentReadsContainer}>
      <TouchableOpacity
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 20, gap: 5 }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: "bold" }}
        >
          Continue
        </Text>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>

      <ScrollView
        style={{ marginVertical: 15, paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {RecentReadsData.map((d, i) => (
          <TouchableOpacity key={i}>
            <RecentReadCard data={d} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  recentReadsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#f1f2f6",
  },
  recentReadsHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 1,
  },
});
