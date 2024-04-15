import { React, useState, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles.js';
import {
  initDB,
  createTables,
  getAssignments
} from '../database/database.js';

const StudyScreen = () => {
  const [db, setDB] = useState(null);
  const [assignments, setAssignments] = useState(null);
  const [interleave, setInterleave] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
      assignmentsData.sort((a, b) => {
        // Convert the dueDate strings to Date objects for comparison
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        // Compare the dates
        return dateA - dateB;
      });
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

  const modifyInterleave = (item) => {
    // Check if the item already exists in the interleave array
    const exists = interleave.some(existingItem => existingItem.id === item.id);
  
    if (!exists) {
      // Add the item to the interleave if it doesn't exist
      setInterleave(prevInterleave => [...prevInterleave, item]);
    } else {
      // Remove the item from the interleave if it already exists
      setInterleave(prevInterleave => prevInterleave.filter(existingItem => existingItem.id !== item.id));
    }
  };
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Assignments For Interleave</Text>
      <FlatList
        data={assignments}
        style={styles.listContainer}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => modifyInterleave(item)}>
            {/* If the item has been added to the interleave, change color of touchable opacity*/}
            <View style={[{margin: '0.5%'}, 
            interleave.some(existingItem => existingItem.id === item.id) ? 
            ({ backgroundColor: 'crimson'}) : ({backgroundColor: '#222'})]}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.subject}</Text>
              
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.horizontalContainer}>
        <TouchableOpacity style={styles.redCircleButton}>
            <Text>Start Interleave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenCircleButton}>
            <Text>Start Pomodoro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudyScreen;
