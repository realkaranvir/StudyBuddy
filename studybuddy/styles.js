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
    padding: 10,
    width: '90%',
    height: '20%',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  title: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
  },
  redButton: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'crimson',
    borderRadius: 25,
  },
  greenButton: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'mediumseagreen',
    borderRadius: 25,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  form: {
    alignItems: 'center',
    width: '80%',
    height: 'auto',
    padding: 20,
    borderRadius: 25,
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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    paddingTop: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  itemContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;