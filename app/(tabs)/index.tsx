import { useAuth } from "@/lib/auth-context";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Index() {
  const {signOut} = useAuth();

  return (
    <View style={styles.viewIndex}>      
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button mode="text"  onPress={signOut} icon={"logout"}>      
       {" "} Sign Out{" "}
      </Button>      
    </View>
  );
}

const styles = StyleSheet.create({
    viewIndex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
    navButton: {
      height:45, 
      width:100,         
      textAlign:"center"
    }
})


// import { useAuth } from "@/lib/auth-context";
// import { StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-paper";

// export default function Index() {
//   const { signOut, user } = useAuth();

//   // ADD THIS FUNCTION
//   const handleSignOut = async () => {
//     console.log("🔄 Sign out button pressed");
//     try {
//       await signOut();
//       console.log("✅ Sign out successful");
//     } catch (error) {
//       console.log("❌ Sign out error:", error);
//     }
//   };

//   return (
//     <View style={styles.viewIndex}>
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//       <Text>User: {user ? "Logged in" : "Not logged in"}</Text>
//       {/* CHANGE THIS BUTTON */}
//       <Button 
//         mode="contained" 
//         onPress={handleSignOut}  // Changed from signOut to handleSignOut
//         icon="logout"
//         style={styles.button}
//       >      
//         Sign Out
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   viewIndex: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
//   button: {
//     marginTop: 20,
//   }
// });