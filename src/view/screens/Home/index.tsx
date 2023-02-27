import {useTheme} from 'provider/Theme';
import {SafeAreaView, Text} from 'react-native';

export default () => {
  const {theme, setThemeType} = useTheme();
  
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.background}}>
      <Text>Ola Mundo 1</Text>
    </SafeAreaView>
  );
};
