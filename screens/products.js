import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function Products() {
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <View>
        <Text>Product</Text>
      </View>
    </>
  );
}

export default Products;
