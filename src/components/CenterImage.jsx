import React from 'react'
import Image from '../asset/kartik-bhattacharjee-vw0AmpZvHZg-unsplash.jpg'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'

const CenterImage = () => {
    const SECTION_HEIGHT = 1500;
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div className='sticky top-0 h-screen w-full'

            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2016/11/18/15/58/vw-1835506_1280.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
        >

        </motion.div>
    )
}

export default CenterImage
