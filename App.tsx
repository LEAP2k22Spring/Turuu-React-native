/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Appearance,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const onclick = (title: string) => {
    console.log(title);
  };
  const scheme = Appearance.getColorScheme();
  const [text, onChangeText] = useState('');

  return (
    <KeyboardAvoidingView behavior={'padding'}>
      <ScrollView
        style={{
          backgroundColor: scheme === 'dark' ? '#343458' : '#2d2d31',
        }}>
        <SafeAreaView />
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Text style={{color: '#fff', fontSize: 24, fontWeight: '600'}}>
            Movies
          </Text>
          {list.map((el, i) => {
            const [isEnabled, setIsEnabled] = useState(false);
            const toggleSwitch = () =>
              setIsEnabled(previousState => !previousState);
            return (
              <View
                key={i}
                style={{
                  marginTop: 20,
                  display: 'flex',
                  width: '100%',
                  flexWrap: 'wrap',
                  backgroundColor: isEnabled ? '#626267' : '#535358',
                  borderRadius: 10,
                  flexDirection: 'row',
                  gap: 20,
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 120, borderRadius: 10}}
                    source={{
                      uri: `${el.Poster}`,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#fff', maxWidth: '60%', fontSize: 12}}>
                    {el.Title}
                  </Text>
                  <View>
                    <Text style={{color: '#fff'}}>{el.Type}</Text>
                    <Text style={{color: '#fff'}}>{el.Year}e</Text>
                  </View>
                  <Pressable onPressOut={() => onclick(el.Title)}>
                    <Text>Press Here</Text>
                  </Pressable>

                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    keyboardType={'url'}
                  />
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const list = [
  {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    imdbID: 'tt0076759',
    Type: 'movie',
    Poster:
      'https://kbimages1-a.akamaihd.net/ea6a1631-34e8-4369-b777-cf342521d3e0/1200/1200/False/a-new-hope-star-wars-episode-iv.jpg',
  },
  {
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    imdbID: 'tt0080684',
    Type: 'movie',
    Poster: 'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
  },
  {
    Title: 'Star Wars: Episode VI - Return of the Jedi',
    Year: '1983',
    imdbID: 'tt0086190',
    Type: 'movie',
    Poster: 'https://flxt.tmsimg.com/assets/p8890_p_v8_ae.jpg',
  },
  {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    imdbID: 'tt0076759',
    Type: 'movie',
    Poster:
      'https://kbimages1-a.akamaihd.net/ea6a1631-34e8-4369-b777-cf342521d3e0/1200/1200/False/a-new-hope-star-wars-episode-iv.jpg',
  },
  {
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    imdbID: 'tt0080684',
    Type: 'movie',
    Poster: 'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
  },
  {
    Title: 'Star Wars: Episode VI - Return of the Jedi',
    Year: '1983',
    imdbID: 'tt0086190',
    Type: 'movie',
    Poster: 'https://flxt.tmsimg.com/assets/p8890_p_v8_ae.jpg',
  },
  {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    imdbID: 'tt0076759',
    Type: 'movie',
    Poster:
      'https://kbimages1-a.akamaihd.net/ea6a1631-34e8-4369-b777-cf342521d3e0/1200/1200/False/a-new-hope-star-wars-episode-iv.jpg',
  },
  {
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    imdbID: 'tt0080684',
    Type: 'movie',
    Poster: 'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
  },
  {
    Title: 'Star Wars: Episode VI - Return of the Jedi',
    Year: '1983',
    imdbID: 'tt0086190',
    Type: 'movie',
    Poster: 'https://flxt.tmsimg.com/assets/p8890_p_v8_ae.jpg',
  },
];

export default App;
