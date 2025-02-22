import React from 'react';
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import colors from "../colors";

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Stack
        initialRouteName="welcome/page"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
          },
          headerShadowVisible: false,
          presentation: 'modal',
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="welcome/page"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="login/page"
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen 
          name="register/page"
          options={{
            title: "Create Account",
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
}); 