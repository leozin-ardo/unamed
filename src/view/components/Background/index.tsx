import {SafeAreaView} from 'react-native';
import useStyle from './styles';

export default ({children}: any) => {
  const style = useStyle();
  return <SafeAreaView style={style.container}>{children}</SafeAreaView>;
};
