/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function Main({navigation}) {
  const [allorder, setorder] = useState(false);
  const [orderitem, setordeeritem] = useState([]);
  const [count, setCount] = useState(0);
  const url = 'https://mopos.de/GetOrders';
  const grocery = useSelector(state => state.grocery);
  const murl = `https://mopos.de/GetOrders?delay_page=${Number(
    grocery?.delay_detail_page,
  )}&delay_list=${grocery?.delay_list_view}&test_case=${
    grocery?.test_case_id
  }&uuid=${grocery?.uuid}&session_instance=${grocery?.session_id}&timestamp=${
    grocery?.timestamp
  }`;

  const fetchdata = useCallback(async () => {
    const data = await fetch(murl);
    const results = await data.json();
    console.log(results);
    setordeeritem(results?.orders);

    // console.log(data?.data?.orders)
  }, [murl]);
  const handleclick = v => {
    setorder(false)
    navigation.navigate('Details', {itemId: v});
   
  };
  const isFocused = useIsFocused();
useEffect(()=>{
  setorder(false);
  setTimeout(() => setorder(true), Number(grocery.delay_list_view) * 1000);
},[isFocused])
  useEffect(() => {
    fetchdata();
  }, [navigation]);
   
 
  return (
    <View>
      <Image
        source={require('./banana.jpg')}
        style={{
          width: 200,
          height: 200,
          margin: 30,
          alignSelf: 'center',
        }}
      />

      {allorder ? (
        <ScrollView>
          {orderitem?.map((v, i) => (
            <View>
              <Pressable key={i} onPress={() => handleclick(v.order_id)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                  }}>
                  <View style={{alignItems: 'flex-start', margin: 8}}>
                    <Text style={{color: 'black'}}>{v?.date_time}</Text>
                    <Text style={{color: 'black'}}>{v?.location}</Text>
                  </View>
                  <View style={{margin: 8}}>
                    <Text style={{color: 'black'}}>{v?.total_price}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
}
