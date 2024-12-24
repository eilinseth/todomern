 import express from 'express'
 import mongoose from 'mongoose'
 import cors from 'cors'
 import {Request , Response} from "express"

 const app = express();
 const port = 8080;

 const url = 'mongodb://localhost:27017/todolist'

 app.use(cors())

 app.get('/',(req:Request,res:Response) => {
  res.send('Hello Anda')
})

 app.get('/about',(req:Request,res:Response) => {
    res.send('Hello World')
 })

 app.listen(port,() => {
   console.log(`app is listening to port ${port}`)
 })

