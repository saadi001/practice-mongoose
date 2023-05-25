import { HydratedDocument, Model } from "mongoose";

export interface IUser {
     id: string;
     role: "student";
     password: string;
     name: {
          firstName: string,
          middleName: string,
          lastName: string
     };
     dateOfBirth?: string;
     gender: "male" | "female";
     email?: string;
     contactNo: string;
     emergencyContactNo: string; 
     presentAddress: string;
     permanentAddress: string;
 }

// static 
 export interface UserModel extends Model<IUser, {}, IUserMethods> {
     getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
   }


//  interface 
 export interface IUserMethods {
     fullName(): string;
   }

// // For assignment practice. IBook interface 

// interface IReviews {
//   user: string;
//   comment: string;
// }

// export interface IBook {
//   title: string;
//   author: string[];
//   genre: string;
//   publicationYear: number;
//   publisher: {
//     name: string,
//     location: string
//   };
//   reviews: IReviews[];
//   rating: number;
//   price: string
// }