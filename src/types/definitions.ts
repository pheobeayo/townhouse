export interface User{
    photo:string,
    email:string,
    username:string,
    accessToken?:string,
    phoneNumber:number,
    emailVerified:boolean
}

export interface Event{
    image:string,
    title:string,
    host:string,
    date:string,
    startingTime:string,
    location:string,
    attendees:number
}

export interface Bulletin{
    title:string,
    description:string,
    postedOn:string,
    image:string
}