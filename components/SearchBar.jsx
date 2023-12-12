import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    // Add your search functionality here
  };

  return (
    <View style={styles.searchBarContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        size={20}
        color="#A0A0A0"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for courses"
        placeholderTextColor="#A0A0A0"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 30,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default SearchBar;
