import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, PermissionsAndroid, Button} from 'react-native';
import { Text } from 'react-native-elements';
import { requestPermission } from 'react-native-location';
import Map from '../../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  // const startWatching = async () => {
  //     try {
  //       await requestPermission();
  //     } catch (e) {
  //       setErr(e);
  //     }
  // };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const App = () => (
    <View style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
    </View>


  );
  

  useEffect(() => {
    // startWatching();
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView forceInsert={{ top: 'always' }}>
      <Text h2 >Create a Track</Text>
      <Map />
      {err ? <Text>Please enable loaction </Text>: null}
      <Button title="request permissions" onPress={requestCameraPermission} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
