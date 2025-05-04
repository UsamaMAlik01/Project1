import conf from '../conf/conf';
import {ID, Databases, Storage, Client, Query} from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content,featuredImage, status , userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug,
                {
                title,
                content,
                featuredImage,
                status,
                userId
            })
            
        } catch (error) {
            console.error("Error creating post", error);
            return null;
            
        }
    }

    async updatePost(slug, { title,content,featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug,
                {
                title,
                content,
                featuredImage,
                status}
            )
        } catch (error) {
            console.error("Error updating post", error);
            return null;
            
        }

    }
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug
            )
            return true;
        } catch (error) {
            console.error("Error deleting post", error);
            return false;
            
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug
            );
        } catch (error) {
            console.error("Error getting post", error);
            return null;
        }
        
    }
  async getPosts (queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Error getting posts", error);
      return false;
    }

  }  

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteDatabaseId,
            ID.unique(),
            file);
         } catch (error) {
        console.error("Error uploading file", error);
        return null;     
    }
  }
  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteDatabaseId,
            fileId);
        return true;
    } catch (error) {
        console.error("Error deleting file", error);
        return false;     
    }
  
}

getFilePreview(fileId){
   return this.bucket.getFilePreview(
    conf.appwriteBucketId,
    fileId);  
}


}

const databaseService = new DatabaseService();

export default databaseService