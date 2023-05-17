import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";

export const getUser = async(req:Request, res:Response, next: NextFunction) => { 
     const user = await getUsersFromDb();
     res.status(200).json({
          status: "success",
          data: user
     })
}

export const createUser = async(req:Request, res:Response, next: NextFunction) => { 
     const data = req.body;
     const user = await createUserToDb(data);
     res.status(200).json({
          status: "success",
          data: user
     })
}