import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

export const App = () => {
  const doubleTapRef = React.createRef();
  const [size, setSize] = useState(1);

  const _onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert('singel tap');
    }
  };
  const _onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setSize(p => p + 0.3);
      console.log(event.nativeEvent.state);
    }
  };

  const handler = () => {
    console.log('hello');
    // const opition = {};
    // ImagePiker.launchImageLibrary(opition, response => {
    //   console.log(response, 'response');
    // });
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log(response);
        this.setState({
          resourcePath: response,
        });
      },
    );
  };

  return (
    <SafeAreaView>
      <Text>App</Text>
      <LongPressGestureHandler
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state === State.ACTIVE) {
            Alert.alert("I'm being pressed for so long");
          }
        }}
        minDurationMs={1000}>
        <View style={styles.box} />
      </LongPressGestureHandler>
      <TapGestureHandler
        onHandlerStateChange={_onSingleTap}
        // waitFor={doubleTapRef}
      >
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={_onDoubleTap}
          numberOfTaps={2}>
          <View style={[styles.box, {transform: [{scale: size}]}]} />
        </TapGestureHandler>
      </TapGestureHandler>
      <Button onPress={() => handler()} title="Choose image" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
  text: {
    marginLeft: 20,
  },
});
