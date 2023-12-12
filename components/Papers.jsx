import React from 'react';
import {View, FlatList, Text} from 'react-native';
import PaperListItem from '../components/PaperListItem';
import papersData from './../utils/papers.json';
import {useNavigation} from '@react-navigation/native';
import {VIOLET_COLOR} from '../utils/Consts';

const Papers = () => {
  const navigation = useNavigation();
  const handlePaperPress = paper => {
    navigation.navigate('Units', {paper});
  };

  return (
    <View style={{padding: 6, marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 6,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            color: VIOLET_COLOR,
            fontSize: 19,
          }}>
          Our Courses
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            color: VIOLET_COLOR,
            fontSize: 13,
          }}>
          View All
        </Text>
      </View>
      <FlatList
        data={papersData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <PaperListItem paper={item} onPress={() => handlePaperPress(item)} />
        )}
      />
    </View>
  );
};

export default Papers;
