import { Account, Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // Your project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!); // Your platform ID
    

export const account = new Account (client);
export const databases = new Databases (client);

export const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DB_ID!;
export const HABITS_TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_HABITS_TABLE_ID!;  

