import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Todo = () => {
  const [text, onChangeText] = useState('');
  const [list, setList] = useState<string[]>([]);
  const save = () => {
    if (text !== '32') {
      setList(prev => [...prev, text]);
      onChangeText('');
    }
  };
  const delelte = (i: number) => {
    setList(list?.filter(e => e !== list[i]));
  };
  console.log(list);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.headline}>Todo List</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableOpacity
            style={styles.enter}
            onPress={() => {
              save();
            }}>
            <Text style={styles.enterText}>Enter</Text>
          </TouchableOpacity>
        </View>
        {list?.map((el, i) => (
          <View key={i} style={styles.list}>
            <Text style={styles.listText}>{el}</Text>
            <TouchableOpacity style={styles.edit}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => delelte(i)}>
              <Text style={styles.editText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headline: {
    width: '100%',
    height: 100,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    width: '65%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  enter: {
    width: '25%',
    height: 40,
    backgroundColor: 'green',
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  enterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  listText: {
    padding: 7,
    borderWidth: 1,
    width: '70%',
    fontSize: 18,
    backgroundColor: '#f1f1f1',
  },
  edit: {
    width: '12%',
    height: 40,
    marginLeft: 10,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  editText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  delete: {
    width: '12%',
    height: 40,
    backgroundColor: 'red',
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Todo;
