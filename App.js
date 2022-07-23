import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import logo from './assets/logo.png';
import back from './assets/back.jpg';
import styling from './style';

function App() {
  const [text, setText] = useState();
  const [li, setLi] = useState([]);

  const add = () => {
    setLi([...li, text]);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            marginBottom: 5,
          }}
          source={back}>
          <View style={styles.header}>
            <Text style={styles.heading}>
              <Image source={logo} style={styles.logo} />
              Todo App
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 6}}>
          <ScrollView>
            {li.map((e, i) => (
              <Text style={styles.heading} key={i}>
                {e}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.inpBox, {flex: 1}]}>
          <TextInput
            style={styles.inp}
            onChangeText={e => setText(e)}
            placeholder="Enter Text"
          />
          <TouchableOpacity onPress={add} style={styles.btn}>
            <Text style={{fontSize: 18, color: '#fff', textAlign: 'center'}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create(styling);
export default App;
