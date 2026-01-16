import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import CartProvider from './context/cartContext';

import { useColorScheme } from '@/hooks/use-color-scheme';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CartProvider>
        <Stack>
            <Stack.Screen 
            name="home"
            options={{
              headerShown: false,
              
            }}
            />

            <Stack.Screen
            name="cart"
            options={{
              headerTitle: "Meu Carrinho"
            }}
            />
        </Stack>
      </CartProvider>

      {/* Define a cor da barra de status do celular */}
      <StatusBar backgroundColor='#FAFAFA' style="dark" />
    </ThemeProvider>
  );
}
