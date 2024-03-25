import { React, useState } from 'react';
import styles from '../styles.js';
import AddAssignment from './AddAssignment.js';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

const data = [
  {
    Title: 'HW1',
    Subject: 'Physics',
    DueDate: 'Tomorrow'
  },
  {
    Title: 'HW2',
    Subject: 'Physics',
    DueDate: 'Thursday'
  },
  {
    Title: 'HW3',
    Subject: 'Physics',
    DueDate: 'Next Tuesday'
  },
  {
    Title: 'HW4',
    Subject: 'Physics',
    DueDate: 'Next Thursday'
  },
  {
    Title: 'HW5',
    Subject: 'Physics',
    DueDate: 'Tomorrow'
  },
  {
    Title: 'HW6',
    Subject: 'Physics',
    DueDate: 'Thursday'
  },
  {
    Title: 'HW7',
    Subject: 'Physics',
    DueDate: 'Next Tuesday'
  },
  {
    Title: 'HW8',
    Subject: 'Physics',
    DueDate: 'Next Thursday'
  },
];

const AssignmentList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.text}>{item.Subject}</Text>
            <Text style={styles.text}>Due: {item.DueDate}</Text>
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
          <AddAssignment/>
          <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};




export default AssignmentList;
