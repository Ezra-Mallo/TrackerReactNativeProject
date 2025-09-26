import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.viewIndex}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/login" style={styles.navButton} > Login</Link>
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
      height:20, 
      width:100, 
      backgroundColor:"blue", 
      borderRadius:5, 
      textAlign:"center"
    }
})
