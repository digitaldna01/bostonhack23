import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState } from 'react';

let map, infoWindow;


export default function App() {

  // Tsai Performance center 
  const [destination, setDestination] = useState({
    latitude: 42.35025781988775,
    longitude: -71.1045319053142
  });

  //Questrom
  const [origin, setOrigin] = useState({
    latitude: 42.34976076615497,
    longitude: -71.09956806081382
  });

  return (
    <View style={styles.container}>
      {/* <Text>This is a test!</Text> */}
      <MapView
        style={{ height: '110%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: pos.lat,
          //currentLocation.latitude,
          // position.coords.latitude,
          longitude: pos.lng,
          //currentLocation.longitude,
          // position.coords.longitude,
          //latitudeDelta: .1,
          //longitudeDelta: .1,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyDXdNULA8JJynfh30jdKn0uPRvvVyIPe1U"
          strokeWidth={4}
          strokeColor="red"
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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your App doesn't support geolocation.",
  );
  infoWindow.open(map);
}


