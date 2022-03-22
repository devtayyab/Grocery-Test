/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
export default function List({route, navigation}) {
  const {itemId} = route.params;
  console.log(itemId);
  const [state, setState] = useState(false);
  const [details, setdetails] = useState();
  const grocery = useSelector(state => state.grocery);
  console.log(grocery);
  const url = 'http://mopos.de/GetOrderDetails?order_id=5';
  const datas = async () => {
    const long = `http://mopos.de/GetOrderDetails?order_id =${itemId}&delay_page=${grocery?.delay_detail_page}&delay_list=${grocery?.delay_list_view}&test_case=${grocery?.test_case_id}&uuid=${grocery?.uuid}&session_instance=${grocery?.session_id}&timestamp=${grocery?.timestamp}`;
    const data = await axios.get(long);
    setdetails(data?.data?.order_items);
  };

  useEffect(() => {
    datas();
    setTimeout(function () {
      setState(true);
    }, Number(grocery.delay_detail_page));
  }, []);

  return (
    <View>
      {state ? (
        <ScrollView>
          {console.log(details)}
          {details?.map((v, i) => {
            return (
              <Pressable key={i}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                  }}>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: 'black'}}>Item_name</Text>
                    <Text style={{color: 'black'}}>{v?.item_name}</Text>
                  </View>
                  <View>
                    <Text style={{color: 'black'}}>Item_price</Text>
                    <Text style={{color: 'black'}}>{v?.item_price}</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      ) : (
        <View>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
