import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    padding: 15,
    alignItems: 'center',
    height: '100%',
    paddingTop: 80,
    backgroundColor: 'white',

  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  header: {
    fontFamily: 'Baskerville',
    fontSize: 30,
    marginBottom: 20,
  },
  secondHeader: {
    fontFamily: 'Baskerville-Italic',
    fontSize: 27,
    marginBottom: 10,
  },
  input: {
    height: 200,
    marginHorizontal: 15,
    fontSize: 23,
    fontFamily: 'Baskerville',
    color: '#696866',
  },
  imgStyle: {
    height: 260,
    width: 300,
    margin: 20,
    borderRadius: 100,
    opacity: 0.2,
  },

});
