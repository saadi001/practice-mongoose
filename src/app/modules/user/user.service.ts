import User from "./user.model";

export const createUserToDb = async() =>{
     const user = await new User({
          id: "kfdsdf3jhufttu",
          role: "student",
          password: "sdfskdlf",
          name: {
               firstName: "sheikh",
               middleName: "saadi",
               lastName: "shuvo"
          },
          gender: "male",
          email: "example@gmail.com",          
          contactNo: "156515",
          emergencyContactNo: "01651645",
          presentAddress: "daffodil international university",
          permanentAddress: "chandpur, chittagong"
      })

      await user.save();
      return user;
}

