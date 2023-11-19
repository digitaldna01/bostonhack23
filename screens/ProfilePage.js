import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ProfilePage = () => {
  return (
    <View style={styles.profilePage}>
      <View style={styles.screenshot20220713At1649} />
      <Image
        style={[styles.phoneNumberIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/phone-number.png")}
      />
      <Image
        style={[styles.dividerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/divider.png")}
      />
      <Text style={[styles.phoneNumberTextbox, styles.profileFlexBox]}>
        Phone number
      </Text>
      <Image
        style={[styles.profileIcon, styles.profileLayout]}
        contentFit="cover"
        source={require("../assets/profile1.png")}
      />
      <View style={styles.screenShot20231118At121} />
      <View style={[styles.homeIndicator, styles.mainFramePosition]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.frame}>
          <View style={[styles.timeStyle, styles.statusBarPosition]}>
            <Text style={styles.time}>9:41</Text>
          </View>
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          contentFit="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={styles.divider2} />
      <TextInput
        style={[styles.janedoegmailcom, styles.nameTypo]}
        placeholder="jane.doe@gmail.com"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.janeDoe, styles.profileTypo]}
        placeholder="Jane Doe"
        placeholderTextColor="#181d27"
      />
      <Image
        style={[styles.profileCopyIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/profile-copy.png")}
      />
      <ImageBackground
        style={styles.userImageIcon}
        resizeMode="cover"
        source={require("../assets/userimage.png")}
      />
      <Image
        style={[styles.profilePageChild, styles.profileLayout]}
        contentFit="cover"
        source={require("../assets/profile1.png")}
      />
      <Image
        style={[styles.bdayCalendar, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bday-calendar.png")}
      />
      <TextInput
        style={styles.phoneButton}
        placeholder="Update Profile"
        placeholderTextColor="#fff"
      />
      <TextInput style={[styles.inputPhoneNumberDefault, styles.nameLayout]} />
      <TextInput
        style={[styles.lastName, styles.nameLayout]}
        placeholder="And your last name?"
        placeholderTextColor="#555"
      />
      <TextInput
        style={[styles.firstName, styles.nameLayout]}
        placeholder="What’s your first name?"
        placeholderTextColor="#555"
      />
      <Image
        style={[styles.unitedStatesOfAmericaUs, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/united-states-of-america-us.png")}
      />
      <TextInput
        style={[styles.birthday, styles.nameLayout]}
        placeholder="What is your date of birth?"
        placeholderTextColor="#555"
      />
      <TextInput
        style={[styles.gender, styles.nameLayout]}
        placeholder="Select your gender"
        placeholderTextColor="#555"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profileFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  profileLayout: {
    height: 302,
    width: 375,
    position: "absolute",
  },
  mainFramePosition: {
    left: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frameIconPosition: {
    top: 17,
    position: "absolute",
  },
  profileTypo: {
    fontFamily: FontFamily.headlineMain,
    fontWeight: "700",
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  nameLayout: {
    height: 54,
    width: 343,
    left: 25,
    position: "absolute",
  },
  screenshot20220713At1649: {
    top: 0,
    height: 804,
    width: 375,
    left: 0,
    position: "absolute",
  },
  phoneNumberIcon: {
    height: "6.34%",
    width: "87.28%",
    top: "59.04%",
    right: "6.36%",
    bottom: "34.62%",
    left: "6.36%",
  },
  dividerIcon: {
    height: "4.34%",
    width: "0.25%",
    top: "60.04%",
    right: "79.26%",
    bottom: "35.62%",
    left: "20.48%",
    opacity: 0.4,
  },
  phoneNumberTextbox: {
    height: "2.11%",
    width: "56.23%",
    top: "61.15%",
    left: "24.68%",
    lineHeight: 20,
    color: "#555",
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  profileIcon: {
    top: 15,
    left: 10,
  },
  screenShot20231118At121: {
    left: -328,
    width: 1066,
    height: 717,
    top: 46,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  statusbarbg: {
    backgroundColor: Color.colorGainsboro_200,
    bottom: "94.58%",
    right: "0%",
    height: "5.42%",
    left: "0%",
    top: "0%",
    width: "100%",
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
    width: 57,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: "100%",
    width: "18.62%",
    right: "81.38%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  cellularConnectionIcon: {
    width: 18,
    height: 11,
  },
  frame: {
    top: 9,
    left: 22,
    width: 304,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    left: 331,
    width: 45,
    height: 12,
    overflow: "hidden",
  },
  statusBar: {
    bottom: "94.58%",
    right: "0%",
    height: "5.42%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  divider2: {
    height: "0.12%",
    width: "87.53%",
    top: "65.32%",
    right: "6.23%",
    bottom: "34.57%",
    left: "6.23%",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    position: "absolute",
  },
  janedoegmailcom: {
    top: 251,
    left: 93,
    position: "absolute",
  },
  janeDoe: {
    top: 227,
    left: 161,
    fontSize: FontSize.body1Regular_size,
  },
  profileCopyIcon: {
    height: "9.15%",
    width: "19.85%",
    top: "15.38%",
    right: "39.69%",
    bottom: "75.47%",
    left: "40.46%",
  },
  userImageIcon: {
    top: 134,
    width: 72,
    height: 72,
    left: 162,
    position: "absolute",
  },
  profilePageChild: {
    top: 59,
    left: 9,
  },
  bdayCalendar: {
    height: "1.88%",
    width: "4.07%",
    top: "78.64%",
    right: "9.67%",
    bottom: "19.48%",
    left: "86.26%",
  },
  phoneButton: {
    top: 737,
    left: 65,
    width: 192,
    height: 55,
    fontWeight: "500",
    fontFamily: FontFamily.bodyMain,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  inputPhoneNumberDefault: {
    top: 503,
  },
  lastName: {
    top: 429,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  firstName: {
    top: 355,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  unitedStatesOfAmericaUs: {
    height: "3.4%",
    width: "10.69%",
    top: "60.56%",
    right: "81.68%",
    bottom: "36.03%",
    left: "7.63%",
  },
  birthday: {
    top: 651,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  gender: {
    top: 577,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  profilePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage;
