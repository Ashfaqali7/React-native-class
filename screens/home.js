import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation, route}) {
  const [auth, setAuth] = useState(false);
  //   const {email} = route.params;
  console.log(route.params);
  useEffect(() => {
    if (!auth) {
      navigation.navigate('Login');
    }
  }, []);
  return (
    <>
      <View>
        {/* <Text>{email}</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Button
            title="Go to Todo Screen"
            onPress={() => navigation.navigate('Todo')}
            color="blue"
          />
          <Button
            title="Products Screen"
            color="orange"
            onPress={() => navigation.navigate('Product')}
          />
        </View>
      </View>
    </>
  );
}
export default Home;
