import { SafeAreaView } from 'react-native-safe-area-context';

import Juego from './components/Juego';
import { JuegoProvider } from './context/JuegoContext';

export default function App() {
  return (
    <JuegoProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Juego />
      </SafeAreaView>
    </JuegoProvider>
  );
}