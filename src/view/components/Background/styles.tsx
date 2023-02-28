import {useTheme} from '@provider/theme';
import {StyleSheet} from 'react-native';

export default () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: 25,
      paddingVertical: 50   
    },
  });
};
