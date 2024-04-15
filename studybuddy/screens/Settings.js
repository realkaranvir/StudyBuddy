import { React, useState, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles.js'
import { useFocusEffect } from '@react-navigation/native';
import {
  initDB,
  createTables,
  addAssignment,
  getAssignments,
  editAssignment,
  deleteAssignment,
} from '../database/database.js';

const SettingsScreen = () => {
  const [db, setDB] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [assignments, setAssignments] = useState(null);


  useEffect(() => {
    //setup database if it doesn't exist
    const setup = async () => {
      const database = await initDB();
      if (database) {
        createTables(database);
        setDB(database);
        return database;
      }
    };
    setup();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const assignmentsData = await getAssignments(db);
      setAssignments(assignmentsData);
    };
    if (db) {
      //Only fetch data if the database isn't null
      fetchData();
    }
  }, [db, refresh]);

  useFocusEffect(
    //Makes the assignment data refresh
    useCallback(() => {
      // Set refresh to true whenever the screen becomes focused
      setRefresh(true);
      return () => {
        // Clean-up function to reset refresh state when screen loses focus
        setRefresh(false);
      };
    }, [])
  );

  const deleteAllAssignments = async => { {
    for(let i = 0; i < assignments.length; i++) {
      console.log(assignments[i]);
      deleteAssignment(db, assignments[i]);
    }
  }
};





  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.redButton} onPress={() => deleteAllAssignments()}>
        <Text>Delete All Assignments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
