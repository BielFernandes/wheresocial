import { Spacing } from '../../styles/index'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: Spacing.Medium,
  },
  commentButton: {
    width: 62,
    height: 62,
    backgroundColor: '#5C80BC',
    position: 'absolute',
    bottom: Spacing.Medium,
    right: Spacing.Medium,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentIcon: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000066',
    position: 'absolute',
  },
  modalContent: {
    width: '90%',
    height: 150,
    backgroundColor: 'white',
    position: 'absolute',
    top: 300,
    borderRadius: Spacing.ExtraSmall,
  },
  closeButton: {
    backgroundColor: 'red',
    width: 100,
  },
  modalText: {
    fontSize: Spacing.Medium,
  },
});