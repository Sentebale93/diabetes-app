import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";

export default function AuthLayout() {
  // You can replace this with actual auth state management
  const [isAuthenticated] = useState(false);

  // If user is authenticated, redirect to main app
  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
} 