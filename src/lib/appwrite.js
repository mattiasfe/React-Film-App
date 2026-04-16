import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("69e0b55600084c362513");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
