import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const Maps1WalkingSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maps1WalkingSearch}>
      <Image
        style={[styles.screenshot20231118At519, styles.borderPosition]}
        contentFit="cover"
        source={require("../assets/screenshot-20231118-at-519-1.png")}
      />
      <Image
        style={[styles.layer1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-13.png")}
      />
      <View
        style={[styles.screenshot20220713At1649, styles.topnavigation1Layout]}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
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
          <View style={[styles.search1, styles.avatarFlexBox]}>
            <Image
              style={styles.icnmapIcon}
              contentFit="cover"
              source={require("../assets/icnsearch.png")}
            />
            <Text style={[styles.searchMaps, styles.searchMapsTypo]}>
              91 Bay State Road
            </Text>
          </View>
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
        <View style={styles.searchChild} />
        <Text style={styles.bayStateRoadContainer}>
          <Text style={styles.bayStateRoad}>{`91 Bay State Road
`}</Text>
          <Text style={styles.searchMapsTypo}>Kenmore, Boston</Text>
        </Text>
        <Text
          style={[styles.accessibleElevator, styles.accessibleTypo]}
        >{`Accessible
Elevator`}</Text>
        <Text
          style={[styles.accessibleParking, styles.accessibleTypo]}
        >{`Accessible
Parking`}</Text>
        <Text style={[styles.noRamps, styles.accessibleTypo]}>No Ramps</Text>
        <Text style={[styles.unevenSidewalk, styles.accessibleTypo]}>{`Uneven
Sidewalk`}</Text>
        <Image
          style={[styles.searchItem, styles.searchPosition]}
          contentFit="cover"
          source={require("../assets/frame-23389.png")}
        />
        <View style={[styles.vectorParent, styles.searchPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-336.png")}
          />
          <Text style={[styles.p, styles.pClr]}>P</Text>
        </View>
        <Image
          style={[styles.searchInner, styles.searchPosition]}
          contentFit="cover"
          source={require("../assets/frame-23390.png")}
        />
        <Image
          style={[styles.frameIcon, styles.searchPosition]}
          contentFit="cover"
          source={require("../assets/frame-23392.png")}
        />
        <Pressable
          style={styles.changeEmailAddress}
          onPress={() => navigation.navigate("Maps2WalkingRoute")}
        >
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Image
            style={[styles.layer1Icon1, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/layer-14.png")}
          />
          <Text style={[styles.changeEmailAddress1, styles.changeTypo1]}>
            21 Minutes
          </Text>
          <Image
            style={[styles.groupIcon1, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.changeEmailAddress2, styles.changePosition1]}
          onPress={() => navigation.navigate("Maps1BusRoute")}
        >
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.changeEmailAddress3, styles.changeTypo]}>
            15 minutes
          </Text>
          <Image
            style={[styles.isolationModeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/isolation-mode.png")}
          />
          <Image
            style={[styles.isolationModeIcon1, styles.isolationIconLayout]}
            contentFit="cover"
            source={require("../assets/isolation-mode1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.changeEmailAddress4, styles.changePosition1]}
          onPress={() => navigation.navigate("Maps2TrainRoute")}
        >
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.changeEmailAddress5, styles.changePosition]}>
            8 minutes
          </Text>
          <Image
            style={[styles.layer1Icon2, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/layer-14.png")}
          />
          <Image
            style={[styles.isolationModeIcon2, styles.isolationIconLayout]}
            contentFit="cover"
            source={require("../assets/isolation-mode1.png")}
          />
        </Pressable>
        <Text style={[styles.changeEmailAddress6, styles.changePosition]}>
          Add to Favorites
        </Text>
        <Image
          style={[styles.iconStarOutline, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-star-outline.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.capacityBg]} />
      <View style={[styles.statusbarbg, styles.statusBarPosition]} />
      <View style={styles.statusBarPosition}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
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
          <Text style={[styles.time, styles.changePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  topnavigation1Layout: {
    width: 375,
    top: 0,
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
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
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
  searchMapsTypo: {
    fontFamily: FontFamily.body1Regular,
    fontSize: FontSize.size_mid,
  },
  sssLayout: {
    height: 5,
    left: "50%",
  },
  accessibleTypo: {
    fontFamily: FontFamily.body1Medium,
    fontWeight: "500",
  },
  searchPosition: {
    bottom: "55.91%",
    top: "30.12%",
    width: "17.93%",
    height: "13.98%",
    position: "absolute",
  },
  pClr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition1: {
    top: "20.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  changeTypo1: {
    opacity: 0.91,
    fontFamily: FontFamily.bodyMain,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  changePosition1: {
    bottom: "34.45%",
    top: "51.77%",
    height: "13.78%",
    width: "28.03%",
    position: "absolute",
    overflow: "hidden",
  },
  changeTypo: {
    left: "17.12%",
    width: "65.77%",
    opacity: 0.91,
    fontFamily: FontFamily.bodyMain,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  iconPosition: {
    left: "24.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  isolationIconLayout: {
    width: "39.64%",
    height: "62.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  changePosition: {
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  statusBarPosition: {
    bottom: "94.58%",
    height: "5.42%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  screenshot20231118At519: {
    width: 538,
    height: 1166,
    left: 0,
  },
  layer1Icon: {
    height: "14.67%",
    width: "26.21%",
    top: "18.66%",
    right: "35.11%",
    bottom: "66.67%",
    left: "38.68%",
    position: "absolute",
  },
  screenshot20220713At1649: {
    height: 804,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "4.4%",
    width: "6.62%",
    top: "75.47%",
    right: "41.22%",
    bottom: "20.13%",
    left: "52.16%",
    position: "absolute",
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
    color: Color.colorBlack,
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
    marginLeft: 4,
    color: Color.gray80,
    textAlign: "center",
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
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_sm,
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
    left: -3,
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
  searchChild: {
    top: 76,
    left: 10,
    borderRadius: 12,
    backgroundColor: "#d9d9d9",
    width: 376,
    height: 318,
    position: "absolute",
  },
  bayStateRoad: {
    fontSize: FontSize.heading2Regular_size,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  bayStateRoadContainer: {
    top: 87,
    left: 23,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  accessibleElevator: {
    left: 41,
    lineHeight: 11,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
    top: 230,
    textAlign: "center",
  },
  accessibleParking: {
    left: 131,
    lineHeight: 11,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
    top: 230,
    textAlign: "center",
  },
  noRamps: {
    top: 234,
    left: 219,
    lineHeight: 11,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
  },
  unevenSidewalk: {
    top: 228,
    left: 311,
    lineHeight: 11,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "center",
  },
  searchItem: {
    right: "74.24%",
    left: "7.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  p: {
    height: "49.3%",
    width: "54.93%",
    top: "14.08%",
    left: "22.54%",
    fontSize: 48,
    lineHeight: 55,
    fontFamily: FontFamily.body1Medium,
    fontWeight: "500",
  },
  vectorParent: {
    right: "51.52%",
    left: "30.56%",
  },
  searchInner: {
    right: "29.29%",
    left: "52.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIcon: {
    right: "7.07%",
    left: "75%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangle: {
    height: "90.91%",
    top: "6.49%",
    bottom: "2.6%",
  },
  layer1Icon1: {
    height: "32.47%",
    right: "54.95%",
    bottom: "46.75%",
    left: "27.93%",
    width: "17.12%",
  },
  changeEmailAddress1: {
    width: "84.68%",
    top: "61.04%",
    left: "8.11%",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  groupIcon1: {
    height: "31.17%",
    right: "27.93%",
    bottom: "48.05%",
    left: "53.15%",
    width: "18.92%",
  },
  changeEmailAddress: {
    height: "15.16%",
    top: "50.79%",
    right: "65.4%",
    bottom: "34.06%",
    left: "6.57%",
    width: "28.03%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_mini,
  },
  changeEmailAddress3: {
    top: "60%",
    textAlign: "center",
    position: "absolute",
  },
  isolationModeIcon: {
    height: "37.14%",
    top: "17.14%",
    right: "56.76%",
    bottom: "45.71%",
    width: "18.92%",
  },
  isolationModeIcon1: {
    top: "4.29%",
    right: "12.61%",
    bottom: "32.86%",
    left: "47.75%",
  },
  changeEmailAddress2: {
    right: "35.1%",
    left: "36.87%",
  },
  changeEmailAddress5: {
    marginTop: 6,
    left: "17.12%",
    width: "65.77%",
    opacity: 0.91,
    fontFamily: FontFamily.bodyMain,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  layer1Icon2: {
    height: "35.71%",
    top: "15.71%",
    right: "58.56%",
    bottom: "48.57%",
    width: "17.12%",
  },
  isolationModeIcon2: {
    top: "1.43%",
    right: "17.12%",
    bottom: "35.71%",
    left: "43.24%",
  },
  changeEmailAddress4: {
    right: "4.8%",
    left: "67.17%",
  },
  changeEmailAddress6: {
    marginTop: 104,
    left: "16.67%",
    opacity: 0.91,
    fontFamily: FontFamily.bodyMain,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  iconStarOutline: {
    height: "4.82%",
    width: "6.57%",
    top: "69.88%",
    right: "84.85%",
    bottom: "25.3%",
    left: "8.59%",
    position: "absolute",
  },
  search: {
    top: 426,
    left: -1,
    shadowRadius: 6,
    elevation: 6,
    width: 396,
    height: 508,
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
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.robotoThinItalic,
    width: 57,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 0,
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
  maps1WalkingSearch: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Maps1WalkingSearch;
