/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

import like from './img/like-svgrepo-com.svg';

function App(): JSX.Element {
  const onclick = () => {
    console.log('hello');
  };
  return (
    <ScrollView
      style={{
        backgroundColor: '#2d2d31',
      }}>
      <SafeAreaView />
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: 600}}>
          Movies
        </Text>
        {list.map((el, i) => (
          <View
            key={i}
            style={{
              marginTop: 20,
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
              backgroundColor: '#535358',
              borderRadius: 10,
              flexDirection: 'row',
              gap: 20,
            }}>
            {/* <Button onPress={onclick()} title=""> */}
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
                <Text style={{color: '#fff'}}>{el.Year}</Text>
              </View>
            </View>
            {/* </Button> */}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

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
