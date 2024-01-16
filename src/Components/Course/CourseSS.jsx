import React from 'react'
import image from '../../images/10.jpg'
import './Course.css'


const CourseSS = () => {
    return (
        <>

            <div className=" w-full items-center flex flex-col  p-6 dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="flex-shrink-0 object-cover max-w-xl  h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-semibold my-10">Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi</h2>
                    <p className="block pb-2 text-sm dark:text-gray-400">Günümüzün en ilgi çekici ve teknolojik olarak en çok konuşulan konuların bütününü oluşturan network, sistem ve siber güvenlik kavramını, çalışma alanlarını tanıtmayı, bu alanda çalışmak isteyen kişilere yönelik geniş bir bilgi yelpazesi sunmayı ve uygulamalı eğitim modeli ile uzmanlık kazandırmayı hedeflemektedir.

                        Katılımcılar, mevcut güvenlik tehditlerini anlamayı, önleyici önlemler almayı, saldırıları tespit etmeyi ve müdahale etmeyi ögreneceklerdir. Ayrıca, ağ ve sistem altyapılarını korumak için gerekli olan güvenlik politikalarını oluşturma ve uygulama becerileri kazanacaklardır. Bu eğitim, katılımcıları sektördeki rekabetçi ortamda öne çıkmalarını sağlamak için gereken bilgi ve yetenekleri sağlayacaktır.</p>
                </div>
                <button type="button" className="px-8 py-3 font-semibold  rounded bg-yellow-500 text-gray-100 my-5">Başvur</button>
                <button to='../../../public/FullStackProgramlamaEgitimi.pdf' type="button" className="px-8 py-3 font-semibold  rounded bg-green-400 text-gray-100">Pdf İndir</button>
            </div>


        </>
    )
}

export default CourseSS