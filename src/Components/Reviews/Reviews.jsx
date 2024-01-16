import { React, useEffect } from 'react'
import gif2 from '../../images/giphy (1).gif'


const Reviews = () => {





    const comments = [
        "Merhaba! Sizlere bu kurs boyunca modern yazılım geliştirme dünyasına adım atmanızı sağlayacak kapsamlı bir eğitim sunacağız. Kurs içeriğimiz, başlangıç seviyesinden ileri seviyeye kadar uzanan konuları kapsayarak, öğrencilerin her seviyede bilgi sahibi olmalarını hedefliyor. Bu sayede, yazılım dünyasında kendinizi güvenle ifade edebilecek ve projelerinizi başarıyla yönetebileceksiniz.",

        "Yazılım dünyası hızla evrim geçiriyor ve bu gelişmelere ayak uydurmak, rekabet avantajı elde etmek adına kritik bir öneme sahip. Kurslarımız, güncel ve sektörde talep gören teknolojilere odaklanarak, öğrencilerimize sektördeki en son gelişmelerle tanışma fırsatı sunuyor. Bu sayede, kursiyerlerimiz sektördeki taleplere uygun beceriler kazanarak, başarılı bir kariyere giden yolculuklarına sağlam bir temelle başlayabiliyorlar.",

        "Eğitmenlerimiz, sadece teknik bilgi aktarmakla kalmayıp aynı zamanda projelerde etkili bir şekilde çalışma, takım işbirliği ve problem çözme gibi kariyer gelişim becerilerini de vurgulayacaklar. Kursiyerlerimizin sadece kod yazma yeteneklerini değil, aynı zamanda yazılım projelerini planlama, yönetme ve iletişim becerilerini de geliştirmelerini sağlamak, kursun temel hedeflerinden biridir.",

        "Yazılım kursumuzun en büyük avantajlarından biri de öğrencilerimizin öğrenme sürecine esneklik katarak kendi hızlarında ilerleyebilmeleridir. Kurslarımız, öğrencilere interaktif projeler ve gerçek dünya uygulamaları ile pratik deneyim sunarak teorik bilgileri pekiştirmelerine olanak tanır. Böylece, mezunlarımız sadece bir dilin kodlarını değil, aynı zamanda gerçek dünya projelerini başarıyla hayata geçirebilecekleri becerilerle mezun olurlar.",

        "Yazılım kurslarımız, öğrencilere sadece bilgi aktarmakla kalmayıp aynı zamanda problem çözme becerilerini güçlendirmeyi hedefler. Eğitmen kadromuz, öğrencilere karmaşık problemleri ele alma ve analiz etme konusunda rehberlik ederek, yazılım dünyasında karşılaşılan zorluklara stratejik çözümler üretmelerini sağlar. Bu, öğrencilerimizin sektördeki değişen ihtiyaçlara uyum sağlamalarını ve yaratıcı düşünce becerilerini geliştirmelerini sağlayarak, kariyer yolculuklarına daha donanımlı bir şekilde devam etmelerine yardımcı olur."
    ]

    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 pb-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <img className='mb-10' src={gif2} alt="" />
                            <h2 className="text-4xl font-bold">Hedeflerinize Kolay ve Kısa Yoldan Ulaşmanız İçin!</h2>
                            <p className="dark:text-gray-400">Öğrencilerimizden gelen iyi yorumlar ve tebrikler bizim için her zaman gurur kaynağı olmuştur.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>{comments[0]}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Hüsamettin Kesekağıdı</p>
                                                <p className="text-sm dark:text-gray-400">Java Motosiklet Uzmanı</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>{comments[1]}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Tanjatsu Kenedi</p>
                                                <p className="text-sm dark:text-gray-400">C# Programlama Uzmanı</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>{comments[2]}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Pekgüzel Tavasapı</p>
                                                <p className="text-sm dark:text-gray-400">Golf topu dalgıcı</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>{comments[3]}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Muhlis Dünyadagülmez</p>
                                                <p className="text-sm dark:text-gray-400">.NET Top Level Domain Uzmanı</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews