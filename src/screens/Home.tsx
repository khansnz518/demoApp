import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Main from "../components/screens/main";

const HomeScreen = () => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectTab == 0 ? <Main/> :null}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(0);
          }}
        >
          <Image
            source={
              selectTab == 0
                ? require("../assests/home-active.png")
                : require("../assests/home-inactive.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(1);
          }}
        >
          <Image
            source={
              selectTab == 0
                ? require("../assests/user-inactive.png")
                : require("../assests/user-active.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
