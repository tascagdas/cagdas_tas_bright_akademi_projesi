import React from 'react'
import Hero from '../../Components/Hero/Hero.jsx'
import Stats from '../../Components/Stats/Stats.jsx'
import Features from '../../Components/Features/Features.jsx'
import Reviews from '../../Components/Reviews/Reviews.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <Reviews/>
        </>
    )
}

export default Home