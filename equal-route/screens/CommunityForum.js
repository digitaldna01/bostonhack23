import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const CommunityForum = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.communityForum}
      onPress={() => navigation.navigate("ThankYou")}
    >
      <View
        style={[
          styles.screenshot20220713At1649,
          styles.screenshot20220713Layout,
        ]}
      />
      <View style={[styles.screenShot20231118At121, styles.screenLayout]} />
      <View style={[styles.homeIndicator, styles.sssPosition]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
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
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.stickyBasePadding, styles.stickyLayout]}>
        <View style={styles.stickyBase}>
          <View style={styles.stickyBase1}>
            <View style={styles.content}>
              <View style={styles.tags}>
                <Image
                  style={styles.arrowRoutingIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-routing.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>Navigation</Text>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>
                Broken/ uneven sidewalk at intersection on BU Bridge
              </Text>
            </View>
            <Image
              style={styles.userImageIcon}
              contentFit="cover"
              source={require("../assets/user-image2.png")}
            />
            <Text style={styles.janeDoe}>Jane Doe</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flag, styles.flagPosition]}>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
        <Text style={styles.resolved}>Helpful</Text>
      </View>
      <View style={[styles.flag1, styles.flagPosition]}>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
        <Text style={styles.resolved}>Helpful</Text>
      </View>
      <View
        style={[
          styles.screenshot20220713At16491,
          styles.screenshot20220713Layout,
        ]}
      />
      <View style={[styles.screenShot20231118At1211, styles.screenLayout]} />
      <View style={[styles.stickyBasePadding1, styles.stickyLayout]}>
        <View style={styles.stickyBase}>
          <View style={styles.stickyBase1}>
            <View style={styles.content}>
              <View style={styles.tags}>
                <Image
                  style={styles.arrowRoutingIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-routing.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>Navigation</Text>
              </View>
              <Text
                style={[styles.text1, styles.textTypo]}
              >{`Icy ramp near Fitrec! `}</Text>
            </View>
            <Image
              style={styles.userImageIcon}
              contentFit="cover"
              source={require("../assets/user-image2.png")}
            />
            <Text style={styles.janeDoe}>Jane Doe</Text>
          </View>
        </View>
      </View>
      <View style={[styles.stickyBasePadding2, styles.stickyLayout]}>
        <View style={styles.stickyBase}>
          <View style={styles.stickyBase1}>
            <View style={styles.content}>
              <View style={styles.tags}>
                <Image
                  style={styles.arrowRoutingIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-routing.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>Navigation</Text>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>
                High pedestrian congestion near Warren Towers.
              </Text>
            </View>
            <Image
              style={styles.userImageIcon}
              contentFit="cover"
              source={require("../assets/user-image2.png")}
            />
            <Text style={styles.janeDoe}>Jane Doe</Text>
          </View>
        </View>
      </View>
      <View style={[styles.stickyBasePadding3, styles.stickyLayout]}>
        <View style={styles.stickyBase}>
          <View style={styles.stickyBase1}>
            <View style={styles.content}>
              <View style={styles.tags}>
                <Image
                  style={styles.arrowRoutingIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-routing.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>Navigation</Text>
              </View>
              <Text
                style={[styles.text1, styles.textTypo]}
              >{`Broken Elevator in CGS! `}</Text>
            </View>
            <Image
              style={styles.userImageIcon}
              contentFit="cover"
              source={require("../assets/user-image2.png")}
            />
            <Text style={styles.janeDoe}>Jane Doe</Text>
          </View>
        </View>
      </View>
      <Text style={styles.seeWhatOthers}>
        See what others in your area have to say!
      </Text>
      <Pressable
        style={styles.mainFrame}
        onPress={() => navigation.navigate("ThankYou")}
      >
        <Image
          style={[styles.iconlylightarrowLeft, styles.batteryPosition]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left2.png")}
        />
        <Text style={styles.communityForum1}>Community Forum</Text>
      </Pressable>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.topnavigation, styles.searchPosition]}>
          <Pressable
            style={[styles.search1, styles.avatarFlexBox]}
            onPress={() => navigation.navigate("Maps1WalkingSearch")}
          >
            <Image
              style={styles.icnsearchIcon}
              contentFit="cover"
              source={require("../assets/icnsearch.png")}
            />
            <Text style={styles.searchMaps}>Message...</Text>
          </Pressable>
          <View style={[styles.avatar, styles.sssLayout]}>
            <Text style={styles.aa}>AA</Text>
          </View>
          <View style={[styles.sss, styles.sssLayout]} />
        </View>
        <View style={styles.changeEmailAddress}>
          <View style={[styles.rectangle, styles.statusBarPosition]} />
          <Text style={[styles.changeEmailAddress1, styles.text8Position]}>
            Post
          </Text>
          <Text style={[styles.text8, styles.text8Position]}>+</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screenshot20220713Layout: {
    height: 804,
    width: 375,
    left: 33,
    position: "absolute",
  },
  screenLayout: {
    height: 717,
    width: 1066,
    left: -295,
    position: "absolute",
  },
  sssPosition: {
    height: 5,
    left: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryPosition: {
    width: 24,
    top: 17,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    textAlign: "center",
  },
  stickyLayout: {
    width: 258,
    left: 24,
    height: 153,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.sourceSansPro,
    textAlign: "left",
  },
  flagPosition: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    left: 282,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    borderColor: Color.colorGray_100,
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    position: "absolute",
  },
  avatarFlexBox: {
    height: 36,
    alignItems: "center",
    flexDirection: "row",
  },
  sssLayout: {
    width: 36,
    display: "none",
  },
  text8Position: {
    color: Color.colorWhite,
    fontWeight: "500",
    left: "17.65%",
    position: "absolute",
  },
  screenshot20220713At1649: {
    top: 17,
    height: 804,
    width: 375,
    left: 33,
  },
  screenShot20231118At121: {
    top: 63,
  },
  homeIndicator: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    backgroundColor: Color.colorBlack,
  },
  statusbarbg: {
    backgroundColor: Color.colorGainsboro_200,
    bottom: "94.58%",
    height: "5.42%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorBlack,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
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
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  battery: {
    left: 354,
    height: 11,
  },
  wifiIcon: {
    height: 12,
    width: 16,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 11,
  },
  time: {
    marginTop: -5.7,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    width: 57,
    textAlign: "center",
    color: Color.colorBlack,
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
    bottom: "94.58%",
    height: "5.42%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  arrowRoutingIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  text: {
    lineHeight: 18,
    color: Color.colorGray_200,
    marginLeft: 4,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  tags: {
    borderRadius: Border.br_5xl,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  text1: {
    fontSize: FontSize.body1Regular_size,
    lineHeight: 22,
    marginTop: 12,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  content: {
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_8xs,
    alignSelf: "stretch",
  },
  userImageIcon: {
    width: 35,
    height: 37,
  },
  janeDoe: {
    fontFamily: FontFamily.body1Regular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  stickyBase1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue,
    height: 150,
    alignItems: "center",
    borderColor: Color.colorGray_100,
    width: 258,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  stickyBase: {
    width: 264,
    paddingRight: Padding.p_5xl,
    flexDirection: "row",
    height: 153,
  },
  stickyBasePadding: {
    bottom: 552,
    height: 153,
  },
  checkIcon: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  resolved: {
    letterSpacing: 0.4,
    lineHeight: 16,
    textTransform: "uppercase",
    color: Color.lightThemeTextColorsPrimary,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 4,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  flag: {
    top: 156,
  },
  flag1: {
    top: 665,
  },
  screenshot20220713At16491: {
    top: 180,
  },
  screenShot20231118At1211: {
    top: 226,
  },
  stickyBasePadding1: {
    bottom: 383,
    height: 153,
  },
  stickyBasePadding2: {
    bottom: 214,
    height: 153,
  },
  stickyBasePadding3: {
    bottom: 45,
    height: 153,
  },
  seeWhatOthers: {
    height: "2.58%",
    width: "74.55%",
    top: "13.26%",
    left: "12.72%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.body1Regular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconlylightarrowLeft: {
    left: 16,
    height: 22,
  },
  communityForum1: {
    top: 19,
    left: 98,
    fontSize: FontSize.size_xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.headlineMain,
    color: Color.primaryBlack,
    display: "flex",
    width: 197,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  mainFrame: {
    marginLeft: -196.5,
    top: 45,
    width: 393,
    height: 56,
    left: "50%",
    position: "absolute",
  },
  icnsearchIcon: {
    display: "none",
    height: 20,
    width: 20,
  },
  searchMaps: {
    fontSize: FontSize.size_mid,
    color: Color.gray80,
    fontFamily: FontFamily.body1Regular,
    marginLeft: 4,
    textAlign: "center",
  },
  search1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    width: 296,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    zIndex: 0,
  },
  aa: {
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
  },
  avatar: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorSilver_100,
    padding: Padding.p_3xs,
    zIndex: 1,
    marginLeft: 10,
    height: 36,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  sss: {
    marginLeft: -18.5,
    top: 7,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSilver_200,
    zIndex: 2,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  topnavigation: {
    left: -11,
    width: 339,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  rectangle: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSteelblue,
    left: "0%",
    right: "0%",
    top: "0%",
  },
  changeEmailAddress1: {
    marginTop: -9,
    width: "72.06%",
    fontFamily: FontFamily.bodyMain,
    opacity: 0.91,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: "50%",
  },
  text8: {
    top: "22.22%",
    fontSize: FontSize.bodyMain_size,
    fontFamily: FontFamily.body1Medium,
    textAlign: "left",
  },
  changeEmailAddress: {
    height: "37.5%",
    width: "17.17%",
    top: "20.83%",
    right: "3.79%",
    bottom: "41.67%",
    left: "79.04%",
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 759,
    left: 2,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 396,
    height: 96,
    overflow: "hidden",
  },
  communityForum: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CommunityForum;
