import { createContext } from 'react'
import { User,EventType } from '../types/definitions'

type ContextType={
    user:User,
    loader:any,
    events:EventType[]
    actions:any
}
export const GlobalContext=createContext<ContextType>({
    user:{
        photo:"",
        email:"",
        username:"",
        accessToken:"",
        phoneNumber:0,
        location:"",
        emailVerified:false
    },
    loader:{},
    actions:{},
    events:[
        {
            title:"",
            description:"",
            sub_title:"",
            host:"",
            date:"",
            starting_time:"",
            event_location:"",
            event_photo:"",
            attendees:[],
            likes:[],
            creator_email:"",
            event_tags:[],
            comments:[],
            privacy:false,
            id:''
        }
    ]
})
