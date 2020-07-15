import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Switch,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

Ionicons.loadFont();
Feather.loadFont();

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="default"
        hidden={false}
        translucent={true}
      />
      {/* 'default','dark-content', 'light-content' */}
      <SafeAreaView style={{ flex: 1 }}>
        {isDarkMode && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "black",
            }}
          />
        )}
        <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
          <View style={styles.switchWrapper}>
            <Switch
              value={isDarkMode}
              onValueChange={() => setDarkMode(!isDarkMode)}
            />
            {isDarkMode ? (
              <Ionicons
                name="ios-sunny"
                size={25}
                style={{ marginLeft: 20 }}
                color={"#fff"}
              />
            ) : (
              <Ionicons
                name="ios-moon"
                size={25}
                style={{ marginLeft: 20 }}
                color={"teal"}
              />
            )}
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require("./assets/images/1.jpg")}
              style={styles.image}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginBottom: 25,
              color: isDarkMode ? "#fff" : "black",
            }}
          >
            maha.vishnu_
          </Text>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <Feather name="github" size={35} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="twitter" size={35} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="facebook" size={35} color="#fff" />
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginBottom: 25,
              color: isDarkMode ? "#fff" : "black",
            }}
          >
            Follow me on my Social media Accounts for more information!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: "row",
  },
  image: {
    height: 300,
    width: 300,
  },
  imageWrapper: {
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    overflow: "hidden",
    marginVertical: 70,
    alignSelf: "center",
  },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  icon: {
    backgroundColor: "teal",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default App;
