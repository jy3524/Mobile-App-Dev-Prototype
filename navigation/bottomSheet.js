import React from 'react';
import {StyleSheet, View} from 'react-native';

const BottomSheet = () => {
  return <View style={styles.bottomSheetContainer} />;
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 25,
  },
});

export default BottomSheet;
