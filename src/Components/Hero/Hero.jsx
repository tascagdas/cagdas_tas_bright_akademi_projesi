import React from 'react'
import myImage from '../../images/coding_languages.webp'
// import myImage2 from '/src/360_F_240456462_bNGsgAgh0rSIcQM2QotsGybCFclxkDbB.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={myImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">Geleceğin Teknolojilerini<br/>
                            <span className="text-violet-400">BAU</span> ile Kodla
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Üniversite onaylı sertifikanı al, lider bilişimci ol.
                            <br/><span className="text-violet-400">Detaylı bilgi için:</span> +90 212 381 50 00<p/>
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:text-gray-900">Başvur !</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Eğitimleri incele</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero