import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    margin: 10,
  },
  image: {
    height: 330,
    width: '100%',
  },
  category: {
    fontSize: 32,
    fontWeight: '500',
  },
  mainTitle: {
    fontFamily: 'Baskerville-Italic',
    fontSize: 32,
    color: '#787575',
  },
  box: {
    paddingVertical: 8,
    paddingHorizontal: 5,
  },

  addressBox: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c7c7',
  },
  section1: {
    paddingHorizontal: 5,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,

  },
  regularText: {
    fontSize: 14,
    color: '#787575',
  },
  regularBold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 15,
    color: '#787575',
  },
  descriptionBox: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c9c7c7',
  },

  descriptionTitle: {
    fontFamily: 'Baskerville',
    fontSize: 21,
    marginBottom: 10,
  },

  descriptionText: {
    fontFamily: 'Baskerville',
    fontSize: 21,
    color: '#787575',
  },
  updateTitle: {
    fontSize: 28,
    fontWeight: '500',
  },
  plusButton: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  }
});
