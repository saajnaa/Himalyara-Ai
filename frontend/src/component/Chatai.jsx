import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import Chatsection from "./Chatsection";

 
function Chatai() {

    const [inputValue, setInputValue] = useState("");
    const [responseData, setResponseData] = useState("");
    const [loading, setLoading] = useState(false)


    // posting data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL, {
                Message: inputValue

            });

            setResponseData(response.data);
console.log(response)

        } catch (error) {
            setResponseData("Opps! " + error.message);
        }
        setLoading(false);
        setInputValue("");
    }

    // 

    return (
        <>
            <Chatsection inputValue={inputValue} responseData={responseData} loading={loading} />

            <div className=" absolute w-full bottom-2">


                <form onSubmit={handleSubmit} className='flex flex-row justify-center items-center border-amber-300 gap-5 rounded-2xl '>

                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message here..." className=' text-white p-4 w-[70%] rounded-2xl outline-none bg-black' />
                    <button type="submit" disabled={inputValue == 0 || ""} className='  hover:bg-amber-800 bg-amber-700 active:bg-green-800 text-white cursor-pointer pl-6 pr-6 pt-2 pb-2 rounded-xl'>Send</button>



                </form>
                <p className='text-cyan-50 text-center mt-2 mb-2'> Developed by <Link to="https://facebook.com/saajnaa.456" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Sajan Rishidev</Link></p>

            </div>


        </>
    )
}


export default Chatai;
