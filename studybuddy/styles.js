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
  },
  form: {
    alignItems: 'center',
    width: '90%',
    height: '60%',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 40,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default styles;