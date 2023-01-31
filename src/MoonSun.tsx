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
  const opacity = useRef(new Animated.ValueXY({x: 1, y: 0})).current;
  const btnMoon = useRef(new Animated.Value(0)).current;
  const sunMove = useRef(new Animated.ValueXY()).current;
  const moonMove = useRef(new Animated.ValueXY()).current;
  const duration = 1000;

  const toggleSwitch = () => {
    // ternary operator
    isEnabled
      ? (Animated.timing(opacity, {
          toValue: {x: 1, y: 0},
          duration,
          useNativeDriver: true,
        }).start(),
        Animated.timing(btnMoon, {
          toValue: 0,
          duration: 10,
          useNativeDriver: true,
        }).start(),
        Animated.timing(sunMove, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }).start(),
        Animated.timing(moonMove, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }).start())
      : // or
        (Animated.timing(opacity, {
          toValue: {x: 0, y: 1},
          duration,
          useNativeDriver: true,
        }).start(),
        Animated.timing(btnMoon, {
          toValue: 1,
          duration: 10,
          useNativeDriver: true,
        }).start(),
        Animated.timing(sunMove, {
          toValue: {x: -90, y: 170},
          duration: 1500,
          useNativeDriver: true,
        }).start(),
        Animated.timing(moonMove, {
          toValue: {x: -200, y: 300},
          duration: 2000,
          useNativeDriver: true,
        }).start());
    setIsEnabled(previousState => !previousState);
  };
  return (
    <ScrollView style={styles.container}>
      <Animated.View>
        <Image
          style={styles.night}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069431911002411058/328204411_760387072357210_8499172510713616451_n.png',
          }}
        />
      </Animated.View>
      <Animated.View style={{opacity: opacity.x}}>
        <Image
          style={styles.day}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069431910742372383/328157456_863747071526634_8265200150668381616_n.png',
          }}
        />
      </Animated.View>
      <Animated.Image
        style={[
          styles.sun,
          {
            transform: [{translateY: sunMove.y}, {translateX: sunMove.x}],
            opacity: opacity.x,
          },
        ]}
        source={{
          uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069458522812723270/Vector.png',
        }}
      />
      <Animated.Image
        style={[
          styles.moon,
          {
            transform: [{translateY: moonMove.y}, {translateX: moonMove.x}],
            // opacity: opacity.y,
          },
        ]}
        source={{
          uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069458694267473960/Vector_1.png',
        }}
      />
      {/* <Animated.Image
        style={[styles.star, {}]}
        source={{
          uri: 'https://cdn.discordapp.com/attachments/940059401333645348/1069458751926567002/Vector_2.png',
        }}
      /> */}
      <View style={styles.switch}>
        <Switch
          trackColor={{false: '#27173A', true: '#27173A'}}
          thumbColor="#FFC207"
          ios_backgroundColor="#27173A"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Animated.View style={[styles.switchMoon, {opacity: btnMoon}]} />
      </View>
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
  switchMoon: {
    width: 20,
    height: 20,
    top: 2,
    right: 1,
    borderRadius: 50,
    backgroundColor: '#27173A',
    position: 'absolute',
  },
  sun: {
    position: 'absolute',
    top: 350,
    left: 100,
    width: 100,
    height: 100,
  },
  moon: {
    position: 'absolute',
    top: -95,
    right: 20,
    width: 80,
    height: 95,
  },
  star: {
    position: 'absolute',
    top: 150,
    left: 100,
    width: 120,
    height: 95,
  },
});

export default MoonSun;
