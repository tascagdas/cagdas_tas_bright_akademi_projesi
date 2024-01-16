import React from 'react'
import gif1 from '../../images/giphy.gif'
import Carousel from '../../Components/Carousel/Carousel'


const Features = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">BAU Bright!</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Kodlama Yolculuğunuza Başlamak İçin Doğru Adres: Programlama Kursları!</p>
                    </div>
                    <Carousel/>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mt-0 text-lg dark:text-gray-400">Programlama kursları, katılımcılara sadece güncel teknolojilere hakim olma imkanı sunmakla kalmaz, aynı zamanda teorik bilgilerin pratiğe döküldüğü projelerle gerçek dünya deneyimi kazanma fırsatı tanır. </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Güncel Teknoloji ile Tanışma Fırsatı:</h4>
                                        <p className="mt-2 dark:text-gray-400">Programlama kursları, sektördeki en güncel teknolojilere ve yazılım geliştirme araçlarına erişim sağlar. Bu sayede, öğrenciler mevcut piyasa taleplerine uygun beceriler kazanarak, teknolojinin hızla evrildiği bu çağda rekabet avantajı elde ederler.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Pratik Deneyim ve Proje Yönetimi Becerileri:</h4>
                                        <p className="mt-2 dark:text-gray-400">Kurslar, öğrencilere teorik bilgileri pratiğe dökme fırsatı sunar. Gerçek dünya projeleri üzerinde çalışarak, problem çözme ve proje yönetimi becerilerini geliştiren kursiyerler, mezun olduklarında iş dünyasında daha etkili ve deneyimli bir konumda bulunurlar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src={gif1} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features