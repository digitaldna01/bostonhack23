import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={styles.frame}>
        <View style={styles.screenshot20220713At1649} />
      </View>
      <View style={[styles.frame1, styles.frame1Bg]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={styles.statusBarPosition}>
        <View style={styles.battery}>
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.frame1Bg]} />
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameLayout4]}>
        <Text style={[styles.iForgotMy, styles.textTypo]} numberOfLines={1}>
          I forgot my password
        </Text>
      </View>
      <TextInput
        style={[styles.frame3, styles.frameTypo1]}
        placeholder="I forgot my password"
        placeholderTextColor="#000"
      />
      <View style={[styles.frame4, styles.frameLayout1]}>
        <View style={[styles.searchBar, styles.searchPosition]}>
          <View style={styles.mainFramePosition}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={styles.search}>medication name (i.e. Advil)</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame5, styles.frame5Layout]}>
        <View style={[styles.searchBar1, styles.frame5Layout]}>
          <View style={[styles.mainFrame1, styles.mainFramePosition]}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={styles.search}>medication name (i.e. Advil)</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout1]}>
        <View style={[styles.searchBar, styles.searchPosition]}>
          <View style={styles.mainFramePosition}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={styles.search}>medication name (i.e. Advil)</Text>
          </View>
        </View>
      </View>
      <TextInput
        style={[styles.frame7, styles.frameTypo]}
        placeholder="Username"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={[styles.frame8, styles.frameTypo]}
        placeholder="Password"
        placeholderTextColor="#ccc"
      />
      <StatusBar barStyle="default" />
      <View style={[styles.frame10, styles.textLayout]}>
        <Text style={[styles.text, styles.textLayout]}>?</Text>
      </View>
      <TextInput
        style={[styles.frame11, styles.frameTypo1]}
        placeholder="Don’t have an account?"
        placeholderTextColor="#000"
      />
      <View style={[styles.frame12, styles.logInLayout]}>
        <Text style={[styles.logIn, styles.logInLayout]}>Log In</Text>
      </View>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Pressable style={[styles.frame13, styles.frameLayout]}>
        <Pressable
          style={[styles.frameChild, styles.frameLayout]}
          onPress={() => navigation.navigate("Settings")}
        />
      </Pressable>
      <TextInput
        style={[styles.frame14, styles.frameTypo1]}
        placeholder="Show me accessible routes!"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Bg: {
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
  frameLayout4: {
    height: 42,
    width: 173,
    left: 110,
    top: 496,
  },
  textTypo: {
    lineHeight: 42,
    fontFamily: FontFamily.body1Regular,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
  },
  frameTypo1: {
    fontSize: FontSize.size_sm,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 64,
    position: "absolute",
  },
  searchPosition: {
    width: 294,
    left: 5,
    top: 0,
  },
  frame5Layout: {
    height: 44,
    position: "absolute",
  },
  mainFramePosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.giratina100,
    borderRadius: Border.br_5xs,
    height: 64,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  frameTypo: {
    fontSize: FontSize.size_xl,
    width: 277,
    left: 58,
    fontFamily: FontFamily.body1Regular,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    height: 9,
    position: "absolute",
  },
  logInLayout: {
    height: 66,
    position: "absolute",
  },
  frameLayout: {
    height: 50,
    position: "absolute",
  },
  frameIcon: {
    top: 466,
    width: 455,
    height: 459,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20220713At1649: {
    width: 375,
    top: 0,
    height: 804,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: -127,
    left: 4,
    width: 385,
    height: 804,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    overflow: "hidden",
  },
  statusbarbg: {
    backgroundColor: Color.colorGainsboro_200,
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
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 22,
    height: 11,
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
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    width: 57,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
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
  iForgotMy: {
    left: 25,
    fontFamily: FontFamily.body1Regular,
    textDecoration: "underline",
    lineHeight: 42,
    fontSize: FontSize.size_sm,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    position: "absolute",
    overflow: "hidden",
  },
  frame3: {
    fontFamily: FontFamily.body1Regular,
    height: 42,
    width: 173,
    left: 110,
    top: 496,
  },
  searchIcon: {
    width: 24,
    display: "none",
    height: 24,
  },
  search: {
    fontSize: FontSize.body1Regular_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.body1Medium,
    color: Color.giratina500,
    textAlign: "left",
    marginLeft: 16,
    display: "none",
    flex: 1,
  },
  searchBar: {
    height: 64,
    position: "absolute",
  },
  frame4: {
    top: 368,
    width: 299,
    left: 47,
    height: 64,
    overflow: "hidden",
  },
  mainFrame1: {
    display: "none",
  },
  searchBar1: {
    width: 294,
    left: 5,
    top: 0,
  },
  frame5: {
    top: 446,
    width: 299,
    left: 47,
    overflow: "hidden",
  },
  frame6: {
    top: 289,
    width: 299,
    left: 47,
    height: 64,
    overflow: "hidden",
  },
  frame7: {
    top: 300,
  },
  frame8: {
    top: 378,
  },
  text: {
    fontSize: FontSize.size_3xs,
    width: 14,
    transform: [
      {
        rotate: "0.98deg",
      },
    ],
    fontFamily: FontFamily.body1Regular,
    lineHeight: 42,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    left: 0,
  },
  frame10: {
    top: 798,
    left: 140,
    width: 113,
    overflow: "hidden",
  },
  frame11: {
    top: 529,
    left: 104,
    width: 185,
    height: 24,
    fontFamily: FontFamily.body1Regular,
  },
  logIn: {
    fontSize: FontSize.size_13xl,
    width: 186,
    fontFamily: FontFamily.body1Regular,
    lineHeight: 42,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    textDecoration: "underline",
    left: 0,
  },
  frame12: {
    top: 188,
    left: 96,
    width: 201,
    overflow: "hidden",
  },
  frameIcon1: {
    top: 122,
    left: 170,
    width: 53,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: 13,
    backgroundColor: Color.colorSteelblue,
    width: 294,
    left: 5,
    top: 0,
  },
  frame13: {
    top: 446,
    width: 299,
    left: 47,
    overflow: "hidden",
  },
  frame14: {
    top: 449,
    left: 63,
    width: 267,
    height: 34,
    fontFamily: FontFamily.body1Regular,
  },
  login: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Login;
