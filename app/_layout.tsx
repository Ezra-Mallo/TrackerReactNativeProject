import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard({children} :{children : React.ReactNode}){
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const segments = useSegments();
  // const isAuth = false;
  // console.log('🔍 AUTH STATUS - loading:', isLoadingUser, 'user:', user ? 'exists' : 'null', 'segment:', segments[0]);
  
  useEffect(() => {
    // This small timeout ensures navigation is mounted
    const timer = setTimeout(() => {
      const inAuthPage = segments[0] === "auth";
      
      // Only redirect if not  authenticated AND not already on auth page
      if (!user && !inAuthPage && !isLoadingUser) {
        router.replace("/auth");
      } else if( user && inAuthPage && isLoadingUser) {
        router.replace("/");
      }
    }, 100); 

    return () => clearTimeout(timer);
  }, [user, segments, router]); // Added dependencies
   
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider> 
      <RouteGuard>
          <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown:false }} />                        
              {/* <Stack.Screen name="auth" options={{ headerShown: false }} /> */}
          </Stack>
      </RouteGuard>
    </AuthProvider>
  ); 
}