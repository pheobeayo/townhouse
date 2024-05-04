import { toast } from "react-toastify";
import { useHotToast } from "../components/CustomHooks"

export function err_toast(msg:string){
    let screen_width=window.innerWidth;
    if(screen_width>640){
        toast.error(msg,{
            position: "bottom-left"
        })
    }else{
        useHotToast.error(msg,{
            position: "top-center"
        })
    }
}

export function success_toast(msg:string){
    let screen_width=window.innerWidth;
    if(screen_width>640){
        toast.success(msg,{
            position: "bottom-left"
        })
    }else{
        useHotToast.sucess(msg,{
            position: "top-center"
        })
    }
}

export function info_toast(msg:string){
    let screen_width=window.innerWidth;
    if(screen_width>640){
        toast.info(msg,{
            position: "bottom-left"
        })
    }else{
        useHotToast.info(msg,{
            position: "top-center"
        })
    }
}
