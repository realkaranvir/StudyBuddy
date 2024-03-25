import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AssignmentList from '../components/AssignmentList.js'

const AssignmentsScreen = () => {
  return (
    <View style={styles.container}>
        <AssignmentList></AssignmentList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
  },
});

export default AssignmentsScreen;
