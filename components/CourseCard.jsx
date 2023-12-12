import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {LIGHT_BLUE, VIOLET_COLOR} from '../utils/Consts';

const CourseCard = ({course}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.thumbnail}
          width={100}
          height={100}
          source={{uri: course.thumbnail}}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{course.title}</Text>

        <Text style={styles.description}>
          {course.description.substring(0, 100)}...
        </Text>
        <Text style={styles.lessons}>{course.videos.length} lessons</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    // borderBottomColor: '#EAEAEA',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#fff',
    borderRadius: 20,
  },
  thumbnail: {
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: VIOLET_COLOR,
    textTransform: 'uppercase',
  },
  description: {
    color: '#A9A9A9',
    marginBottom: 8,
  },
  lessons: {
    fontWeight: 'bold',
    color: LIGHT_BLUE,
  },
});

export default CourseCard;
