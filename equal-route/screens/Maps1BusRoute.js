import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const Maps1BusRoute = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maps1BusRoute}>
      <View
        style={[styles.screenshot20220713At1649, styles.topnavigation1Layout]}
      />
      <Image
        style={[styles.capturaDePantalla20231118, styles.capturaPosition]}
        contentFit="cover"
        source={require("../assets/captura-de-pantalla-20231118-a-las-1838-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Pressable
        style={styles.topnavigation}
        onPress={() => navigation.navigate("Maps1WalkingSearch")}
      >
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
      </Pressable>
      <View style={[styles.temperature, styles.temperatureFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>􀇂</Text>
        <Text style={[styles.text1, styles.text1Clr]}>56º</Text>
      </View>
      <View style={[styles.search, styles.mapPosition]}>
        <View style={[styles.topnavigation1, styles.temperatureFlexBox]}>
          <View style={[styles.search1, styles.avatarFlexBox]}>
            <Image
              style={styles.icnmapIcon}
              contentFit="cover"
              source={require("../assets/icnsearch.png")}
            />
            <Text style={[styles.searchMaps, styles.text1Clr]}>
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
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
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
        <View style={[styles.timeStyle, styles.timeStylePosition]}>
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
        style={[styles.layer1Icon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/layer-15.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={styles.groupIcon3}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.capturaDePantalla202311181, styles.capturaPosition]}
        contentFit="cover"
        source={require("../assets/captura-de-pantalla-20231118-a-las-1838-3.png")}
      />
      <Image
        style={[styles.layer1Icon3, styles.timeStylePosition]}
        contentFit="cover"
        source={require("../assets/layer-16.png")}
      />
      <Image
        style={[styles.layer1Icon3, styles.timeStylePosition]}
        contentFit="cover"
        source={require("../assets/layer-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topnavigation1Layout: {
    width: 375,
    top: 0,
  },
  capturaPosition: {
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  mapPosition: {
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
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
  timeStylePosition: {
    left: "5.6%",
    position: "absolute",
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
  capturaDePantalla20231118: {
    top: 46,
    width: 458,
    height: 722,
  },
  groupIcon: {
    top: "75.47%",
    right: "41.22%",
    bottom: "20.13%",
    left: "52.16%",
    width: "6.62%",
    height: "4.4%",
    maxWidth: "100%",
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
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    fontSize: FontSize.size_lg,
    marginLeft: 2,
    fontFamily: FontFamily.robotoRegular,
  },
  temperature: {
    top: 657,
    left: 336,
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
  vectorIcon: {
    height: "23.31%",
    width: "9.24%",
    top: "48.41%",
    right: "81.92%",
    bottom: "28.28%",
    left: "8.84%",
    opacity: 0,
    position: "absolute",
  },
  search: {
    top: 695,
    left: -3,
    shadowRadius: 6,
    elevation: 6,
    width: 396,
    height: 157,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
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
  },
  pinIcon: {
    top: 387,
    left: 21,
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
    height: "5.63%",
    width: "8.65%",
    top: "45.89%",
    right: "69.21%",
    bottom: "48.47%",
    left: "22.14%",
    position: "absolute",
  },
  groupIcon1: {
    top: "64.55%",
    right: "78.37%",
    bottom: "31.04%",
    left: "15.01%",
    width: "6.62%",
    height: "4.4%",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIcon2: {
    top: "54.23%",
    right: "63.87%",
    bottom: "41.37%",
    left: "29.52%",
    width: "6.62%",
    height: "4.4%",
    maxWidth: "100%",
    position: "absolute",
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
  capturaDePantalla202311181: {
    top: 751,
    width: 583,
    height: 79,
  },
  layer1Icon3: {
    height: "3.64%",
    width: "6.11%",
    top: "90.14%",
    right: "88.3%",
    bottom: "6.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  maps1BusRoute: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Maps1BusRoute;
