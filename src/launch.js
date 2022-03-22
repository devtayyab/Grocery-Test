/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Groceryget} from './store/action';
import uuid from 'uuid-random';
export default function Launch({navigation}) {
  const timestamp = new Date().toISOString();
  const dispatch = useDispatch();
  const uuid4 = uuid();
  const session_id = uuid();
  const formdata = {
    delay_detail_page: 0,
    delay_list_view: 0,
    test_case_id: 0,
    uuid: uuid4,
    session_id: session_id,
    timestamp: timestamp,
  };
  const [data, setdata] = useState(formdata);

  const submit = () => {
    dispatch(Groceryget(data));
    navigation.navigate('main');
  };

  const handleChange = (name, value) => {
    setdata(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      }}>
      <TextInput
        value={data.delay_detail_page}
        // defaultValue="hello"
        keyboardType="numeric"
        placeholder="delay_detail_page"
        name="delay_detail_page"
        onChangeText={e => handleChange('delay_detail_page', e)}
        style={styles.input}
        maxLength={2}
      />
      <TextInput
        value={data.delay_list_view}
        keyboardType="numeric"
        placeholder="delay_list_view"
        name="delay_list_view"
        onChangeText={e => handleChange('delay_list_view', e)}
        style={styles.input}
        maxLength={2}
      />
      <TextInput
        value={data.test_case_id}
        keyboardType="numeric"
        name="test_case_id"
        placeholder="test_case_id"
        onChangeText={e => handleChange('test_case_id', e)}
        style={styles.input}
        maxLength={2}
      />

      <Pressable onPress={() => submit()} style={styles.button}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 100,
    margin: 10,
  },
  button: {
    margin: 20,
    padding: 10,
    elevation: 2,
  },
});
