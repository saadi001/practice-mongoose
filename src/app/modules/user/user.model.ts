import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

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

  // //  Book schema 
  // const BookSchema = new Schema<IBook>({
  //   title: {type: String, required: true},
  //   author: {type: [String], required: true},
  //   genre: {type: String, required: true},
  //   publicationYear: {type: Number, required: true},
  //   publisher: {
  //     name: {type: String, required: true},
  //     location: {type: String, required: true}
  //   },
  //   reviews: [{user: {type: String, required: true}, comment: {type: String, required: true}}],
  //   rating: {type: Number, required: true},
  //   price: {type: String, required: true}
  // })

   userSchema.static('getAdminUsers',async function getAdminUsers() {
    const admins = await this.find({role:"admin"})
    return admins;
  });

   userSchema.method('fullName', function fullName() {
     return this.name.firstName + ' ' + this.name.lastName;
   });

//    model 
const User = model<IUser, UserModel>('User', userSchema);
// const Book = model<IBook>('Book', BookSchema);


export default User;