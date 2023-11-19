import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Customization = () => {
  const [customizationDashboardOpen, setCustomizationDashboardOpen] =
    useState(false);
  const [customizationDashboardValue, setCustomizationDashboardValue] =
    useState();

  return (
    <View style={styles.customization}>
      <View style={styles.customizationDashboard}>
        <DropDownPicker
          open={customizationDashboardOpen}
          setOpen={setCustomizationDashboardOpen}
          value={customizationDashboardValue}
          setValue={setCustomizationDashboardValue}
          placeholder="Home"
          items={[]}
          labelStyle={styles.customizationDashboardValue}
          textStyle={styles.customizationDashboardText}
        />
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.statusbarbg, styles.statusBarPosition]} />
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customizationDashboardValue: {
    color: "#000",
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  customizationDashboardText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  batteryPosition: {
    width: 24,
    top: 17,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  capacityBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  customizationDashboard: {
    height: "85.56%",
    top: "14.44%",
    right: "0.25%",
    left: "-0.25%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  statusbarbg: {
    height: "100%",
    backgroundColor: Color.colorGainsboro_200,
    bottom: "0%",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
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
    right: 14,
    height: 11,
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
    top: "50%",
    left: 0,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    color: Color.colorBlack,
    width: 57,
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
  homeIndicator: {
    marginLeft: -67.5,
    bottom: -798,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  statusBar: {
    height: "5.42%",
    bottom: "94.58%",
  },
  customization: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Customization;
