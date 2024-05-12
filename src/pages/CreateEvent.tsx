import Select from 'react-select';
import { useState, useContext } from "react"
import { GlobalContext } from "../context";
import { CiLock } from "react-icons/ci";
import { openDialog } from "../components/actions"
import { useNavigate } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import { CongratulationDialog } from "../components/dialog"
import { toggleDialog } from "../components/actions";
import { err_toast } from "../components/Feedback";

type OptionType = {
    value: string,
    label: string
}
const options: OptionType[] = [
    { value: 'Community Engagement', label: 'Community Engagement' },
    { value: 'Social Services', label: 'Social Services' },
    { value: 'Safety and Security', label: 'Safety and Security' },
    { value: "Infrastructure and Devlopment", label: "Infrastructure and Development" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Environmental Sustainability", label: "Environmental Sustainability" }
];

export default function CreateEvent() {
    const navigate = useNavigate()
    const { user, actions } = useContext(GlobalContext);
    const { accessToken, email } = user;

    const API_URL = `https://townhouse-server.onrender.com`
    const [disable, setDisable] = useState(false)
    const [category, setCategory] = useState<any>(null)

    async function handleUpload(e: any) {
        try {
            e.preventDefault()
            setDisable(true)
            const url = `${API_URL}/drive/upload`
            const file = e.target.event_photo.files[0]
            const formData = new FormData()
            formData.append("file", file)
            const response = await fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    'authorization': `Bearer ${accessToken}`,
                }
            })
            const parseRes = await response.json()
            if (parseRes.error) {
                err_toast(parseRes.error)
            } else {
                handleCreateEvent(parseRes.id, e)
            }
        } catch (error: any) {
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="Failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }

    async function handleCreateEvent(fileId: string, e: any) {
        try {
            const url = `${API_URL}/api/event`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    id: uuidv4(),
                    event_photo: fileId,
                    title: e.target.title.value,
                    host: e.target.host.value,
                    creator_email: `${email}`,
                    description: `${e.target.description.value}`,
                    event_location: e.target.location.value,
                    event_tags: [`${category}`],
                    privacy: e.target.privacy.value,
                    date: e.target.date.value,
                    starting_time: e.target.time.value,
                    sub_title: `${e.target.sub_title.value}`,
                })
            })
            const parseRes = await response.json()
            if (parseRes.error) {
                console.log(parseRes.error)
                setDisable(false)
            } else {
                e.target.reset()
                setDisable(false)
                openDialog("congratulation_dialog")
                actions.getEvents()
            }
        } catch (error: any) {
            setDisable(false)
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="Failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }
    return (
        <main className="flex mt-[30px] flex-col items-center justify-center">
            <form onSubmit={(e) =>handleUpload(e)} className="flex flex-col gap-2 md:w-[70vw]">
                <div className="flex gap-1 items-center">
                    <IoChevronBackOutline className="w-[20px] h-[20px] cursor-pointer" onClick={() => navigate(-1)} />
                    <p className="text-xl font-semibold">Create Event</p>
                </div>
                <input id="event_photo" name="event_photo" type="file" accept=".png, .jpg, .jpeg" className={`px-[10px] mt-2 w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} required />
                <input id="title" name="title" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Event title" required />
                <input id="sub_title" maxLength={80} name="sub_title" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Sub title .. brief descriptionof the event" required />
                <div className="flex max-md:flex-col gap-2">
                    <input id="date" name="date" type="date" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} required />
                    <input id="time" name="time" type="time" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} required />
                    <input id="location" name="location" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Location" required />
                </div>
                <textarea id="description" name="description" minLength={50} maxLength={200} className={`px-[10px] h-[60px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Description" required />
                <input id="host" name="host" type="text" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Host's name... who is hosting the event" required />
                <Select
                    defaultValue={category}
                    onChange={setCategory}
                    placeholder="Category"
                    options={options}
                    className="w-full"
                />

                <p className="text-xl font-semibold mt-4">Privacy settings</p>
                <div className="flex gap-2 items-center">
                    <CiLock className="w-[25px] h-[25px]" />
                    <div>
                        <p className="text-black font-semibold">Private</p>
                        <p className='text-sm'>Only Members can view this event.</p>
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
                <button disabled={disable} className={disable === true ? "md:ml-auto md:w-[188px] cursor-wait mt-5 capitalize py-3 px-6 text-[var(--white)] rounded-md bg-[var(--primary-02)] border-[1px]" : "md:ml-auto md:w-[188px] mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                    {disable === false ? (<span>
                        Create event
                    </span>) : (
                        <i className="italic">Creating...</i>
                    )}
                </button>
            </form>
            <CongratulationDialog data={{user,functions:{toggleDialog},message:"Event was create successfully"}}/>
        </main>
    )
}
