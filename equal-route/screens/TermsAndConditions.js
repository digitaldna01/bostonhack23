import * as React from "react";
import { StatusBar, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const TermsAndConditions = () => {
  return (
    <View style={styles.termsAndConditions}>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <View style={[styles.frame1, styles.frameLayout1]}>
        <View style={styles.frame2}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
            <View style={[styles.frame4, styles.frame4Position]}>
              <View
                style={[styles.screenshot20220713At1649, styles.frame4Position]}
              />
            </View>
          </View>
          <View style={styles.frame5}>
            <TextInput
              style={[styles.frame6, styles.framePosition]}
              placeholder="Please Read our Terms and Conditions Before Using Equal Route"
              placeholderTextColor="#212121"
            />
            <TextInput
              style={[styles.frame7, styles.framePosition]}
              placeholder={`Terms and Conditions for Equal Route Accessibility Navigation App:
1. Acceptance of Terms
By using the Equal Route Accessibility Navigation App (the "App"), you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using the App.
2. Accessibility and Inclusivity
Equal Route is dedicated to providing an accessible and inclusive navigation experience for all users, regardless of abilities or disabilities. The app is designed to be usable by people of all abilities and disabilities, and we strive to meet or exceed the accessibility standards.`}
              placeholderTextColor="#848484"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 862,
    position: "absolute",
  },
  frameLayout: {
    width: 410,
    overflow: "hidden",
  },
  frame4Position: {
    height: 804,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    left: 138,
    width: 134,
    height: 129,
    top: 0,
  },
  screenshot20220713At1649: {
    width: 375,
    top: 0,
  },
  frame4: {
    top: 58,
    width: 410,
    overflow: "hidden",
  },
  frame3: {
    left: 328,
    top: 0,
    height: 862,
    position: "absolute",
  },
  frame6: {
    top: 33,
    left: 357,
    width: 352,
    height: 94,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    fontSize: FontSize.heading2Regular_size,
  },
  frame7: {
    top: 145,
    left: 308,
    width: 450,
    height: 550,
    fontFamily: FontFamily.body1Regular,
    fontSize: FontSize.size_mini,
  },
  frame5: {
    top: 104,
    height: 717,
    left: 0,
    width: 1066,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    left: 15,
    width: 1066,
    top: 0,
    height: 862,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 122,
    left: -344,
    width: 1081,
    overflow: "hidden",
  },
  termsAndConditions: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default TermsAndConditions;
