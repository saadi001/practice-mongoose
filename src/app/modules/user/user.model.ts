import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

//  creating schema using interface 
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
     id: { type: String, required: true, unique: true },
     role: {type: String, required: true},
     password: {type: String, required: true},
     name: {
          firstName: {type: String, required: true},
          middleName: {type: String, required: true},
          lastName: {type: String, required: true}
     },
     dateOfBirth: {type: String},
     gender: {type: String, required: true},
     email: {type: String},
     contactNo: {type: String, required: true},
     emergencyContactNo: {type: String, required: true}, 
     presentAddress: {type: String, required: true},
     permanentAddress: {type: String, required: true}
   });

   userSchema.method('fullName', function fullName() {
     return this.name.firstName + ' ' + this.name.lastName;
   });

//    model 
const User = model<IUser, UserModel>('User', userSchema);


export default User;