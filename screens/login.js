import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = () => {
    navigation.navigate('Home', {email: email});
  };
  return (
    <>
      <View>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput placeholder="Email" onChangeText={e => setEmail(e)} />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            onChangeText={e => setPassword(e)}
          />
        </View>
        <View>
          <Button title="Login" onPress={loginUser} color="orange" />
        </View>
      </View>
    </>
  );
}
export default Login;
