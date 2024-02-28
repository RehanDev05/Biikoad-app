import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const LikesCounter = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikebtn = () => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      {isLiked === false ? (
        <TouchableOpacity onPress={handleLikebtn} style={styles.likeButton}>
          <Text style={styles.likeButtonText}>Like</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleLikebtn} style={styles.likeButton}>
          <Text style={styles.likeButtonText}>Unlike</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.likesCounter}>{likes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  likeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  likeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  likesCounter: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
});

export default LikesCounter;
