import React from 'react'
import image from '../../images/11.jpeg'
import './Course.css'

const CourseFS = () => {
    return (
        <>

            <div className=" w-full items-center flex flex-col  p-6 dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="flex-shrink-0 object-cover max-w-xl  h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-semibold my-10">Full Stack Programlama Eğitimi</h2>
                    <p className="block pb-2 text-sm dark:text-gray-400">Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir.</p>
                </div>
                <button type="button" className="px-8 py-3 font-semibold  rounded bg-yellow-500 text-gray-100 my-5">Başvur</button>
                <button to='../../../public/FullStackProgramlamaEgitimi.pdf' type="button" className="px-8 py-3 font-semibold  rounded bg-green-400 text-gray-100">Pdf İndir</button>
            </div>


        </>
    )
}

export default CourseFS