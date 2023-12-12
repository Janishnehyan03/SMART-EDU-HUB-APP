// VideosScreen.js
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LIGHT_ORANGE, VIOLET_COLOR} from '../utils/Consts';
import {useNavigation} from '@react-navigation/native';

const VideosScreen = ({route}) => {
  const navigation = useNavigation();
  const {paper, unit} = route.params;

  return (
    <View>
      <Text style={styles.title}>{paper.title}</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 16}}>
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
            <Text>{item.title}</Text>
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
    backgroundColor: LIGHT_ORANGE,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 20,
  },
});
export default VideosScreen;
