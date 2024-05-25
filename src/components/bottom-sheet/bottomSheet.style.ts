import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../assets/core.data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    zIndex: 999,
  },
  backdrop: {backgroundColor: '#131517b3', flex: 1},
  backdropHandler: {flex: 1},
  viewContainer: {
    height: 'auto',
    minHeight: '30%',
    backgroundColor: 'white',
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    paddingTop: 14,
  },
});
export default styles;
