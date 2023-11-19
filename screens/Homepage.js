import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const Homepage = () => {
  return (
    <View style={[styles.homepage, styles.frame1FlexBox]}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.frame1, styles.frame1FlexBox]}>
          <View style={styles.screenshot20220713At1649} />
        </View>
        <View style={styles.screenShot20231118At121} />
      </View>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  framePosition: {
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20220713At1649: {
    width: 375,
    height: 804,
  },
  frame1: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  screenShot20231118At121: {
    height: 717,
    marginLeft: -703,
    flex: 1,
  },
  frame: {
    top: 0,
    width: 393,
    height: 850,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 46,
    paddingRight: 363,
    paddingBottom: 41,
  },
  frameIcon: {
    top: 280,
    width: 394,
    height: 573,
  },
  homepage: {
    backgroundColor: Color.colorSteelblue,
    width: "100%",
    height: 852,
  },
});

export default Homepage;
