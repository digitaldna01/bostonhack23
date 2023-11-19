import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const Maps1Walking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maps1Walking}>
      <View
        style={[styles.screenshot20220713At1649, styles.topnavigation1Layout]}
      />
      <Image
        style={[styles.screenShot20231118At121, styles.timePosition]}
        contentFit="cover"
        source={require("../assets/screen-shot-20231118-at-1215-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={styles.topnavigation}>
        <View style={[styles.map, styles.mapLayout]}>
          <Image
            style={styles.icnmapIcon}
            contentFit="cover"
            source={require("../assets/icnmap.png")}
          />
        </View>
        <View style={[styles.compas, styles.compasSpaceBlock]}>
          <Image
            style={styles.icnmapIcon}
            contentFit="cover"
            source={require("../assets/compas.png")}
          />
        </View>
      </View>
      <View style={[styles.temperature, styles.temperatureFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>􀇂</Text>
        <Text style={[styles.text1, styles.text1Clr]}>56º</Text>
      </View>
      <View style={styles.search}>
        <View style={[styles.topnavigation1, styles.temperatureFlexBox]}>
          <Pressable
            style={[styles.search1, styles.avatarFlexBox]}
            onPress={() => navigation.navigate("Maps1WalkingSearch")}
          >
            <Image
              style={styles.icnmapIcon}
              contentFit="cover"
              source={require("../assets/icnsearch.png")}
            />
            <Text style={[styles.searchMaps, styles.text1Clr]}>
              Search Maps
            </Text>
          </Pressable>
          <View style={[styles.avatar, styles.avatarFlexBox]}>
            <Text style={styles.aa}>AA</Text>
          </View>
          <View style={[styles.sss, styles.sssLayout]} />
        </View>
        <Image
          style={styles.userImageIcon}
          contentFit="cover"
          source={require("../assets/user-image1.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.capacityBg]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={styles.statusBarPosition}>
        <View style={styles.battery}>
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
          <Text style={[styles.time, styles.textTypo]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.pinIcon}
        contentFit="cover"
        source={require("../assets/pin.png")}
      />
      <Image
        style={[styles.layer1Icon, styles.layer1IconLayout]}
        contentFit="cover"
        source={require("../assets/layer-12.png")}
      />
      <Image
        style={[styles.layer1Icon1, styles.layer1IconLayout]}
        contentFit="cover"
        source={require("../assets/layer-12.png")}
      />
      <Image
        style={[styles.layer1Icon2, styles.layer1IconLayout]}
        contentFit="cover"
        source={require("../assets/layer-12.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.groupIcon3}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topnavigation1Layout: {
    width: 375,
    top: 0,
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.62%",
    height: "4.4%",
    position: "absolute",
    overflow: "hidden",
  },
  mapLayout: {
    height: 44,
    width: 44,
    backgroundColor: Color.colorWhitesmoke_100,
    alignItems: "center",
  },
  compasSpaceBlock: {
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  temperatureFlexBox: {
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  text1Clr: {
    color: Color.gray80,
    textAlign: "center",
  },
  avatarFlexBox: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  sssLayout: {
    height: 5,
    left: "50%",
  },
  capacityBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    bottom: "94.58%",
    top: "0%",
    height: "5.42%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  layer1IconLayout: {
    width: "7.38%",
    height: "5.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  screenshot20220713At1649: {
    height: 804,
    left: 0,
    position: "absolute",
  },
  screenShot20231118At121: {
    top: 46,
    width: 1066,
    height: 717,
  },
  groupIcon: {
    top: "75.47%",
    right: "41.22%",
    bottom: "20.13%",
    left: "52.16%",
  },
  icnmapIcon: {
    width: 20,
    height: 20,
  },
  map: {
    borderColor: Color.colorSilver_300,
    borderBottomWidth: 0.3,
    borderStyle: "solid",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    justifyContent: "center",
  },
  compas: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 44,
    width: 44,
    backgroundColor: Color.colorWhitesmoke_100,
    alignItems: "center",
  },
  topnavigation: {
    top: 54,
    right: 10,
    shadowRadius: 16,
    elevation: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    position: "absolute",
  },
  text: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    fontSize: FontSize.size_lg,
    marginLeft: 2,
    fontFamily: FontFamily.robotoRegular,
  },
  temperature: {
    top: 718,
    left: 328,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 0.5,
    width: 56,
    height: 32,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  searchMaps: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.body1Regular,
    marginLeft: 4,
  },
  search1: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: 296,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    zIndex: 0,
    borderRadius: Border.br_3xs,
  },
  aa: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  avatar: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorSilver_100,
    display: "none",
    zIndex: 1,
    marginLeft: 10,
    width: 36,
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  sss: {
    marginLeft: -18.5,
    top: 7,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSilver_200,
    zIndex: 2,
    width: 36,
    position: "absolute",
  },
  topnavigation1: {
    left: -11,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    width: 375,
    top: 0,
  },
  userImageIcon: {
    top: 21,
    left: 338,
    width: 34,
    height: 34,
    position: "absolute",
  },
  search: {
    top: 756,
    left: -3,
    shadowRadius: 6,
    elevation: 6,
    width: 396,
    height: 96,
    backgroundColor: Color.colorWhitesmoke_100,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    position: "absolute",
    overflow: "hidden",
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
    height: 11,
    borderStyle: "solid",
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
    top: 17,
    right: 14,
    width: 24,
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
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    width: 57,
    textAlign: "center",
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
  pinIcon: {
    top: 536,
    left: 80,
    width: 118,
    height: 118,
    position: "absolute",
  },
  layer1Icon: {
    top: "58.57%",
    right: "10.69%",
    bottom: "36.27%",
    left: "81.93%",
  },
  layer1Icon1: {
    top: "73.71%",
    right: "55.73%",
    bottom: "21.13%",
    left: "36.9%",
  },
  layer1Icon2: {
    top: "48.12%",
    right: "65.14%",
    bottom: "46.71%",
    left: "27.48%",
  },
  groupIcon1: {
    top: "64.55%",
    right: "78.37%",
    bottom: "31.04%",
    left: "15.01%",
  },
  groupIcon2: {
    top: "54.23%",
    right: "63.87%",
    bottom: "41.37%",
    left: "29.52%",
  },
  groupIcon3: {
    top: "50.7%",
    bottom: "44.89%",
    left: "93.38%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.62%",
    height: "4.4%",
    position: "absolute",
    overflow: "hidden",
  },
  maps1Walking: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Maps1Walking;
