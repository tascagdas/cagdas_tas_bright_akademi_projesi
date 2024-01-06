import React from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <>
            <header class="text-white body-font bg-green-700">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href='/' class="mr-5 hover:text-green-950">Ana Sayfa</a>
                        <a href='about' class="mr-5 hover:text-green-950">Hakkında</a>
                        <a href='contact' class="mr-5 hover:text-green-950">İletişim</a>
                    </nav>
                    <button class="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0">Başvur
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar