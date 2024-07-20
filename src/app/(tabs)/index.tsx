import { THEMES } from '@/styles/themes';
import Principal from './Principal';
import { NativeBaseProvider, StatusBar } from 'native-base';

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={THEMES} >
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Principal />
    </NativeBaseProvider>
  );
}