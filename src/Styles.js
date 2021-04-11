import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74c5ff'
  },

  title: {
    fontSize: 30,
    fontWeight: '600'
  },

  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74c5ff',
    height: 40,
    width: 80,
    borderRadius: 5,
    marginTop: 20
  },

  input: {
   borderWidth: 1,
   height: 35,
   width: 180,
   marginTop: 20
  },

  label: {
    fontSize: 20
  },
  errorMenssage: {
    color: 'red'
  }
})

export default styles