import React, { useState } from 'react';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const fonts = {
  'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
} as const;

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      '(auth)': {
        screens: {
          welcome: 'welcome',
          login: 'login',
          register: 'register',
        },
      },
      '(tabs)': {
        screens: {
          home: 'home',
          profile: 'profile',
        },
      },
    },
  },
};

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync(fonts);
      } catch (error) {
        console.warn('Error loading fonts:', error);
      } finally {
        // Tell the application to render
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack 
        screenOptions={{ 
          headerShown: false,
        }}
        initialRouteName="(auth)"
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
