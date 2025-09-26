import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
//import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabsLayout() {
  return (    
    <Tabs screenOptions={{tabBarActiveBackgroundColor:"blue", tabBarActiveTintColor:"white"}}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({color}) =>  (<Ionicons name="home-outline" size={24} color={color} />)}} />

      //
      //<Ionicons name="home-sharp" size={24} color="black" />
    </ Tabs>      
  ); 
}
