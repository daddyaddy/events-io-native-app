import { View } from "react-native";
import * as React from "react";
import styles from "./index.style";
import MapView from "react-native-maps";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    const { latitude, longitude } = location;
    console.log(latitude, longitude);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          initialRegion={{
            latitude: 51.246452,
            longitude: 22.568445,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{ latitude, longitude }}
        ></MapView>
      </View>
    );
  }
}

export default GoogleMap;
