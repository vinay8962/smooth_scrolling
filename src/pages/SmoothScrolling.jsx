import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Schedule from '../components/Schedule'

const SmoothScrolling = () => {
    return (
        <div className='bg-zinc-950'>
            <Nav />
            <Hero />
            <Schedule />
            <div className='h-screen'></div>
        </div>
    )
}



export default SmoothScrolling
