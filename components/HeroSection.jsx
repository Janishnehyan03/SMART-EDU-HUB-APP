import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {VIOLET_COLOR} from '../utils/Consts';

const WelcomeCard = ({username}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.username}>Janish Nehyan</Text>
        </View>
        <Ionicons name="person-circle" size={64} color="#5A67D8" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcome: {
    fontSize: 16,
    color: 'gray',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VIOLET_COLOR,
  },
});

export default WelcomeCard;
