import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChalkboardTeacher,
  faBook,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';
import {VIOLET_COLOR, SECONDARY_COLOR} from '../utils/Consts'; // Make sure to define your VIOLET_COLOR

const Features = ({navigation}) => {
  const navigateToScreen = screenName => {
    // Navigate to the respective screen when a card is pressed
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Live Classes Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigateToScreen('LiveClassesScreen')}>
        <View style={[styles.circle, {backgroundColor: SECONDARY_COLOR}]}>
          <FontAwesomeIcon icon={faChalkboardTeacher} size={30} color="#fff" />
        </View>
        <Text style={styles.cardText}>Live Classes</Text>
      </TouchableOpacity>

      {/* Practice Tests Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigateToScreen('PracticeTestsScreen')}>
        <View style={[styles.circle, {backgroundColor: SECONDARY_COLOR}]}>
          <FontAwesomeIcon icon={faBook} size={30} color="#fff" />
        </View>
        <Text style={styles.cardText}>Practice Tests</Text>
      </TouchableOpacity>

      {/* Mock Tests Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigateToScreen('MockTestsScreen')}>
        <View style={[styles.circle, {backgroundColor: SECONDARY_COLOR}]}>
          <FontAwesomeIcon icon={faClipboard} size={30} color="#fff" />
        </View>
        <Text style={styles.cardText}>Mock Tests</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: VIOLET_COLOR,
  },
});

export default Features;
