import { DATABASE_ID, databases, HABITS_TABLE_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { ID } from "appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";
 
const FREQUENCIES=["daily", "weekly", "monthly"];
type Frequency = (typeof FREQUENCIES)[number];

export default function AddHabitScreen() {

    // const [user_id, setUserID] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] =  useState<string>("");
    const [frequency, setFrequency] =  useState<Frequency>("daily");
    const [error, setError] =  useState<string>("");
    const {user} = useAuth();
    const router = useRouter();
    const theme = useTheme();


    // const [streak_count, setStreak_count] = useState<string>("");
    // const [last_completed, setLast_completed] =  useState<string>("");
    // const [created_at, setCreated_at] =  useState<string>("");

    const handleSubmit = async() => {
        if (!user) return;

        try{
            await databases.createDocument(
                DATABASE_ID, 
                HABITS_TABLE_ID, 
                ID.unique(),
                {
                    user_id: user.$id,
                    title,
                    description,
                    frequency,
                    streak_count: 0,
                    last_completed: new Date(), //.toISOString(),
                    created_at: new Date().toISOString(),
                }
            );

            router.back();

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message); // Return the error message
                return;
            }
            setError("An error occurred while adding the habit");
            return
        }
    };
 


    return (
        <View style={styles.container} >
            <TextInput label="Title" mode="outlined" onChangeText={setTitle} style={styles.inputText} /> 
            <TextInput label="Description" mode="outlined" onChangeText={setDescription} style={styles.inputText} /> 
            <View style={styles.frequencyContainer}>
                <SegmentedButtons 
                    value={frequency}
                    onValueChange={(value) => setFrequency(value as Frequency)}
                    buttons={FREQUENCIES.map((freq) => ({
                        value: freq,
                        label: freq.charAt(0).toUpperCase() + freq.slice(1).toLowerCase(),
                    }))}
            /> 
            </View>

            {/* <TextInput label="Streak_count" mode="outlined" onChangeText={setStreak_count}/> 
            <TextInput label="Last_completed" mode="outlined" onChangeText={setLast_completed}  /> 
            <TextInput label="Created_at" mode="outlined" onChangeText={setCreated_at} />  */}
                                                                           
            <Button mode="contained" onPress={handleSubmit} disabled={!title || !description}  style={styles.button} > Add Habit </Button>
            {/* this displays error  */}
            {error && <Text style={{color: theme.colors.error }}> {error} </Text>}
        </View>
    );

}




const styles = StyleSheet.create({
    container: { 
        flex: 1,        
        padding: 16,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
    },
    
    inputText: { 
        marginBottom: 16,           
    }, 
    
    frequencyContainer: { 
        marginBottom: 24,         
    },
    
    segmentedButton: { 
        marginBottom: 8,         
    },
    
    button: { 
        marginTop: 8,           
    } 
});