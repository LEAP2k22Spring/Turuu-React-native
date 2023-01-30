import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';

const MoonSun = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const right = useRef(new Animated.Value(0)).current;
  const left = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const duration = 1500;

  const toggleSwitch = () => {
    isEnabled
      ? Animated.timing(right, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }).start()
      : Animated.timing(right, {
          toValue: -400,
          duration,
          useNativeDriver: true,
        }).start(),
      // night
      isEnabled
        ? Animated.timing(left, {
            toValue: 0,
            duration,
            useNativeDriver: true,
          }).start()
        : Animated.timing(left, {
            toValue: 0,
            duration,
            useNativeDriver: true,
          }).start(),
      // opacity
      isEnabled
        ? Animated.timing(opacity, {
            toValue: 1,
            duration,
            delay: 10,
            useNativeDriver: true,
          }).start()
        : Animated.timing(opacity, {
            toValue: 0,
            duration,
            useNativeDriver: true,
          }).start(),
      setIsEnabled(previousState => !previousState);
  };
  return (
    <ScrollView style={styles.container}>
      {/* <Animated.View style={{}}>
        <Image
          style={styles.night}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069431911002411058/328204411_760387072357210_8499172510713616451_n.png',
          }}
        />
      </Animated.View>
      <Animated.View
        style={{transform: [{translateX: right}], opacity: opacity}}>
        <Image
          style={styles.day}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069431910742372383/328157456_863747071526634_8265200150668381616_n.png',
          }}
        />
      </Animated.View>

      <View style={styles.switch}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  day: {
    width: '100%',
    height: 850,
    zIndex: 10,
    marginTop: -850,
    position: 'absolute',
  },
  night: {
    width: '100%',
    height: 850,
    zIndex: -0,
  },
  switch: {
    position: 'absolute',
    right: 10,
    top: 50,
  },
});

export default MoonSun;
