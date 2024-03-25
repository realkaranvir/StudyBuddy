import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    margin: 10,
    width: '90%',
    height: '20%',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default styles;