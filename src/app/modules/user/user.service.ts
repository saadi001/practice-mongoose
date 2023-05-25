import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async(payload: IUser): Promise<IUser> =>{
     const user = new User(payload)
      await user.save();
      console.log(user.fullName());
      return user;
}

export const getUsersFromDb = async():Promise<IUser[]> =>{
     const users = await User.find()
     return users;
}

export const getUserByIdFromDb = async(payload:string):Promise<IUser | null> =>{
     const user = await User.findOne({id:payload}, {name:1, gender: 1})
     return user;
}

export const getAdminUsersFromDb = async():Promise<IUser> =>{
     const admins = await User.getAdminUsers()
     return admins;
}
