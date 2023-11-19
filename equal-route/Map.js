import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState } from 'react';
import Map from './Map.js';


function Map() {

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


  const input = document.getElementById('');
  const searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed")
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
      <MapView
        style={{ height: '110%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: pos.lat,
          longitude: pos.lng,
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
  )
}

export default Map;



