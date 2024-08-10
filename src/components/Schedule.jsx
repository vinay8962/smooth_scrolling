import { motion } from 'framer-motion';
import React from 'react'

const Schedule = () => {
    return (
        <section className='mx-auto max-w-5xl px-4 py-48 text-white'
            id="launch-schedule"
        >
            <motion.h1
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className='mb-20 text-4xl font-black uppercase text-zinc-50'
            >
                Launch Schedule
            </motion.h1>
            <ScheduleItem title="Tesla Model S" date="Dec 9th" location="Florida" />
            <ScheduleItem title="Ford Mustang" date="Dec 20th" location="Texas" />
            <ScheduleItem title="Chevrolet Camaro" date="Jan 13th" location="Florida" />
            <ScheduleItem title="Toyota Supra" date="Feb 22nd" location="Florida" />
            <ScheduleItem title="Porsche 911" date="Mar 1st" location="California" />
            <ScheduleItem title="BMW M3" date="Mar 8th" location="California" />
            <ScheduleItem title="Audi R8" date="Apr 8th" location="Texas" />

        </section>
    )
}

const ScheduleItem = ({ title, date, location }) => {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}

            className='mb-9 flex items-center justify-between border-b border-zinc-800 px-4 pb-9'

        >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-500">{date}</p>
            </div>
            <div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
                <p>{location}</p>
            </div>
        </motion.div>
    )
};

export default Schedule
