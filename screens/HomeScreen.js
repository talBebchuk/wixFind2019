import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Constants, MapView} from 'expo';
import { Marker } from 'react-native-maps';

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [
      {
        title: 'shif',
        description: 'bla',
        serviceUrl: 'www.google.com'
      }
    ]
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 600 }}
          // region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
          {this.state.markers.map((marker, key) => {
            return (
              <Marker
                key={key}
                coordinate={{latitude: 31.2615099, longitude: 34.7558676}}
                title={marker.title}
                description={marker.description}
                onPress={() => Linking.openURL(marker.serviceUrl)}
              />
            )
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
