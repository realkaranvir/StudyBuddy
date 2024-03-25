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
  {key: 'HW1'},
  {key: 'HW2'}
];

const AssignmentList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList style={styles.listContainer}
        data={data} renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
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
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};




export default AssignmentList;
