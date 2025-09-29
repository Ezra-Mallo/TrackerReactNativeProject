import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen(){
    const [isSignUp, setIsSignUp] = useState<boolean>(false); // false means Sign In mode, true means Sign Up mode
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");
    const theme = useTheme();
    const router = useRouter();

    
    const {signIn, signUp} = useAuth();
    
    const handleAuth = async() => {
        // Handle authentication logic here  
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }     
        
        if (password.length < 6)  {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setError(null); // Clear previous errors if any

        // Call signIn or signUp based on the mode
        if(isSignUp){
            const error = await signUp(email, password)
            if (error) {
                setError(error);
                return;
            }
        } else {
            const error = await signIn(email, password)
            if (error) { 
                setError(error);
                return;
            }

            router.replace("/"); // Navigate to the main app screen on successful sign-in
        }
    };


    const handleSwitchMode = () => {
        setIsSignUp((prev) => !prev);
    };

    

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}>
                
                <View   style={styles.content}>
                    <Text style={styles.title} > {isSignUp ? "Create Account": "Welcome Back"}</Text>                     
                    <TextInput 
                        label="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="example@gmail.com"
                        mode="outlined"     
                        style={styles.inputText}
                        onChangeText={setEmail}  // Update email state
                        value={email}            // Bind email state to input value
                        placeholderTextColor="blue"        
                         >
                    </TextInput>              
                       
                    <TextInput 
                        label="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}                        
                        placeholder="******"
                        mode="outlined"    
                        placeholderTextColor="blue"
                        style={styles.inputText}
                        onChangeText={setPassword}  // Update password state
                        value={password}            // Bind password state to input value       
                         >
                    </TextInput>
                    
                    {error && <Text style={{color: theme.colors.error }}> {error} </Text>}
                    {/* {error ? <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text> : null} */}

                    <Button mode="contained" style={styles.button} onPress={handleAuth} >  
                        {isSignUp ? "Sign Up": "Sign In"} 
                    </Button>
                    
                    <Button mode="text" onPress={handleSwitchMode} style={styles.switchModeButton}>   
                        {isSignUp 
                        ? "Already have an Account? Sign In"
                        : "Don't have an account? Sign up"}  
                    </Button>
                </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,        
        backgroundColor: "#f5f5f5"
    },
    content: { 
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: { 
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,           
    },    
    inputText: { 
        marginBottom: 16,           
    },  
    button: { 
        marginTop: 8,           
    },  
    switchModeButton: { 
        marginBottom: 6,           
    },  
});