import { Stack } from "expo-router";

export default function RootLayout() {
  // The Stack component manages the navigation stack for the app. 
  // It represent the current screen.
  return (
    
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
    </ Stack>
      
  ); 
}
