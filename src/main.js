/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ActivityIndicator, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import axios from 'axios';
import {useSelector} from 'react-redux';
export default function Main({navigation}) {
  const [allorder, setorder] = useState(false);
  const [orderitem, setordeeritem] = useState([]);
  const url = 'http://mopos.de/GetOrders';
  const grocery = useSelector(state => state.grocery);
  const murl = `http://mopos.de/GetOrders?delay_page=${Number(
    grocery?.delay_detail_page,
  )}&delay_list=${grocery?.delay_list_view}&test_case=${
    grocery?.test_case_id
  }&uuid=${grocery?.uuid}&session_instance=${grocery?.session_id}&timestamp=${
    grocery?.timestamp
  }`;

  const fetchdata = async () => {
    const data = await axios.get(murl);

    // console.log(data?.data?.orders)
    setordeeritem(data?.data?.orders);
  };
  const handleclick = v => {
    navigation.navigate('Details', {itemId: v});
  };
  useEffect(() => {
    fetchdata();
    setTimeout(() => {
      setorder(true);
    }, Number(grocery.delay_detail_page));
  }, []);
  return (
    <View>
      <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbanana&psig=AOvVaw2bdmDDxRZawcVeWhiNt_Yk&ust=1648066922395000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDH3e7F2vYCFQAAAAAdAAAAABAD", width:200,height:200 }}/>
      {allorder ? (
        <ScrollView>
          {console.log(orderitem)}
          {orderitem?.map((v, i) => {
            return (
              <Pressable key={i} onPress={() => handleclick(v.order_id)}>
                <View style={{  display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom:14}}>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: 'black'}}>{v?.date_time}</Text>
                    <Text style={{color: 'black'}}>{v?.location}</Text>
                  </View>
                  <View>
                    <Text style={{color: 'black'}}>{v?.total_price}</Text>
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
      <Text>Hello world</Text>
    </View>
  );
}

