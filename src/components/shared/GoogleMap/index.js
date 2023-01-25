import { View } from "react-native";
import * as React from "react";
import styles from "./index.style";
import MapView from "react-native-maps";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegionChange = () => {
    const { location } = this.props;
    const { latitude, longitude } = location;
    this.setState({ latitude, longitude });
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  render() {
    const { location } = this.props;
    const { latitude, longitude } = location;

    console.log("GOOGLE_MAP", location);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={this.handleRegionChange}
        ></MapView>
      </View>
    );
  }
}

export default GoogleMap;
