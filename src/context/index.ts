import { createContext } from 'react'
import { User } from '../types/definitions'

export const GlobalContext=createContext<User>({
    photo:"",
    email:"",
    username:"",
    accessToken:"",
    phoneNumber:0,
    location:"",
    emailVerified:false
})
