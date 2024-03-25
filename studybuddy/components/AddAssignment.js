import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

const AddAssignment = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Subject:', subject);
    console.log('Due Date:', dueDate);
    setTitle('');
    setSubject('');
    setDueDate('');
  };

  return (
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
  );
};

export default AddAssignment;
