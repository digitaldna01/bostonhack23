import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Verificationactionloginfire = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verificationactionloginfire}>
      <View style={styles.screenshot20220713At1649} />
      <View style={styles.screenShot20231118At121} />
      <Image
        style={styles.layer1Icon}
        contentFit="cover"
        source={require("../assets/layer-1.png")}
      />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <TextInput
        style={styles.weSentIt}
        placeholder="We sent it to +1 (123)-456-789"
        placeholderTextColor="#9e9e9e"
      />
      <Text style={[styles.pleaseEnterCode, styles.welcomeTypo]}>
        Please enter code the code sent to your phone number
      </Text>
      <View style={[styles.bg, styles.bgPosition]} />
      <Pressable
        style={styles.smsCode}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.view, styles.viewLayout5]}>
          <Text style={[styles.text, styles.textPosition]}>2</Text>
        </View>
        <View style={styles.viewLayout4}>
          <Text style={[styles.text, styles.textPosition]}>4</Text>
        </View>
        <View style={[styles.view2, styles.viewLayout4]}>
          <Text style={[styles.text2, styles.textPosition]}>|</Text>
        </View>
        <View style={styles.viewLayout4} />
        <View style={styles.viewLayout4} />
      </Pressable>
      <View
        style={[styles.largeGhost, styles.viewLayout5]}
        placeholder="Resend  New Code in 0:20"
      />
      <View style={styles.homeIndicator} />
      <Pressable style={[styles.numeric, styles.bgPosition]}>
        <View style={styles.view5}>
          <View style={[styles.view6, styles.backgroundLayout]} />
          <Text style={[styles.number, styles.numberPosition1]}>0</Text>
        </View>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/10.png")}
        />
        <View style={[styles.view7, styles.viewLayout3]}>
          <View style={[styles.background, styles.backgroundLayout]} />
          <Text style={[styles.number1, styles.numberPosition1]}>9</Text>
        </View>
        <View style={[styles.view8, styles.viewLayout3]}>
          <View style={[styles.view6, styles.backgroundLayout]} />
          <Text style={[styles.number2, styles.numberPosition]}>8</Text>
        </View>
        <View style={[styles.view9, styles.viewLayout3]}>
          <View style={[styles.background2, styles.backgroundLayout]} />
          <Text style={[styles.number3, styles.numberPosition1]}>7</Text>
        </View>
        <View style={[styles.view10, styles.viewLayout2]}>
          <View style={[styles.background, styles.backgroundLayout]} />
          <Text style={[styles.number1, styles.numberPosition1]}>6</Text>
        </View>
        <View style={[styles.view11, styles.viewLayout1]}>
          <View style={[styles.background4, styles.backgroundLayout]} />
          <Text style={[styles.number1, styles.numberPosition1]}>5</Text>
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
          <View style={[styles.background4, styles.backgroundLayout]} />
          <Text style={[styles.number6, styles.numberPosition1]}>4</Text>
        </View>
        <View style={[styles.view13, styles.viewLayout2]}>
          <View style={[styles.view6, styles.backgroundLayout]} />
          <Text style={[styles.number7, styles.numberPosition]}>3</Text>
        </View>
        <View style={[styles.view14, styles.viewLayout1]}>
          <View style={[styles.background, styles.backgroundLayout]} />
          <Text style={[styles.number1, styles.numberPosition1]}>2</Text>
        </View>
        <View style={[styles.view15, styles.viewLayout]}>
          <View style={[styles.background, styles.backgroundLayout]} />
          <Text style={[styles.number2, styles.numberPosition]}>1</Text>
        </View>
      </Pressable>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  view2Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  welcomeTypo: {
    width: 313,
    textAlign: "left",
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
    color: Color.blackWhiteBlack,
    position: "absolute",
  },
  bgPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  viewLayout5: {
    height: 64,
    borderRadius: Border.br_5xs,
  },
  textPosition: {
    lineHeight: 32,
    fontSize: FontSize.heading2Regular_size,
    marginTop: -16,
    left: "50%",
    color: Color.blackWhiteBlack,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  viewLayout4: {
    marginLeft: 8,
    height: 64,
    width: 48,
    backgroundColor: Color.giratina100,
    borderRadius: Border.br_5xs,
  },
  backgroundLayout: {
    width: 81,
    top: -4,
    backgroundColor: Color.giratina100,
    borderRadius: Border.br_5xs,
    height: 56,
    position: "absolute",
  },
  numberPosition1: {
    fontSize: FontSize.size_10xl,
    marginTop: -18,
    left: "50%",
    color: Color.blackWhiteBlack,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  viewLayout3: {
    top: 136,
    height: 48,
    width: 110,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  numberPosition: {
    marginLeft: -9,
    fontSize: FontSize.size_10xl,
    left: "50%",
    color: Color.blackWhiteBlack,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  viewLayout2: {
    left: 250,
    height: 48,
    width: 110,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  viewLayout1: {
    left: 141,
    height: 48,
    width: 110,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  viewLayout: {
    left: 32,
    height: 48,
    width: 110,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  screenshot20220713At1649: {
    top: -181,
    left: -24,
    width: 375,
    height: 804,
    position: "absolute",
  },
  screenShot20231118At121: {
    top: -133,
    left: -352,
    width: 1066,
    height: 717,
    position: "absolute",
  },
  layer1Icon: {
    top: 465,
    left: 80,
    width: 345,
    height: 459,
    opacity: 0.2,
    position: "absolute",
    overflow: "hidden",
  },
  statusbarbg: {
    backgroundColor: Color.colorGainsboro_200,
  },
  weSentIt: {
    top: 275,
    fontWeight: "500",
    fontFamily: FontFamily.body1Medium,
    fontSize: FontSize.size_sm,
    left: 40,
    position: "absolute",
  },
  pleaseEnterCode: {
    top: 176,
    left: 41,
    fontSize: 25,
    lineHeight: 27,
  },
  bg: {
    top: 578,
    borderRadius: 25,
    backgroundColor: "#b7b7b7",
    height: 301,
  },
  text: {
    marginLeft: -7,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 32,
    fontSize: FontSize.heading2Regular_size,
    marginTop: -16,
  },
  view: {
    width: 48,
    backgroundColor: Color.giratina100,
    height: 64,
    borderRadius: Border.br_5xs,
  },
  text2: {
    marginLeft: -3,
    fontFamily: FontFamily.body1Regular,
  },
  view2: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
  },
  smsCode: {
    top: 408,
    left: 45,
    width: 303,
    paddingLeft: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  largeGhost: {
    top: 520,
    left: 25,
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 64,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  view6: {
    left: 13,
  },
  number: {
    marginLeft: -10,
  },
  view5: {
    top: 196,
    height: 48,
    width: 110,
    borderRadius: Border.br_7xs,
    left: 142,
    position: "absolute",
  },
  icon: {
    top: 192,
    left: 249,
    width: 110,
    borderRadius: Border.br_7xs,
    height: 56,
    position: "absolute",
  },
  background: {
    left: 14,
  },
  number1: {
    marginLeft: -8,
  },
  view7: {
    left: 251,
  },
  number2: {
    marginTop: -18,
    marginLeft: -9,
  },
  view8: {
    left: 142,
    top: 136,
  },
  background2: {
    left: 17,
  },
  number3: {
    marginLeft: -5,
  },
  view9: {
    left: 31,
  },
  view10: {
    top: 76,
  },
  background4: {
    left: 15,
  },
  view11: {
    top: 76,
  },
  number6: {
    marginLeft: -7,
  },
  view12: {
    top: 76,
  },
  number7: {
    marginTop: -22,
  },
  view13: {
    top: 16,
  },
  view14: {
    top: 16,
  },
  view15: {
    top: 16,
  },
  numeric: {
    bottom: 0,
    height: 274,
  },
  welcome: {
    top: 121,
    fontSize: FontSize.size_13xl,
    lineHeight: 45,
    left: 40,
  },
  verificationactionloginfire: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Verificationactionloginfire;
