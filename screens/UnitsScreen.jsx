import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { VIOLET_COLOR } from '../utils/Consts';

const UnitScreen = ({route, navigation}) => {
  const {paper} = route.params;

  const courseDetails = {
    videoUrl:
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
    title: paper?.title,
    description:
      'Course description goes here. This is a sample description for the course.',
    price: '₹9999',
    includes: ['Video Classes', 'Mock Test', 'Study Materials', 'Live Classes'],
    subjects: 'Example Title',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Video */}
      <View style={styles.videoContainer}>
        <Image source={{uri: paper.image}} style={styles.video} />
      </View>

      {/* Title and Buy Now Button */}
      <View style={{padding: 8}}>
        <View style={styles.titleContainer}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.courseTitle}>{courseDetails.title}</Text>
            <TouchableOpacity
              style={styles.buyNowButton}
              onPress={() => {
                /* Handle buy now button press */
              }}>
              <FontAwesomeIcon icon={faShoppingCart} size={20} color="#fff" />
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{paper.description}</Text>

        {/* Price */}
        <Text style={styles.price}>{paper.price}</Text>

        {/* Course Includes */}
        {/* <Text style={styles.sectionTitle}>Course Includes</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon color={VIOLET_COLOR} icon={faVideo} size={20} />
            <Text style={styles.iconText}>Video Classes</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon color={VIOLET_COLOR} icon={faFile} size={20} />
            <Text style={styles.iconText}>Mock Tests</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon color={VIOLET_COLOR} icon={faBook} size={20} />
            <Text style={styles.iconText}>Study Materials</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon color={VIOLET_COLOR} icon={faCircle} size={20} />
            <Text style={styles.iconText}>Live Classes</Text>
          </View>
        </View> */}

        {/* Course Subjects */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Course Subjects</Text>
          {paper.units.map((item, key) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Videos', {paper, unit: item});
              }}
              style={styles.unitCard}
              key={key}>
              <Text style={styles.unitText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  videoContainer: {
    height: 200,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    marginTop: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: VIOLET_COLOR,
  },
  buyNowButton: {
    flexDirection: 'row',
    backgroundColor: VIOLET_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buyNowText: {
    marginLeft: 5,
    color: '#fff',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
  },
  price: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: VIOLET_COLOR,
  },
  sectionContainer: {},
  unitCard: {
    backgroundColor: VIOLET_COLOR,
    padding: 13,
    marginVertical: 2,
    borderRadius: 20,
  },
  unitText: {
    color: '#fff',
    fontWeight: '800',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: VIOLET_COLOR,
    marginTop: 19,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    color: '#fff',
    padding: 5,
  },
  iconText: {
    marginLeft: 8,
    fontSize: 13,
    color: VIOLET_COLOR,
  },
  subjects: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default UnitScreen;
