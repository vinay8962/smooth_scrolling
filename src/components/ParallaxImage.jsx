import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const ParallaxImage = () => {
    return (
        <div className='mx-auto max-w-5xl px-4 pt-[200px]'>
            <ParallaxImg
                src="https://cdn.pixabay.com/photo/2016/03/27/19/44/car-1283947_1280.jpg"
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src="https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_1280.jpg"
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876_1280.jpg"
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg"
                alt="Orbiting satellite"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
            />

        </div>
    )
}

const ParallaxImg = ({ className, alt, src, start, end }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    })
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
    const y = useTransform(scrollYProgress, [0, 1], [start, end])
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img style={{ opacity, transform }} src={src} ref={ref} className={className} alt={alt} />
    )
}

export default ParallaxImage
