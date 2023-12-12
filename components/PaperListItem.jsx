import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {VIOLET_COLOR} from '../utils/Consts';

const RootComponent = ({paper, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: paper.image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{paper.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%', // Adjust the width as needed
    flexDirection: 'column',
    paddingBottom: 56,
  },
  imageContainer: {},
  image: {
    height: 135,
    width: '100%',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VIOLET_COLOR,
  },
  description: {
    color: '#777',
    paddingTop: 5,
  },
});

export default RootComponent;
