import { Account, Client } from "react-native-appwrite";

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // Your project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!); // Your platform ID
    

export const account = new Account (client);

