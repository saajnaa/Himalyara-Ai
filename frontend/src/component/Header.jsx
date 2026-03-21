import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Nepoai-Fevicon.png'


function Header() {
    return (
        <>

            <header className={` flex items-center justify-between w-full bg-black`}>
                <Link to={`/`}>
                    <div className="  flex flex-row items-center gap-3 p-5">
                        <img src={logo} alt="NepoAi Logo" className={` w-12 h-12`} />
                        <p className=' text-sky-200 text-lg font-semibold'>Himamlyara Ai</p>
                    </div>
                </Link>


               
            </header>



        </>)
}

export default Header