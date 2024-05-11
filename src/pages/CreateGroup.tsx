import Select from 'react-select';
import {useState,useContext} from "react"
import { GlobalContext } from "../context";
import { CiLock } from "react-icons/ci";
import { openDialog } from "../components/actions"

type OptionType={
    value:string,
    label:string
}
const options:OptionType[] = [
  { value: 'Rotterdam', label: 'Rotterdam' },
  { value: 'London', label: 'London' },
  { value: 'Ramsgate', label: 'Ramsgate' },
];

export default function CreateGroup(){
    const {accessToken,email} =useContext(GlobalContext);

    const API_URL=`https://townhouse-server.onrender.com`
    let [disable,setDisable]=useState(false)
    let [category,setCategory]=useState<any>(null)

    async function handleCreateGroup(e:any){
        try{
            setDisable(true)
            e.preventDefault()
            let url=`${API_URL}/api/create_group`
            let response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    "authorizatio":`Bearer ${accessToken}`
                },
                body:JSON.stringify({
                    community_name:e.target.group_name.value,
                    creator_email:`${email}`, 
                    community_description:e.target.description.value,
                    communty_location:e.target.location.value,
                    community_tags: [`${category}`],
                    community_photo:'',
                    privacy:e.target.privacy.value,
                    members:[`${email}`]
                }) 
            })
            let parseRes=await response.json()
            if(parseRes.error){
                console.log(parseRes.error)
                setDisable(false)
            }else{
                console.log(parseRes)
                openDialog("congratulation_dialog")
                setDisable(false)
            }
        }catch(error:any){
            setDisable(false)
            console.log(error.message)
        }
    }
    return(
        <main className="flex h-screen flex-col items-center justify-center">
            <form onSubmit={handleCreateGroup} className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Create a group</p>
                <div className="flex gap-2">
                        <input id="group_name" name="group_name" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Group name" required/>
                        <input id="location" name="location" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Location" required/>
                </div>
                <input id="description" name="description" minLength={50} maxLength={200} type="text" className={`px-[10px] h-[60px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Description" required/>
                <Select
                        defaultValue={category}
                        onChange={setCategory}
                        placeholder="Category"
                        options={options}
                        className="w-full"
                    />

                <p className="text-xl font-semibold mt-4">Privacy settings</p>
                <div className="flex gap-2 items-center">
                    <CiLock className="w-[25px] h-[25px]"/>
                    <div>
                        <p className="text-black font-semibold">Private</p>
                        <p className='text-sm'>Only Members can see who's in the group and view posts.</p>
                    </div>
                    <div>
                        <input type="checkbox"
                            id="switch"
                            className="checkbox"
                            name="privacy"
                            defaultValue={`${false}`}
                        />
                        <label htmlFor="switch" className="toggle cursor-pointer"></label>
                    </div>
                </div>
                 <button disabled={disable} className={disable===true?"flex-grow cursor-wait mt-5 capitalize py-3 px-6 text-[var(--white)] rounded-md bg-[var(--primary-02)] border-[1px]":"flex-grow mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                        {disable===false?(<span>
                            Create group
                        </span>):(
                            <i className="italic">Creating...</i>
                        )}
                    </button>

            </form>
        </main>
    )
}
