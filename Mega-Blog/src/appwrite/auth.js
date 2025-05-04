import conf from '../conf/conf';
import {ID, Account, Client} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
     .setEndpoint(conf.appwriteUrl)
     .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client);
    }

    async createAccount({email, password, name})
    {
        try{
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                //call another method 
                return this.login(email,password)
            }
            else{
                return userAccount
            }
        }
        catch(error){
                 throw console.error('Error creating account:', error);
                 
        }
    }
    async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw console.error('Error logging in:', error);
            
        }
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            if (currentUser != null) {
                return currentUser;
            }else{
                return null;
            }
        
        } catch (error) {
            throw console.error('Error logging in:', error);
            
        }
        
    }
    async logout() {
        try{
            await this.account.deleteSessions()
        }
        catch(error){
            throw console.error('Error logging out:', error);
            
        }
    }

}

const authService = new AuthService();

export default authService;