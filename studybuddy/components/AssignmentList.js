import { React, useState, useEffect } from 'react';
import styles from '../styles.js';
import { addAssignment, getAssignments } from '../database/database.js'
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


const AssignmentList = ({ db }) => {
  const [assignments, setAssignments] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async () => {
    await addAssignment(db, { title, subject, dueDate });
    setTitle('');
    setSubject('');
    setDueDate('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const assignmentsData = await getAssignments(db);
      console.log(assignmentsData);
      setAssignments(assignmentsData);
    };
    fetchData();
  }, [modalVisible]);




  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={assignments}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.subject}</Text>
            <Text style={styles.text}>Due: {item.dueDate}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(true)}>
        <Text>Add Assignment</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
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
            <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
              <Text>Add Assignment</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};




export default AssignmentList;
