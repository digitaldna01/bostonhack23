import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState } from 'react';

let map, infoWindow;


export default function App() {

  //Questrom
  const [origin, setOrigin] = useState({
    latitude: 42.34864109052953,
    longitude: -71.10022738965007
  });

  // Tsai Performance center 
  const [destination, setDestination] = useState({
    latitude: 42.35025781988775,
    longitude: -71.1045319053142
  });

  const [destination2, setDestination2] = useState({
    latitude: 42.35015781988775,
    longitude: -71.1045319053142
  });

  const [waypoints, setWaypoints] = useState({
    latitude: 42.350201,
    longitude: 71.103573
  });

  return (
    <View style={styles.container}>
      <Text>This is a test!</Text>
      <MapView
        style={{ height: '110%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        //showsUserLocation={true}
        initialRegion={{
          latitude: 42.34864109052953,
          longitude: -71.10022738965007
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          waypoint={waypoints}
          apikey="AIzaSyDXdNULA8JJynfh30jdKn0uPRvvVyIPe1U"
          strokeWidth={4}
          strokeColor='#3981B0'
          mode={'WALKING'}
        />
        <MapViewDirections
          origin={origin}
          destination={destination2}
          apikey="AIzaSyDXdNULA8JJynfh30jdKn0uPRvvVyIPe1U"
          strokeWidth={4}
          strokeColor='#FF6240'
          mode={'WALKING'}
        />
        <Marker
          coordinate={origin}
          title="Starting Point"
        />
        <Marker
          coordinate={destination}
          title="Destination Point"
        />
      </MapView>
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

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your App doesn't support geolocation.",
//   );
//   infoWindow.open(map);
// }


