import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Todo() {
  const [text, setText] = useState('');
  const [li, setLi] = useState([]);
  const [indexNum, setIndexNum] = useState();

  const add = () => {
    if (indexNum) {
      li[indexNum] = text;
      setLi([...li]);
    } else {
      setLi([...li, text]);
    }
  };
  const edit = (e, ind) => {
    setIndexNum(ind);
    setText(e);
  };
  const del = i => {
    li.splice(i, 1);
    setLi([...li]);
  };
  return (
    <>
      <View>
        <View>
          {li.map((e, i) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 3, fontSize: 20}}>{e}</Text>
              <TouchableOpacity onPress={() => edit(e, i)} style={{flex: 1}}>
                <Text>
                  <Icon name="shopping-cart" size={30} color="black" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => del(i)} style={{flex: 1}}>
                <Text>
                  <Icon name="delete" size={30} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <TextInput
            style={{
              width: '100%',
              fontSize: 20,
              borderWidth: 2,
              borderColor: 'grey',
            }}
            value={text}
            placeholder="Text"
            onChangeText={e => setText(e)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={add}>
            <Text style={{color: 'white', fontSize: 20}}>
              <Icon name="add" color="white" size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Todo;
