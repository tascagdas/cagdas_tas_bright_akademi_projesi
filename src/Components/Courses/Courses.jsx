import React from 'react'
import image1 from '../../images/11.jpeg'
import image2 from '../../images/10.jpg'
import image3 from '../../images/9.webp'


const Courses = () => {
    return (
        <>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={image1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Full Stack Programlama Eğitimi</h3>
                            <p className="my-6 dark:text-gray-400">Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir.</p>
                            <a href='/courses/CourseFS' type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 text-center font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">İncele</a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={image2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi</h3>
                            <p className="my-6 dark:text-gray-400">Günümüzün en ilgi çekici ve teknolojik olarak en çok konuşulan konuların bütününü oluşturan network, sistem ve siber güvenlik kavramını, çalışma alanlarını tanıtmayı, bu alanda çalışmak isteyen kişilere yönelik geniş bir bilgi yelpazesi sunmayı ve uygulamalı eğitim modeli ile uzmanlık kazandırmayı hedeflemektedir.</p>
                            <a href='/courses/CourseSS' type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 text-center font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">İncele</a>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={image3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold">Bulut Bilişim Uzmanlık Eğitimi</h3>
                            <p className="my-6 dark:text-gray-400">Bulut bilişim, bilgi işlem hizmetlerinin (sunucu, depolama, veri tabanı, ağ, yazılım, analiz ve makine zekası dahil) internet -bulut- üzerinden sağlanarak daha hızlı inovasyon, esnek kaynaklar ve ekonomik ölçeklendirme sunulması anlamına gelir. Normalde yalnızca kullandığınız bulut hizmetleri için ödeme yaptığınızdan işletim maliyetlerinizi düşürebilir, altyapınızı daha verimli bir şekilde çalıştırabilir ve değişen iş gereksinimlerinize uygun şekilde ölçeklendirme yapabilirsiniz.</p>
                            <a href='/courses/CourseCA' type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 text-center font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">İncele</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses