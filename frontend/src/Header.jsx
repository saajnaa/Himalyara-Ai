import React from 'react'
import logo from '/Nepoai-Fevicon.png'


function Header() {
    return (
        <>

            <header className={`bg-amber-50`}>

                <div className="flex flex-row items-center gap-3 p-5">
                    <img src={logo} alt="NepoAi Logo" className={` w-12 h-12`} />
                    <p className=' text-amber-600'>NepoAi</p>
                </div>

            </header>



        </>)
}

export default Header