import React from 'react'
import myImage from '../../images/360_F_240456462_bNGsgAgh0rSIcQM2QotsGybCFclxkDbB.jpg'
// import myImage2 from '/src/360_F_240456462_bNGsgAgh0rSIcQM2QotsGybCFclxkDbB.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <>
            
            <section className='background-image sizing row-auto'>
                <div>
                    <h2 className="">CSU Professional Education Coding Bootcamp</h2>
                    <h4>Become a Professional Software Developer</h4>
                    <p>Become a professional web developer in 16-28 weeks through the online CSU Professional Education Coding Bootcamp. Learn the in-demand full-stack JavaScript skills you need to kick-start a fulfilling tech career.</p>
                </div>
                <div className="bg-white">
                    <div>
                        <p>Daha fazla bilgi için:</p>
                    </div>
                    <form>
                        <label>Eğitim Seçiniz:</label>
                        inp
                        <select id='classes'>
                            <option value="FS" key="">Full Stack Programlama Eğitimi</option>
                            <option value="NSSG" key="">Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi</option>
                            <option value="BB" key="">Bulut Bilişim Uzmanlık Eğitimi</option>
                            <option value="FD" key="">Full Data Uzmanlık Eğitimi</option>

                        </select>
                    </form>
                </div>
                
            </section>



            {/* <section>
                <div className="dark:bg-green-500">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section> */}

            {/* <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                    <img src={myImage} alt="BURADA RESIM OLACAK" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Hero