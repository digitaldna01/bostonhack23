import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Settings = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdown1Open, setFrameDropdown1Open] = useState(false);
  const [frameDropdown1Value, setFrameDropdown1Value] = useState();
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconLayout]}>
      <View style={styles.screenshot20220713At1649} />
      <View
        style={[styles.screenShot20231118At121, styles.mainFramePosition]}
      />
      <View style={[styles.homeIndicator, styles.capacityBg]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={styles.statusBarPosition}>
        <View style={[styles.battery, styles.batteryLayout]}>
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
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.settingsInner, styles.wrapperLayout]}>
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <DropDownPicker
            open={frameDropdownOpen}
            setOpen={setFrameDropdownOpen}
            value={frameDropdownValue}
            setValue={setFrameDropdownValue}
            placeholder="My Account "
            items={[]}
            labelStyle={styles.frameDropdownValue}
            textStyle={styles.frameDropdownText}
          />
        </View>
      </View>
      <TextInput
        style={[styles.settingsChild, styles.janedoeTypo]}
        placeholder="More"
        placeholderTextColor="#181d27"
      />
      <View style={[styles.container, styles.wrapperLayout]}>
        <DropDownPicker
          open={frameDropdown1Open}
          setOpen={setFrameDropdown1Open}
          value={frameDropdown1Value}
          setValue={setFrameDropdown1Value}
          placeholder={`Help & Support`}
          items={[]}
          labelStyle={styles.frameDropdown1Value}
          textStyle={styles.frameDropdown1Text}
        />
      </View>
      <Pressable
        style={[styles.icoutlineModeEditOutline, styles.batteryLayout]}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icoutlinemodeeditoutline.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#181d27",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
  },
  frameDropdownText: {
    color: "#ababab",
    fontSize: 11,
    fontFamily: "DMSans-Regular",
  },
  frameDropdown1Value: {
    color: "#181d27",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
  },
  frameDropdown1Text: {
    color: "#181d27",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  mainFramePosition: {
    top: 46,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    bottom: "94.58%",
    right: "0%",
    top: "0%",
    height: "5.42%",
    position: "absolute",
    width: "100%",
  },
  batteryLayout: {
    width: 24,
    position: "absolute",
  },
  timeLayout: {
    width: 57,
    left: 0,
  },
  frameChildPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 89,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  totalParentPosition: {
    display: "none",
    position: "absolute",
  },
  totalClr: {
    color: Color.grayLight,
    fontFamily: FontFamily.dMSansRegular,
  },
  textClr: {
    color: Color.colorWhite,
    left: 0,
  },
  text1FlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  frameItemLayout: {
    height: 57,
    position: "absolute",
  },
  janeDoeTypo: {
    fontFamily: FontFamily.headlineMain,
    fontWeight: "700",
    textAlign: "left",
  },
  janedoeTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  settings1Position: {
    top: 18,
    position: "absolute",
  },
  wrapperLayout: {
    width: 343,
    position: "absolute",
  },
  screenshot20220713At1649: {
    width: 375,
    height: 804,
    left: 0,
    top: 0,
    position: "absolute",
  },
  screenShot20231118At121: {
    left: -328,
    width: 1066,
    height: 717,
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  statusbarbg: {
    backgroundColor: Color.colorGainsboro_200,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
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
    left: 354,
    height: 11,
    top: 17,
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    color: Color.colorBlack,
    textAlign: "center",
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
  wrapper: {
    height: 396,
    left: 0,
    top: 0,
  },
  settingsInner: {
    top: 233,
    height: 393,
    left: 29,
    width: 343,
  },
  settingsChild: {
    top: 626,
    left: 20,
    flexDirection: "row",
    padding: Padding.p_3xs,
    fontFamily: FontFamily.bodyMain,
    fontWeight: "500",
  },
  container: {
    top: 665,
    height: 139,
    left: 29,
    width: 343,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  icoutlineModeEditOutline: {
    left: 324,
    top: 152,
    height: 24,
  },
  settings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default Settings;
