import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';


// Current Location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  }
)

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is a test!</Text> */}
      <MapView
        style={{ height: '110%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: currentLocation.latitude,
          // position.coords.latitude,
          longitude: currentLocation.longitude,
          // position.coords.longitude,
          //latitudeDelta: .1,
          //longitudeDelta: .1,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
