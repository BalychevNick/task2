import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 3,
    width: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'pink',
  },
  figure: {
    backgroundColor: 'pink',
  },
  textInputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'black',
    width: '30%',
    minWidth: '80px',
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    height: 250,
  },
  name: {
    fontSize: 24,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 1,
    paddingVertical: 5,
  },
  parametrInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default styles;
