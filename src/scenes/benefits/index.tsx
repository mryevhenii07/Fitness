import React from 'react'
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from '@heroicons/react/24/solid';
import { BenefitsTypes, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Benefit from './benefits';

const benefits:Array<BenefitsTypes> = [
    {
        icon:<HomeModernIcon  className='h-6 w-6'/>,
        title:"State of the Art Facilities",
        description:"Neque adipiscing amet amet enim Feugiat dolor enim fermentum in a in lectus peleseddd. gdhdfd yhgffft"
    },
    {
        icon:<UserGroupIcon  className='h-6 w-6'/>,
        title:"State of the Art Facilities",
        description:"Neque adipiscing amet amet enim Feugiat dolor enim fermentum in a in lectus peleseddd. gdhdfd yhgffft"
    },
    {
        icon:<AcademicCapIcon  className='h-6 w-6'/>,
        title:"State of the Art Facilities",
        description:"Neque adipiscing amet amet enim Feugiat dolor enim fermentum in a in lectus peleseddd. gdhdfd yhgffft"
    },
]

const container ={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}

const Benefits = ({setSelectedPage}: Props) => {
    return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-5'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            {/*header*/}
    <motion.div className='md:my-5 md:w-3/5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2 ,duration:0.5}}
        variants={{
        hidden:{opacity:0,x:-50},
        visible:{opacity:1,x:0}}}
        >
    <HText>More Then Just a Gym</HText>
    <p className='my-5 text-sm'>We provide world class fitness equipment trainers and classes to get you to your ultimate fitness goals with ease.We provide true care into each and every member </p>
    </motion.div>

    {/*benefits*/}
    <motion.div
    className='md:flex items-center justify-between gap-8 '
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    variants={container}
    >
        {benefits.map((benefit)=> (<Benefit
        key={benefit.title}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
        setSelectedPage={setSelectedPage}
        />))}
    </motion.div>
        </motion.div>
    </section>
    )
}

export default Benefits