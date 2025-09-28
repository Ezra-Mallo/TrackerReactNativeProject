import { AuthProvider } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard({children} :{children : React.ReactNode}){
  const router = useRouter();
  const segments = useSegments();
  const isAuth = false;
  
  useEffect(() => {
    // This small timeout ensures navigation is mounted
    const timer = setTimeout(() => {
      const inAuthPage = segments[0] === "auth";
      
      // Only redirect if not authenticated AND not already on auth page
      if (!isAuth && !inAuthPage) {
        router.replace("/auth");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuth, segments, router]); // Added dependencies
  
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider> 
      <RouteGuard>
          <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown:false }} />                        
              <Stack.Screen name="auth" options={{ headerShown: false }} />
          </Stack>
      </RouteGuard>
    </AuthProvider>
  ); 
}