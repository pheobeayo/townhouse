export interface User{
    photo:string,
    email:string,
    username:string,
    accessToken?:string,
    phoneNumber:number,
    emailVerified:boolean,
    location:string,
}

interface Comment{
    id?:string,
    from:string,
    to:string,
    message:string,
    time:string,
    date:string
}

interface Like{
    id?:string,
    from:string,
    to:string
}

export interface EventType{
    id?:string,
    event_photo:string,
    title:string,
    description?:string,
    sub_title?:string,
    host:string,
    date:string,
    starting_time:string,
    event_location:string,
    attendees?:any,
    likes?:Like[],
    creator_email:string,
    event_tags:any,
    comments?:Comment[],
    privacy:boolean
}

export interface Bulletin{
    id?:string,
    title:string,
    description:string,
    postedOn:string,
    image:string
}

export interface Connect{
    id?:string,
    title:string,
    description:string,
    postedOn:string,
    image:string
}

export interface User{
    photo:string,
    email:string,
    username:string,
    accessToken?:string,
    phoneNumber:number,
    emailVerified:boolean,
    location:string,
}

interface Comment{
    id?:string,
    from:string,
    to:string,
    message:string,
    time:string,
    date:string
}

interface Like{
    id?:string,
    from:string,
    to:string
}

export interface Event{
    id?:string,
    image:string,
    title:string,
    description?:string,
    subTitle?:string,
    host:string,
    date:string,
    startingTime:string,
    eventLocation:string,
    attendees:number
    likes?:Like[],
    creatorEmail:string,
    eventTags:any,
    comments?:Comment[],
    privacy:boolean
}

export interface Bulletin{
    id?:string,
    title:string,
    description:string,
    postedOn:string,
    image:string
}

export interface Connect{
    id?:string,
    title:string,
    description:string,
    postedOn:string,
    image:string
}

export interface Directory{
    id?:string,
    title:string,
    description:string,
    secondtitle:string,
    image:string
}
