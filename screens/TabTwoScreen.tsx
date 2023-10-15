import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Favorites = ({ likedSounds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <ScrollView style={styles.scrollView}>
        {likedSounds.map(sample => (
          <View key={sample.id} style={styles.box}>
            <Text style={styles.btnText}>{sample.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  title: {
    alignItems: 'center',
    top: 40,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  box: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  btnText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    maxWidth: 100,
    paddingTop: 5,
  },
});

export default Favorites;
