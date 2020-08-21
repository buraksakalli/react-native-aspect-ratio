import { Dimensions } from 'react-native';

class Screen {
  static getDimension = () => {
    return {
      height: Dimensions.get('window').height + 1,
      width: Dimensions.get('window').width + 1,
    };
  };
  
  static setDimension = (value, type, { x, y }) => {
    const height = Dimensions.get('window').height + 1;
    const width = Dimensions.get('window').width + 1;

    switch (type) {
      case 'w':
        return ((value * 100) / x) / 100 * width;
      case 'h':
        return ((value * 100) / y) / 100 * height;
    }
  };
}

export default Screen;