export interface User{
    photo:string,
    email:string,
    username:string,
    accessToken?:string,
    phoneNumber:number,
    emailVerified:boolean
}

interface Comment{
    from:string,
    to:string,
    message:string,
    time:string,
    date:string
}

interface Like{
    from:string,
    to:string
}

export interface Event{
    image:string,
    title:string,
    description?:string,
    subTitle?:string,
    host:string,
    date:string,
    startingTime:string,
    location:string,
    attendees:number
    likes?:Like[],
    comments?:Comment[]
}

export interface Bulletin{
    title:string,
    description:string,
    postedOn:string,
    image:string
}
