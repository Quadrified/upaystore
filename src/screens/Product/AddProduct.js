import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

const AddProduct = props => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        <Text>AddProduct</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default AddProduct;
