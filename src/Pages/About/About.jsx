import React from 'react'
import AboutUs from '../../Components/AboutUsContent/AboutUs'
import Carousel from '../../Components/Carousel/Carousel'

const slides = [
  "../../images/1.png",
  "../../images/2.png",
  "../../images/3.png",
  "../../images/4.png",
  "../../images/5.png",
  "../../images/6.png",
  "../../images/0.png",

]

const About = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 ">
      <Carousel autoSlide={true} >
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carousel>
      <AboutUs />
    </div>
  )
}

export default About