import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Tabs } from "expo-router";
//import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabsLayout() {
  return (    
    <Tabs screenOptions={{tabBarActiveBackgroundColor:"blue", tabBarActiveTintColor:"white"}}>
      <Tabs.Screen name="index" options={{ title: "Home", 
          tabBarIcon: ({color, focused}) =>  {
            return focused ? (
                 <Ionicons name="home-outline" size={24} color={color} />
            ) : (
                <Ionicons name="home-sharp" size={24} color="black" />
            );
          },
        }}         
        />      
      <Tabs.Screen name="login" options={{ title: "Login", 
          tabBarIcon: ({color, focused}) =>  {
            return focused ? (
                 <AntDesign name="login" size={24} color={color} />
            ) : (
                <AntDesign name="login" size={24} color="black" />
            );
          },
        }} 
      />      
    </Tabs>      
  ); 
}
