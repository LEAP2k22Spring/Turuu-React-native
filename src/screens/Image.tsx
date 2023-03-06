import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const ImageScreen = () => {
  const [image, setImage] = useState('');
  const uploadImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        setImage(response.assets[0].uri);
      },
    );
  };
  return (
    <View className="flex-[1] justify-center items-center">
      <Text>Image!</Text>
      {image && (
        <Image className="w-[150] h-[150] rounded-3xl" source={{uri: image}} />
      )}
      <Button title="Upload Image" onPress={() => uploadImage()} />
    </View>
  );
};

// const doubleTapRef = createRef();
//   const [size, setSize] = useState(1);
//   const [image, setImage] = useState('');

//   const _onDoubleTap = (event: {nativeEvent: {state: number}}) => {
//     console.log(State.ACTIVE, 'f');
//     console.log(event.nativeEvent.state);
//     if (event.nativeEvent.state === State.ACTIVE) {
//       setSize(p => p + 0.3);
//     }
//   };

//   const handler = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         includeBase64: false,
//         maxHeight: 200,
//         maxWidth: 200,
//       },
//       response => {
//         setImage(response.assets[0].uri);
//       },
//     );
//   };

//   <Text>App</Text>
//   <LongPressGestureHandler
//     onHandlerStateChange={({nativeEvent}) => {
//       if (nativeEvent.state === State.ACTIVE) {
//         Alert.alert("I'm being pressed for so long");
//       }
//     }}
//     minDurationMs={1000}>
//     <View style={styles.box} />
//   </LongPressGestureHandler>
//   <TapGestureHandler
//     ref={doubleTapRef}
//     onHandlerStateChange={_onDoubleTap}
//     numberOfTaps={2}>
//     <View style={[styles.box, {transform: [{scale: size}]}]} />
//   </TapGestureHandler>
//   {image && (
//     <Image style={{width: 200, height: 200}} source={{uri: image}} />
//   )}
//   <Button onPress={() => handler()} title="Choose image" />
// </SafeAreaView>
