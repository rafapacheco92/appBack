import React from 'react';
import axios from 'axios';
import Login from '../Login/index'
import Register from '../Register/index'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { useMeuContexto } from '../../contexts/MeuContexto';
import { FeedItem } from '../../components/feedItem';

const { height: heightScreen } = Dimensions.get('screen');

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

let email;
api
  .get('user/find?name=rafael')
  .then(function (response) {
    // aqui acessamos o corpo da resposta:
    console.log(response.data);
    email = response.data[0].email;

    isValid = response.data[0].isValid;
  })
  .catch(function (error) {
    // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
    console.log(error);
  });

export default function Home() {
  const { feedItems } = useMeuContexto();
  let isLogged = false

  return (

    <Register />
    // <View style={styles.container}>
    //   <Text>{email}</Text>
    //   <FlatList
    //     data={feedItems}
    //     renderItem={({ item }) => <FeedItem data={item} />}
    //     snapToInterval={heightScreen}
    //     scrollEventThrottle={200}
    //     decelerationRate={'fast'}
    //     showsVerticalScrollIndicator={false}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
    zIndex: 99,
  },
  labelText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 2,
  },
  indicator: {
    backgroundColor: '#FFF',
    width: 52,
    height: 2,
    alignSelf: 'center',
  },
});
