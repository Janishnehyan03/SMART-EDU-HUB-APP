import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const LearnScreen = ({route}) => {
  const {video} = route.params;

  const getYoutubeVideoId = url => {
    // Extract the video ID from the URL
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      // Invalid YouTube URL
      return '';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <YoutubePlayer
        height={250}
        videoId={getYoutubeVideoId(video.videoUrl)}
        play={true}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>{video.description}</Text>

        <Text style={styles.sectionTitle}>Prescribed Notes:</Text>
        <Text style={styles.notes}>{video?.prescribedNotes}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notes: {
    fontSize: 16,
    marginBottom: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  averageRatingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#777',
  },
  reviews: {
    fontSize: 16,
    color: '#555',
  },
});

export default LearnScreen;
