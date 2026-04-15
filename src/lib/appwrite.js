import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("69df7f28002a22cdbbab");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
