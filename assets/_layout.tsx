import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({children} :{children : React.ReactNode}){
  const router = useRouter();
  const isAuth = false;
  
  useEffect(() => {
    // This small timeout ensures navigation is mounted
    const timer = setTimeout(() => {
      if (!isAuth) {
        router.replace("/auth");
      }
    }, 100);

    return () => clearTimeout(timer); // Cleanup the Timeout
  }, []); // This Empties the dependency array to run only once
  
  return <>{children}</>;
}

export default function RootLayout() {
  // The Stack component manages the navigation stack for the app. It represent the current screen.
  return (
    <RouteGuard>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown:false }} />                        
            <Stack.Screen name="auth" options={{ headerShown: false }} />
        </ Stack>
    </RouteGuard>
      
  ); 
}
