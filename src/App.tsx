import {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

function App() {
  const right = useRef(new Animated.Value(0)).current;
  const rightDown = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(right, {
        toValue: 250,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, [right]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Animated.View
          style={[styles.circle, {transform: [{translateX: right}]}]}
        />
        <Animated.View
          style={[styles.circle, {transform: [{translateX: rightDown}]}]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    width: 100,
    height: 100,
    borderWidth: 1,
  },
});
