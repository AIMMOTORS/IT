import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import markers1 from './swap_stations';
import crudHandler from '../../utils/helpers/crudHandler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, SF, SH } from '../../utils';
import IconFA from 'react-native-vector-icons/FontAwesome';
import images from '../../images';


const MapScreen = ({ route }) => {
  const initialRegion = {
    latitude: 24.91690164216198,
    longitude: 67.09812428802252,
    latitudeDelta: 0.39881850114372597,
    longitudeDelta: 0.250888466835022,
  };

  const [region, setRegion] = useState(initialRegion);
  const [markers, setMarkers] = useState(markers1);

  const handleMarkerPress = (markerCoordinate) => {
    setRegion({
      latitude: markerCoordinate.latitude,
      longitude: markerCoordinate.longitude,
      longitudeDelta: 0.01,
      latitudeDelta: 0.01
    });
  };

  async function getMaps() {
    let markers = await crudHandler.read('/stationlst');
    console.log("API DATA", markers.data);
    setMarkers(markers.data);
  }

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            // image={images.App_logo_AIM} //uses relative file path
            // style={styles.customMarkerImage}
            onPress={() =>
              handleMarkerPress({
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              })
            }
          >
            <Image source={images.App_logo_map} style={{height: 55, width: 55 }} />
            <Callout style={styles.calloutContainer}>
              <View style={styles.calloutContent}>
                <Text style={styles.calloutTitle}>{`AIM Swap Station`}</Text>
                <View style={styles.addressContainer}>
                  <IconFA name="map-marker" size={SH(20)} color={Colors.star_color} />
                  {/* <Text style={styles.boldText}>Address: </Text> */}
                  {/* <Text>  {marker.address} </Text> */}
                  <Text style={{ marginLeft: 10 }}>{marker.address}</Text>
                </View>
                <View style={styles.addressContainer}>
                  <IconFA name='battery' size={SF(14)} color={Colors.star_color} />
                  <Text style={{ marginLeft: 5 }}>Available Batteries: </Text>
                  <Text style={styles.boldText}>{marker.battery_count}</Text>
                  {/* <Text style={styles.boldText}>{` Number of batteries available: ${marker.battery_count}`}</Text> */}
                  {/* <Text>{` ${marker.battery_count}`}</Text> */}
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  calloutContainer: {
    width: 200,
    height: 100,
    // paddingHorizontal: 5,
    paddingVertical: 5,
  },
  calloutContent: {
    paddingHorizontal: 10,
  },
  calloutTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 3,
  },
  icon: {
    marginRight: 5,
  },
  boldText: {
    color: 'black',
    fontWeight: 'bold',
  },
  customMarkerImage: {
    width: 5, // Adjust width as needed
    height: 5, // Adjust height as needed
  },
});

export default MapScreen;
