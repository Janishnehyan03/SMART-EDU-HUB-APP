// VideosScreen.js
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GREEN_COLOR, VIOLET_COLOR} from '../utils/Consts';

const VideosScreen = ({route}) => {
  const navigation = useNavigation();
  const {paper, unit} = route.params;

  return (
    <View>
      <Text style={styles.title}>{paper.title}</Text>
      <Text
        style={{fontSize: 20, fontWeight: 'bold', margin: 16, marginLeft: 16}}>
        {unit.title}
      </Text>
      <FlatList
        data={unit.videos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={e => {
              navigation.navigate('Learn', {video: item});
            }}
            style={styles.videoCard}>
            <Text style={styles.videoTitle}>{item.title}</Text>
            <Text style={styles.description}>{item?.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: VIOLET_COLOR,
  },
  videoCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: GREEN_COLOR,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 20,
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: '#31304D',
  },
});
export default VideosScreen;
