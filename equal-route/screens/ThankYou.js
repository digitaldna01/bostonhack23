import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ThankYou = () => {
  return (
    <View style={styles.thankYou}>
      <View style={styles.screenshot20220713At1649} />
      <View style={styles.screenShot20231118At121} />
      <View style={[styles.homeIndicator, styles.capacityBg]} />
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.placeholder, styles.youLayout]}>
        <Image
          style={styles.friendlyIcon}
          contentFit="cover"
          source={require("../assets/friendly.png")}
        />
        <Text style={[styles.thankYouFor, styles.youLayout]}>
          Thank you for going beyond steps to create Equal Routes!
        </Text>
        <View style={styles.spellingBeeLogoBulletinSqu} />
      </View>
      <Text style={[styles.seeYouSoon, styles.seeYouSoonClr]}>
        See you soon
      </Text>
      <View style={[styles.largeOutline, styles.youLayout]}>
        <Text style={[styles.equalRoute, styles.seeYouSoonClr]}>
          Equal Route
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
  },
  youLayout: {
    width: 343,
    position: "absolute",
  },
  seeYouSoonClr: {
    color: Color.blackWhiteBlack,
    lineHeight: 24,
    textAlign: "center",
  },
  screenshot20220713At1649: {
    top: 15,
    width: 375,
    height: 804,
    left: 0,
    position: "absolute",
  },
  screenShot20231118At121: {
    top: 61,
    left: -328,
    width: 1066,
    height: 717,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    height: 7,
    width: 18,
  },
  battery: {
    top: 17,
    right: 17,
    borderRadius: 3,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 22,
    height: 11,
    borderStyle: "solid",
    position: "absolute",
  },
  wifiIcon: {
    width: 16,
    height: 12,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 11,
  },
  time: {
    marginTop: -5.7,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    width: 57,
    top: "50%",
    position: "absolute",
  },
  timeStyle: {
    height: "47.62%",
    width: "14.4%",
    top: "20.35%",
    right: "80%",
    bottom: "32.03%",
    left: "5.6%",
    position: "absolute",
  },
  statusBar: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
    width: "100%",
  },
  friendlyIcon: {
    top: 0,
    left: 112,
    width: 120,
    height: 120,
    position: "absolute",
  },
  thankYouFor: {
    top: 150,
    fontSize: FontSize.heading2Regular_size,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
  },
  spellingBeeLogoBulletinSqu: {
    top: -24,
    left: 222,
    borderRadius: 30,
    width: 56,
    height: 47,
    position: "absolute",
  },
  placeholder: {
    marginTop: -304,
    marginLeft: -174.5,
    height: 220,
    top: "50%",
    left: "50%",
  },
  seeYouSoon: {
    top: 368,
    left: 16,
    fontSize: FontSize.body1Regular_size,
    fontFamily: FontFamily.body1Regular,
    width: 343,
    position: "absolute",
  },
  equalRoute: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    flex: 1,
  },
  largeOutline: {
    top: 728,
    left: 25,
    borderRadius: Border.br_5xs,
    borderColor: Color.blackWhiteBlack,
    borderWidth: 2,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    borderStyle: "solid",
  },
  thankYou: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ThankYou;
