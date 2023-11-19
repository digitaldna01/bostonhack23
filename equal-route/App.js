import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState } from 'react';

let map, infoWindow;


export default function App() {
  //const pos = { lat: 0, lng: 0 };

  //Current Location
  if (navigator.geolocation) {
    console.log("working here");
    navigator.geolocation.getCurrentPosition(successCallback)((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  } else {
    // Browser doesn't support Geolocation
    console.log("going to else");
    pos = {
      lat: 42.35062656407261,
      lng: -71.10539373555561,
    }
  }

  // Data Science Building
  const [destination, setDestination] = useState({
    latitude: 42.35009532692169,
    longitude: -71.10325692205237
  });

  const [origin, setOrigin] = useState({
    latitude: pos.lat,
    longitude: pos.lng
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


