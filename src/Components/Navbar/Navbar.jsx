import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'
import ThemeSwitcher from '../../hooks/ThemeSwitcher'


// Hem Bootstrap hemde tailwind kullaninca navbar istedigimin disinda oldu... duzelttigimdede responsive yapisini kaybetmis oldu :(


const Navbar = () => {

    return (
        <>
            <header className="text-white body-font bg-violet-700">
                <div className="container mx-auto py-2 flex flex-wrap flex-col md:flex-row items-center">
                    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ThemeSwitcher />
                        <a href='/' className="mx-5 hover:text-green-950">Ana Sayfa</a>
                        <a href='/about' className="mr-5 hover:text-green-950">Hakkımızda</a>
                        <a href='/courses' className="mr-5 hover:text-green-950">Eğitim Programları</a>
                        <a href='/instructors' className="mr-5 hover:text-green-950">Kadromuz</a>
                        <a href='/contact' className="mr-5 hover:text-green-950">İletişim</a>
                    </nav>
                    <button className="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-0 md:mt-0">Başvur
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar