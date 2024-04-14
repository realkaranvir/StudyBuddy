import {React, useState, useEffect} from 'react';
import styles from '../styles.js';
import {
  initDB,
  createTables,
  addAssignment,
  getAssignments,
  editAssignment,
  deleteAssignment,
} from '../database/database.js';

import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState('');
  const [addAssignmentVisible, setAddAssignmentVisible] = useState(false);
  const [editAssignmentVisible, setEditAssignmentVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [currentAssignment, setCurrentAssignment] = useState('');
  const [db, setDB] = useState(null);

  useEffect(() => {
    //setup database if doesn't exist
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
  }, [addAssignmentVisible, editAssignmentVisible, db]);

  const handleSubmit = async mode => {
    if (mode === 0) {
      await addAssignment(db, {title, subject, dueDate});
    } else if (mode === 1) {
      currentAssignment.title = title;
      currentAssignment.subject = subject;
      currentAssignment.dueDate = dueDate;
      await editAssignment(db, currentAssignment);
      setEditAssignmentVisible(false);
    } else if (mode === 2) {
      await deleteAssignment(db, currentAssignment);
      setEditAssignmentVisible(false);
    }
    setTitle('');
    setSubject('');
    setDueDate('');
  };

  const modifyAssignment = assignment => {
    setEditAssignmentVisible(true);
    setCurrentAssignment(assignment);
    setTitle(assignment.title);
    setSubject(assignment.subject);
    setDueDate(assignment.dueDate);
  };

  const closeEditModal = () => {
    setEditAssignmentVisible(false);
    setTitle('');
    setSubject('');
    setDueDate('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={assignments}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => modifyAssignment(item)}>
            <View style={{margin: '0.5%'}} backgroundColor={'white'}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.subject}</Text>
              <Text style={styles.text}>Due: {item.dueDate}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setAddAssignmentVisible(true)}>
        <Text>Add Assignment</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={addAssignmentVisible}
        onRequestClose={() => setAddAssignmentVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.form}>
            <Text style={styles.label}>Assignment Title:</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={text => setTitle(text)}
              placeholder="Enter Assignment Title"
            />
            <Text style={styles.label}>Subject:</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Enter Subject"
            />
            <Text style={styles.label}>Due Date:</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              value={dueDate}
              onChangeText={text => setDueDate(text)}
              placeholder="Enter Due Date"
              multiline
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit(0)}>
              <Text>Add Assignment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.greenButton}
              onPress={() => setAddAssignmentVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="fade"
        visible={editAssignmentVisible}
        onRequestClose={() => closeEditModal()}>
        <View style={styles.modal}>
          <View style={styles.form}>
            <Text style={styles.label}>Assignment Title:</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={text => setTitle(text)}
              placeholder="Enter Assignment Title"
            />
            <Text style={styles.label}>Subject:</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Enter Subject"
            />
            <Text style={styles.label}>Due Date:</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              value={dueDate}
              onChangeText={text => setDueDate(text)}
              placeholder="Enter Due Date"
              multiline
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit(1)}>
              <Text>Save Assignment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.redButton}
              onPress={() => handleSubmit(2)}>
              <Text>Delete Assignment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.greenButton}
              onPress={() => closeEditModal()}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AssignmentList;
