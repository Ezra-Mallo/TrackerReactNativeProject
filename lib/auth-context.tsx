import React, { createContext, useContext } from "react";
import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

type AuthContextType = {
    // user: Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>; // Returns error message or null on success
    signIn: (email: string, password: string) => Promise<string | null>; // Returns error message or null on success
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children } : { children: React.ReactNode }) {
    const signUp = async (email: string, password: string) => {
        try{
            await account.create(ID.unique(), email, password);
            await signIn(email, password);
            return null; // Indicate success
        } catch (error) {
            if (error instanceof Error) {
                return error.message; // Return the error message
            }
            
            return "An error occurred during sign up"                       
        }
    };
    const signIn = async (email: string, password: string) => {
        try{
            await account.createEmailPasswordSession(email, password);  
            return null; // Indicate success          
        } catch (error) {
            if (error instanceof Error) {
                return error.message; // Return the error message
            }
            
            return "An error occurred during sign in";          
        }
    };
    
    return (
        // <AuthContext.Provider value={{ user, singUp, signIn }}>
        <AuthContext.Provider value={{ signUp, signIn }}>
            {children} 
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}